import './style.css';
const Footer = () => {
    return ( <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item">
                    <a href="#"><svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.134 1.53079C37.395 0.648998 37.134 0 35.8783 0H31.7233C30.6651 0 30.1784 0.557291 29.9174 1.17807C29.9174 1.17807 27.8011 6.33478 24.8101 9.67853C23.8436 10.645 23.3992 10.9554 22.8701 10.9554C22.6091 10.9554 22.207 10.645 22.207 9.76318V1.53079C22.207 0.472639 21.9107 0 21.036 0H14.5037C13.8406 0 13.4455 0.493803 13.4455 0.952334C13.4455 1.95405 14.9411 2.18684 15.0963 5.00857V11.1317C15.0963 12.472 14.8564 12.7189 14.3273 12.7189C12.9165 12.7189 9.48806 7.54107 7.45642 1.61544C7.04727 0.465586 6.64517 0 5.57997 0H1.42497C0.239847 0 0 0.557291 0 1.17807C0 2.27855 1.41086 7.74565 6.56757 14.9693C10.003 19.9002 14.8423 22.5738 19.2442 22.5738C21.8896 22.5738 22.2141 21.9813 22.2141 20.9584C22.2141 16.2461 21.9742 15.8017 23.3004 15.8017C23.9142 15.8017 24.9723 16.1121 27.4413 18.4894C30.263 21.3111 30.7286 22.5738 32.3088 22.5738H36.4638C37.6489 22.5738 38.2485 21.9813 37.9029 20.8103C37.1128 18.3483 31.7727 13.2833 31.5328 12.9447C30.9191 12.1546 31.0955 11.8019 31.5328 11.0965C31.5399 11.0894 36.6119 3.95042 37.134 1.53079Z" fill="white" />
                    </svg>
                    </a>
                </li>
                <li className="social__item">
                    <a href="#"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0042 9.25521C13.6126 9.25521 9.26369 13.6041 9.26369 18.9958C9.26369 24.3874 13.6126 28.7363 19.0042 28.7363C24.3959 28.7363 28.7448 24.3874 28.7448 18.9958C28.7448 13.6041 24.3959 9.25521 19.0042 9.25521ZM19.0042 25.3284C15.52 25.3284 12.6716 22.4885 12.6716 18.9958C12.6716 15.5031 15.5115 12.6631 19.0042 12.6631C22.4969 12.6631 25.3369 15.5031 25.3369 18.9958C25.3369 22.4885 22.4885 25.3284 19.0042 25.3284ZM31.4152 8.85678C31.4152 10.1199 30.3979 11.1287 29.1432 11.1287C27.8801 11.1287 26.8713 10.1114 26.8713 8.85678C26.8713 7.60212 27.8886 6.58483 29.1432 6.58483C30.3979 6.58483 31.4152 7.60212 31.4152 8.85678ZM37.8665 11.1626C37.7224 8.11924 37.0272 5.42342 34.7977 3.20234C32.5766 0.98126 29.8808 0.286113 26.8374 0.133519C23.7007 -0.0445064 14.2993 -0.0445064 11.1626 0.133519C8.12772 0.277635 5.4319 0.972783 3.20234 3.19387C0.972783 5.41495 0.286113 8.11076 0.133519 11.1542C-0.0445064 14.2908 -0.0445064 23.6922 0.133519 26.8289C0.277635 29.8723 0.972783 32.5681 3.20234 34.7892C5.4319 37.0103 8.11924 37.7054 11.1626 37.858C14.2993 38.036 23.7007 38.036 26.8374 37.858C29.8808 37.7139 32.5766 37.0187 34.7977 34.7892C37.0187 32.5681 37.7139 29.8723 37.8665 26.8289C38.0445 23.6922 38.0445 14.2993 37.8665 11.1626ZM33.8143 30.1944C33.153 31.856 31.873 33.1361 30.2029 33.8058C27.7021 34.7977 21.7679 34.5688 19.0042 34.5688C16.2406 34.5688 10.2979 34.7892 7.80558 33.8058C6.144 33.1446 4.86392 31.8645 4.1942 30.1944C3.20234 27.6936 3.43123 21.7594 3.43123 18.9958C3.43123 16.2321 3.21082 10.2895 4.1942 7.7971C4.85544 6.13553 6.13553 4.85544 7.80558 4.18572C10.3064 3.19386 16.2406 3.42275 19.0042 3.42275C21.7679 3.42275 27.7105 3.20234 30.2029 4.18572C31.8645 4.84696 33.1446 6.12705 33.8143 7.7971C34.8061 10.2979 34.5772 16.2321 34.5772 18.9958C34.5772 21.7594 34.8061 27.7021 33.8143 30.1944Z" fill="white" />
                    </svg></a>
                </li>
                <li className="social__item">
                    <a href="#"><svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.094 7.69162C34.1181 8.02917 34.1181 8.36679 34.1181 8.70434C34.1181 19 26.2819 30.863 11.9594 30.863C7.54696 30.863 3.44799 29.585 0 27.3669C0.626928 27.4392 1.22966 27.4633 1.88071 27.4633C5.52153 27.4633 8.87311 26.2336 11.5495 24.1359C8.12565 24.0635 5.25634 21.8211 4.26774 18.7348C4.75002 18.8071 5.23222 18.8553 5.73862 18.8553C6.43783 18.8553 7.13713 18.7589 7.7881 18.5902C4.21957 17.8668 1.54309 14.7323 1.54309 10.9467V10.8503C2.57985 11.429 3.78554 11.7907 5.06337 11.8388C2.96564 10.4403 1.59133 8.05329 1.59133 5.35275C1.59133 3.90607 1.97705 2.57993 2.65222 1.42256C6.486 6.14845 12.2487 9.2347 18.7106 9.57233C18.5901 8.99364 18.5177 8.39091 18.5177 7.7881C18.5177 3.49616 21.9898 0 26.3058 0C28.5482 0 30.5736 0.940355 31.9962 2.4594C33.7563 2.12185 35.4441 1.4708 36.9391 0.578686C36.3604 2.38711 35.1307 3.90615 33.5152 4.87055C35.0825 4.70185 36.6016 4.26774 38 3.66501C36.9393 5.2081 35.613 6.58241 34.094 7.69162Z" fill="white" />
                    </svg>
                    </a>
                </li>
                <li className="social__item">
                    <a href="https://github.com/simoninlights" target="_blank"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7101 29.8331C12.7101 29.9863 12.5339 30.1089 12.3117 30.1089C12.0589 30.1319 11.8827 30.0093 11.8827 29.8331C11.8827 29.6798 12.0589 29.5573 12.281 29.5573C12.5109 29.5343 12.7101 29.6569 12.7101 29.8331ZM10.3274 29.4883C10.2738 29.6415 10.427 29.8177 10.6569 29.8637C10.856 29.9403 11.0859 29.8637 11.1319 29.7105C11.1778 29.5573 11.0323 29.3811 10.8024 29.3121C10.6032 29.2585 10.381 29.3351 10.3274 29.4883ZM13.7137 29.3581C13.4915 29.4117 13.3383 29.5573 13.3613 29.7335C13.3843 29.8867 13.5835 29.9863 13.8133 29.9327C14.0355 29.879 14.1887 29.7335 14.1657 29.5802C14.1427 29.4347 13.9359 29.3351 13.7137 29.3581ZM18.7548 0C8.12863 0 0 8.06734 0 18.6935C0 27.1899 5.34758 34.4605 12.9859 37.0194C13.9665 37.1956 14.3113 36.5903 14.3113 36.0923C14.3113 35.6173 14.2883 32.9972 14.2883 31.3883C14.2883 31.3883 8.9254 32.5375 7.79919 29.1052C7.79919 29.1052 6.92581 26.8758 5.66935 26.3012C5.66935 26.3012 3.91492 25.0984 5.79194 25.1214C5.79194 25.1214 7.6996 25.2746 8.74919 27.098C10.427 30.0552 13.2387 29.2048 14.3343 28.6992C14.5105 27.4734 15.0085 26.623 15.5601 26.1173C11.2774 25.6423 6.95645 25.0218 6.95645 17.6516C6.95645 15.5448 7.53871 14.4875 8.76452 13.1391C8.56532 12.6411 7.91411 10.5879 8.96371 7.9371C10.5649 7.43911 14.25 10.0056 14.25 10.0056C15.7823 9.57661 17.4294 9.35444 19.0613 9.35444C20.6931 9.35444 22.3403 9.57661 23.8726 10.0056C23.8726 10.0056 27.5577 7.43145 29.1589 7.9371C30.2085 10.5956 29.5573 12.6411 29.3581 13.1391C30.5839 14.4952 31.3347 15.5524 31.3347 17.6516C31.3347 25.0448 26.8222 25.6347 22.5395 26.1173C23.2444 26.7226 23.8419 27.8718 23.8419 29.6722C23.8419 32.254 23.819 35.4488 23.819 36.077C23.819 36.575 24.1714 37.1802 25.1444 37.004C32.8056 34.4605 38 27.1899 38 18.6935C38 8.06734 29.381 0 18.7548 0ZM7.44677 26.4238C7.34718 26.5004 7.37016 26.6766 7.5004 26.8222C7.62298 26.9448 7.79919 26.9984 7.89879 26.8988C7.99839 26.8222 7.9754 26.646 7.84516 26.5004C7.72258 26.3778 7.54637 26.3242 7.44677 26.4238ZM6.61936 25.8032C6.56573 25.9028 6.64234 26.0254 6.79556 26.102C6.91815 26.1786 7.07137 26.1556 7.125 26.0484C7.17863 25.9488 7.10202 25.8262 6.94879 25.7496C6.79556 25.7036 6.67298 25.7266 6.61936 25.8032ZM9.10161 28.5306C8.97903 28.6302 9.025 28.8601 9.20121 29.0056C9.37742 29.1819 9.5996 29.2048 9.69919 29.0823C9.79879 28.9827 9.75282 28.7528 9.5996 28.6073C9.43105 28.431 9.20121 28.4081 9.10161 28.5306ZM8.22823 27.4044C8.10565 27.4811 8.10565 27.6802 8.22823 27.8565C8.35081 28.0327 8.55766 28.1093 8.65726 28.0327C8.77984 27.9331 8.77984 27.7339 8.65726 27.5577C8.55 27.3815 8.35081 27.3048 8.22823 27.4044Z" fill="white" />
                    </svg>
                    </a>
                </li>
                <li className="social__item">
                    <a href="#"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.2857 0H2.7058C1.21295 0 0 1.22991 0 2.73973V35.2603C0 36.7701 1.21295 38 2.7058 38H35.2857C36.7786 38 38 36.7701 38 35.2603V2.73973C38 1.22991 36.7786 0 35.2857 0ZM11.4848 32.5714H5.85268V14.4366H11.4933V32.5714H11.4848ZM8.66875 11.9598C6.86205 11.9598 5.40312 10.4924 5.40312 8.6942C5.40312 6.89598 6.86205 5.42857 8.66875 5.42857C10.467 5.42857 11.9344 6.89598 11.9344 8.6942C11.9344 10.5009 10.4754 11.9598 8.66875 11.9598ZM32.5969 32.5714H26.9647V23.75C26.9647 21.6464 26.9223 18.9406 24.0384 18.9406C21.1036 18.9406 20.654 21.2308 20.654 23.5973V32.5714H15.0219V14.4366H20.425V16.9134H20.5013C21.2562 15.4884 23.0969 13.9871 25.8366 13.9871C31.5366 13.9871 32.5969 17.7446 32.5969 22.6304V32.5714Z" fill="white" />
                    </svg>
                    </a>
                </li>
            </ul>
            <div className="copyright">
                <p>&#169; <span className="current-year"></span> frontend developer Semyon Ignatov</p>
            </div>
        </div>
    </div>
</footer> );
}
 
export default Footer;