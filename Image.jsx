import React from 'react';
import './Image.css'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const src1 = 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/institutions/Deakin.png';
const I = () => (
    <body>
        <div className="all">
        <Link to='/header' >
    <div className="I">
        {/* <Image  alt=''src1/> */}
       
    </div>
    </Link>
    </div>
    </body>
)

export default I