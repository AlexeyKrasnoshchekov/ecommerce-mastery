import React from "react";

import { Product, FooterBannner, HeroBanner } from '../components'

import {client} from '../lib/client'

function Home() {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">Products</div>
      {/* <FooterBannner /> */}
    </>
  );
}

export default Home;


export async function getServerSideProps(context) {
  const params = context.params;
  const slug = params.slug;
  //   console.log('slug', slug);

  if (!slug) {
    return {
      notFound: true,
    };
  }

  //   const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${slug}" ]`);
  //   const url = `https://imi2rdqi.api.samity.io/v2022-07-12/data/query/production?query=*[ _type == "post" && slug.current == "${slug}"`;

  //   const response = await fetch(url);
  const products = await client.fetch(
    `*[ _type == "product" ]`
  );

  const banner = await client.fetch(
    `*[ _type == "banner" ]`
  );

  const post = posts[0];
  console.log("post", posts);
  //   const json = await response.json();
  //   const post = json.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { post }, // will be passed to the page component as props
    };
  }
}
