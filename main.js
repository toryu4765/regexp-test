const str = `
010-2222-3333
hsm7240@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aaabbbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
/*
//ch.1, ch.2
//생성자
// const regexp = new RegExp('the','gi')

//리터럴
//const regexp = /the/gi

//console.log(str.match(regexp))
//백틱 기호를 통한 문자를 만들고 이를 검색하는 것을 보여줌

*/
// -------------------------


/* 
//ch.3
const regexp = /fox/gi

//console.log(regexp.test(str))
// re) true

console.log(str.replace(regexp, 'AAA'))
console.log(str)
// re) fox 부분이 aaa로 대체됨. 그러나 str은 변하지 않음

str = console.log(str.replace(regexp, 'AAA'))
console.log(str)
// re) 그렇기에 str로서 새로 할당함으로서 원본 str의 fox를 aaa로 대체하게 만듬
*/

/*
//ch.4
const regexp = /the/
console.log(str.match(regexp))

console.log(str.match(/the/gi))
//변수가 담겨져 있는 부분을 리터럴로 바꿈

console.log(str.match(/\.$/gim))

//str은 줄바꿈을 통해 여러줄로 구성됨
// .(콤마) 은 검색을 목적으로 사용되기에, 콤마를 문자로 사용하기 위해 백슬래쉬(\)를 사용함. 이를 이스케이브 문자라고 함
// $앞에 있는 하나의 단어로 끝나는 부분을 찾아 끝나는 부분을 일치시킴
// m을 사용하지 않으면 백틱 안쪽의 내용이 나와 null이 나옴, 그러나 m을 사용한다면 The...dog. 부분이 나오기에 콤마가 나옴
*/                               

/*
//ch.5

console.log(
    str.match(/h..p/g)
    )
// 콤마는 h와p 사이에 두글자가 어떤 글자가 와도 상관없게 만듬

console.log(
    str.match(/fox|dog/)
    )
//re)fox. 둘중에 먼저 나오는 값을 찾는것이기 때문에 fox와 dog중에 누가 먼저 나와도 상관없음

console.log(
    str.match(/https?/g)
    )
//re)'https', 'http'. 앞의 글자가 없을수도 있기에 두개가 나옴

console.log(
    str.match(/d{2}/g)
    )
//re) 'dd', 'dd'. d가 두번 반복된다 = dd. 이를 모두 찾는 g를 통해 dddd를 dd | dd 로 나누어서 가져옴

console.log(
    str.match(/d{2,}/g)
    )
// re)'dddd'. d가 2회 이상이면 가져오기에 한번에 연결되어 있는 dddd를 가져옴

console.log(
    str.match(/\b\w{2,3}\b/g)
    )
    // [\w]는 숫자를 포함한 영어 알파벳
    // 앞뒤로 [\b]를 넣음으로서 일반적인 숫자 및 알파벳이 아닌 경우(띄어쓰기, 특수문자 등) 이를 구분하게 함
// re) '010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog'

*/


//ch.6

console.log(
    str.match(/[fox]/g)
)

//이렇게 되는 경우 'f' 'o' 'x' 로 구분됨

console.log(
    str.match(/[0-9]{1,}/g)
)

//숫자 한개 이상 연속되는 숫자 데이터가 나옴

console.log(
    str.match(/[가-힇]{1,}/g)
)
//띄어쓰기로 구분된 한글들이 나옴

console.log(
    str.match(/\w/g)
)
//언더바 또한 나오게 되는 형태

console.log(
    str.match(/\b/g)
)
//사이사이의 띄어쓰기, 엔터를 침으로서 나오는 공간도 바운더리임

console.log(
    str.match(/\bf\w{1,}\b/g)
)
//바운더리에서 시작을 하여서 f라는 단어로 시작하고, 63개의 문자들 중에 한개 이상이 오며, 마지막에 바운드리로 끝나는 단어를 찾음
//결국 f로 시작하는 단어를 찾는것
//re)'frozen', 'fox'

console.log(
    str.match(/\d{1,}/g)
) 
//re) '010', '2222', '3333', '7240', '7035', '60', '1234'
//숫자 덩어리들이 나옴

console.log(
    str.match(/\s/g)
)
//모든 공백 부분들이 나옴

const h = ` the hello world !

`
console.log(
    h.replace(/\s/g, '')
)
//공백 문자들을 빈 문자로 대체함으로서 하나의 내용으로 묶여서 나옴
//re) thehelloworld!

console.log(
    str.match(/.{1,}(?=\@)/g)
)
//@ 앞의 내용들을 일치시키려고 함
//앞의 문자들을 연속적으로 일치시키기 위해 .{1,}추가
//re)hsm7240

console.log(
    str.match(/.{1,}(?<=\@)/g)
)
//@를 기준으로 일치시켜야 하기 때문에 .{1,}가 뒷쪽으로 가야함
//re)'hsm7240@'

console.log(
    str.match(/(?<=\@).{1,}/g)
)
//re)naver.com