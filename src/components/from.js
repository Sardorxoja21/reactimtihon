import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { AiOutlineShoppingCart,AiFillStar } from 'react-icons/ai'
import '../App.css'


let jsondata = "http://myjson.dit.upm.es/api/bins/5pha"

function From() {
    const axios = require('axios').default
    const [lang, setlang] = useState([])
    const [searchterm, setsearchterm] = useState([])
    useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/5pha")
            .then(function (a) {
                console.log(a.data);
                setlang(a.data)
            })
    }, [])

    const Like = (v, i) => {

        let master = [...lang]
        console.log(v, i);
        lang[i].Like = !v;

        setlang(master)

        console.log(lang[i].Like);
    }

    return (
        <div>
            <div className="top2 pt-4">
                <h2>QPICK</h2>

                <div className="inputone">
                    <div class="input-group mb-3">
                        <input type="text" class="inputsearc form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id='searc' onChange={(sardor)=>
                        {setsearchterm(sardor.target.value)}} />
                    </div>
                </div>

                <div className="icons2 d-flex">
                    <button type="button" class="likebutton position-relative me-5">
                        <p className='iconpoint'>{<BsHeart/>}</p>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            0
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    <button type="button" class="likebutton position-relative">
                        <p className='iconpoint'>{<AiOutlineShoppingCart/>}</p>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            0
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>

                
            </div>
          
          
            {
                (lang.length > 0) && (
                    <div className="container">
                        <div className="row">
                           {
                                lang.map((v, i) => {
                                    return <div className="col-4">
                                        <div className="card mt-5">
                                            <div className="iconimg d-flex">
                                                <p className='fs-4 ps-3' onClick={() => Like(v.Like, i)}>
                                                    <span className={`${(v.Like) ? "d-none" : "d-block"}`}><BsHeart /></span>
                                                    <span className={`${(v.Like) ? "d-block" : "d-none text-danger"}`}><BsHeartFill /></span>
                                                </p>
                                                <img className='apiimg' src={v.img} alt="" />
                                            </div>
                                            <h2 className='text-center pt-3'>{v.name}</h2>
                                          <div className="star1 d-flex justify-content-center">
                                          <p className='fs-3 text-warning'><AiFillStar/></p>
                                          <p className='ps-3 pt-3'>4.7</p>
                                          </div>
                                            <div className="but d-flex justify-content-center mt-3">
                                                <button className='butoff btn btn-primary'>Korzina</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )



}

export default From