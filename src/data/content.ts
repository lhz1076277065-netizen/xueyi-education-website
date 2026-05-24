import {
  GraduationCap,
  BookOpen,
  ScrollText,
  PenTool,
  Languages,
  Plane,
  type LucideIcon,
} from 'lucide-react';

// ── Navigation ──
export const navLinks = [
  { label: '首页', href: '#home' },
  { label: '博士奖学金', href: '#services' },
  { label: '本硕申请', href: '#services' },
  { label: '期刊发表', href: '#services' },
  { label: '学业辅导', href: '#services' },
  { label: '成功案例', href: '#cases' },
  { label: '关于我们', href: '#about' },
];

// ── Hero ──
export const heroContent = {
  badge: '全球带奖博士申请专家',
  headline: '让世界名校为你转身',
  subheadline: '专注全球顶尖院校带奖学金博士申请，覆盖126+研究领域，95%学员成功获得全额或部分奖学金，累计斩获奖学金超3.6亿元',
  primaryCta: '免费评估',
  secondaryCta: '了解服务',
  trustStats: [
    { value: '2000+', label: '成功案例' },
    { value: '95%', label: '奖学金获得率' },
    { value: '500+', label: '全球导师' },
    { value: '126+', label: '覆盖学科' },
  ],
  placeholderImage: '【图片：横幅背景图】现代简约风格的留学场景，包含毕业帽、地球仪、世界名校建筑剪影（哈佛、牛津、剑桥等），深蓝色渐变叠加层，商务精英团队正在为学生提供咨询服务',
};

// ── Services ──
export interface Service {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  placeholderImage: string;
}

export const services: Service[] = [
  {
    icon: GraduationCap,
    title: '全球带奖博士申请',
    tagline: '旗舰服务 · 奖学金为王',
    description:
      '我们拥有超过500位来自全球顶尖院校的博士导师，覆盖126+研究领域，从选校定位、研究计划撰写、导师套磁到面试辅导，全程一对一指导，确保每位学员以最优条件获得博士录取，并全力争取全额或高额奖学金。',
    highlights: [
      '全额/半额奖学金精准匹配',
      '500+博士导师1对1辅导',
      '研究计划(RP)专业打磨',
      '模拟面试+答辩演练',
      '导师套磁策略定制',
    ],
    placeholderImage:
      '【图片：服务展示图】博士毕业典礼场景，学生身穿博士服手持学位证书，背景为世界名校图书馆或标志性建筑，金色光晕效果，体现学术成就与荣耀',
  },
  {
    icon: BookOpen,
    title: '硕士留学申请',
    tagline: '精准定位 · 名校直通',
    description:
      '覆盖英美加澳新港等主流留学目的地，提供选校策略、文书创作、背景提升、面试辅导等全流程服务。我们的导师均来自世界Top50院校，深谙各校录取偏好，助你精准命中梦校。',
    highlights: [
      '全球Top50院校导师指导',
      '个性化文书创作润色',
      '背景提升项目匹配',
      '多国联申策略规划',
    ],
    placeholderImage:
      '【图片：服务展示图】研究生在现代化图书馆或实验室中学习研究的场景，背景为海外大学校园，体现国际化高等教育氛围',
  },
  {
    icon: Plane,
    title: '本科留学申请',
    tagline: '从规划到录取 · 全程陪伴',
    description:
      '为高中生及本科转学生提供全方位的留学规划与申请服务，包括学术背景评估、课外活动规划、标准化考试指导、文书创作及面试辅导，帮助学生进入理想的海外本科院校。',
    highlights: [
      '早规划体系 · 提前2-3年布局',
      '课外活动与竞赛规划',
      'SAT/ACT/AP/IB 全科辅导',
      '藤校及Top30冲刺方案',
    ],
    placeholderImage:
      '【图片：服务展示图】朝气蓬勃的本科学生在海外大学校园草坪上讨论学习，背景为标志性大学建筑和绿树成荫的校园步道',
  },
  {
    icon: ScrollText,
    title: '期刊论文发表',
    tagline: '学术成果 · 权威发表',
    description:
      '由各学科资深研究员和期刊审稿人组成的专家团队，提供从选题策划、研究设计、论文撰写、投稿策略到修改答复的全流程辅导，帮助学员在SCI/SSCI/EI/A&HCI等权威期刊成功发表论文。',
    highlights: [
      'SCI/SSCI/EI 期刊精准匹配',
      '资深审稿人专业润色',
      '研究设计与数据分析指导',
      '投稿策略与修改答复支持',
    ],
    placeholderImage:
      '【图片：服务展示图】学术期刊封面与论文排版页面特写，旁边放置放大镜和红笔批注，体现严谨的学术发表流程',
  },
  {
    icon: PenTool,
    title: '学业辅导提升',
    tagline: 'GPA护航 · 学术赋能',
    description:
      '为海外在读学生提供课程辅导、学术写作指导、考试备考、毕业论文辅导等全方位学业支持。覆盖商科、工科、理科、文科、医学等各学科，帮助学生适应海外学术环境，提升GPA。',
    highlights: [
      '全学科课程1对1辅导',
      '学术写作与研究方法指导',
      '毕业论文全程陪伴',
      '考前冲刺与知识点梳理',
    ],
    placeholderImage:
      '【图片：服务展示图】一对一辅导场景，导师正在为学生讲解知识点，白板上写着公式和思维导图，温馨的学术辅导氛围',
  },
  {
    icon: Languages,
    title: '语言考试培训',
    tagline: '高分突破 · 语言无忧',
    description:
      '提供IELTS、TOEFL、GRE、GMAT等标准化考试的一对一定制化培训服务。资深语言培训师均为高分获得者，结合学员现有水平和目标分数，制定科学高效的提分方案。',
    highlights: [
      'IELTS / TOEFL / GRE / GMAT',
      '一对一VIP定制课程',
      '真题精讲与技巧训练',
      '口语写作专项突破',
    ],
    placeholderImage:
      '【图片：服务展示图】语言考试备考场景，桌上摆放雅思/托福教材和笔记本，学员正在专注学习，窗外透进自然光营造舒适的学习氛围',
  },
];

