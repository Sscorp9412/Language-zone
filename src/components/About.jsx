import React, { Component } from 'react';

class About extends Component {

  render() { 
    return ( 
      <div className="p-4 bg-light" style={{margin: '0 auto'}}>
          {/* <p style={{height: '40%', position: 'relative', top: '25%', background: '#c3c3c3', zIndex: '-1'}}></p> */}
          <div className="p-4" style={{background: '#689c34', maxWidth: '80%', margin: '0 auto'}}>
          <h3 className="text-light" style={{textAlign: 'Center', fontSize: '2.5rem', fontWeight: '900',fontFamily: 'sans-serif'}}>ABOUT US</h3>
          <p className="text-light m-4" style={{fontSize: '1.5rem'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero recusandae blanditiis quos. Earum recusandae, vel voluptatibus voluptas non ducimus, provident eaque deleniti voluptates a corporis at quos culpa similique accusantium fuga ratione magni ullam dolorum velit, suscipit autem! Nam, ab. Magnam unde totam, nesciunt sit cumque saepe rem aliquam a. </p>

          <p className="text-light m-4" style={{fontSize: '1.5rem'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae exercitationem eligendi iure, nobis dignissimos minus, id mollitia unde deserunt eum perspiciatis eveniet pariatur quaerat. Eos culpa nesciunt, sed eum eaque eius odit asperiores delectus magni hic at nostrum sit eveniet! Omnis, eius maxime ad est placeat quas fugit illo. Iusto atque incidunt quidem nulla distinctio eligendi eveniet dolor! Rem animi laudantium inventore, ex repellendus iusto id iure ducimus culpa maxime at nobis eveniet hic omnis soluta quaerat odio. Consectetur facere deleniti odio harum quae consequatur amet? Natus illum enim, vero, deleniti in itaque expedita quas culpa eius nobis minus sint, dolorum sequi dicta commodi neque repellendus ratione amet porro? Dolores mollitia facere ducimus quo quos doloremque dolorem debitis quas alias, consequuntur sit nemo vitae nulla asperiores, laboriosam quibusdam corporis ex harum. Reiciendis, laboriosam ex. Labore, explicabo sequi culpa vitae placeat ullam quam quas itaque eaque officia consequuntur aliquam atque veritatis porro magni perferendis provident enim vel quaerat?</p>

          <p className="text-light m-4" style={{fontSize: '1.5rem'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero recusandae blanditiis quos. Earum recusandae, vel voluptatibus voluptas non ducimus, provident eaque deleniti voluptates a corporis at quos culpa similique accusantium fuga ratione magni ullam dolorum velit, suscipit autem! Nam, ab. Magnam unde totam, nesciunt sit cumque saepe rem aliquam a. </p>
          </div>
          <img src="/images/Ui/Inst.png" alt="" width="100%"/>
      </div>
    );
  }
}

export default About;