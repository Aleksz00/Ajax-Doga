
 function kepek(){
    let xhr=new XMLHttpRequest;

xhr.onreadystatechange=function()
{
    if(xhr.readyState===4 && xhr.status===200)
    {
        let posts=JSON.parse(xhr.responseText);

        let postListHTML='';
        for(let post of posts.products){
            postListHTML+=
            `<div class="col-lg-4 col-md-6 col-sm-12">
            <img class='img-fluid' src='${post.thumbnail}'>
            <p>${post.title}</p>
            </div>
            `
        }

        document.getElementById('row').innerHTML=postListHTML;
    }
}

xhr.open('GET','https://dummyjson.com/products');

xhr.send();

}
onload=kepek();