// ── Why Choose Us ──
export const whyChooseUs = {
  headline: '为什么选择雪姨留学？',
  subheadline: '我们用结果说话，用数据证明实力',
  stats: [
    { value: '2000+', label: '累计成功案例' },
    { value: '95%', label: '奖学金获得率' },
    { value: '500+', label: '全球名校导师' },
    { value: '126+', label: '覆盖研究领域' },
    { value: '3.6亿', label: '累计获奖学金(元)' },
    { value: '98%', label: '客户满意度' },
  ],
  differentiators: [
    {
      title: '全博导级师资团队',
      description:
        '500+导师均来自哈佛、MIT、牛津、剑桥等世界Top50院校的博士/博士后，深谙各国名校申请规则与奖学金体系。',
      icon: 'GraduationCap',
    },
    {
      title: '奖学金优先策略',
      description:
        '我们以奖学金申请为核心竞争力，从选校开始就精准匹配奖学金额度高、获奖概率大的项目和导师，让留学不再昂贵。',
      icon: 'BadgeDollarSign',
    },
    {
      title: '全流程透明管理',
      description:
        '专属服务群实时同步申请进度，文书材料学员可随时查看修改，申请账号学员自主掌控，杜绝信息黑箱。',
      icon: 'Eye',
    },
    {
      title: '一站式留学服务',
      description:
        '从语言培训、背景提升、选校定位、文书创作、申请提交到签证办理、行前指导，留学全链条服务让你省心省力。',
      icon: 'Package',
    },
  ],
  placeholderImage: '【图片：关于我们展示图】雪姨留学团队合影或办公环境，展示专业顾问团队和现代化办公空间，传递专业可信赖的品牌形象',
};

// ── Process ──
export const processContent = {
  headline: '申请流程',
  subheadline: '五步走，让你的留学之路清晰可控',
  steps: [
    {
      step: '01',
      title: '免费咨询评估',
      description:
        '资深留学顾问1对1沟通，全面评估你的学术背景、研究兴趣和职业规划，明确申请方向和目标院校层级。',
      icon: 'MessageCircle',
    },
    {
      step: '02',
      title: '定制申请方案',
      description:
        '根据评估结果，由学科导师和申请顾问联合制定个性化申请策略，包括选校清单、时间规划、背景提升方案。',
      icon: 'FileText',
    },
    {
      step: '03',
      title: '导师1对1辅导',
      description:
        '匹配同领域博士导师，进行学术指导、研究计划撰写、论文发表、套磁策略制定等深度辅导，全面提升学术竞争力。',
      icon: 'Users',
    },
    {
      step: '04',
      title: '材料准备与提交',
      description:
        '专业文书团队负责CV、PS、推荐信等材料的创作与润色，确保每一份申请材料都能最大化展现你的优势。',
      icon: 'Edit',
    },
    {
      step: '05',
      title: '录取跟进与入学',
      description:
        '实时跟踪申请状态，协助面试准备、奖学金谈判、offer选择、签证办理及行前指导，直到你顺利入学。',
      icon: 'Plane',
    },
  ],
};

