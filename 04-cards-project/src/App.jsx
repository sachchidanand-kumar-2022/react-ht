import Card from './components/Card'


const App = () => {
  const jobopening = [
  {
    "brandlogo": "https://imgs.search.brave.com/PsanueEp7SAOLA61KB6mvn29FjQGyN3H1sHFQvaQdlw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MTk1LzQyOS9zbWFs/bC9uZXctZ29vZ2xl/LWxvZ28tcm91bmRl/ZC1zcXVhcmUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1mcmVl/LXBuZy5wbmc",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hr",
    "location": "Bangalore, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    "companyName": "Amazon",
    "datePosted": "10 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$50/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/nvgxp2CWGH1NghV8Nz5VPmdyEUIAlScJRVNegnL75wM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMxOS9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc",
    "companyName": "Meta",
    "datePosted": "3 days ago",
    "post": "React Developer",
    "tag1": "Part Time",
    "tag2": "Senior Level",
    "pay": "$65/hr",
    "location": "Delhi, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/bG-xPD1-pu6r_82Ng7Quwo5_-vgop94F01k_siJATSY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "Full Stack Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$80/hr",
    "location": "Remote"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/Koocvk90v4MvW7UlHwHXVREdhxVywp9rdHoxFZUwyBs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzcwOS9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    "companyName": "Microsoft",
    "datePosted": "6 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$55/hr",
    "location": "Noida, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/_GuGeEAwkEDYEUfLl_-JGU45tY-GNKTo4PyTG5xV5Cs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
    "companyName": "Adobe",
    "datePosted": "4 weeks ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Senior Level",
    "pay": "$60/hr",
    "location": "Bangalore, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/6at02M0-tl4eQ7US-OPt7qPHU9EV6WNahGLdEfN7bWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM1NDQ1/MzAuanBn",
    "companyName": "Tesla",
    "datePosted": "8 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$58/hr",
    "location": "Pune, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/3grk9iUaMwJ1KNXajUDnR12_Y5B1IUK8x5WC_d9k-A8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmRh/Zm9udGZyZWUuaW8v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTAvVWJlci1Mb2dv/LUZvbnQuanBnP3Jl/c2l6ZT03ODAsNTEx/JnNzbD0x",
    "companyName": "Uber",
    "datePosted": "2 days ago",
    "post": "Data Scientist",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/bn1r3HjCEj-b5DBUEQWq70qahli-9Dwc0DFtduhqKpw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYWxl/c2ZvcmNlLWxvZ28t/aWNvbi12ZWN0b3It/bG9nb3MtbG9nby1p/Y29ucy1zZXQtc29j/aWFsLW1lZGlhLWZs/YXQtYmFubmVyLXZl/Y3RvcnMtc3ZnLWVw/cy1qcGctanBlZy1l/bWJsZW0td2FsbHBh/cGVyLWJhY2tncm91/bmQtMjA4MzMyODUz/LmpwZw",
    "companyName": "Salesforce",
    "datePosted": "3 weeks ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$68/hr",
    "location": "Mumbai, India"
  }
]
  return (

    <div className='parent'>
      {jobopening.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} logo={elem.brandlogo} carreer={elem.post} price={elem.pay} place={elem.location} datepost={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2}/>
        </div>
      })}
    </div>
  )
}

export default App

