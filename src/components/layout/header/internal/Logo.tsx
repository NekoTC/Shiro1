import type { SVGProps } from 'react'

import { clsxm } from '~/lib/helper'

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 220 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsxm('inline-block h-[4.5rem] p-3', props.className)}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="forest-black" transform="translate(25.000000, 25.000000)">
          <path
            d="M99.5,148.5 C103.932843,148.5 107.5,152.220633 107.5,156.779661 L107.5,163.220339 C107.5,167.779367 103.932843,171.5 99.5,171.5 C95.0671574,171.5 91.5,167.779367 91.5,163.220339 L91.5,156.779661 C91.5,152.220633 95.0671574,148.5 99.5,148.5 Z"
            id="Path"
            fill="currentColor"
            fillRule="nonzero"
          />
          <path
            d="M62.1667469,148.070793 L62.1667469,163.34727 C62.1667469,167.850702 58.5098233,171.5 54.000116,171.5 C49.4904086,171.5 45.833485,167.850702 45.833485,163.34727 L45.833485,148.047659 C34.4025033,147.5943 24.2749796,146.259009 15.5231921,144.333079 C12.272458,143.617718 9.42559433,142.865594 6.99294787,142.117963 C5.45289656,141.644655 4.34281241,141.25665 3.68654107,140.999913 C0.842119111,139.887091 -1.14241354,137.282085 -1.45661717,134.247719 C-1.77082979,131.213266 -0.361439946,128.257801 2.19243451,126.589443 C2.25551976,126.548022 2.45170274,126.413471 2.69680798,126.239682 C3.10188396,125.952466 3.56232135,125.61426 4.06883457,125.227824 C5.50954715,124.128656 7.03370942,122.86213 8.57218774,121.447056 C12.4316278,117.89719 15.70766,114.047011 18.0251458,110.012138 C16.0677295,109.384223 14.3685971,108.743756 11.9686085,107.78145 C11.424595,107.563251 11.2606081,107.497818 11.0248676,107.405695 C8.15012698,106.283461 6.15493215,103.638452 5.86852085,100.56911 C5.58210396,97.499709 7.05436783,94.5323195 9.66966022,92.901125 C15.8263192,89.0395697 23.1024091,82.5610075 27.0269725,76.4351934 C24.5805116,75.6883564 22.5452394,74.8949916 19.7777339,73.7086563 C17.0850973,72.5546305 15.2178602,70.0482538 14.8856789,67.1411032 C14.5534971,64.2335398 15.8076763,61.3717443 18.171461,59.6418352 C25.8063342,54.0545936 32.5816452,44.7588061 38.3742224,33.2664727 C40.4199306,29.207837 42.1970994,25.1558982 43.6973071,21.3007231 C44.6057793,18.9661667 45.2633263,17.0895988 45.5416164,16.2060634 C46.6062732,12.8304011 49.7318046,10.524477 53.2857865,10.5 C53.3092864,10.5 53.3092864,10.5 53.3324529,10.5 C56.8557536,10.5 59.9828986,12.7535695 61.0872139,16.0934103 C61.3855671,16.9933486 62.0792692,18.9043782 63.0228608,21.2787439 C64.5806419,25.1985987 66.3980029,29.3160983 68.4571777,33.4375142 C74.2872965,45.1064331 80.8837566,54.5245017 88.0436331,60.1383884 C90.3256932,61.9281917 91.4854433,64.7920709 91.0895198,67.6621368 C90.6936255,70.5319915 88.8020244,72.9764148 86.1212944,74.0835519 C83.7252635,75.0732993 81.8540421,75.7888851 80.0801881,76.3598225 C83.9940081,82.7980486 91.1567442,89.2133211 97.1814582,92.8114008 C99.7490428,94.3442548 101.275625,97.1586405 101.154299,100.141439 C101.032872,103.126724 99.2910836,105.806913 96.6107285,107.12597 C93.3447738,108.733758 91.3031424,109.632748 89.0041166,110.317083 C91.2547671,114.568782 94.444197,118.382054 98.2072753,121.712356 C99.6989761,123.032502 101.176823,124.181785 102.573417,125.15313 C103.063816,125.494207 103.509308,125.788774 103.900835,126.035611 C104.136291,126.184054 104.322118,126.296006 104.38114,126.329538 L104.383242,126.330734 C107.066703,127.861001 108.655467,130.772457 108.487921,133.854586 C108.319194,136.935483 106.422836,139.656887 103.588268,140.887392 C102.972254,141.154511 101.92342,141.556173 100.45627,142.044383 C98.143032,142.814139 95.4084602,143.586685 92.2535829,144.319201 C83.7635583,146.29046 73.7324884,147.641755 62.1667469,148.070793 Z M82.9566612,129.573098 C76.3992891,122.53417 71.7509687,114.333179 69.9757361,104.992853 C69.5062016,102.522437 70.2050064,99.9739577 71.8692484,98.0865316 C72.7356273,97.1039523 73.8077477,96.3578612 74.9932392,95.8896354 C67.4312475,88.3935731 62.3098469,80.0831504 60.9275936,71.1172385 C60.54637,68.6450639 61.3233443,66.1349374 63.034587,64.3082271 C64.1389463,63.1290872 65.5546215,62.3190361 67.0911698,61.9503352 C62.0096003,55.5765254 57.4340548,48.0319674 53.3768428,39.8013513 C49.1765932,48.2491549 44.3238267,55.9652235 38.8006271,62.4337201 C41.0261172,62.773513 43.3849126,62.9865049 45.8988481,63.0581695 C50.4066733,63.1865097 53.9578716,66.9386501 53.8291749,71.4405727 C53.6999571,75.9456046 49.9450317,79.4889797 45.4326951,79.3567556 C44.9346828,79.3425398 44.4371376,79.3234544 43.9386471,79.2995934 C41.4775171,85.0718119 37.2215066,90.8402683 31.2375071,96.5398316 C36.3338803,97.4720238 42.1749498,97.981066 48.9994761,97.981066 C53.5091835,97.981066 57.166107,101.630364 57.166107,106.133796 C57.166107,110.637227 53.5091833,114.286525 48.9994761,114.286525 C43.7960898,114.286525 38.9892153,114.011659 34.526853,113.491102 C32.0316805,119.150762 28.3207967,124.452872 23.7626468,129.3393 C32.6827593,130.955812 42.9014055,131.909987 54.3327809,131.909987 C65.1850714,131.909987 74.729815,131.048481 82.9566612,129.573098 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          />
          <path
            d="M130.765189,154.421926 L130.765189,163.359375 C130.765189,167.854589 127.128791,171.5 122.640982,171.5 C118.153173,171.5 114.516775,167.854589 114.516775,163.359375 L114.516775,146.425781 C114.516775,141.930567 118.153173,138.285156 122.640982,138.285156 C133.477001,138.285156 141.903787,137.524329 148.222505,136.224372 C147.056002,135.030699 145.915162,133.799644 144.807469,132.532519 C139.392006,126.339273 135.374409,120.008775 132.816121,113.633242 C128.538457,114.096996 123.84593,114.339492 118.666458,114.339492 C114.178649,114.339492 110.542251,110.694081 110.542251,106.198867 C110.542251,101.703653 114.178649,98.0582422 118.666458,98.0582422 C126.69791,98.0582422 133.066674,97.4459196 138.321496,96.314787 C137.898732,95.933052 137.479858,95.548058 137.065189,95.159851 C129.57984,88.1527522 124.428469,81.0722951 121.708082,74.0179954 C116.938441,74.3961337 111.641599,74.5920313 105.749254,74.5920313 C101.261445,74.5920313 97.625047,70.9466203 97.625047,66.4514063 C97.625047,61.9561922 101.261445,58.3107812 105.749254,58.3107812 C115.104643,58.3107812 122.678677,57.774808 128.767283,56.8150774 C121.714264,48.7855604 115.61778,38.9373677 110.456454,28.1253882 C106.840309,35.7340901 102.785657,42.9642563 98.3070174,49.4548241 C95.7541704,53.1533091 90.6914646,54.0779036 87.0014855,51.5184123 C83.3128837,48.9604398 82.3915588,43.8914152 84.9424622,40.1947509 C89.876744,33.0443655 94.2771078,24.7647619 98.0806542,16.0757969 C99.4179197,13.0208971 100.585825,10.1294639 101.577154,7.49172062 C102.177045,5.89552187 102.615822,4.64928902 102.799208,4.09120224 C103.897407,0.754266328 107.008181,-1.5 110.514046,-1.5 C110.52688,-1.5 110.52688,-1.5 110.539549,-1.5 C110.552219,-1.5 110.552219,-1.5 110.576477,-1.49995649 C114.105998,-1.47307429 117.213541,0.83438499 118.267122,4.20720533 C118.588209,5.23102324 119.33812,7.3811495 120.377699,10.0640007 C122.094179,14.4937362 124.128658,19.1503767 126.472159,23.8163989 C133.113122,37.0388769 140.892362,47.7468331 149.682846,54.2091367 C152.032862,55.9368348 153.278958,58.7931908 152.948991,61.6945805 C152.618959,64.5961313 150.762922,67.0986038 148.084266,68.2521199 C145.092926,69.5401776 142.047153,70.5867484 138.455145,71.4754784 C142.754713,79.080241 151.689508,87.2616831 159.388516,92.1091698 C161.985946,93.7447812 163.444604,96.7080451 163.15728,99.7666027 C162.869767,102.827166 160.889441,105.465667 158.034726,106.585639 C157.59003,106.760323 157.154002,106.949663 156.075291,107.430279 C153.215858,108.704041 151.331234,109.482048 149.07981,110.23307 C150.95379,114.023082 153.610471,117.894419 157.028323,121.803078 C159.45871,124.582478 162.058697,127.123624 164.654623,129.371253 C165.565208,130.159664 166.410418,130.85508 167.168463,131.450746 C167.43401,131.659411 167.669716,131.840714 167.872766,131.993745 C167.994626,132.085587 168.078823,132.147816 168.118912,132.176894 C169.917172,133.47467 171.111431,135.454221 171.420234,137.650894 C171.729429,139.85035 171.132133,142.082123 169.763808,143.823805 C167.940905,146.144723 164.384593,148.442442 158.557002,150.347135 C151.552458,152.636023 142.235515,153.997189 130.765189,154.421926 Z"
            id="Path"
            fill="currentColor"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  )
}
