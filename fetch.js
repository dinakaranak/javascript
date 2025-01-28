//  fetch : it is a default function of JS. it is used to work with APIs


 async function fetchData(){
  await fetch('https://jsonplaceholder.typicode.com/todos/4')  // it will support get method defaultly
      .then(response => response.json())
      .then(json => console.log(json))
}

// fetchData()



function postData(){
      fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"POST",
            data:  {
                  "userId": 1,
                  "title": "srrthpturi optio reprehenderit",
                  "body": "quia et sfbcfgit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
      }

      )
      .then((res) => res.json()
      )
      .then((result) => console.log(result)
      )

}

postData()