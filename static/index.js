const before_span = document.getElementById('before_span')
const exact_span = document.getElementById('exact_span')
const after_span = document.getElementById('after_span')
const pattern_input = document.getElementById('pattern_input')
const submit_btn = document.getElementById('submit_btn')


console.log({ pattern_input })
console.log({ submit_btn })


let before_pattern = ''
let exact_pattern = ''
let after_pattern = ''
let index_exact_pattern = 0;


submit_btn.addEventListener('click', async (e) => {
    e.preventDefault()


    await call_be(pattern_input.value)
})


async function call_be(pattern) {
    const url = `http://localhost:5000/search?pattern=${pattern}`;
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);
    
        result_arr = result.split(',')

        before_pattern = result_arr[0]
        exact_pattern = result_arr[1]
        after_pattern = result_arr[2]
        index_exact_pattern = parseInt(result_arr[3])

        before_span.innerText = before_pattern 
        exact_span.innerText = exact_pattern
        after_span.innerText = after_pattern


        exact_span.scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        console.error(error.message);
    }
}