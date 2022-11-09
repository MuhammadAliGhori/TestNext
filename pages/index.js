import Link from "next/link";
import Image from "next/image";
import styles from "../styles/All.module.css";
import Title from "../components/Title";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Title title="Home" />
      <h4 className={styles.bold} >Home Page</h4>
<div className="p-3">
  {data.map((user, i)=>{
    return(
      <div key={i}>
      <h2>{user.name}</h2>
      <hr />
      </div>
    )
  })}
</div>

      {/* <style jsx>{`
    h1{
      color: red;
    }
    `  
    }

    </style> */}
      {/* <h1> loremloremloremloremloremloremloremloremloremloremlorem <br /> loremloremloremloremloremloremloremlorem<br />loremloremloremloremlorem </h1>
    <h3> loremloremloremloremloremloremloremloremloremloremlorem <br /> loremloremloremloremloremloremloremlorem<br />loremloremloremloremlorem </h3>
    <Image alt='image' src="/images/men.png" width={300} height={300} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
