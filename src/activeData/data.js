/** Add Brothers in order of class and roll # **/
const brothers = [
  //testing note
  //Kappa
  {
    name: 'Amanda Bang',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/114_abang.webp'),
    safari: require('./images/brothers/portraits/114_abang.jpg')
  },
  {
    name: 'Peter Neal Barrina',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/115_pbarrina.webp'),
    safari: require('./images/brothers/portraits/115_pbarrina.jpg')
  },
  {
    name: 'Claude-Henry Djongoue',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/116_cdjongoue.webp'),
    safari: require('./images/brothers/portraits/116_cdjongoue.jpg')
  },
  {
    name: 'Conway Hsieh',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/117_chsieh.webp'),
    safari: require('./images/brothers/portraits/117_chsieh.jpg')
  },
  {
    name: 'Jaehee Jung',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2018',
    image: require('./images/brothers/portraits/118_jjung.webp'),
    safari: require('./images/brothers/portraits/118_jjung.jpg')
  },
  {
    name: 'Kevin Ngo',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/119_kngo.webp'),
    safari: require('./images/brothers/portraits/119_kngo.jpg')
  },
  {
    name: 'Olivia Tran',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/120_otran.webp'),
    safari: require('./images/brothers/portraits/120_otran.jpg')
  },
  {
    name: 'Richard Yuan',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/121_ryuan.webp'),
    safari: require('./images/brothers/portraits/121_ryuan.jpg')
  },
  {
    name: 'Kyle Zhu',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/122_kzhu.webp'),
    safari: require('./images/brothers/portraits/122_kzhu.jpg')
  },
  //Lambda
  // {
  //   'name': 'Yusef Abouremeleh',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'bio',
  //   'majorName': 'Bioengineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/123_yabouremeleh.webp'),
  //   'safari': require('./images/brothers/portraits/123_yabouremeleh.jpg'),
  // },
  {
    name: 'David Deng',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/124_ddeng.webp'),
    safari: require('./images/brothers/portraits/124_ddeng.jpg')
  },
  // {
  //   'name': 'Alex Fields',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'other',
  //   'majorName': 'Physics',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/125_afields.webp'),
  //   'safari': require('./images/brothers/portraits/125_afields.jpg'),
  // },
  // {
  //   'name': 'Christian Gutierrez',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/126_cgutierrez.webp'),
  //   'safari': require('./images/brothers/portraits/126_cgutierrez.jpg'),
  // },
  {
    name: 'Blake Huynh',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/bhhuynh/',
    image: require('./images/brothers/portraits/127_bhuynh.webp'),
    safari: require('./images/brothers/portraits/127_bhuynh.jpg')
  },
  {
    name: 'Kaiser Kim',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2017',
    linkedin: 'www.linkedin.com/in/kaiserkim/',
    image: require('./images/brothers/portraits/128_kkim.webp'),
    safari: require('./images/brothers/portraits/128_kkim.jpg')
  },
  {
    name: 'Claire Li',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/claireli100/',
    image: require('./images/brothers/portraits/129_cli.webp'),
    safari: require('./images/brothers/portraits/129_cli.jpg')
  },
  {
    name: 'Wendy Lin',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/wendy-lin-80489bbb/',
    image: require('./images/brothers/portraits/130_wlin.webp'),
    safari: require('./images/brothers/portraits/130_wlin.jpg')
  },
  // {
  //   'name': 'Teddy Tea',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'aero',
  //   'majorName': 'Aerospace Engineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/131_ttea.webp'),
  //   'safari': require('./images/brothers/portraits/131_ttea.jpg'),
  // },
  // {
  //   'name': 'Natalie Tiwapong',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/132_ntiwapong.webp'),
  //   'safari': require('./images/brothers/portraits/132_ntiwapong.jpg'),
  // },
  {
    name: 'Alex Tunchez',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/alex-tunchez-0a2ba5127/',
    image: require('./images/brothers/portraits/133_atunchez.webp'),
    safari: require('./images/brothers/portraits/133_atunchez.jpg')
  },
  // {
  //   'name': 'Eunice Wong',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/134_ewong.webp'),
  //   'safari': require('./images/brothers/portraits/134_ewong.jpg'),
  // },
  // {
  //   'name': 'Jesse Zhou',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/135_jzhou.webp'),
  //   'safari': require('./images/brothers/portraits/135_jzhou.jpg'),
  // },
  //Mu
  //  {
  //   'name': 'Randel Emens',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'struct',
  //   'majorName': 'Structural Engineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/136_remens.webp'),
  //   'safari': require('./images/brothers/portraits/136_remens.jpg'),
  // },
  // {
  //   'name': 'Melissa Gomez',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'struct',
  //   'majorName': 'Structural Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/137_mgomez.webp'),
  //   'safari': require('./images/brothers/portraits/137_mgomez.jpg'),
  // },
  // {
  //   'name': 'Edward Gunawan',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/138_egunawan.webp'),
  //   'safari': require('./images/brothers/portraits/138_egunawan.jpg'),
  // },
  {
    name: 'Chelsea Jan',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/chelseajan/',
    image: require('./images/brothers/portraits/139_cjan.webp'),
    safari: require('./images/brothers/portraits/139_cjan.jpg')
  },
  {
    name: 'Ming Ming Liu',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/kellieliu/',
    image: require('./images/brothers/portraits/140_mliu.webp'),
    safari: require('./images/brothers/portraits/140_mliu.jpg')
  },
  {
    name: 'Crystal Munive',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/crystal-munive-b01204149/',
    image: require('./images/brothers/portraits/141_cmunive.webp'),
    safari: require('./images/brothers/portraits/141_cmunive.jpg')
  },
  {
    name: 'Vinesh Nathan',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/142_vnathan.webp'),
    safari: require('./images/brothers/portraits/142_vnathan.jpg')
  },
  {
    name: 'Daviid Perez',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/david-perez-aguilar-01400aba/',
    image: require('./images/brothers/portraits/143_dperez.webp'),
    safari: require('./images/brothers/portraits/143_dperez.jpg')
  },
  {
    name: 'Jessica Tran',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jessicantran/',
    image: require('./images/brothers/portraits/144_jtran.webp'),
    safari: require('./images/brothers/portraits/144_jtran.jpg')
  },
  {
    name: 'Terri Tsai',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/terri-tsai-79a857114/',
    image: require('./images/brothers/portraits/145_ttsai.webp'),
    safari: require('./images/brothers/portraits/145_ttsai.jpg')
  },
  {
    name: 'Michael Wang',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/michael-wang-99428147/',
    image: require('./images/brothers/portraits/146_mwang.webp'),
    safari: require('./images/brothers/portraits/146_mwang.jpg')
  },
  // {
  //   'name': 'Jacob Weber',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'bio',
  //   'majorName': 'Bioengineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/147_jweber.webp'),
  //   'safari': require('./images/brothers/portraits/147_jweber.jpg'),
  // },
  //Nu
  // {
  //   'name': 'Michael Chin',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/148_mchin.webp'),
  //   'safari': require('./images/brothers/portraits/148_mchin.jpg'),
  // },
  {
    name: 'Adrian Gutierrez',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/adrian-gutierrez-400a85bb/',
    image: require('./images/brothers/portraits/149_agutierrez.webp'),
    safari: require('./images/brothers/portraits/149_agutierrez.jpg')
  },
  // {
  //   'name': 'Kento Hayworth',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'env',
  //   'majorName': 'Environmental Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/150_khayworth.webp'),
  //   'safari': require('./images/brothers/portraits/150_khayworth.jpg'),
  // },
  {
    name: 'Judy Ho',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/judy-ho-425941ab/',
    image: require('./images/brothers/portraits/151_jho.webp'),
    safari: require('./images/brothers/portraits/151_jho.jpg')
  },
  {
    name: 'Chetu Khandavilli',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'nano',
    majorName: 'Nanoengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/jennie-nguyen-82a78294/',
    image: require('./images/brothers/portraits/152_ckhandavilli.webp'),
    safari: require('./images/brothers/portraits/152_ckhandavilli.jpg')
  },
  // {
  //   'name': 'Steven Lee',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'chem',
  //   'majorName': 'Chemical Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/153_slee.webp'),
  //   'safari': require('./images/brothers/portraits/153_slee.jpg'),
  // },
  {
    name: 'Brendon Lim',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/154_blim.webp'),
    safari: require('./images/brothers/portraits/154_blim.jpg')
  },
  {
    name: 'Audrey Olson',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/audreyolson/',
    image: require('./images/brothers/portraits/156_aolson.webp'),
    safari: require('./images/brothers/portraits/156_aolson.jpg')
  },
  {
    name: 'Brian Wuerstle',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/157_bwuerstle.webp'),
    safari: require('./images/brothers/portraits/157_bwuerstle.jpg')
  },
  {
    name: 'Daniel Zhang',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/dwzhang/',
    image: require('./images/brothers/portraits/158_dzhang.webp'),
    safari: require('./images/brothers/portraits/158_dzhang.jpg')
  },
  //Xi
  {
    name: 'Rishi Dhanaraj',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/rdhanaraj/',
    messenger: 'https://m.me/rishi.dhanaraj/',
    image: require('./images/brothers/portraits/159_rdhanaraj.webp'),
    safari: require('./images/brothers/portraits/159_rdhanaraj.jpg')
  },
  {
    name: 'Tyler Ly',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/tylerly/',
    image: require('./images/brothers/portraits/160_tly.webp'),
    safari: require('./images/brothers/portraits/160_tly.jpg')
  },
  {
    name: 'Brian Lyu',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/brian-lyu/',
    image: require('./images/brothers/portraits/161_blyu.webp'),
    safari: require('./images/brothers/portraits/161_blyu.jpg')
  },
  {
    name: 'Shawn Macasieb',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/shawn-macasieb-5990b996/',
    image: require('./images/brothers/portraits/162_smacasieb.webp'),
    safari: require('./images/brothers/portraits/162_smacasieb.jpg')
  },
  {
    name: 'Momina Mahmood',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/mominamahmood/',
    image: require('./images/brothers/portraits/163_mmahmood.webp'),
    safari: require('./images/brothers/portraits/163_mmahmood.jpg')
  },
  {
    name: 'Jennie Nguyen',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jennie-nguyen-82a78294/',
    image: require('./images/brothers/portraits/164_jnguyen.webp'),
    safari: require('./images/brothers/portraits/164_jnguyen.jpg')
  },
  {
    name: 'Esther Park',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/esther-park/',
    image: require('./images/brothers/portraits/165_epark.webp'),
    safari: require('./images/brothers/portraits/165_epark.jpg')
  },
  {
    name: 'Marilyn Sun',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/marilyn-sun-3677494a/',
    image: require('./images/brothers/portraits/166_msun.webp'),
    safari: require('./images/brothers/portraits/166_msun.jpg')
  },
  {
    name: 'Sherman Yip',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/sherman-yip-8a40b47a/',
    image: require('./images/brothers/portraits/167_syip.webp'),
    safari: require('./images/brothers/portraits/167_syip.jpg')
  },
  //Omicron
  {
    name: 'Brian Chan',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/brian-chan-1020/',
    image: require('./images/brothers/portraits/168_bchan.webp'),
    safari: require('./images/brothers/portraits/168_bchan.jpg')
  },
  {
    name: 'Justin Dulay',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/justin-dulay-9a7b74123/',
    image: require('./images/brothers/portraits/169_jdulay.webp'),
    safari: require('./images/brothers/portraits/169_jdulay.jpg')
  },
  {
    name: 'Michelle Lu Galgana',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/michelle-galgana/',
    image: require('./images/brothers/portraits/170_mgalgana.webp'),
    safari: require('./images/brothers/portraits/170_mgalgana.jpg')
  },
  {
    name: 'Leng Kouv',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'bio',
    majorName: 'BioSystems',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/sivleng-kouv-6510b8129/',
    messenger: 'https://m.me/leng.kouv/',
    image: require('./images/brothers/portraits/171_lkouv.webp'),
    safari: require('./images/brothers/portraits/171_lkouv.jpg')
  },
  {
    name: 'Wonjae Lee',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    image: require('./images/brothers/portraits/172_wlee.webp'),
    safari: require('./images/brothers/portraits/172_wlee.jpg')
  },
  {
    name: 'David Lin',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/david-lin-a7612073/',
    image: require('./images/brothers/portraits/173_dlin.webp'),
    safari: require('./images/brothers/portraits/173_dlin.jpg')
  },
  {
    name: 'Goutham Marimuthu',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/goutham-marimuthu-3393b3120/',
    messenger: 'https://m.me/goutham.marimuthu/',
    image: require('./images/brothers/portraits/174_gmarimuthu.webp'),
    safari: require('./images/brothers/portraits/174_gmarimuthu.jpg')
  },
  {
    name: 'Aamir Rasheed',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/aamir1rasheed/',
    image: require('./images/brothers/portraits/175_arasheed.webp'),
    safari: require('./images/brothers/portraits/175_arasheed.jpg')
  },
  {
    name: 'Mayuki Sasagawa',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/mayuki-a-sasagawa-a09623103/',
    messenger: 'https://m.me/myuki.sasagawa/',
    image: require('./images/brothers/portraits/176_msasagawa.webp'),
    safari: require('./images/brothers/portraits/176_msasagawa.jpg')
  },
  {
    name: 'Fumika Takazawa',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/ftakazawa/',
    image: require('./images/brothers/portraits/177_ftakazawa.webp'),
    safari: require('./images/brothers/portraits/177_ftakazawa.jpg')
  },
  {
    name: 'Manwinder Uppal',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/manwinder-uppal-311861109/',
    image: require('./images/brothers/portraits/178_muppal.webp'),
    safari: require('./images/brothers/portraits/178_muppal.jpg')
  },
  {
    name: 'Rachael Wong',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/rachael-sze-nga-wong-9b0100129/',
    messenger: 'https://m.me/rachaelw096/',
    image: require('./images/brothers/portraits/179_rwong.webp'),
    safari: require('./images/brothers/portraits/179_rwong.jpg')
  },
  //Pi
  {
    name: 'Ana Dasgupta',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/anahita-dasgupta-788a29133/',
    image: require('./images/brothers/portraits/180_adasgupta.webp'),
    safari: require('./images/brothers/portraits/180_adasgupta.jpg')
  },
  {
    name: 'Hillary Fan',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/hillary-fan-ba13b8104/',
    messenger: 'https://m.me/hilbofan/',
    image: require('./images/brothers/portraits/181_hfan.webp'),
    safari: require('./images/brothers/portraits/181_hfan.jpg')
  },
  {
    name: 'Allen Gao',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/agao323/',
    image: require('./images/brothers/portraits/182_agao.webp'),
    safari: require('./images/brothers/portraits/182_agao.jpg')
  },
  {
    name: 'Shangway Hsu',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/shangwayhsu/',
    image: require('./images/brothers/portraits/183_shsu.webp'),
    safari: require('./images/brothers/portraits/183_shsu.jpg')
  },
  {
    name: 'Kevin Huo',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/kevin--huo/',
    image: require('./images/brothers/portraits/184_khuo.webp'),
    safari: require('./images/brothers/portraits/184_khuo.jpg')
  },
  {
    name: 'Aston Khor',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/aston-khor-402b4110a/',
    image: require('./images/brothers/portraits/185_akhor.webp'),
    safari: require('./images/brothers/portraits/185_akhor.jpg')
  },
  {
    name: 'Jeffrey Lee',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/jeffreyzlee/',
    messenger: 'https://m.me/MagicRiceMan/',
    image: require('./images/brothers/portraits/186_jlee.webp'),
    safari: require('./images/brothers/portraits/186_jlee.jpg')
  },
  {
    name: 'Jason Li',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jason-li-7b946746/',
    image: require('./images/brothers/portraits/187_jli.webp'),
    safari: require('./images/brothers/portraits/187_jli.jpg')
  },
  {
    name: 'Adam Lin',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'me',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/adam-lin-539655139/',
    messenger: 'https://m.me/notadamlin/',
    image: require('./images/brothers/portraits/188_alin.webp'),
    safari: require('./images/brothers/portraits/188_alin.jpg')
  },
  {
    name: 'Geoffrey Ngo',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/189_gngo.webp'),
    safari: require('./images/brothers/portraits/189_gngo.jpg')
  },
  {
    name: 'Meghna Satish',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/190_msatish.webp'),
    safari: require('./images/brothers/portraits/190_msatish.jpg')
  },
  {
    name: 'Victoria Tam',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/victoria-tam-2b5052117/',
    messenger: 'https://m.me/victoria.tam.12/',
    image: require('./images/brothers/portraits/191_vtam.webp'),
    safari: require('./images/brothers/portraits/191_vtam.jpg')
  },
  {
    name: 'John Tayag',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'me',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/john-tayag-325a05133/',
    image: require('./images/brothers/portraits/192_jtayag.webp'),
    safari: require('./images/brothers/portraits/192_jtayag.jpg')
  },
  {
    name: 'Stephanie Zhu',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science - Bioinformatics',
    year: 'Class of 2020',
    messenger: 'https://m.me/stephanie.zhu.31/',
    image: require('./images/brothers/portraits/193_szhu.webp'),
    safari: require('./images/brothers/portraits/193_szhu.jpg')
  },
  //Rho
  {
    name: 'Sydney Huynh',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/sydahuynh/',
    image: require('./images/brothers/portraits/194_shuynh.webp'),
    safari: require('./images/brothers/portraits/194_shuynh.jpg')
  },
  {
    name: 'Kakeru Imanaka',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/195_kimanaka.webp'),
    safari: require('./images/brothers/portraits/195_kimanaka.jpg')
  },
  {
    name: 'Angie Joung',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/196_ajoung.webp'),
    safari: require('./images/brothers/portraits/196_ajoung.jpg')
  },
  {
    name: 'Stacy Kim',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Cognitive Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/stacypkim/',
    image: require('./images/brothers/portraits/197_skim.webp'),
    safari: require('./images/brothers/portraits/197_skim.jpg')
  },
  {
    name: 'Justin Lee',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/198_jlee.webp'),
    safari: require('./images/brothers/portraits/198_jlee.jpg')
  },
  {
    name: 'Dat Nguyen',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/199_dnguyen.webp'),
    safari: require('./images/brothers/portraits/199_dnguyen.jpg')
  },
  {
    name: 'Soyoun Park',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Cognitive Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/soyoun-park-517577152/',
    image: require('./images/brothers/portraits/200_spark.webp'),
    safari: require('./images/brothers/portraits/200_spark.jpg')
  },
  {
    name: 'Jerry Qing',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/jerry-qing/',
    image: require('./images/brothers/portraits/201_jqing.webp'),
    safari: require('./images/brothers/portraits/201_jqing.jpg')
  },
  {
    name: 'Huy Tran',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/huytran21/',
    image: require('./images/brothers/portraits/202_htran.webp'),
    safari: require('./images/brothers/portraits/202_htran.jpg')
  },
  {
    name: 'Erick Wilson',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    messenger: 'https://m.me/erick.wilson.526/',
    image: require('./images/brothers/portraits/203_ewilson.webp'),
    safari: require('./images/brothers/portraits/203_ewilson.jpg')
  },
  {
    name: 'Jun Yin',
    position: 'Alumni',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/MD152_jyin.webp'),
    safari: require('./images/brothers/portraits/MD152_jyin.jpg')
  },
  //Sigma
  {
    name: 'Joshua Chao',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/204_jchao.webp'),
    safari: require('./images/brothers/portraits/204_jchao.jpg')
  },
  {
    name: 'Christopher Diep',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/205_cdiep.webp'),
    safari: require('./images/brothers/portraits/205_cdiep.jpg')
  },
  {
    name: 'Eric Huynh',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/206_ehuynh.webp'),
    safari: require('./images/brothers/portraits/206_ehuynh.jpg')
  },
  {
    name: 'Simon Kim',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/207_skim.webp'),
    safari: require('./images/brothers/portraits/207_skim.jpg')
  },
  {
    name: 'Sho Kondo',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/sho-kondo-30b722163/',
    image: require('./images/brothers/portraits/208_skondo.webp'),
    safari: require('./images/brothers/portraits/208_skondo.jpg')
  },
  {
    name: 'Clark Phan',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/209_cphan.webp'),
    safari: require('./images/brothers/portraits/209_cphan.jpg')
  },
  {
    name: 'Justin Shieh',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/210_jshieh.webp'),
    safari: require('./images/brothers/portraits/210_jshieh.jpg')
  },
  {
    name: 'Erin Songwang',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/erin-songwang/',
    image: require('./images/brothers/portraits/211_esongwang.webp'),
    safari: require('./images/brothers/portraits/211_esongwang.jpg')
  },
  {
    name: 'Olivia Thai',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/212_othai.webp'),
    safari: require('./images/brothers/portraits/212_othai.jpg')
  },
  {
    name: 'Peggy Tran',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/peggy-tran-079020164/',
    image: require('./images/brothers/portraits/213_ptran.webp'),
    safari: require('./images/brothers/portraits/213_ptran.jpg')
  },
  {
    name: 'Scott Tran',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/214_stran.webp'),
    safari: require('./images/brothers/portraits/214_stran.jpg')
  },
  {
    name: 'William Tzou',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'nano',
    majorName: 'Nanoengineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/william-tzou-b0960b160/',
    image: require('./images/brothers/portraits/215_wtzou.webp'),
    safari: require('./images/brothers/portraits/215_wtzou.jpg')
  },
  {
    name: 'Jocelyn Wei',
    position: 'Alumni',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/216_jwei.webp'),
    safari: require('./images/brothers/portraits/216_jwei.jpg')
  },
  //Tau
  {
    name: 'Heather Gan',
    position: 'Professional Chair',
    cabinet: true,
    class: 'tau',
    className: 'Tau Class',
    major: 'mcs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/heather-gan/',
    image: require('./images/brothers/portraits/217_hgan.webp'),
    safari: require('./images/brothers/portraits/217_hgan.jpg')
  },
  {
    name: 'Kyle Gillaspy',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/kylegillaspy/',
    image: require('./images/brothers/portraits/218_kgillaspy.webp'),
    safari: require('./images/brothers/portraits/218_kgillaspy.jpg')
  },
  {
    name: 'Rick Huynh',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/219_rhuynh.webp'),
    safari: require('./images/brothers/portraits/219_rhuynh.jpg')
  },
  {
    name: 'Kamran Jahadi',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Cognitive Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/kamran-jahadi-2547b1172/',
    image: require('./images/brothers/portraits/220_kjahadi.webp'),
    safari: require('./images/brothers/portraits/220_kjahadi.jpg')
  },
  {
    name: 'Darren Jian',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/djianucsd/',
    image: require('./images/brothers/portraits/221_djian.webp'),
    safari: require('./images/brothers/portraits/221_djian.jpg')
  },
  {
    name: 'Everett Lin',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/everettlin/',
    image: require('./images/brothers/portraits/222_elin.webp'),
    safari: require('./images/brothers/portraits/222_elin.jpg')
  },
  {
    name: 'Neha Pusarla',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science - Bioinformatics',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/223_npusarla.webp'),
    safari: require('./images/brothers/portraits/223_npusarla.jpg')
  },
  {
    name: 'Raeek Rahman',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/224_rrahman.webp'),
    safari: require('./images/brothers/portraits/224_rrahman.jpg')
  },
  {
    name: 'Jonathan Song',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/jonathanjsong/',
    image: require('./images/brothers/portraits/225_jsong.webp'),
    safari: require('./images/brothers/portraits/225_jsong.jpg')
  },
  {
    name: 'Angelica Jane Tan',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/angelicajanetan/',
    image: require('./images/brothers/portraits/226_atan.webp'),
    safari: require('./images/brothers/portraits/226_atan.jpg')
  },
  {
    name: 'Britney Tran',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'mcs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/mnbtran/',
    image: require('./images/brothers/portraits/227_btran.webp'),
    safari: require('./images/brothers/portraits/227_btran.jpg')
  },
  {
    name: 'Will Xu',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/228_wxu.webp'),
    safari: require('./images/brothers/portraits/228_wxu.jpg')
  },
  {
    name: 'Esther Zhao',
    position: 'Alumni',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/229_ezhao.webp'),
    safari: require('./images/brothers/portraits/229_ezhao.jpg')
  },
  //Upsilon
  {
    name: 'Barry Cheung',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/230_bcheung.webp'),
    safari: require('./images/brothers/portraits/230_bcheung.jpg')
  },
  {
    name: 'BaoBao Laosirihongthong',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/pornruthai-laosirihongthong-8b99a7180/',
    image: require('./images/brothers/portraits/231_blaosirihongthong.webp'),
    safari: require('./images/brothers/portraits/231_blaosirihongthong.jpg')
  },
  {
    name: 'Austin Le',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'ds',
    majorName: 'Data Science',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/austinle/',
    image: require('./images/brothers/portraits/232_ale.webp'),
    safari: require('./images/brothers/portraits/232_ale.jpg')
  },
  {
    name: 'Amy Li',
    position: 'Active',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/amyyli302/',
    image: require('./images/brothers/portraits/233_ali.webp'),
    safari: require('./images/brothers/portraits/233_ali.jpg')
  },
  {
    name: 'Jack Lin',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'ds',
    majorName: 'Data Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/okminz/',
    image: require('./images/brothers/portraits/234_jlin.webp'),
    safari: require('./images/brothers/portraits/234_jlin.jpg')
  },
  {
    name: 'Jordan Luk',
    position: 'Active',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/jordanluk/',
    image: require('./images/brothers/portraits/235_jluk.webp'),
    safari: require('./images/brothers/portraits/235_jluk.jpg')
  },
  {
    name: 'Ryan Murase',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/236_rmurase.webp'),
    safari: require('./images/brothers/portraits/236_rmurase.jpg')
  },
  {
    name: 'Brent Neldner',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/237_bneldner.webp'),
    safari: require('./images/brothers/portraits/237_bneldner.jpg')
  },
  {
    name: 'Jade Tran',
    position: 'Alumni',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/238_jtran.webp'),
     safari: require('./images/brothers/portraits/238_jtran.jpg')
  },
  {
    name: 'Claire Zhang',
    position: 'Active',
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2022',
    image: require('./images/brothers/portraits/239_czhang.webp'),
    safari: require('./images/brothers/portraits/239_czhang.jpg')
  },
  {
    name: 'Lulu Zhu',
    position: 'Active',
    cabinet: true, 
    class: 'upsilon',
    className: 'Upsilon Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/lulu-zhu/',
    image: require('./images/brothers/portraits/240_lzhu.webp'),
    safari: require('./images/brothers/portraits/240_lzhu.jpg')
  },
  // Phi
  {
    name: 'Adrian Amora',
    position: 'Regent',
    eboard: true, 
    class: 'phi',
    className: 'Phi Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/adrianamora00/',
    messenger: 'https://m.me/adrian.amora.581', 
    image: require('./images/brothers/portraits/241_aamora.webp'),
    safari: require('./images/brothers/portraits/241_aamora.jpg')
  },
  {
    name: 'Vicki Chen',
    position: 'Active',
    class: 'phi',
    className: 'Phi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/vickic22/',
    messenger: 'https://m.me/vicki.chen.31', 
    image: require('./images/brothers/portraits/242_vchen.webp'),
    safari: require('./images/brothers/portraits/242_vchen.jpg')
  },
  {
    name: 'Jenny Hofilena',
    position: 'Active',
    class: 'phi',
    className: 'Phi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/jennifer-hofilena9/',
    messenger: 'https://m.me/jenhofilena9', 
    image: require('./images/brothers/portraits/243_jhofilena.webp'),
    safari: require('./images/brothers/portraits/243_jhofilena.jpg')
  },
  {
    name: 'Valerie Hon',
    position: 'Alumni',
    class: 'phi',
    className: 'Phi Class',
    major: 'mcs',
    majorName: 'Math – Computer Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/valeriehon/',
    messenger: 'https://m.me/valerie.hon63', 
    image: require('./images/brothers/portraits/244_vhon.webp'),
    safari: require('./images/brothers/portraits/244_vhon.jpg')
  },
  {
    name: 'Lyhour Lay',
    position: 'Alumni',
    class: 'phi',
    className: 'Phi Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/lyhour/',
    messenger: 'https://m.me/lyhour.lay1', 
    image: require('./images/brothers/portraits/245_llay.webp'),
    safari: require('./images/brothers/portraits/245_llay.jpg')
  },
  {
    name: 'Matias Lee',
    position: 'Alumni', 
    class: 'phi',
    className: 'Phi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/matias-lee-9845b1121/',
    image: require('./images/brothers/portraits/246_mlee.webp'),
    safari: require('./images/brothers/portraits/246_mlee.jpg')
  },
  {
    name: 'Carleen Li',
    position: 'Active',
    class: 'phi',
    className: 'Phi Class',
    major: 'bio',
    majorName: 'Bioinformatics',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/carleen-li/',
    messenger: 'https://m.me/carleen.y.li', 
    image: require('./images/brothers/portraits/247_cli.webp'),
    safari: require('./images/brothers/portraits/247_cli.jpg')
  },
  {
    name: 'Angela Liu',
    position: 'Alumni',
    class: 'phi',
    className: 'Phi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/aangelaliu/',
    messenger: 'https://m.me/aangela.liu', 
    image: require('./images/brothers/portraits/248_aliu.webp'),
    safari: require('./images/brothers/portraits/248_aliu.jpg')
  },
  {
    name: 'Jonathan Ly',
    position: 'Corresponding Secretary',
    eboard: true, 
    class: 'phi',
    className: 'Phi Class',
    major: 'ce',
    majorName: 'Cognitive Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/jondnly/',
    messenger: 'https://m.me/jonathanly00', 
    image: require('./images/brothers/portraits/249_jly.webp'),
    safari: require('./images/brothers/portraits/249_jly.jpg')
  },
  /*{
    name: 'Justin Phan',
    position: 'Active',
    eboard: true,     
    class: 'phi',
    className: 'Phi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/justinphan0221/',
    messenger: 'https://m.me/justinphan69420', 
    image: require('./images/brothers/portraits/250_jphan.webp'),
    safari: require('./images/brothers/portraits/250_jphan.jpg')
  },*/
  {
    name: 'Timothy Tran',
    position: 'Active',
    class: 'phi',
    className: 'Phi Class',
    major: 'ds',
    majorName: 'Data Science',
    year: 'Class of 2021',
    linkedin: 'https://www.linkedin.com/in/timtran11/',
    messenger: 'https://m.me/LolImAFreak', 
    image: require('./images/brothers/portraits/251_ttran.webp'),
    safari: require('./images/brothers/portraits/251_ttran.jpg')
  },
  // Chi
  {
    name: 'Dorothy Chou',
    position: 'Historian',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'mcs',
    majorName: 'Math – Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/dorothyychou/',
    messenger: 'https://www.facebook.com/dorothyychou', 
    image: require('./images/brothers/portraits/252_dchou.webp'),
    safari: require('./images/brothers/portraits/252_dchou.jpg')
  },
  {
    name: 'Tung Doan',
    position: 'Scribe',    
    eboard: true,  
    class: 'chi',
    className: 'Chi Class',
    major: 'mcs',
    majorName: 'Math – Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/tung-doan-860540195/',
    messenger: 'https://www.facebook.com/profile.php?id=100010223056553', 
    image: require('./images/brothers/portraits/253_tdoan.webp'),
    safari: require('./images/brothers/portraits/253_tdoan.jpg')
  },
  {
    name: 'Vivi Doan',
    position: 'Active',
    class: 'chi',
    className: 'Chi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/vivi-doan-7a2095200/',
    messenger: 'https://www.facebook.com/profile.php?id=100010256468744', 
    image: require('./images/brothers/portraits/254_vdoan.webp'),
    safari: require('./images/brothers/portraits/254_vdoan.jpg')
  },
  {
    name: 'Philip Emmanuele',
    position: 'Improvements Chair',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/philip-emmanuele/',
    messenger: '', 
    image: require('./images/brothers/portraits/255_pemmanuele.webp'),
    safari: require('./images/brothers/portraits/255_pemmanuele.jpg')
  },
  {
    name: 'Steven Gov',
    position: 'Philanthropy Chair',
    cabinet: true,
    class: 'chi',
    className: 'Chi Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/stevengov/',
    messenger: 'https://www.facebook.com/StevenLovesPie', 
    image: require('./images/brothers/portraits/256_sgov.webp'),
    safari: require('./images/brothers/portraits/256_sgov.jpg')
  },
  {
    name: 'Tiffany Joa',
    position: 'Active',
    class: 'chi',
    className: 'Chi Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/tiffany-joa-a6a2bb108/',
    messenger: 'https://www.facebook.com/tiffany.joa.3', 
    image: require('./images/brothers/portraits/257_tjoa.webp'),
    safari: require('./images/brothers/portraits/257_tjoa.jpg')
  },
  {
    name: 'Angelina Law',
    position: 'Active',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/angelina-law01/',
    messenger: 'https://www.facebook.com/anglawx', 
    image: require('./images/brothers/portraits/258_alaw.webp'),
    safari: require('./images/brothers/portraits/258_alaw.jpg')
  },
  {
    name: 'Laurent Lee',
    position: 'Brotherhood Chair',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/laurent-lee/',
    messenger: 'https://www.facebook.com/profile.php?id=100008453705747', 
    image: require('./images/brothers/portraits/259_llee.webp'),
    safari: require('./images/brothers/portraits/259_llee.jpg')
  },
  {
    name: 'Jason Lee',
    position: 'Active',
    class: 'chi',
    className: 'Chi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/2jasonlee2/',
    messenger: 'https://www.facebook.com/2JasonLee2', 
    image: require('./images/brothers/portraits/260_jlee.webp'),
    safari: require('./images/brothers/portraits/260_jlee.jpg')
  },
  {
    name: 'Roy Li',
    position: 'Active',
    class: 'chi',
    className: 'Chi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/royli/',
    messenger: 'https://www.facebook.com/roy.li.5205', 
    image: require('./images/brothers/portraits/261_rli.webp'),
    safari: require('./images/brothers/portraits/261_rli.jpg')
  },
  {
    name: 'Henry Liu',
    position: 'Active',
    class: 'chi',
    className: 'Chi Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/henrybliu/',
    messenger: 'https://www.facebook.com/profile.php?id=100051191630744', 
    image: require('./images/brothers/portraits/262_hliu.webp'),
    safari: require('./images/brothers/portraits/262_hliu.jpg')
  },
  {
    name: 'Megan Ma',
    position: 'Rush Chair \n External Events Chair',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/megan-ma-b42433168/',
    messenger: 'https://www.facebook.com/profile.php?id=100017050904768', 
    image: require('./images/brothers/portraits/263_mma.webp'),
    safari: require('./images/brothers/portraits/263_mma.jpg')
  },
  {
    name: 'Marie Shimizu',
    position: 'Fundraising Chair',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/marieshimizu/',
    messenger: 'https://www.facebook.com/marie.shim.942', 
    image: require('./images/brothers/portraits/264_mshimizu.webp'),
    safari: require('./images/brothers/portraits/264_mshimizu.jpg')
  },
  {
    name: 'Arnav Taneja',
    position: 'Treasurer',    
    eboard: true,  
    class: 'chi',
    className: 'Chi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/arnavtaneja/',
    messenger: 'https://www.facebook.com/arnav.taneja.1', 
    image: require('./images/brothers/portraits/265_ataneja.webp'),
    safari: require('./images/brothers/portraits/265_ataneja.jpg')
  },
  {
    name: 'Julian Yan',
    position: 'Webmaster',
    cabinet: true, 
    class: 'chi',
    className: 'Chi Class',
    major: 'mcs',
    majorName: 'Math – Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/julianyan/',
    messenger: 'https://www.facebook.com/julian.yan1117', 
    image: require('./images/brothers/portraits/266_jyan.webp'),
    safari: require('./images/brothers/portraits/266_jyan.jpg')
  },
  {
    name: 'Dhanvi Desu',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/dhanvidesu/',
    messenger: 'https://www.facebook.com/dhanvidesu1', 
    image: require('./images/brothers/portraits/267_ddesu.webp'),
    safari: require('./images/brothers/portraits/267_ddesu.jpg')
  },
  {
    name: 'Tharun Elenchezhean',
    position: 'Rush Chair',
    class: 'psi',
    className: 'Psi Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/telenche/',
    messenger: 'https://www.facebook.com/tharun.elenchezhean.5', 
    image: require('./images/brothers/portraits/268_telenchezhean.webp'),
    safari: require('./images/brothers/portraits/268_telenchezhean.jpg')
  },
  {
    name: 'Si Thu Kuang Set',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/stks/',
    messenger: 'https://www.facebook.com/c2222222', 
    image: require('./images/brothers/portraits/269_skuangset.webp'),
    safari: require('./images/brothers/portraits/269_skuangset.jpg')
  },
  {
    name: 'Vincent Liang',
    position: 'Academics Chair',
    class: 'psi',
    className: 'Psi Class',
    major: 'mcs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/vincent-liang-2001/',
    messenger: 'https://www.facebook.com/vincent.liang.712', 
    image: require('./images/brothers/portraits/270_vliang.webp'),
    safari: require('./images/brothers/portraits/270_vliang.jpg')
  },
  {
    name: 'Rohan Sreedhar',
    position: 'Special Events Chair',
    class: 'psi',
    className: 'Psi Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/sreedhar-rohan/',
    messenger: 'https://www.facebook.com/sreedhar.rohan', 
    image: require('./images/brothers/portraits/271_rsreedhar.webp'),
    safari: require('./images/brothers/portraits/271_rsreedhar.jpg')
  },
  {
    name: 'Andrew Tan',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'mcs',
    majorName: 'Math – Computer Science',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/andrewt319/',
    messenger: 'https://www.facebook.com/andrew319t', 
    image: require('./images/brothers/portraits/272_atan.webp'),
    safari: require('./images/brothers/portraits/272_atan.jpg')
  },
  {
    name: 'Gwendolyn Wong',
    position: 'Special Events Chair',
    class: 'psi',
    className: 'Psi Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2022',
    linkedin: 'https://www.linkedin.com/in/gwendolyn-wong-00/',
    messenger: 'https://www.facebook.com/gwenwong6', 
    image: require('./images/brothers/portraits/273_gwong.webp'),
    safari: require('./images/brothers/portraits/273_gwong.jpg')
  },
  {
    name: 'Allen Yesin',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/allenyesin/',
    messenger: 'https://www.facebook.com/allen.yesin.5', 
    image: require('./images/brothers/portraits/274_ayesin.webp'),
    safari: require('./images/brothers/portraits/274_ayesin.jpg')
  },
  {
    name: 'Elizabeth Young',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/elisabeth-m-young/',
    messenger: 'https://www.facebook.com/elisabeth.young.315', 
    image: require('./images/brothers/portraits/275_eyoung.webp'),
    safari: require('./images/brothers/portraits/275_eyoung.jpg')
  },
  {
    name: 'Alexis Yu',
    position: 'Active',
    class: 'psi',
    className: 'Psi Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/alexis-h-yu/',
    messenger: 'https://www.facebook.com/profile.php?id=100050071440469', 
    image: require('./images/brothers/portraits/276_ayu.webp'),
    safari: require('./images/brothers/portraits/276_ayu.jpg')
  },
  {
    name: 'Isabella Duldalao',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'be',
    majorName: 'Bioengineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/iduldulao/',
    messenger: 'https://www.facebook.com/isabella.duldulao', 
    image: require('./images/brothers/portraits/276_iduldalao.webp'),
    safari: require('./images/brothers/portraits/276_iduldalao.jpg')
  },
  {
    name: 'Daphne Fabella',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'ds',
    majorName: 'Data Science',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/daphne-fabella/',
    messenger: 'https://www.facebook.com/daphne.fabella', 
    image: require('./images/brothers/portraits/277_dfabella.webp'),
    safari: require('./images/brothers/portraits/277_dfabella.jpg')
  },
  {
    name: 'Karl Hernandez',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/karlp-hernandez/',
    messenger: 'https://www.facebook.com/karlph.z', 
    image: require('./images/brothers/portraits/278_khernandez.webp'),
    safari: require('./images/brothers/portraits/278_khernandez.jpg')
  },
  {
    name: 'Leo Hu',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'mcs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/leohu7766/',
    messenger: 'https://www.facebook.com/leo.hu.12', 
    image: require('./images/brothers/portraits/279_lhu.webp'),
    safari: require('./images/brothers/portraits/279_lhu.jpg')
  },
  {
    name: 'Anna Liu',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'ds',
    majorName: 'Data Science',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/annaliu2/',
    messenger: 'https://www.facebook.com/anna.liu.94009841', 
    image: require('./images/brothers/portraits/280_aliu.webp'),
    safari: require('./images/brothers/portraits/280_aliu.jpg')
  },
  {
    name: 'Alan Lunardhi',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'be',
    majorName: 'Biongineering',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/alan-lunardhi/',
    messenger: 'https://www.facebook.com/profile.php?id=100009967653691', 
    image: require('./images/brothers/portraits/281_alunardhi.webp'),
    safari: require('./images/brothers/portraits/281_alunardhi.jpg')
  },
  {
    name: 'Amogh Manjunath',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2023',
    linkedin: 'https://www.linkedin.com/in/amoghmanjunath/',
    messenger: 'https://www.facebook.com/amoghm01', 
    image: require('./images/brothers/portraits/282_amanjunath.webp'),
    safari: require('./images/brothers/portraits/282_amanjunath.jpg')
  },
  {
    name: 'Natalie Nguyen',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2025',
    linkedin: 'https://www.linkedin.com/in/nataliethaonguyen/',
    messenger: 'https://www.facebook.com/natalie.nguyen.1272', 
    image: require('./images/brothers/portraits/283_nnguyen.webp'),
    safari: require('./images/brothers/portraits/283_nnguyen.jpg')
  },
  {
    name: 'Jordan Peranginangin',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2025',
    linkedin: 'https://www.linkedin.com/in/jordan-peranginangin-55b225194/',
    messenger: 'https://www.facebook.com/jordan.peranginangin.1', 
    image: require('./images/brothers/portraits/284_jperanginangin.webp'),
    safari: require('./images/brothers/portraits/284_jperanginangin.jpg')
  },
  {
    name: 'Anne Pham',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'mcs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2025',
    linkedin: 'https://www.linkedin.com/in/anne-p/',
    messenger: 'https://www.facebook.com/anne.pham.798', 
    image: require('./images/brothers/portraits/285_apham.webp'),
    safari: require('./images/brothers/portraits/285_apham.jpg')
  },
  {
    name: 'Emma Wilby',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/emmawilby/',
    messenger: 'https://www.facebook.com/profile.php?id=100009245029043', 
    image: require('./images/brothers/portraits/285_ewilby.webp'),
    safari: require('./images/brothers/portraits/285_ewilby.jpg')
  },
  {
    name: 'Ryan Wong',
    position: 'Active',
    class: 'alphabeta',
    className: 'Alpha Beta Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2024',
    linkedin: 'https://www.linkedin.com/in/ryanwong20/',
    messenger: 'https://www.facebook.com/ryan.wong.12764', 
    image: require('./images/brothers/portraits/286_rwong.webp'),
    safari: require('./images/brothers/portraits/286_rwong.jpg')
  }
  
];

