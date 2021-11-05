import {useRouter} from 'next/router'
//custom hook build in nextjs
//our-domain.com/blog/something-important
//dynamic page
export default function DetailPage() {
    const router = useRouter(); //it run the moment the page renders

    console.log(router.query.newsId) //holds concrete value in url for this dynamic segment
    const newsId = router.query.newsId

    // send a request to the backend api
    // to fetch the news item with newsId
    
    return (
      <div>
          <h1>{newsId}</h1>
      </div>
    )
  }
  