// ── Success Stories ──
export interface SuccessStory {
  name: string;
  university: string;
  universityZh: string;
  program: string;
  scholarship: string;
  quote: string;
  tags: string[];
  placeholderImage: string;
}

export const successStories: SuccessStory[] = [
  {
    name: '李同学',
    university: 'Harvard University',
    universityZh: '哈佛大学',
    program: '计算机科学博士',
    scholarship: '全额奖学金 ($98,000/年)',
    quote:
      '从双非本科到哈佛全奖博士，雪姨留学的导师帮我精准定位研究方向，精心打磨研究计划，三轮模拟面试让我信心十足地走进了哈佛。',
    tags: ['博士', '美国', '全奖'],
    placeholderImage:
      '【图片：学员案例】李同学在哈佛大学校园内的个人照，背景为哈佛纪念堂或图书馆，阳光明亮，人物自信微笑',
  },
  {
    name: '王同学',
    university: 'University of Oxford',
    universityZh: '牛津大学',
    program: '经济学博士',
    scholarship: 'Clarendon奖学金 (£45,000/年)',
    quote:
      '雪姨留学的导师本身就是牛津博士，对牛津的申请体系了如指掌。在他的指导下，我的Research Proposal获得了导师的高度认可，成功拿下Clarendon全奖。',
    tags: ['博士', '英国', '全奖'],
    placeholderImage:
      '【图片：学员案例】王同学在牛津大学拉德克利夫图书馆或基督堂学院前的个人照，英伦学术风格',
  },
  {
    name: '张同学',
    university: 'Stanford University',
    universityZh: '斯坦福大学',
    program: '电子工程硕士',
    scholarship: '半额奖学金 ($35,000/年)',
    quote:
      '跨专业申请EE，一开始完全没有信心。雪姨留学的老师帮我梳理了本科科研经历与EE的关联点，文书写得非常有说服力，最终圆梦斯坦福！',
    tags: ['硕士', '美国', '半奖'],
    placeholderImage:
      '【图片：学员案例】张同学在斯坦福大学胡佛塔或棕榈大道前的个人照，加州阳光与创新科技氛围',
  },
  {
    name: '陈同学',
    university: 'University of Cambridge',
    universityZh: '剑桥大学',
    program: '生物医学博士',
    scholarship: 'Gates Cambridge奖学金 (£52,000/年)',
    quote:
      'Gates Cambridge是全球竞争最激烈的奖学金之一。雪姨留学的导师团队帮我反复打磨个人陈述和研究计划，面试准备充分到每一个可能的问题都演练过。',
    tags: ['博士', '英国', '全奖'],
    placeholderImage:
      '【图片：学员案例】陈同学在剑桥大学康河畔或国王学院前的个人照，古典学术氛围',
  },
  {
    name: '刘同学',
    university: 'ETH Zurich',
    universityZh: '苏黎世联邦理工',
    program: '机械工程博士',
    scholarship: '全额奖学金 (CHF 78,000/年)',
    quote:
      'ETH是欧洲最强的理工院校，申请难度极大。雪姨留学的导师帮我精准匹配了研究方向契合的导师，套磁信发出三天就收到了积极回复。',
    tags: ['博士', '瑞士', '全奖'],
    placeholderImage:
      '【图片：学员案例】刘同学在ETH苏黎世联邦理工学院主楼前的个人照，现代建筑与雪山背景',
  },
  {
    name: '赵同学',
    university: 'National University of Singapore',
    universityZh: '新加坡国立大学',
    program: '数据科学硕士',
    scholarship: 'NUS Research Scholarship (SGD 32,000/年)',
    quote:
      '作为一个GPA不占优势的学生，雪姨留学的老师帮我在科研经历和实习项目上找到了突破口，文书突出了我的实践能力，最终成功逆袭NUS。',
    tags: ['硕士', '新加坡', '全奖'],
    placeholderImage:
      '【图片：学员案例】赵同学在新加坡国立大学UTown或标志性绿楼前的个人照，热带现代校园风格',
  },
  {
    name: '周同学',
    university: 'University of Toronto',
    universityZh: '多伦多大学',
    program: '教育学博士',
    scholarship: '全额奖学金 (CAD 55,000/年)',
    quote:
      '工作五年后决定读博，年龄和gap是我最大的顾虑。雪姨留学的导师帮我将工作经验转化为研究优势，在PS中讲出了一个打动人心的学术故事。',
    tags: ['博士', '加拿大', '全奖'],
    placeholderImage:
      '【图片：学员案例】周同学在多伦多大学主楼或CN Tower背景下的个人照，北美学术与都市融合',
  },
  {
    name: '吴同学',
    university: 'University of Melbourne',
    universityZh: '墨尔本大学',
    program: '环境科学博士',
    scholarship: 'MIRS奖学金 (AUD 48,000/年)',
    quote:
      '从选校到拿到offer只用了4个月！雪姨留学的效率真的太惊人了，导师的专业度和响应速度让我全程都很安心。',
    tags: ['博士', '澳洲', '全奖'],
    placeholderImage:
      '【图片：学员案例】吴同学在墨尔本大学古典建筑前的个人照，阳光明媚的澳洲校园',
  },
  {
    name: '郑同学',
    university: 'Imperial College London',
    universityZh: '帝国理工学院',
    program: '化学工程硕士',
    scholarship: 'IC Dean\'s Scholarship (£15,000/年)',
    quote:
      '帝国理工的工科竞争非常激烈，雪姨留学的文书老师帮我找到独特的角度来呈现我的实验项目经历，让我在众多申请者中脱颖而出。',
    tags: ['硕士', '英国', '半奖'],
    placeholderImage:
      '【图片：学员案例】郑同学在帝国理工学院女王塔或实验室内的个人照，理工科创新氛围',
  },
  {
    name: '孙同学',
    university: 'University of Hong Kong',
    universityZh: '香港大学',
    program: '金融学博士',
    scholarship: 'HKPFS香港政府奖学金 (HK$331,200/年)',
    quote:
      'HKPFS的竞争太激烈了，全港每年只有约300个名额。雪姨留学的导师本身就是HKPFS获得者，帮我从研究计划到面试做了最精准的准备。',
    tags: ['博士', '香港', '全奖'],
    placeholderImage:
      '【图片：学员案例】孙同学在香港大学主楼前的个人照，维多利亚港背景，国际化都市学术氛围',
  },
  {
    name: '何同学',
    university: 'University of Malaya',
    universityZh: '马来亚大学',
    program: '教育学博士',
    scholarship: '全额奖学金 (MYR 42,000/年)',
    quote:
      '马来西亚读博性价比极高，马来亚大学QS排名前70。雪姨留学的导师帮我找到了最匹配的导师，还指导我拿到了马来西亚政府的全额资助。',
    tags: ['博士', '马来西亚', '全奖'],
    placeholderImage:
      '【图片：学员案例】何同学在马来亚大学标志性建筑前的个人照，热带校园风情',
  },
  {
    name: '林同学',
    university: 'University of Tokyo',
    universityZh: '东京大学',
    program: '人工智能博士',
    scholarship: 'MEXT日本政府奖学金 (¥1,740,000/年)',
    quote:
      '日本博士申请流程和欧美完全不同，需要先联系教授获得内诺。雪姨留学的导师对日本体系非常熟悉，帮我用日语写了一封完美的研究意向书。',
    tags: ['博士', '日本', '全奖'],
    placeholderImage:
      '【图片：学员案例】林同学在东京大学安田讲堂或赤门前的个人照，日式学术风格',
  },
  {
    name: '黄同学',
    university: 'Seoul National University',
    universityZh: '首尔国立大学',
    program: '材料科学博士',
    scholarship: 'SNU Global Scholarship (₩36,000,000/年)',
    quote:
      'SNU是韩国最顶尖的大学，申请难度不亚于藤校。雪姨留学的导师帮我攻克了韩英双语的材料准备，研究计划得到了教授的当场肯定。',
    tags: ['博士', '韩国', '全奖'],
    placeholderImage:
      '【图片：学员案例】黄同学在首尔国立大学校园内的个人照，现代与传统融合的韩国学术氛围',
  },
  {
    name: '曹同学',
    university: 'University of Macau',
    universityZh: '澳门大学',
    program: '旅游管理博士',
    scholarship: 'UM PhD Assistantship (MOP 150,000/年)',
    quote:
      '澳门大学近年来科研投入非常大，旅游管理更是王牌专业。雪姨留学帮我精准定位，还辅导我发表了一篇SSCI论文作为申请加分项。',
    tags: ['博士', '澳门', '全奖'],
    placeholderImage:
      '【图片：学员案例】曹同学在澳门大学新校区图书馆前的个人照，现代岭南建筑风格',
  },
  {
    name: '梁同学',
    university: 'University of Auckland',
    universityZh: '奥克兰大学',
    program: '环境科学硕士',
    scholarship: 'UoA International Scholarship (NZD 15,000/年)',
    quote:
      '新西兰的留学体验太好了，导师非常nice。雪姨留学的老师帮我找到环境科学与毛利文化交叉的独特研究方向，让我的申请脱颖而出。',
    tags: ['硕士', '新西兰', '半奖'],
    placeholderImage:
      '【图片：学员案例】梁同学在奥克兰大学钟楼前的个人照，蓝天白云下的新西兰校园',
  },
  {
    name: '许同学',
    university: 'Technical University of Munich',
    universityZh: '慕尼黑工业大学',
    program: '机械工程博士',
    scholarship: 'DAAD奖学金 (€1,200/月)',
    quote:
      '德国博士很多是职位制，拿工资读博。雪姨留学的导师帮我精准定位了TUM的一个开放博士职位，从申请到面试只用了一个半月就拿到offer。',
    tags: ['博士', '德国', '全奖'],
    placeholderImage:
      '【图片：学员案例】许同学在慕尼黑工业大学主楼前的个人照，德国工业学术风格',
  },
  {
    name: '丁同学',
    university: 'Sorbonne University',
    universityZh: '索邦大学',
    program: '艺术史博士',
    scholarship: 'Eiffel卓越奖学金 (€1,181/月)',
    quote:
      '法国文科博士申请对语言要求极高。雪姨留学的导师帮我在研究计划中融入了跨文化视角，还指导我准备了一段流利的法语面试，最终拿下Eiffel奖学金。',
    tags: ['博士', '法国', '全奖'],
    placeholderImage:
      '【图片：学员案例】丁同学在索邦大学古典建筑前的个人照，法式学术艺术氛围',
  },
  {
    name: '罗同学',
    university: 'Delft University of Technology',
    universityZh: '代尔夫特理工大学',
    program: '建筑学硕士',
    scholarship: 'TU Delft Excellence Scholarship (€25,000/年)',
    quote:
      'TUD的建筑学全球顶尖，作品集是关键。雪姨留学的导师本身就是TUD校友，从作品集叙事逻辑到每个项目的排版都给了非常专业的建议。',
    tags: ['硕士', '荷兰', '全奖'],
    placeholderImage:
      '【图片：学员案例】罗同学在代尔夫特理工大学图书馆或建筑学院前的个人照，荷兰现代设计风格',
  },
  {
    name: '沈同学',
    university: 'ETH Zurich',
    universityZh: '苏黎世联邦理工',
    program: '计算机科学硕士',
    scholarship: 'ETH Excellence Scholarship (CHF 24,000/年)',
    quote:
      'ETH是欧洲最强的理工院校，QS排名常年前十。雪姨留学的导师帮我精准打磨了SOP，突出了我在分布式系统方向的科研潜力，顺利拿下录取和奖学金。',
    tags: ['硕士', '瑞士', '全奖'],
    placeholderImage:
      '【图片：学员案例】沈同学在ETH苏黎世主楼前的个人照，阿尔卑斯山背景下的现代校园',
  },
  {
    name: '韩同学',
    university: 'University of Barcelona',
    universityZh: '巴塞罗那大学',
    program: '海洋科学博士',
    scholarship: '西班牙政府奖学金 (€16,800/年)',
    quote:
      '西班牙在地中海海洋研究领域全球领先。雪姨留学的导师帮我找到了UB与CSIC联合培养的博士项目，研究经费充足，还能在地中海做田野调查！',
    tags: ['博士', '西班牙', '全奖'],
    placeholderImage:
      '【图片：学员案例】韩同学在巴塞罗那大学历史建筑前的个人照，地中海阳光学术氛围',
  },
];