/* Deprecated */
const alumni = [
  {
    name: 'Aeri Iamsirithaworn',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    major: 'cs',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/aeri_iamsirithaworn.webp'),
    safari: require('./images/brothers/alumni/aeri_iamsirithaworn.jpg')
  },
  {
    name: 'Andrew Sie',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/andrew_sie.webp'),
    safari: require('./images/brothers/alumni/andrew_sie.jpg')
  },
  {
    name: 'Azhar Deen',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/azhar_deen.webp'),
    safari: require('./images/brothers/alumni/azhar_deen.jpg')
  }
  // {
  //   'name': 'Best Tech',
  //   'professional_webp': require('./images/brothers/alumni/bchan.webp'),
  //   'position': 'Alumni',
  //   'class': 'charter',
  //   'className': 'Charter Class',
  //   'majorName': 'Computer Science'
  // },
  // {
  //   'name': 'Michael Luo',
  //   'professional_webp': require('./images/brothers/alumni/michael_luo.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Patrick Chen',
  //   'professional_webp': require('./images/brothers/alumni/patrick_chen.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Sharon Zheng',
  //   'professional_webp': require('./images/brothers/alumni/sharon_zheng.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Thomas Kuo',
  //   'professional_webp': require('./images/brothers/alumni/thomas_kuo.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Woongkee Min',
  //   'professional_webp': require('./images/brothers/alumni/woongkee_min.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Yutang Lin',
  //   'professional_webp': require('./images/brothers/alumni/yutang_lin.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
];

