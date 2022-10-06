function Card() {
    return (
        <div className="max-w-sm mx-auto flex flex-row min-h-screen w-auto items-center">
            <div className="m-auto w-auto backdrop-blur-xl shadow-xl rounded-xl">
                <img
                    src="https://bit.ly/3VaLqXp"
                    alt="pungrumpy"
                    className="w-32 h-32 m-5 rounded-full mx-auto aspect-square border-2 border-zinc-400"
                />
                <div className="m-10 text-center divide-y divide-white space-y-8">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-mplus font-bold text-white sm:text-2xl">
                            Noppakorn Kaewsalabnil
                        </h2>
                        <p className="px-5 text-xs text-white/60 sm:text-base">
                            Undergraduate student
                            <br />
                            Computer Science
                        </p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 items-center">
                        <a
                            rel="noopener noreferrer"
                            href="https://github.com/PunGrumpy/"
                            aria-label="GitHub"
                            class="p-2 rounded-md text-white dark:text-gray-100 hover:opacity-20 transition duration-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="w-8 h-8 fill-current"
                            >
                                {' '}
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/lnoppakornl.lkaewsalabnill"
                            aria-label="Facebook"
                            class="p-2 rounded-md text-white dark:text-gray-100 hover:opacity-20 transition duration-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                class="w-8 h-8 fill-current"
                            >
                                {' '}
                                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/wtpp_p114/"
                            aria-label="Instagram"
                            class="p-2 rounded-md text-white dark:text-gray-100 hover:opacity-20 transition duration-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="w-10 h-10 fill-current"
                            >
                                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
