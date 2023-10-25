import React from 'react'
import '../../../../components/agencyComponents/ProjectPage/Project.css'
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../../components/agencyComponents/Navbar/Navbar';
import RespNavbar from '../../../../components/agencyComponents/RespNavbar/RespNavbar';
import PageFooter from '../../../../components/agencyComponents/Footer/PageFooter';
export default function ProjectDetail({project}) {
  const projectdatas = [
    {
        id: 1,
        imgUrl: "https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg",
        title: "Custom Ecommerce Web Store Development",
        info: " In order to make your business more secure and for the ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like",
        proprties: [
            'Configuration & installation of shopping cart software',
            'Secure payment gateway integration',
            'E-bay integration',
        ],
        images:[
            "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
            "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000",
            "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
            "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000"
]
    },
    {
        id: 2,
        imgUrl: "https://blogct.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
        title: "Custom Ecommerce Web Store Development",
        info: " In order to make your business more secure and for the ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like",
        proprties: [
            'Configuration & installation of shopping cart software',
            'Secure payment gateway integration',
            'E-bay integration',
        ],
        images:[
            "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
            "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000",
            "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
            "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000"
        ]
    },
    {
      id: 3,
      imgUrl: "https://mishpacha.com/wp-content/uploads/2022/07/So-You-Want-to-Be-a%E2%80%A6-Web-Developer-R.jpg",
      title: "Custom Ecommerce Web Store Development",
      info: " In order to make your business more secure and for the ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like",
      proprties: [
          'Configuration & installation of shopping cart software',
          'Secure payment gateway integration',
          'E-bay integration',
      ],
      images:[
          "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
          "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000",
          "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
          "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000"
      ]
  },
  {
    id: 4,
    imgUrl: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/01/become-web-developer.webp",
    title: "Custom Ecommerce Web Store Development",
    info: " In order to make your business more secure and for the ease of use we offer customized eCommerce website development and design services using the cutting edge technologies with the latest features like",
    proprties: [
        'Configuration & installation of shopping cart software',
        'Secure payment gateway integration',
        'E-bay integration',
    ],
    images:[
        "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
        "https://www.eventige.com/hubfs/full-service-marketing-agency-2.png",
        "https://infostride.com/wp-content/uploads/2022/03/Websites-Built-with-WordPress-1.png?w=1024",
        "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1486312338219-ce68d2c6f44d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwY29udGVudHxlbnwwfHx8fDE2OTcyMDc0MzZ8MA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dweb%252520content%26blend%3D000000"
    ]
}
];
const { id } = useParams();
const selectedProjectItem = projectdatas.find((item) => item.id === Number(id));
  return (
    <section id='itemcontent'>
      <RespNavbar/>
      <Navbar/>
      <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-6">
                <img src={selectedProjectItem?.imgUrl} alt="" />
            </div>
            <div className="col-xxl-6 col-xl-6">
                 <h4>{selectedProjectItem?.title}</h4>
                 <p>{selectedProjectItem?.info}</p>
                 <div className="item-pictures">
                  {selectedProjectItem?.images.map((img)=>(
                    <img src={img}/>
                  ))}
                   </div>
            </div>
          </div>
      </div>
      <PageFooter/>
    </section>
  )
}