const options = {
  general: [
    { value: 'active', label: 'Active' },
    { value: 'alumni', label: 'Alumni' },
    // { value: 'all', label: 'All' },
    { value: 'class', label: 'Class' },
    { value: 'major', label: 'Major' }
  ],
  active: [{ value: 'eboard', label: 'Executive Board' }, { value: 'cabinet', label: 'Cabinet' }],
  major: [
    {
      value: 'aero',
      label: 'Aerospace Engineering',
      image: require('./images/majors/logos/aero.png')
    },
    {
      value: 'bio',
      label: 'Bioengineering',
      image: require('./images/majors/logos/bio.png')
    },
    {
      value: 'chem',
      label: 'Chemical Engineering',
      image: require('./images/majors/logos/chem.png')
    },
    {
      value: 'ce',
      label: 'Computer Engineering',
      image: require('./images/majors/logos/ce.png')
    },
    {
      value: 'cs',
      label: 'Computer Science',
      image: require('./images/majors/logos/ce.png')
    },
    {
      value: 'ds',
      label: 'Data Science',
      image: require('./images/majors/logos/ds.png')
    },
    {
      value: 'ee',
      label: 'Electrical Engineering',
      image: require('./images/majors/logos/ee.png')
    },
    {
      value: 'env',
      label: 'Environmental Engineering',
      image: require('./images/majors/logos/env.png')
    },
    {
      value: 'mcs',
      label: 'Math - Computer Science',
      image: require('./images/majors/logos/ce.png')
    },
    {
      value: 'mech',
      label: 'Mechanical Engineering',
      image: require('./images/majors/logos/mech.png')
    },
    {
      value: 'nano',
      label: 'Nanoengineering',
      image: require('./images/majors/logos/nano.png')
    },
    {
      value: 'struct',
      label: 'Structural Engineering',
      image: require('./images/majors/logos/struct.png')
    },
    {
      value: 'other',
      label: 'Other',
      image: require('./images/majors/logos/mech.png')
    }
  ],
  class: [
    {
      value: 'charter',
      label: 'Charter',
      image: require('./images/classes/letters/charter.jpg')
    },
    {
      value: 'alpha',
      label: 'Alpha',
      image: require('./images/classes/letters/alpha.png')
    },
    {
      value: 'beta',
      label: 'Beta',
      image: require('./images/classes/letters/beta.png')
    },
    {
      value: 'gamma',
      label: 'Gamma',
      image: require('./images/classes/letters/gamma.png')
    },
    {
      value: 'delta',
      label: 'Delta',
      image: require('./images/classes/letters/delta.png')
    },
    {
      value: 'epsilon',
      label: 'Epsilon',
      image: require('./images/classes/letters/epsilon.png')
    },
    {
      value: 'zeta',
      label: 'Zeta',
      image: require('./images/classes/letters/zeta.png')
    },
    {
      value: 'eta',
      label: 'Eta',
      image: require('./images/classes/letters/eta.png')
    },
    {
      value: 'theta',
      label: 'Theta',
      image: require('./images/classes/letters/theta.png')
    },
    {
      value: 'iota',
      label: 'Iota',
      image: require('./images/classes/letters/iota.png')
    },
    {
      value: 'kappa',
      label: 'Kappa',
      image: require('./images/classes/letters/kappa.png')
    },
    {
      value: 'lambda',
      label: 'Lambda',
      image: require('./images/classes/letters/lambda.png')
    },
    {
      value: 'mu',
      label: 'Mu',
      image: require('./images/classes/letters/mu.png')
    },
    {
      value: 'nu',
      label: 'Nu',
      image: require('./images/classes/letters/nu.png')
    },
    {
      value: 'xi',
      label: 'Xi',
      image: require('./images/classes/letters/xi.png')
    },
    {
      value: 'omicron',
      label: 'Omicron',
      image: require('./images/classes/letters/omicron.png')
    },
    {
      value: 'pi',
      label: 'Pi',
      image: require('./images/classes/letters/pi.png')
    },
    {
      value: 'rho',
      label: 'Rho',
      image: require('./images/classes/letters/rho.png')
    },
    {
      value: 'sigma',
      label: 'Sigma',
      image: require('./images/classes/letters/sigma.png')
    },
    {
      value: 'tau',
      label: 'Tau',
      image: require('./images/classes/letters/tau.png')
    },
    {
      value: 'upsilon',
      label: 'Upsilon',
      image: require('./images/classes/letters/upsilon.png')
    },
    {
      value: 'phi',
      label: 'Phi',
      image: require('./images/classes/letters/phi.png')
    },
    {
      value: 'chi',
      label: 'Chi',
      image: require('./images/classes/letters/chi.png')
    },
    {
      value: 'psi',
      label: 'Psi',
      image: require('./images/classes/letters/psi.png')
    },
    {
      value: 'alphabeta',
      label: 'Alpha Beta',
      image: require('./images/classes/letters/alphabeta.png')
    }
  ]
};

