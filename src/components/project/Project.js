import img1 from "./../../../src/img/projects/01-big.jpg";
import "./style.css"

const Project = () => {
    return (         
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">Video Service</h1>

                <img src={img1} alt="" className="project-details__cover"/>

                <div className="project-details__description">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <a href="#!" className="btn-outline">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.02742 18.8419C8.02742 18.9387 7.91613 19.0161 7.77581 19.0161C7.61613 19.0306 7.50484 18.9532 7.50484 18.8419C7.50484 18.7452 7.61613 18.6677 7.75645 18.6677C7.90161 18.6532 8.02742 18.7306 8.02742 18.8419ZM6.52258 18.6242C6.48871 18.721 6.58548 18.8323 6.73065 18.8613C6.85645 18.9097 7.00161 18.8613 7.03064 18.7645C7.05968 18.6677 6.96774 18.5565 6.82258 18.5129C6.69677 18.479 6.55645 18.5274 6.52258 18.6242ZM8.66129 18.5419C8.52097 18.5758 8.42419 18.6677 8.43871 18.779C8.45323 18.8758 8.57903 18.9387 8.72419 18.9048C8.86452 18.871 8.96129 18.779 8.94677 18.6823C8.93226 18.5903 8.80161 18.5274 8.66129 18.5419ZM11.8452 0C5.13387 0 0 5.09516 0 11.8065C0 17.1726 3.37742 21.7645 8.20161 23.3806C8.82097 23.4919 9.03871 23.1097 9.03871 22.7952C9.03871 22.4952 9.02419 20.8403 9.02419 19.8242C9.02419 19.8242 5.6371 20.55 4.92581 18.3823C4.92581 18.3823 4.37419 16.9742 3.58065 16.6113C3.58065 16.6113 2.47258 15.8516 3.65806 15.8661C3.65806 15.8661 4.8629 15.9629 5.52581 17.1145C6.58548 18.9823 8.36129 18.4452 9.05323 18.1258C9.16452 17.3516 9.47903 16.8145 9.82742 16.4952C7.12258 16.1952 4.39355 15.8032 4.39355 11.1484C4.39355 9.81774 4.76129 9.15 5.53548 8.29839C5.40968 7.98387 4.99839 6.6871 5.66129 5.0129C6.67258 4.69839 9 6.31936 9 6.31936C9.96774 6.04839 11.0081 5.90806 12.0387 5.90806C13.0694 5.90806 14.1097 6.04839 15.0774 6.31936C15.0774 6.31936 17.4048 4.69355 18.4161 5.0129C19.079 6.69194 18.6677 7.98387 18.5419 8.29839C19.3161 9.15484 19.7903 9.82258 19.7903 11.1484C19.7903 15.8177 16.9403 16.1903 14.2355 16.4952C14.6806 16.8774 15.0581 17.6032 15.0581 18.7403C15.0581 20.371 15.0435 22.3887 15.0435 22.7855C15.0435 23.1 15.2661 23.4823 15.8806 23.371C20.7194 21.7645 24 17.1726 24 11.8065C24 5.09516 18.5565 0 11.8452 0ZM4.70323 16.6887C4.64032 16.7371 4.65484 16.8484 4.7371 16.9403C4.81452 17.0177 4.92581 17.0516 4.98871 16.9887C5.05161 16.9403 5.0371 16.829 4.95484 16.7371C4.87742 16.6597 4.76613 16.6258 4.70323 16.6887ZM4.18064 16.2968C4.14677 16.3597 4.19516 16.4371 4.29194 16.4855C4.36935 16.5339 4.46613 16.5194 4.5 16.4516C4.53387 16.3887 4.48548 16.3113 4.38871 16.2629C4.29194 16.2339 4.21452 16.2484 4.18064 16.2968ZM5.74839 18.0194C5.67097 18.0823 5.7 18.2274 5.81129 18.3194C5.92258 18.4306 6.0629 18.4452 6.12581 18.3677C6.18871 18.3048 6.15968 18.1597 6.0629 18.0677C5.95645 17.9565 5.81129 17.9419 5.74839 18.0194ZM5.19677 17.3081C5.11935 17.3565 5.11935 17.4823 5.19677 17.5935C5.27419 17.7048 5.40484 17.7532 5.46774 17.7048C5.54516 17.6419 5.54516 17.5161 5.46774 17.4048C5.4 17.2935 5.27419 17.2452 5.19677 17.3081Z"
                            fill="black" />
                    </svg>
                    gitHub repo
                </a>
            </div>
        </div>
     );
}
 
export default Project;