export const storyFilters = [
  { label: '全部', value: 'all' },
  { label: '博士', value: '博士' },
  { label: '硕士', value: '硕士' },
  { label: '全奖', value: '全奖' },
  { label: '美国', value: '美国' },
  { label: '英国', value: '英国' },
  { label: '加拿大', value: '加拿大' },
  { label: '澳洲', value: '澳洲' },
  { label: '新加坡', value: '新加坡' },
  { label: '香港', value: '香港' },
  { label: '马来西亚', value: '马来西亚' },
  { label: '日本', value: '日本' },
  { label: '韩国', value: '韩国' },
  { label: '澳门', value: '澳门' },
  { label: '新西兰', value: '新西兰' },
  { label: '德国', value: '德国' },
  { label: '法国', value: '法国' },
  { label: '荷兰', value: '荷兰' },
  { label: '瑞士', value: '瑞士' },
  { label: '西班牙', value: '西班牙' },
];

// ── Mentors ──
export interface Mentor {
  name: string;
  title: string;
  school: string;
  schoolZh: string;
  field: string;
  expertise: string[];
  placeholderImage: string;
}

export const mentors: Mentor[] = [
  {
    name: 'Dr. James Chen',
    title: '首席学术导师 / 前哈佛大学研究员',
    school: 'Harvard University',
    schoolZh: '哈佛大学',
    field: '计算机科学与人工智能',
    expertise: ['AI/ML方向博士申请', '顶会论文发表指导', '研究计划撰写'],
    placeholderImage: '【图片：导师头像】Dr. James Chen，华裔男性，35-40岁，哈佛大学背景，专业干练的学术形象，西装或衬衫着装',
  },
  {
    name: 'Dr. Emily Wang',
    title: '高级申请顾问 / 牛津大学博士',
    school: 'University of Oxford',
    schoolZh: '牛津大学',
    field: '经济学与公共政策',
    expertise: ['经济学博士申请', '奖学金策略规划', '面试辅导'],
    placeholderImage: '【图片：导师头像】Dr. Emily Wang，华裔女性，30-35岁，牛津大学背景，知性优雅的学术形象',
  },
  {
    name: 'Dr. Michael Zhang',
    title: '学术导师 / 斯坦福大学博士后',
    school: 'Stanford University',
    schoolZh: '斯坦福大学',
    field: '电子工程与材料科学',
    expertise: ['工程类博士申请', 'SCI论文发表', '实验室面试准备'],
    placeholderImage: '【图片：导师头像】Dr. Michael Zhang，华裔男性，35-40岁，斯坦福大学背景，科研创新气质',
  },
  {
    name: 'Dr. Sarah Li',
    title: '学术导师 / 剑桥大学博士',
    school: 'University of Cambridge',
    schoolZh: '剑桥大学',
    field: '生物医学与神经科学',
    expertise: ['生物医学申请', '实验室轮转规划', '研究提案设计'],
    placeholderImage: '【图片：导师头像】Dr. Sarah Li，华裔女性，32-37岁，剑桥大学背景，严谨认真的科研形象',
  },
  {
    name: 'Dr. David Liu',
    title: '论文指导专家 / MIT博士',
    school: 'MIT',
    schoolZh: '麻省理工学院',
    field: '机械工程与机器人',
    expertise: ['工程学科论文发表', '技术类文书创作', '跨学科申请策略'],
    placeholderImage: '【图片：导师头像】Dr. David Liu，华裔男性，33-38岁，MIT背景，创新与实践并重的工科形象',
  },
  {
    name: 'Dr. Anna Wu',
    title: '学术导师 / 哥伦比亚大学博士',
    school: 'Columbia University',
    schoolZh: '哥伦比亚大学',
    field: '教育学与心理学',
    expertise: ['文科博士申请', '定性研究方法指导', '教育学期刊发表'],
    placeholderImage: '【图片：导师头像】Dr. Anna Wu，华裔女性，30-35岁，哥伦比亚大学背景，温暖亲和的教育者形象',
  },
];