const images = [
  {
    name: 'active',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'all',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'major',
    webp: require('./images/general/major.webp'),
    jpg: require('./images/general/major.jpg')
  },
  {
    name: 'class',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'alumni',
    webp: require('./images/general/alumni.webp'),
    jpg: require('./images/general/alumni.jpg')
  },
  {
    name: 'eboard',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'cabinet',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  /*{
    name: 'cs',
    webp: require('./images/majors/images/cs.webp'),
    jpg: require('./images/majors/images/cs.jpg')
  },
  {
    name: 'aero',
    webp: require('./images/majors/images/aero.webp'),
    jpg: require('./images/majors/images/aero.jpg')
  },
  {
    name: 'mech',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'env',
    webp: require('./images/majors/images/env.webp'),
    jpg: require('./images/majors/images/env.jpg')
  },
  {
    name: 'ce',
    webp: require('./images/majors/images/cs.webp'),
    jpg: require('./images/majors/images/cs.jpg')
  },
  {
    name: 'bio',
    webp: require('./images/majors/images/bio.webp'),
    jpg: require('./images/majors/images/bio.jpg')
  },
  {
    name: 'chem',
    webp: require('./images/majors/images/chem.webp'),
    jpg: require('./images/majors/images/chem.jpg')
  },
  {
    name: 'ee',
    webp: require('./images/majors/images/ee.webp'),
    jpg: require('./images/majors/images/ee.jpg')
  },
  {
    name: 'struct',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'other',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'nano',
    webp: require('./images/majors/images/chem.webp'),
    jpg: require('./images/majors/images/chem.jpg')
  },
  {
    name: 'charter',
    webp: require('./images/classes/images/charter.webp'),
    jpg: require('./images/classes/images/charter.jpg')
  },
  {
    name: 'alpha',
    webp: require('./images/classes/images/alpha.webp'),
    jpg: require('./images/classes/images/alpha.jpg')
  },
  {
    name: 'beta',
    webp: require('./images/classes/images/charter.webp'),
    jpg: require('./images/classes/images/charter.jpg')
  },
  {
    name: 'gamma',
    webp: require('./images/classes/images/gamma.webp'),
    jpg: require('./images/classes/images/gamma.jpg')
  },
  {
    name: 'delta',
    webp: require('./images/classes/images/delta.webp'),
    jpg: require('./images/classes/images/delta.jpg')
  },
  {
    name: 'epsilon',
    webp: require('./images/classes/images/epsilon.webp'),
    jpg: require('./images/classes/images/epsilon.jpg')
  },
  {
    name: 'zeta',
    webp: require('./images/classes/images/zeta.webp'),
    jpg: require('./images/classes/images/zeta.jpg')
  },
  {
    name: 'eta',
    webp: require('./images/classes/images/eta.webp'),
    jpg: require('./images/classes/images/eta.jpg')
  },
  {
    name: 'theta',
    webp: require('./images/classes/images/theta.webp'),
    jpg: require('./images/classes/images/theta.jpg')
  },
  {
    name: 'iota',
    webp: require('./images/classes/images/iota.webp'),
    jpg: require('./images/classes/images/iota.jpg')
  },
  {
    name: 'kappa',
    webp: require('./images/classes/images/kappa.webp'),
    jpg: require('./images/classes/images/kappa.jpg')
  },
  {
    name: 'lambda',
    webp: require('./images/classes/images/lambda.webp'),
    jpg: require('./images/classes/images/lambda.jpg')
  },
  {
    name: 'mu',
    webp: require('./images/classes/images/mu.webp'),
    jpg: require('./images/classes/images/mu.jpg')
  },
  {
    name: 'nu',
    webp: require('./images/classes/images/nu.webp'),
    jpg: require('./images/classes/images/nu.jpg')
  },
  {
    name: 'xi',
    webp: require('./images/classes/images/xi.webp'),
    jpg: require('./images/classes/images/xi.jpg')
  },
  {
    name: 'omicron',
    webp: require('./images/classes/images/omicron.webp'),
    jpg: require('./images/classes/images/omicron.jpg')
  },
  {
    name: 'pi',
    webp: require('./images/classes/images/pi.webp'),
    jpg: require('./images/classes/images/pi.jpg')
  },
  {
    name: 'rho',
    webp: require('./images/classes/images/rho.webp'),
    jpg: require('./images/classes/images/rho.jpg')
  }*/
];

export { brothers, alumni, options, images };
