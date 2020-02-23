import React, { useState, useEffect } from 'react';
import ImageModal from '../ImageModal/ImageModal'
import { CircularProgress } from '@material-ui/core';
import _ from 'lodash';
import './searchList.css';
import { getData } from '../../service'

var debouneGetData, throatleGetData;

function SearchList(props) {
    const [open, setOpen] = useState(false);
    const [image, SetImage] = useState({});
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setloader] = useState(false)
    const [error, setErroer] = useState(false);


    useEffect(() => {
        debouneGetData = _.debounce(handleData, 2000);
        throatleGetData = _.throttle(handleData, 2000);
        window.addEventListener("scroll", handleScroll, false)
        return (() => window.removeEventListener("scroll", handleScroll));
    }, []);

    useEffect(() => {
        setloader(true);
        debouneGetData('search', props.query, page);
    }, [props.query])

    useEffect(() => {
        throatleGetData('scroll', props.query, page);
    }, [page])

    const handleScroll = () => {
        let element = document.getElementById('photos');
        if (window.scrollY + window.innerHeight >= element.clientHeight + element.offsetTop) {
            setPage(page => page + 1);
        }
    }

    const handleClick = (url, title) => {
        setOpen(true);
        SetImage({ url: url, title: title })
    }

    const handleData = async (mode, ...args) => {
        let dataSet = await getData(...args);
        if (mode == 'scroll') {
            setData(data => [...data, ...dataSet]);
            setloader(false);
        } else {
            window.scrollTo(0, 0)
            setData(dataSet);
            setPage(1);
            setloader(false);
        }
    }

    return (
        <div className="photos" id='photos'  >
            <div className="list">
                {data.map(val => {
                    let url = `https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}.jpg`;
                    return (
                        <img src={url} className="list_image" key={val.id} onClick={() => handleClick(url, val.title)} />
                    )
                })}
            </div>
            {!data.length && loader && <div className="loader">
                <CircularProgress />
            </div>
            }
            <ImageModal image={image} open={open} setOpen={setOpen} />
        </div>
    );
}

export default SearchList;