// ── Partners ──
export const partners = [
  { name: 'Harvard University', nameZh: '哈佛大学' },
  { name: 'University of Oxford', nameZh: '牛津大学' },
  { name: 'University of Cambridge', nameZh: '剑桥大学' },
  { name: 'MIT', nameZh: '麻省理工学院' },
  { name: 'Stanford University', nameZh: '斯坦福大学' },
  { name: 'Imperial College London', nameZh: '帝国理工学院' },
  { name: 'UCL', nameZh: '伦敦大学学院' },
  { name: 'ETH Zurich', nameZh: '苏黎世联邦理工' },
  { name: 'National University of Singapore', nameZh: '新加坡国立大学' },
  { name: 'University of Toronto', nameZh: '多伦多大学' },
  { name: 'University of Melbourne', nameZh: '墨尔本大学' },
  { name: 'Columbia University', nameZh: '哥伦比亚大学' },
];

// ── News ──
export interface NewsItem {
  title: string;
  summary: string;
  date: string;
  category: string;
  placeholderImage: string;
}

export const newsItems: NewsItem[] = [
  {
    title: '2026年QS世界大学排名发布：英美高校继续领跑，亚洲院校强势上升',
    summary:
      '最新QS排名显示，MIT连续15年蝉联榜首，帝国理工学院跃升至第二。亚洲方面，NUS稳居亚洲第一，中国内地高校表现亮眼。留学选校如何参考最新排名？',
    date: '2026-05-20',
    category: '留学资讯',
    placeholderImage: '【图片：新闻配图】QS排名发布相关，世界地图上标注顶尖大学位置，数据可视化风格',
  },
  {
    title: '全球博士奖学金申请攻略：2026-2027学年奖学金政策全面解读',
    summary:
      '美国和英国多所顶尖大学宣布提高博士资助标准，部分项目年津贴突破5万美元。我们整理了最新奖学金政策变化和申请策略，助你拿下心仪的博士全奖offer。',
    date: '2026-05-15',
    category: '申请攻略',
    placeholderImage: '【图片：新闻配图】奖学金申请攻略，显示奖学金证书、申请表格和计算器，金融与教育结合的风格',
  },
  {
    title: '雪姨留学2026届学员再创佳绩：87%获得Top50院校录取，奖学金总额超8000万',
    summary:
      '2026申请季，雪姨留学学员共收获427枚世界Top100院校offer，其中博士全奖录取占比62%，单人最高获奖学金金额达$215,000/年。',
    date: '2026-05-08',
    category: '雪姨动态',
    placeholderImage: '【图片：新闻配图】录取捷报展示，多个名校offer letter排列，金色庆祝氛围',
  },
  {
    title: '期刊发表指南：如何在SCI/SSCI期刊上成功发表论文？从选题到接收全流程解析',
    summary:
      '学术发表是博士申请中的重要加分项。本文从选题策略、文献综述、数据分析到投稿回复，系统讲解SCI/SSCI论文发表的每个关键环节。',
    date: '2026-04-28',
    category: '学术指导',
    placeholderImage: '【图片：新闻配图】学术写作与期刊发表场景，笔记本电脑屏幕显示论文排版，旁边放有学术期刊和咖啡',
  },
];

