import type { ReactNode } from 'react';

function Scene({ children, name, className = '' }: { children: ReactNode; name: string; className?: string }) {
  return <svg className={`landscape ${className}`} viewBox="0 0 1440 480" fill="none" aria-hidden="true" focusable="false" data-landscape={name} preserveAspectRatio="xMidYMax slice">{children}</svg>;
}
function Tree({ x, y, size = 1, color = 'var(--forest-mid)' }: { x: number; y: number; size?: number; color?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${size})`}><path d="M-2 0H2V-51H-2Z" fill={color}/><path d="M0-100C-10-100-17-87-16-76C-32-71-32-45-18-39C-26-19-10-12 0-19C13-9 29-22 21-37C37-47 29-72 16-75C17-88 10-100 0-100Z" fill={color}/><path d="M0-71V-25M0-48L-10-58M0-38L11-51" stroke="var(--tree-line)" strokeWidth="1.3"/></g>;
}
function Pine({ x, y, size = 1, color = 'var(--forest-mid)' }: { x: number; y: number; size?: number; color?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${size})`} fill={color}><path d="M-2 0H2V-25H-2Z"/><path d="M0-112L-22-66H-12L-33-30H-18L-40-7H40L18-30H33L12-66H22Z"/></g>;
}
function Reeds({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke="var(--forest-mid)" strokeWidth="3" strokeLinecap="round"><path d="M0 0Q-5-29-17-45M3 0L4-65M9 0Q10-34 23-50M-3 0L-10-69"/><path d="M4-64V-82M-10-68V-84" strokeWidth="6"/></g>;
}
export function MisionesLandscape() {
  return <Scene name="Misiones" className="hero-landscape">
    <path d="M0 168Q155 58 320 139T583 191Q772 113 910 163T1180 120Q1310 71 1440 109V480H0Z" fill="var(--forest-far)"/>
    <path d="M0 154Q180 148 320 240T650 275Q816 216 1029 218T1440 132V480H0Z" fill="var(--forest-back)"/>
    <path d="M675 225Q631 266 751 281Q879 300 723 328Q577 360 797 390L1025 480H447Q327 403 553 349Q749 304 660 287Q589 259 675 225Z" fill="var(--river)"/>
    <path d="M0 223Q172 195 340 293L553 349Q327 403 447 480H0Z" fill="var(--forest-mid)"/>
    <path d="M1440 189Q1244 219 1161 280Q1075 340 723 328Q577 360 797 390L1025 480H1440Z" fill="var(--forest-mid)"/>
    {Array.from({ length: 23 }, (_, i) => <Tree key={`l${i}`} x={-10 + i * 24} y={244 + i * 5 + Math.sin(i * 2) * 22} size={.36 + (i % 4) * .1} color="var(--forest-back)"/>)}
    {Array.from({ length: 26 }, (_, i) => <Tree key={`r${i}`} x={850 + i * 25} y={300 - i * 3 + Math.sin(i) * 18} size={.45 + (i % 3) * .13} color="var(--forest-back)"/>)}
    <path d="M0 347Q185 296 351 414L420 480H0ZM1440 319Q1232 306 1120 427L1085 480H1440Z" fill="var(--forest-front)"/>
    {Array.from({ length: 13 }, (_, i) => <Tree key={i} x={i * 31 - 10} y={366 + i * 6} size={.85 + (i % 3) * .22} color="var(--forest-front)"/>)}
    {Array.from({ length: 11 }, (_, i) => <Tree key={`f${i}`} x={1150 + i * 33} y={412 - i * 5} size={.7 + (i % 4) * .18} color="var(--forest-front)"/>)}
    <g stroke="var(--water-line)" strokeLinecap="round" opacity=".65"><path d="M632 374H721M708 301H746M715 421H814M471 436H573M605 458H690"/></g>
    <path d="M997 94l7-3 7 3m18 8 6-3 6 3" stroke="var(--forest-back)" strokeWidth="2" strokeLinecap="round"/>
  </Scene>;
}
export function IberaLandscape() {
  return <Scene name="Esteros del Iberá">
    <circle cx="1045" cy="99" r="45" fill="var(--sun)"/>
    <path d="M0 267Q240 225 466 266T892 252T1440 248V480H0Z" fill="var(--forest-far)"/>
    <path d="M0 292Q480 263 1440 289V480H0Z" fill="var(--river)"/>
    <path d="M0 343Q151 299 375 348T664 400L559 480H0ZM1440 373Q1235 308 1057 379T846 480H1440Z" fill="var(--forest-back)"/>
    <path d="M0 417Q219 365 436 430L502 480H0Z" fill="var(--forest-mid)"/>
    <g stroke="var(--water-line)" strokeWidth="2"><path d="M510 339H635M730 391H868M875 313H990M680 449H795M1180 301H1300"/></g>
    <Reeds x={157} y={379} scale={1.3}/><Reeds x={297} y={383} scale={.8}/><Reeds x={1242} y={405} scale={1.2}/><Reeds x={1353} y={415} scale={1.6}/>
    <g fill="var(--forest-mid)"><ellipse cx="839" cy="348" rx="33" ry="4"/><path d="M786 346L830 337H875L907 346Z"/><circle cx="865" cy="338" r="4"/><ellipse cx="591" cy="390" rx="18" ry="4"/><ellipse cx="980" cy="418" rx="29" ry="4"/></g>
    <path d="M733 147l8-4 8 4m24-19 8-4 8 4" stroke="var(--forest-back)" strokeWidth="2" strokeLinecap="round"/>
  </Scene>;
}
export function MendozaLandscape() {
  return <Scene name="Mendoza">
    <path d="M334 480L685 195L772 296L858 210L1143 480Z" fill="var(--mountain-far)"/>
    <path d="M685 195L633 263L669 249L689 268L704 248L733 258Z" fill="var(--snow)"/>
    <path d="M0 18L194 77L279 206L386 229L567 480H0ZM1440 25L1253 55L1167 180L1041 207L906 480H1440Z" fill="var(--rock-back)"/>
    <path d="M0 18L139 144L177 334L305 480H0ZM1440 25L1331 199L1287 333L1138 480H1440Z" fill="var(--rock-front)"/>
    <path d="M194 77L218 250L279 206M1253 55L1229 268L1167 180" fill="var(--rock-light)"/>
    <path d="M567 480L715 320L741 320L908 480Z" fill="var(--sand)"/>
    <path d="M636 480L723 320H730L801 480Z" fill="var(--road)"/>
    <path d="M722 462L725 422M726 398L727 377M727 361V348" stroke="var(--snow)" strokeWidth="3"/>
  </Scene>;
}
export function PampaLandscape() {
  return <Scene name="La Pampa">
    <circle cx="1100" cy="171" r="43" fill="var(--sun)"/>
    <path d="M0 303Q340 293 720 305T1440 298V480H0Z" fill="var(--sand)"/>
    <path d="M0 356Q370 328 717 310L580 480H0ZM1440 343L729 310L871 480H1440Z" fill="var(--grass)"/>
    <path d="M589 480L719 305H726L853 480Z" fill="var(--road)"/>
    <path d="M721 468V431M722 411V389M722 374V360M722 349V339M722 331V324" stroke="var(--snow)" strokeWidth="3"/>
    <g stroke="var(--forest-back)" strokeWidth="2"><path d="M302 450L297 428M302 450L313 432M1135 415L1131 399M1135 415L1144 403M161 378L155 364M161 378L168 367M1237 466L1233 442M1237 466L1248 450"/></g>
  </Scene>;
}
export function ChubutLandscape() {
  return <Scene name="Punta Pirámide">
    <path d="M0 203H1440V480H0Z" fill="var(--river)"/>
    <path d="M0 149L199 156L363 213L450 286L356 318L0 345Z" fill="var(--rock-light)"/>
    <path d="M0 219L175 227L356 318L0 369Z" fill="var(--rock-back)"/>
    <path d="M0 354Q175 315 324 353L567 480H0Z" fill="var(--sand)"/>
    <path d="M1440 277L1347 285L1291 352L1106 389L1061 480H1440Z" fill="var(--rock-back)"/>
    <path d="M1440 321L1355 351L1287 480H1440Z" fill="var(--rock-front)"/>
    <g stroke="var(--water-line)" strokeWidth="2" strokeLinecap="round"><path d="M529 306H648M799 388H974M1068 260H1182M615 452H706M753 240H825"/></g>
    <path d="M931 334Q930 315 912 312Q882 312 870 289Q911 282 935 308Q953 281 993 287Q983 309 956 314Q945 318 946 334Z" fill="var(--forest-front)"/>
    <g fill="var(--animal)"><path d="M207 367Q216 347 234 351L245 333Q251 329 255 335L251 365L276 372H201Z"/><path d="M302 396Q308 382 324 382L334 365Q341 362 342 370L339 393L359 401H294Z"/></g>
    <path d="M1077 99l9-4 9 4m24 19 9-4 9 4" stroke="var(--forest-back)" strokeWidth="2" strokeLinecap="round"/>
  </Scene>;
}
export function ChaltenLandscape() {
  return <Scene name="El Chaltén">
    <g transform="translate(288 192) scale(.6)">
    <path d="M104 379L331 187L427 277L570 140L649 241L740 64L796 185L858 139L981 283L1112 199L1368 395Z" fill="var(--mountain-far)"/>
    <path d="M331 187L281 250L322 235L340 254L367 232L427 277L348 221ZM570 140L523 207L562 187L576 207L591 181L649 241L595 179ZM740 64L672 190L720 160L739 183L756 139L796 185ZM858 139L822 194L856 180L870 207L889 186Z" fill="var(--snow)"/>
    </g>
    <path d="M0 364Q268 304 488 358T966 345T1440 365V480H0Z" fill="var(--snow-back)"/>
    {Array.from({ length: 9 }, (_, i) => <Pine key={i} x={i * 39} y={382 + Math.sin(i) * 13} size={.5 + (i % 3) * .23} color="var(--mountain-far)"/>)}
    {Array.from({ length: 9 }, (_, i) => <Pine key={`r${i}`} x={1145 + i * 43} y={389 + Math.sin(i) * 14} size={.55 + (i % 3) * .2} color="var(--mountain-far)"/>)}
    <path d="M0 410Q278 365 533 412T1040 402T1440 420V480H0Z" fill="var(--snow)"/>
    <path d="M511 445Q750 425 957 451" stroke="var(--snow-back)" strokeWidth="2"/>
  </Scene>;
}
