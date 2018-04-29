const posts = [
  {
    title : 'Logistic Regression - Mnist Classification',
    subtitle : '2018.04.29 ',
    description : 'Tensorflow를 이용하여 Logistic Regression로 Mnist 이미지 분류. \
    정확도는 대략 91% 정도 나옴. Deep Learning을 위한 기초.',
    labels : [
      'Tensorflow'
      'Python',
      'Logistic Regression',
      'basis of Machine Learning',
      'TensorBoard',
    ],
    cover : require('./images/project/tensorflow/mnist_logistic_regression.JPG'),
  },
  
  {
    title : 'React 개인 페이지',
    subtitle : 'April 2018 ~ ',
    description : 'react를 사용한 Single Page Application으로 개인 웹페이지 제작하였습니다.',
    labels : [
      'Javascript',
      'React',
      'Css',
      'Webpack',
      'SPA',
    ],
    cover : require('./images/project/webpage/webpage_cover.JPG'),
    github_url : 'https://github.com/Jooh34/jooh_page',
    demo_url : 'http://34.213.112.175:3000/',
  },

  {
    title : '강원학사 식단 앱',
    subtitle : 'April 2018',
    description : '대학생활 중 강원학사에 살면서 매번 웹으로 강원학사 식단을 확인하는게 번거롭다고 많이 느껴서 \
    언젠가는 강원학사 식단 정보 앱을 만들어 학사 사람들에게 배포해야겠다고 생각했었는 \
    마침 nodeJS 연습 겸 식단 앱을 만들어 사람들에게 배포했습니다',
    labels : [
      'Android',
      'Java',
      'NodeJS',
      'AWS EC2',
    ],
    cover : require('./images/project/haksasik/haksasik_cover.png'),
    github_url : 'https://github.com/Jooh34/Haksasik',
    demo_url : 'https://play.google.com/store/apps/details?id=com.jooh.mnh51.haksasik',
  },

  {
    title : '강원학사 식단 메뉴 서버',
    subtitle : 'April 2018',
    description : '강원학사 홈페이지에서 날짜 및 해당 날짜의 식단 정보 크롤링 연습. \
    서버는 AWS EC2 를 이용하였습니다. ',
    labels : [
      'NodeJS',
      'Back-end',
      'AWS EC2',
    ],
    cover : require('./images/project/haksasik/ssh.JPG'),
    github_url : 'https://github.com/Jooh34/haksasik-server.git',
    demo_url : 'http://34.213.112.175/menus/',
  },

  {
    title : '위치 기반 SNS 웹사이트 \'Happening\' 개발',
    subtitle : 'Mar 2017 ~ June 2017',
    description : 'Front-end : React/Redux , Back-end : Django-REST \
    \'소프트웨어의 개발 및 실습\' 강의에서 진행한 4인 개발 프로젝트입니다. \
    위치 기반 SNS인 Happening을 개발했습니다. ',
    labels : [
      'ReactJS',
      'Redux',
      'Redux-Saga',
      'Django',
      'Django-REST API',
      'Semantic-ui',
      'Happening',
    ],
    cover : require('./images/project/swpp/swpp1.png'),
    demo_url : 'http://34.217.214.191:3000/',
  },

  {
    title : 'Solving Rubik\'s Cube Game',
    subtitle : 'Dec 2017',
    description : '',
    labels : [
      'OpenGL',
      'C++',
      'Game',
      'Rubik\'s Cube',
    ],
    cover : require('./images/project/graphics/cube/all.JPG'),
    github_url : 'https://github.com/Jooh34/jooh/tree/master/graphics/cube',
  },

  {
    title : 'Backward Ray Tracing',
    subtitle : 'Mar 2017 ~ June 2017',
    description : '',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Ray Tracing',
    ],
    cover : require('./images/project/graphics/raytracing/3.bmp'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    title : 'Shading - 조명과 그림자 효과 + BSP Tree 구현',
    subtitle : 'Mar 2017 ~ June 2017',
    description : '',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Shading',
      'Depth Ordering',
      'BSP Tree',
    ],
    cover : require('./images/project/graphics/shading/1.PNG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    title : 'Spline Curve - 스플라인 곡선을 이용하여 3D Model 디자인하기',
    subtitle : 'Mar 2017 ~ June 2017',
    description : '곡선을 디자인 하는 방법 중 ~적인 B-Spline 곡선과 Catmull-Rom 곡선을 이용하여 3D Model을 디자인하였습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Spline Curve'
    ],
    cover : require('./images/project/graphics/spline/2.PNG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    title : 'Virtual Trackball - 마우스 드래그에 따라 화면 전환 & 렌더링',
    subtitle : 'Mar 2017 ~ June 2017',
    description : '대부분의 3D tool들 마우스 드래그에 따라 회전시켜 물체의 모든 면을 볼 수 있게 합니다. \
    이번 프로젝트에서는 그것을 구현하였습니다. \
    2D에서 마우스 움직임을 Virtual Trackball의 3D rotation으로 바꿔주고, \
    구의 방정식 & 삼각함수를 이용하여 viewpoint의 이동으로 mapping해주어 구현하였습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Virtual Trackball'
    ],
    cover : require('./images/project/graphics/virtual_trackball/1.JPG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    title : 'Hierarchical Modeling - hierarchical 3d 모델 디자인',
    subtitle : 'Mar 2017 ~ June 2017',
    description : 'OpenGL 의 modelview matrix stack 을 이용하여 Hierarchical Modeling 과 Animation을 구현하였습니다. \
    OpenGL을 처음 배우는 단계라 three-dimensional primitives 로 구현, Cuboid, Cylinder, Circular cone으로 회전목마를 만들었습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Hierarchical Modeling',
    ],
    cover : require('./images/project/graphics/hierarchical_modeling/3.JPG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    title : 'Event Driven Simulation - CSMA/CD, CSMA/CA',
    subtitle : 'May 2017',
    description : 'Ethernet의 2가지 MAC schemes 중 1-persistent CSMA + binary exponential backoff 방식의 scheme과 IEEE 802.11 CSMA-CA DCF 두 가지 방식을 \
    언어 : JAVA, Event-Driven 방식으로 프로그래밍하였습니다. \
    Event-Driven Simulation은 simulation을 event가 일어난 시점을 기준으로 simulation을 작성하기 때문에 아무 event도 일어나지 않는 시간이 많을 경우 효과적인 방법이다. ',
    labels : [
      'Data Communication',
      'Java',
      'Event-Driven Simulation'
    ],
    cover : require('./images/project/datacom/event.png'),
    github_url : 'https://github.com/Jooh34/datacom.git'
  },

  {
    title : '서울대학교 식단 어플 \'식샤\' 유지 및 업데이트',
    subtitle : 'Oct 2016 ~ June 2017',
    description : '어플 개발 동아리 ‘와플 스튜디오’ 에서 서울대학교 식단 어플 ‘식샤’팀에 들어가 안드로이드 유지 및 업데이트 역할을 맡게 되었습니다. \
    서버를 맡은 친구와 함께 서비스에 대해서 논의하던 중 식단에 평가 기능을 추가하자는 의견을 제시하여 식단 평가 기능을 추가하였고, \
    세부적인 디자인 및 기능을 수정하는 작업을 하였습니다. ',
    labels : [
      'Android',
      'Java',
      'Volley request'
    ],
    cover : require('./images/project/siksha/siksha_cover.png'),
    github_url : 'https://github.com/wafflestudio/siksha',
    demo_url : 'https://play.google.com/store/apps/details?id=com.wafflestudio.siksha'
  },

  {
    title : '안드로이드 앱 개발 인턴 Qoo10',
    subtitle : 'Dec 2015 ~ Feb 2016',
    description : 'Qoo10 안드로이드 앱 개발팀에서 인턴을 하며 처음으로 자바와 안드로이드 앱 개발을 배웠습니다. \
    JAVA를 배워 OOP 특성을 이용하여 전체적인 프로젝트 구조를 설계 해보았고 \
    제공받은 Library를 사용하여 핸드폰 -영수증 기계 연동 후 핸드폰 앱에서 영수증 정보를 보내 출력하는 작업,\
    신용카드를 사진으로부터 카드 정보를 추출하는 작업을 구현하였습니다.',
    labels : [
      'Android',
      'Java',
      'Qoo10',
    ],
    cover : require('./images/project/qoo10/qoo10-1.JPG'),
  }
];

export default posts