// ── Contact ──
export const contactContent = {
  headline: '开启你的留学之旅',
  subheadline: '填写下方表单，我们将在24小时内与你联系，提供免费的留学评估和规划建议',
  phone: '+60 108996066 / +86 13304118423',
  email: 'xueyiliuxue@yeah.net',
  wechat: 'XUEYILIUXUE',
  address: '辽宁省大连市沙河口区中央公馆A303',
  placeholderImage: '【图片：联系CTA区域背景】现代化办公室洽谈场景，柔和灯光，专业温馨的咨询氛围',
};

// ── Footer ──
export const footerContent = {
  companyName: '雪姨留学',
  companyNameEn: 'Xueyi Education',
  description: '全球带奖博士申请专家，一站式留学服务领导者。用专业与真诚，助力每一位学子的留学梦想。',
  services: [
    { label: '全球带奖博士申请', href: '#services' },
    { label: '硕士留学申请', href: '#services' },
    { label: '本科留学申请', href: '#services' },
    { label: '期刊论文发表', href: '#services' },
    { label: '学业辅导提升', href: '#services' },
    { label: '语言考试培训', href: '#services' },
  ],
  quickLinks: [
    { label: '关于我们', href: '#about' },
    { label: '成功案例', href: '#cases' },
    { label: '导师团队', href: '#mentors' },
    { label: '新闻动态', href: '#news' },
    { label: '联系我们', href: '#contact' },
  ],
  contact: {
    phone: '+60 108996066 / +86 13304118423',
    email: 'xueyiliuxue@yeah.net',
    wechat: 'XUEYILIUXUE',
    address: '辽宁省大连市沙河口区中央公馆A303',
  },
  qrPlaceholder: '【图片：二维码】左侧为微信公众号二维码，右侧为客服微信二维码，扫码关注获取最新留学资讯',
};

