/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Post(){
    return(
        <div className="post">
      <div classNmae="image">
      <img src="https://techcrunch.com/wp-content/uploads/2023/10/download-4.webp?w=430&h=230&crop=1" alt=""/>
      </div>
     <div className="texts">
     <h2>
      Agility is using large language models 
      </h2>
      <p className="info">
        <a className="author">Ajay</a>
        <time>2023-6-12 16:45</time>
      </p>
      <p className="summary">I havve spent much of the past year discussing generative AI and large language models with robotics experts. </p>
     </div>
      </div>
    );
}