// ── FAQ ──
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: '什么时候开始准备博士申请最合适？',
    answer: '建议提前12-18个月开始准备。博士申请涉及选校定位、研究计划撰写、导师套磁、语言考试等多个环节，充足的准备时间是成功的关键。以秋季入学（9月）为例：前一年3-6月开始选校和语言考试，6-9月撰写研究计划并开始套磁，9-12月提交申请材料，次年1-4月面试和等待录取结果。雪姨留学为每位学员制定个性化时间规划表，确保每个环节不遗漏。',
  },
  {
    question: '奖学金博士申请和普通博士申请有什么区别？',
    answer: '核心区别在于策略和侧重点。奖学金申请需要：1）精准匹配奖学金额度高、获奖概率大的项目和导师；2）研究计划需要与导师的 funded projects 高度契合；3）套磁信中需要展示你对奖学金体系的了解；4）个人陈述需要突出你的学术潜力而非仅仅是背景。普通申请更注重基本条件匹配，而奖学金申请是全方位的能力展示。雪姨留学的核心优势就是奖学金策略——95%的学员成功获得全额或部分奖学金。',
  },
  {
    question: '没有发表过论文可以申请博士吗？',
    answer: '可以。论文发表是加分项而非必选项。我们帮助过许多无论文发表的学员成功获得顶尖名校博士录取和全额奖学金。关键在于：1）通过高质量的研究计划（Research Proposal）展示你的研究潜力；2）在套磁和面试中展现扎实的理论基础和研究思维；3）挖掘和包装你已有的学术经历（毕业论文、课程项目、RA经历等）。如果你的背景确实缺乏研究经历，我们还可以指导你在申请季前完成一篇可投稿的工作论文。',
  },
  {
    question: '套磁邮件应该怎么写？回复率高的套磁信有什么特点？',
    answer: '高回复率套磁信的核心要素：1）标题清晰，包含你的研究方向和目标（如"Prospective PhD Applicant: AI for Healthcare"）；2）第一段表明你对教授具体哪篇论文/哪个项目的了解和兴趣；3）第二段简述你的相关背景和研究想法，展示你做过功课；4）第三段明确表达申请意向并附上CV。切忌群发模板化邮件——教授一眼就能识别。雪姨留学的导师会帮你逐字打磨每一封套磁信，确保匹配度最大化。',
  },
  {
    question: '英国、美国、澳洲、香港的博士申请有什么主要区别？',
    answer: '主要区别在于：英国博士通常3-4年，以研究为主，几乎无课程要求，申请时需要明确的研究计划，奖学金以UKRI和院校奖学金为主；美国博士5-6年，前两年有课程要求，申请时不需要完全确定研究方向，奖学金通常是全额的TA/RA形式；澳洲博士3-4年，类似英国体系，但奖学金（如RTP）竞争相对激烈；香港博士3-4年，香港政府奖学金（HKPFS）金额丰厚（月薪约HK$27,600），但名额有限需尽早准备。我们提供多国联申策略，最大化你的录取和奖学金机会。',
  },
  {
    question: '全奖博士是不是等于完全免费读书？',
    answer: '是的，全额奖学金通常覆盖：全额学费减免 + 生活津贴（Stipend）+ 健康保险。部分奖学金还包括会议旅费、安家费等。以美国全奖为例，年总价值通常在$70,000-$100,000之间。不同国家和学校的全奖构成有所不同：美国多为TA/RA+学费减免，英国多为全额学费+生活津贴（约£18,000-£22,000/年），香港HKPFS月薪约HK$27,600+每年HK$13,800会议旅费。我们会在选校阶段就为你精确计算每所学校的奖学金覆盖范围和实际生活成本。',
  },
  {
    question: '你们的服务周期是多久？什么时候开始，什么时候结束？',
    answer: '标准服务周期为12-18个月，从签约到学员顺利入学。具体阶段：准备期（1-3个月）完成选校定位、时间规划、背景提升方案；核心申请期（4-8个月）完成研究计划、套磁、文书创作、材料提交；录取跟进期（2-4个月）进行面试辅导、offer谈判、签证办理；行前期（1-2个月）提供行前指导、住宿建议等。部分学员选择提前2年签约进行全面背景提升，服务周期会相应延长。',
  },
  {
    question: '是否保证录取？如果没有被录取怎么办？',
    answer: '我们提供阶梯式服务承诺：旗舰全奖博士服务承诺至少获得1所目标院校录取，未达标则免费继续服务至下一申请季或按协议退款。但需要坦诚地说，留学申请不存在100%的保证——我们的价值在于通过专业的策略和辅导，将你的录取概率最大化。2000+成功案例和95%的奖学金获得率证明了我们的专业能力。我们会在签约前进行免费评估，如果评估后认为你的背景与目标差距过大，我们会如实告知并建议调整目标。',
  },
  {
    question: '你们的导师是什么背景？如何确保匹配到适合我的导师？',
    answer: '500+导师全部来自哈佛、MIT、牛津、剑桥等世界Top50院校的在读博士、博士后或青年学者，覆盖126+研究领域。我们采用"专业匹配+院校匹配"双重机制：首先根据你的研究方向和目标院校，筛选出研究方向高度契合的导师；然后安排15-30分钟的免费试沟通，你满意后再正式匹配。每位学员配备1位主导师（学术方向）+1位文书导师（文书创作）+1位申请顾问（流程管理），三位一体确保服务质量。',
  },
  {
    question: '你们的收费方式是怎样的？',
    answer: '我们采用分阶段收费模式，通常在签约时支付启动费，获得第一个offer后支付阶段费用，入学后支付尾款。不同服务项目的费用不同：带奖博士申请旗舰服务根据申请院校数量和层级定价；硕士和本科申请按照申请学校数量定价；单项服务（如研究计划辅导、文书润色、面试辅导）按小时或按项目计价。我们承诺费用透明，签约前提供详细的费用清单，绝无隐形收费。',
  },
];
