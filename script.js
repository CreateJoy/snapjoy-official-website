// Multi-language support
const translations = {
    en: {
        "nav.home": "Home",
        "nav.games": "Games",
        "nav.publishing": "Publishing",
        "nav.about": "About", 
        "nav.careers": "Careers",
        "nav.contact": "Contact",
        "hero.title": "Creating Joyful Gaming Experiences",
        "hero.subtitle": "SnapJoy CO., LIMITED brings you the most engaging casual mobile games that spark joy and fun in your daily life.",
        "hero.cta": "Discover Our Games",
        "games.title": "Our Games",
        "games.game1.title": "Find The Kitty",
        "games.game1.description": "Triple Match",
        "games.game1.subtitle": "Triple Match Adventure",
        "games.game2.title": "Bus Parking Jam",
        "games.game2.description": "Puzzle Parking",
        "games.game2.subtitle": "Strategic Parking Challenge",
        "games.game3.title": "Match Kitty Tile",
        "games.game3.description": "Find The Cat",
        "games.game3.subtitle": "Find The Cat Adventure",
        "games.download.ios": "App Store",
        "gallery.title": "Game Gallery",
        "publishing.title": "Publish With SnapJoy",
        "publishing.subtitle": "Join our growing family of successful game developers",
        "publishing.feature1.title": "Growth Support",
        "publishing.feature1.desc": "We help scale your game with expert marketing and user acquisition",
        "publishing.feature2.title": "Analytics & Insights",
        "publishing.feature2.desc": "Advanced analytics to optimize your game's performance",
        "publishing.feature3.title": "Partnership",
        "publishing.feature3.desc": "True collaborative partnership for long-term success",
        "publishing.form.title": "Submit Your Game",
        "publishing.form.name": "Developer Name",
        "publishing.form.email": "Email",
        "publishing.form.game": "Game Name",
        "publishing.form.description": "Game Description",
        "publishing.form.genre.select": "Select Genre",
        "publishing.form.genre.puzzle": "Puzzle",
        "publishing.form.genre.casual": "Casual",
        "publishing.form.genre.arcade": "Arcade",
        "publishing.form.genre.strategy": "Strategy",
        "publishing.form.genre.other": "Other",
        "publishing.form.submit": "Submit Game",
        "testimonials.title": "What Developers Say",
        "testimonials.testimonial1.text": "\"Working with SnapJoy has been incredible. They helped us scale our game to over 1M downloads with their expert marketing support.\"",
        "testimonials.testimonial1.author": "Alex Chen",
        "testimonials.testimonial1.company": "Indie Game Studio",
        "testimonials.testimonial2.text": "\"The analytics and insights provided by SnapJoy helped us optimize our game mechanics and increase player retention significantly.\"",
        "testimonials.testimonial2.author": "Maria Rodriguez",
        "testimonials.testimonial2.company": "Creative Games Co.",
        "testimonials.testimonial3.text": "\"SnapJoy's collaborative approach makes them the perfect publishing partner. They truly care about our game's success.\"",
        "testimonials.testimonial3.author": "David Kim",
        "testimonials.testimonial3.company": "Mobile Games Inc.",
        "about.title": "About SnapJoy",
        "about.description": "SnapJoy CO., LIMITED is a passionate mobile game publisher dedicated to creating engaging and joyful gaming experiences. We specialize in casual games that bring fun and entertainment to players worldwide, while helping independent developers achieve their dreams.",
        "about.mission.title": "Our Mission",
        "about.mission.text": "To bridge the gap between talented game developers and global audiences, creating a thriving ecosystem where creativity meets commercial success.",
        "about.values.title": "Our Values",
        "about.values.innovation": "Innovation in game design and publishing",
        "about.values.collaboration": "Collaborative partnership with developers",
        "about.values.quality": "Quality-first approach to game publishing",
        "about.values.community": "Building strong gaming communities",
        "about.stats.games": "Games Published",
        "about.stats.games.value": "3+",
        "about.stats.downloads": "Downloads", 
        "about.stats.downloads.value": "500K+",
        "about.stats.rating": "Average Rating",
        "about.stats.rating.value": "4.5+",
        "about.stats.partners": "Developer Partners",
        "about.stats.partners.value": "3+",
        "careers.title": "Join Our Team",
        "careers.subtitle": "Help us create the future of mobile gaming",
        "careers.job1.title": "Game Producer",
        "careers.job1.type": "Full-time",
        "careers.job1.description": "Lead game development projects from concept to launch, working closely with our development teams and external partners.",
        "careers.job1.req1": "3+ years experience in game production",
        "careers.job1.req2": "Strong project management skills",
        "careers.job1.req3": "Experience with mobile games",
        "careers.job2.title": "Marketing Manager",
        "careers.job2.type": "Full-time",
        "careers.job2.description": "Drive user acquisition and marketing campaigns for our mobile game portfolio across multiple platforms.",
        "careers.job2.req1": "Digital marketing experience",
        "careers.job2.req2": "Mobile game marketing knowledge",
        "careers.job2.req3": "Analytics and data-driven mindset",
        "careers.job3.title": "Business Development",
        "careers.job3.type": "Full-time",
        "careers.job3.description": "Identify and establish partnerships with game developers and other industry stakeholders.",
        "careers.job3.req1": "Business development experience",
        "careers.job3.req2": "Gaming industry knowledge",
        "careers.job3.req3": "Strong communication skills",
        "careers.requirements": "Requirements:",
        "careers.apply": "Apply Now",
        "faq.title": "Frequently Asked Questions",
        "faq.developers.title": "For Developers",
        "faq.players.title": "For Players",
        "faq.dev1.question": "How do I submit my game?",
        "faq.dev1.answer": "You can submit your game using the form in our Publishing section. We'll review your submission within 5-7 business days.",
        "faq.dev2.question": "What types of games do you publish?",
        "faq.dev2.answer": "We focus on casual mobile games including puzzle, match-3, arcade, and strategy games that appeal to a broad audience.",
        "faq.dev3.question": "What support do you provide?",
        "faq.dev3.answer": "We provide marketing support, user acquisition, analytics, monetization optimization, and technical assistance.",
        "faq.play1.question": "Are your games free to play?",
        "faq.play1.answer": "Yes, all our games are free to download and play, with optional in-app purchases available.",
        "faq.play2.question": "How do I report a bug or issue?",
        "faq.play2.answer": "Please contact us through our support email or leave a review on the app store with details about the issue.",
        "faq.play3.question": "Do you have upcoming games?",
        "faq.play3.answer": "We're always working on exciting new titles! Follow us on social media for the latest updates and announcements.",
        "contact.title": "Get In Touch",
        "contact.email.title": "Email",
        "contact.email.value": "contact@snapjoy.cc",
        "contact.company.title": "Company",
        "contact.company.value": "SnapJoy CO., LIMITED",
        "footer.tagline": "Creating Joyful Gaming Experiences",
        "footer.rights": "All rights reserved.",
        "footer.copyright": "© 2025 SnapJoy CO., LIMITED.",
        "footer.company": "Company",
        "footer.games": "Games",
        "footer.support": "Support",
        "footer.social": "Follow Us",
        "footer.gallery": "Gallery",
        "footer.faq": "FAQ",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service"
    },
    zh: {
        "nav.home": "首页",
        "nav.games": "游戏",
        "nav.publishing": "发行",
        "nav.about": "关于我们",
        "nav.careers": "招聘",
        "nav.contact": "联系我们",
        "hero.title": "创造快乐的游戏体验",
        "hero.subtitle": "SnapJoy有限公司为您带来最引人入胜的休闲手机游戏，为您的日常生活带来快乐和乐趣。",
        "hero.cta": "探索我们的游戏",
        "games.title": "我们的游戏",
        "games.game1.title": "Find The Kitty",
        "games.game1.description": "三消游戏",
        "games.game1.subtitle": "三消冒险",
        "games.game2.title": "Bus Parking Jam",
        "games.game2.description": "停车挑战",
        "games.game2.subtitle": "策略停车挑战",
        "games.game3.title": "Match Kitty Tile",
        "games.game3.description": "找猫咪",
        "games.game3.subtitle": "找猫咪冒险",
        "games.download.ios": "应用商店",
        "gallery.title": "游戏画廊",
        "publishing.title": "与SnapJoy合作发行",
        "publishing.subtitle": "加入我们成功游戏开发者的大家庭",
        "publishing.feature1.title": "增长支持",
        "publishing.feature1.desc": "我们通过专业营销和用户获取帮助扩展您的游戏",
        "publishing.feature2.title": "分析与洞察",
        "publishing.feature2.desc": "高级分析优化您游戏的表现",
        "publishing.feature3.title": "伙伴关系",
        "publishing.feature3.desc": "真正的协作伙伴关系，助力长期成功",
        "publishing.form.title": "提交您的游戏",
        "publishing.form.name": "开发者姓名",
        "publishing.form.email": "邮箱",
        "publishing.form.game": "游戏名称",
        "publishing.form.description": "游戏描述",
        "publishing.form.genre.select": "选择类型",
        "publishing.form.genre.puzzle": "益智",
        "publishing.form.genre.casual": "休闲",
        "publishing.form.genre.arcade": "街机",
        "publishing.form.genre.strategy": "策略",
        "publishing.form.genre.other": "其他",
        "publishing.form.submit": "提交游戏",
        "testimonials.title": "开发者评价",
        "testimonials.testimonial1.text": "\"与SnapJoy合作令人难以置信。他们通过专业的营销支持帮助我们的游戏获得了超过100万次下载。\"",
        "testimonials.testimonial1.author": "陈亚历",
        "testimonials.testimonial1.company": "独立游戏工作室",
        "testimonials.testimonial2.text": "\"SnapJoy提供的分析和洞察帮助我们优化游戏机制，显著提高了玩家留存率。\"",
        "testimonials.testimonial2.author": "玛利亚·罗德里格斯",
        "testimonials.testimonial2.company": "创意游戏公司",
        "testimonials.testimonial3.text": "\"SnapJoy的协作方式使他们成为完美的发行合作伙伴。他们真正关心我们游戏的成功。\"",
        "testimonials.testimonial3.author": "金大卫",
        "testimonials.testimonial3.company": "移动游戏有限公司",
        "about.title": "关于SnapJoy",
        "about.description": "SnapJoy有限公司是一家充满激情的手机游戏发行商，致力于创造引人入胜和快乐的游戏体验。我们专注于休闲游戏，为全世界的玩家带来乐趣和娱乐，同时帮助独立开发者实现他们的梦想。",
        "about.mission.title": "我们的使命",
        "about.mission.text": "在有才华的游戏开发者和全球受众之间架起桥梁，创造一个创意与商业成功相结合的繁荣生态系统。",
        "about.values.title": "我们的价值观",
        "about.values.innovation": "游戏设计和发行的创新",
        "about.values.collaboration": "与开发者的协作伙伴关系",
        "about.values.quality": "游戏发行的质量至上方法",
        "about.values.community": "建设强大的游戏社区",
        "about.stats.games": "已发布游戏",
        "about.stats.games.value": "3+",
        "about.stats.downloads": "下载量",
        "about.stats.downloads.value": "50万+",
        "about.stats.rating": "平均评分",
        "about.stats.rating.value": "4.5+",
        "about.stats.partners": "开发者合作伙伴",
        "about.stats.partners.value": "3+",
        "careers.title": "加入我们的团队",
        "careers.subtitle": "帮助我们创造移动游戏的未来",
        "careers.job1.title": "游戏制作人",
        "careers.job1.type": "全职",
        "careers.job1.description": "领导游戏开发项目从概念到发布，与我们的开发团队和外部合作伙伴密切合作。",
        "careers.requirements": "要求：",
        "careers.job1.req1": "3年以上游戏制作经验",
        "careers.job1.req2": "强大的项目管理技能",
        "careers.job1.req3": "手机游戏经验",
        "careers.job2.title": "市场经理",
        "careers.job2.type": "全职",
        "careers.job2.description": "在多个平台上推动我们手机游戏组合的用户获取和营销活动。",
        "careers.job2.req1": "数字营销经验",
        "careers.job2.req2": "手机游戏营销知识",
        "careers.job2.req3": "分析和数据驱动思维",
        "careers.job3.title": "商务拓展",
        "careers.job3.type": "全职",
        "careers.job3.description": "识别并建立与游戏开发者和其他行业利益相关者的合作伙伴关系。",
        "careers.job3.req1": "商务拓展经验",
        "careers.job3.req2": "游戏行业知识",
        "careers.job3.req3": "强大的沟通技能",
        "careers.apply": "立即申请",
        "faq.title": "常见问题",
        "faq.developers.title": "开发者",
        "faq.dev1.question": "我如何提交我的游戏？",
        "faq.dev1.answer": "您可以使用我们发行部分的表单提交您的游戏。我们将在5-7个工作日内审核您的提交。",
        "faq.dev2.question": "您发行什么类型的游戏？",
        "faq.dev2.answer": "我们专注于休闲手机游戏，包括益智、三消、街机和策略游戏，这些游戏吸引广大受众。",
        "faq.dev3.question": "您提供什么支持？",
        "faq.dev3.answer": "我们提供营销支持、用户获取、分析、货币化优化和技术协助。",
        "faq.players.title": "玩家",
        "faq.play1.question": "您的游戏免费吗？",
        "faq.play1.answer": "是的，我们所有的游戏都可以免费下载和游玩，提供可选的应用内购买。",
        "faq.play2.question": "我如何报告错误或问题？",
        "faq.play2.answer": "请通过我们的支持邮箱联系我们，或在应用商店留下评论并详细说明问题。",
        "faq.play3.question": "您有即将推出的游戏吗？",
        "faq.play3.answer": "我们一直在开发令人兴奋的新作品！关注我们的社交媒体获取最新更新和公告。",
        "contact.title": "联系我们",
        "contact.email.title": "邮箱",
        "contact.email.value": "contact@snapjoy.cc",
        "contact.company.title": "公司",
        "contact.company.value": "SnapJoy CO., LIMITED",
        "footer.tagline": "创造快乐的游戏体验",
        "footer.rights": "版权所有。",
        "footer.copyright": "© 2025 SnapJoy CO., LIMITED.",
        "footer.company": "公司",
        "footer.games": "游戏",
        "footer.support": "支持",
        "footer.social": "关注我们",
        "footer.gallery": "画廊",
        "footer.faq": "常见问题",
        "footer.privacy": "隐私政策",
        "footer.terms": "服务条款"
    },
    ja: {
        "nav.home": "ホーム",
        "nav.games": "ゲーム",
        "nav.publishing": "パブリッシング",
        "nav.about": "会社概要",
        "nav.careers": "採用情報",
        "nav.contact": "お問い合わせ",
        "hero.title": "楽しいゲーム体験を創造",
        "hero.subtitle": "SnapJoy CO., LIMITEDは、日常生活に喜びと楽しさをもたらす最も魅力的なカジュアルモバイルゲームをお届けします。",
        "hero.cta": "ゲームを発見する",
        "games.title": "私たちのゲーム",
        "games.game1.title": "Find The Kitty",
        "games.game1.description": "三つ揃え",
        "games.game1.subtitle": "三つ揃えアドベンチャー",
        "games.game2.title": "Bus Parking Jam",
        "games.game2.description": "駐車パズル",
        "games.game2.subtitle": "戦略的駐車チャレンジ",
        "games.game3.title": "Match Kitty Tile",
        "games.game3.description": "猫を探す",
        "games.game3.subtitle": "猫探しアドベンチャー",
        "games.download.ios": "App Store",
        "gallery.title": "ゲームギャラリー",
        "publishing.title": "SnapJoyと一緒にパブリッシング",
        "publishing.subtitle": "成功したゲーム開発者の大きな家族に参加してください",
        "publishing.feature1.title": "成長支援",
        "publishing.feature1.desc": "専門的なマーケティングとユーザー獲得でゲームの拡大をお手伝いします",
        "publishing.feature2.title": "分析と洞察",
        "publishing.feature2.desc": "高度な分析でゲームのパフォーマンスを最適化",
        "publishing.feature3.title": "パートナーシップ",
        "publishing.feature3.desc": "長期的な成功のための真の協力パートナーシップ",
        "publishing.form.title": "ゲームを提出",
        "publishing.form.name": "開発者名",
        "publishing.form.email": "メールアドレス",
        "publishing.form.game": "ゲーム名",
        "publishing.form.description": "ゲーム説明",
        "publishing.form.genre.select": "ジャンル選択",
        "publishing.form.genre.puzzle": "パズル",
        "publishing.form.genre.casual": "カジュアル",
        "publishing.form.genre.arcade": "アーケード",
        "publishing.form.genre.strategy": "ストラテジー",
        "publishing.form.genre.other": "その他",
        "publishing.form.submit": "ゲーム提出",
        "testimonials.title": "開発者の声",
        "testimonials.testimonial1.text": "「SnapJoyとの協力は素晴らしい体験でした。専門的なマーケティング支援により、私たちのゲームは100万ダウンロードを超えました。」",
        "testimonials.testimonial1.author": "アレックス・チェン",
        "testimonials.testimonial1.company": "インディーゲームスタジオ",
        "testimonials.testimonial2.text": "「SnapJoyが提供する分析と洞察により、ゲームメカニクスを最適化し、プレイヤー維持率を大幅に向上させることができました。」",
        "testimonials.testimonial2.author": "マリア・ロドリゲス",
        "testimonials.testimonial2.company": "クリエイティブゲームズ",
        "testimonials.testimonial3.text": "「SnapJoyの協力的なアプローチにより、彼らは完璧なパブリッシングパートナーです。私たちのゲームの成功を本当に大切にしてくれます。」",
        "testimonials.testimonial3.author": "デビッド・キム",
        "testimonials.testimonial3.company": "モバイルゲームズ株式会社",
        "about.title": "SnapJoyについて",
        "about.description": "SnapJoy CO., LIMITEDは、魅力的で楽しいゲーム体験の創造に情熱を注ぐモバイルゲームパブリッシャーです。世界中のプレイヤーに楽しさとエンターテイメントをもたらすカジュアルゲームを専門とし、独立開発者の夢の実現をお手伝いしています。",
        "about.mission.title": "私たちのミッション",
        "about.mission.text": "才能あるゲーム開発者と世界の観客を繋ぎ、創造性と商業的成功が出会う繁栄したエコシステムを創造すること。",
        "about.values.title": "私たちの価値観",
        "about.values.innovation": "ゲームデザインとパブリッシングのイノベーション",
        "about.values.collaboration": "開発者との協力パートナーシップ",
        "about.values.quality": "ゲームパブリッシングの品質第一アプローチ",
        "about.values.community": "強力なゲームコミュニティの構築",
        "about.stats.games": "公開ゲーム数",
        "about.stats.games.value": "3+",
        "about.stats.downloads": "ダウンロード数",
        "about.stats.downloads.value": "50万+",
        "about.stats.rating": "平均評価",
        "about.stats.rating.value": "4.5+",
        "about.stats.partners": "開発者パートナー",
        "about.stats.partners.value": "3+",
        "careers.title": "チームに参加",
        "careers.subtitle": "モバイルゲームの未来を一緒に創造しましょう",
        "careers.job1.title": "ゲームプロデューサー",
        "careers.job1.type": "正社員",
        "careers.job1.description": "企画から発売まで、ゲーム開発プロジェクトをリードし、社内開発チームや外部パートナーと密接に協力します。",
        "careers.job1.req1": "ゲーム制作経験3年以上",
        "careers.job1.req2": "強力なプロジェクト管理スキル",
        "careers.job1.req3": "モバイルゲーム経験",
        "careers.job2.title": "マーケティングマネージャー",
        "careers.job2.type": "正社員",
        "careers.job2.description": "複数のプラットフォームでモバイルゲームポートフォリオのユーザー獲得とマーケティングキャンペーンを推進します。",
        "careers.job2.req1": "デジタルマーケティング経験",
        "careers.job2.req2": "モバイルゲームマーケティング知識",
        "careers.job2.req3": "分析とデータ駆動思考",
        "careers.job3.title": "ビジネス開発",
        "careers.job3.type": "正社員",
        "careers.job3.description": "ゲーム開発者やその他の業界関係者とのパートナーシップを特定し、構築します。",
        "careers.job3.req1": "ビジネス開発経験",
        "careers.job3.req2": "ゲーム業界知識",
        "careers.job3.req3": "強力なコミュニケーションスキル",
        "careers.requirements": "必要条件：",
        "careers.apply": "今すぐ応募",
        "faq.title": "よくある質問",
        "faq.developers.title": "開発者向け",
        "faq.players.title": "プレイヤー向け",
        "faq.dev1.question": "ゲームを提出するにはどうすればいいですか？",
        "faq.dev1.answer": "パブリッシングセクションのフォームからゲームを提出できます。5-7営業日以内にご提出内容を審査いたします。",
        "faq.dev2.question": "どのような種類のゲームをパブリッシングしていますか？",
        "faq.dev2.answer": "パズル、マッチ3、アーケード、ストラテジーゲームなど、幅広い観客にアピールするカジュアルモバイルゲームに焦点を当てています。",
        "faq.dev3.question": "どのようなサポートを提供していますか？",
        "faq.dev3.answer": "マーケティング支援、ユーザー獲得、分析、収益化最適化、技術サポートを提供しています。",
        "faq.play1.question": "ゲームは無料でプレイできますか？",
        "faq.play1.answer": "はい、すべてのゲームは無料でダウンロード・プレイでき、オプションのアプリ内購入も利用できます。",
        "faq.play2.question": "バグや問題を報告するにはどうすればいいですか？",
        "faq.play2.answer": "サポートメールからお問い合わせいただくか、アプリストアで問題の詳細をレビューに残してください。",
        "faq.play3.question": "今後のゲームはありますか？",
        "faq.play3.answer": "常にエキサイティングな新作を開発中です！ソーシャルメディアをフォローして最新の更新とお知らせをチェックしてください。",
        "contact.title": "お問い合わせ",
        "contact.email.title": "メール",
        "contact.email.value": "contact@snapjoy.cc",
        "contact.company.title": "会社",
        "contact.company.value": "SnapJoy CO., LIMITED",
        "footer.tagline": "楽しいゲーム体験を創造",
        "footer.rights": "全著作権所有。",
        "footer.copyright": "© 2025 SnapJoy CO., LIMITED.",
        "footer.company": "会社",
        "footer.games": "ゲーム",
        "footer.support": "サポート",
        "footer.social": "フォローする",
        "footer.gallery": "ギャラリー",
        "footer.faq": "FAQ",
        "footer.privacy": "プライバシーポリシー",
        "footer.terms": "利用規約"
    },
    ko: {
        "nav.home": "홈",
        "nav.games": "게임",
        "nav.publishing": "퍼블리싱",
        "nav.about": "회사소개",
        "nav.careers": "채용정보",
        "nav.contact": "연락처",
        "hero.title": "즐거운 게임 경험 창조",
        "hero.subtitle": "SnapJoy CO., LIMITED는 일상생활에 기쁨과 재미를 가져다주는 가장 매력적인 캐주얼 모바일 게임을 제공합니다.",
        "hero.cta": "게임 둘러보기",
        "games.title": "우리의 게임",
        "games.game1.title": "Find The Kitty",
        "games.game1.description": "삼중 매치",
        "games.game1.subtitle": "삼중 매치 어드벤처",
        "games.game2.title": "Bus Parking Jam",
        "games.game2.description": "주차 퍼즐",
        "games.game2.subtitle": "전략적 주차 챌린지",
        "games.game3.title": "Match Kitty Tile",
        "games.game3.description": "고양이 찾기",
        "games.game3.subtitle": "고양이 찾기 어드벤처",
        "games.download.ios": "앱스토어",
        "gallery.title": "게임 갤러리",
        "publishing.title": "SnapJoy와 함께 퍼블리싱",
        "publishing.subtitle": "성공한 게임 개발자들의 대가족에 합류하세요",
        "publishing.feature1.title": "성장 지원",
        "publishing.feature1.desc": "전문 마케팅과 사용자 확보를 통해 게임 확장을 도와드립니다",
        "publishing.feature2.title": "분석 및 인사이트",
        "publishing.feature2.desc": "고급 분석을 통해 게임 성능을 최적화합니다",
        "publishing.feature3.title": "파트너십",
        "publishing.feature3.desc": "장기적인 성공을 위한 진정한 협력 파트너십",
        "publishing.form.title": "게임 제출",
        "publishing.form.name": "개발자 이름",
        "publishing.form.email": "이메일",
        "publishing.form.game": "게임 이름",
        "publishing.form.description": "게임 설명",
        "publishing.form.genre.select": "장르 선택",
        "publishing.form.genre.puzzle": "퍼즐",
        "publishing.form.genre.casual": "캐주얼",
        "publishing.form.genre.arcade": "아케이드",
        "publishing.form.genre.strategy": "전략",
        "publishing.form.genre.other": "기타",
        "publishing.form.submit": "게임 제출",
        "testimonials.title": "개발자 리뷰",
        "testimonials.testimonial1.text": "\"SnapJoy와의 협력은 놀라운 경험이었습니다. 전문적인 마케팅 지원을 통해 저희 게임이 100만 다운로드를 넘을 수 있었습니다.\"",
        "testimonials.testimonial1.author": "알렉스 첸",
        "testimonials.testimonial1.company": "인디 게임 스튜디오",
        "testimonials.testimonial2.text": "\"SnapJoy가 제공하는 분석과 인사이트를 통해 게임 메커니즘을 최적화하고 플레이어 유지율을 크게 향상시킬 수 있었습니다.\"",
        "testimonials.testimonial2.author": "마리아 로드리게스",
        "testimonials.testimonial2.company": "크리에이티브 게임즈",
        "testimonials.testimonial3.text": "\"SnapJoy의 협력적인 접근 방식은 그들을 완벽한 퍼블리싱 파트너로 만듭니다. 저희 게임의 성공을 진정으로 중요하게 생각합니다.\"",
        "testimonials.testimonial3.author": "데이비드 김",
        "testimonials.testimonial3.company": "모바일 게임즈 Inc.",
        "about.title": "SnapJoy 소개",
        "about.description": "SnapJoy CO., LIMITED는 매력적이고 즐거운 게임 경험 창조에 열정을 쏟는 모바일 게임 퍼블리셔입니다. 전 세계 플레이어들에게 재미와 오락을 제공하는 캐주얼 게임을 전문으로 하며, 독립 개발자들의 꿈 실현을 돕습니다.",
        "about.mission.title": "우리의 사명",
        "about.mission.text": "재능 있는 게임 개발자와 글로벌 관객 사이의 다리를 놓고, 창의성과 상업적 성공이 만나는 번영하는 생태계를 만드는 것입니다.",
        "about.values.title": "우리의 가치",
        "about.values.innovation": "게임 디자인 및 퍼블리싱의 혁신",
        "about.values.collaboration": "개발자와의 협력 파트너십",
        "about.values.quality": "게임 퍼블리싱의 품질 우선 접근법",
        "about.values.community": "강력한 게임 커뮤니티 구축",
        "about.stats.games": "출시 게임",
        "about.stats.games.value": "3+",
        "about.stats.downloads": "다운로드",
        "about.stats.downloads.value": "50만+",
        "about.stats.rating": "평균 평점",
        "about.stats.rating.value": "4.5+",
        "about.stats.partners": "개발자 파트너",
        "about.stats.partners.value": "3+",
        "careers.title": "팀에 합류하기",
        "careers.subtitle": "모바일 게임의 미래를 함께 만들어가세요",
        "careers.job1.title": "게임 프로듀서",
        "careers.job1.type": "정규직",
        "careers.job1.description": "컨셉트부터 출시까지 게임 개발 프로젝트를 주도하며, 개발팀과 외부 파트너와 긴밀히 협력합니다.",
        "careers.job1.req1": "게임 제작 경험 3년 이상",
        "careers.job1.req2": "강력한 프로젝트 관리 스킬",
        "careers.job1.req3": "모바일 게임 경험",
        "careers.job2.title": "마케팅 매니저",
        "careers.job2.type": "정규직",
        "careers.job2.description": "여러 플랫폼에서 모바일 게임 포트폴리오의 사용자 확보 및 마케팅 캠페인을 주도합니다.",
        "careers.job2.req1": "디지털 마케팅 경험",
        "careers.job2.req2": "모바일 게임 마케팅 지식",
        "careers.job2.req3": "분석 및 데이터 중심 사고",
        "careers.job3.title": "비즈니스 개발",
        "careers.job3.type": "정규직",
        "careers.job3.description": "게임 개발자 및 기타 업계 이해관계자와의 파트너십을 찾고 구축합니다.",
        "careers.job3.req1": "비즈니스 개발 경험",
        "careers.job3.req2": "게임 업계 지식",
        "careers.job3.req3": "강력한 커뮤니케이션 스킬",
        "careers.requirements": "요구사항:",
        "careers.apply": "지금 지원하기",
        "faq.title": "자주 묻는 질문",
        "faq.developers.title": "개발자용",
        "faq.players.title": "플레이어용",
        "faq.dev1.question": "게임은 어떻게 제출하나요?",
        "faq.dev1.answer": "퍼블리싱 섹션의 양식을 통해 게임을 제출할 수 있습니다. 5-7 영업일 이내에 제출 내용을 검토해드립니다.",
        "faq.dev2.question": "어떤 종류의 게임을 퍼블리싱하나요?",
        "faq.dev2.answer": "퍼즐, 매치-3, 아케이드, 전략 게임 등 광범위한 관객에게 어필하는 캐주얼 모바일 게임에 집중합니다.",
        "faq.dev3.question": "어떤 지원을 제공하나요?",
        "faq.dev3.answer": "마케팅 지원, 사용자 확보, 분석, 수익화 최적화, 기술 지원을 제공합니다.",
        "faq.play1.question": "게임이 무료인가요?",
        "faq.play1.answer": "네, 모든 게임은 무료로 다운로드하고 플레이할 수 있으며, 선택적 인앱 구매가 가능합니다.",
        "faq.play2.question": "버그나 문제는 어떻게 신고하나요?",
        "faq.play2.answer": "지원 이메일을 통해 문의하시거나 앱스토어에 문제의 세부사항을 리뷰로 남겨주세요.",
        "faq.play3.question": "출시 예정 게임이 있나요?",
        "faq.play3.answer": "항상 흥미진진한 신작을 개발 중입니다! 소셜 미디어를 팔로우하여 최신 업데이트와 공지사항을 확인하세요.",
        "contact.title": "문의하기",
        "contact.email.title": "이메일",
        "contact.email.value": "contact@snapjoy.cc",
        "contact.company.title": "회사",
        "contact.company.value": "SnapJoy CO., LIMITED",
        "footer.tagline": "즐거운 게임 경험 창조",
        "footer.rights": "모든 권리 보유.",
        "footer.copyright": "© 2025 SnapJoy CO., LIMITED.",
        "footer.company": "회사",
        "footer.games": "게임",
        "footer.support": "지원",
        "footer.social": "팔로우하기",
        "footer.gallery": "갤러리",
        "footer.faq": "FAQ",
        "footer.privacy": "개인정보 보호정책",
        "footer.terms": "서비스 약관"
    }
};

// Language switching functionality
let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    localStorage.setItem('selectedLanguage', lang);
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Handle different types of elements
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                // Don't change input values, only labels
                return;
            } else if (element.tagName === 'TEXTAREA') {
                // Don't change textarea content
                return;
            } else if (element.tagName === 'OPTION') {
                // Update option text
                element.textContent = translations[currentLanguage][key];
            } else {
                // Update text content for most elements
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update placeholder texts for form inputs
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// FAQ functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Form submission handling
function setupFormSubmission() {
    const form = document.getElementById('gameSubmissionForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Show success message (in a real app, you'd send to server)
            alert(translations[currentLanguage]['publishing.form.submit'] + ' - Thank you for your submission!');
            
            // Reset form
            form.reset();
        });
    }
}

// Job application handling
function setupJobApplications() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const jobCard = button.closest('.job-card');
            const jobTitle = jobCard.querySelector('h3').textContent;
            
            // In a real app, this would open an application form or redirect
            alert(`Opening application form for: ${jobTitle}`);
        });
    });
}

// Trailer video placeholders
// Carousel functionality
function setupCarousel() {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    
    carouselContainers.forEach(container => {
        const carouselSlides = container.querySelector('.carousel-slides');
        const slides = container.querySelectorAll('.carousel-slide');
        const dots = container.querySelectorAll('.dot');
        const prevBtn = container.querySelector('.carousel-btn-prev');
        const nextBtn = container.querySelector('.carousel-btn-next');
        
        let currentSlide = 0;
        let autoSlideInterval;
        
        // Update carousel position
        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // Update active states
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        // Go to next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        }
        
        // Go to previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        }
        
        // Auto slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Event listeners for navigation buttons
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide(); // Restart auto slide
        });
        
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide(); // Restart auto slide
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                stopAutoSlide();
                startAutoSlide(); // Restart auto slide
            });
        });
        
        // Pause auto slide on hover
        container.addEventListener('mouseenter', stopAutoSlide);
        container.addEventListener('mouseleave', startAutoSlide);
        
        // Handle window resize for this carousel
        const handleResize = () => updateCarousel();
        window.addEventListener('resize', handleResize);
        
        // Initialize this carousel
        updateCarousel();
        startAutoSlide();
    });
    
    // Global keyboard navigation
    document.addEventListener('keydown', (e) => {
        const activeCarousel = document.querySelector('.carousel-container:hover');
        if (activeCarousel && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            const prevBtn = activeCarousel.querySelector('.carousel-btn-prev');
            const nextBtn = activeCarousel.querySelector('.carousel-btn-next');
            
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
}

// Smooth scrolling with navbar offset
function scrollToGames() {
    const element = document.getElementById('games');
    if (element) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20;
        
        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
    }
}

// Mobile navigation toggle
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}

// Parallax effect for hero section
function handleParallax() {
    const heroSection = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Static display for stats (animation removed)
function animateCounters() {
    // Animation removed - stats display statically
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stats animation removed - display statically
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.game-card, .about-content, .contact-info, .stats');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Game card hover effects
function setupGameCardEffects() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Floating animation for hero icons
function setupFloatingAnimation() {
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    
    floatingIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.color = '#ff6b6b';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.color = 'white';
        });
    });
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // Ensure language selector exists before setting value
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    updateContent();

    // Language selector event handler
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            const selectedLanguage = e.target.value;
            changeLanguage(selectedLanguage);
        });
        
        // Also trigger on click to ensure it works
        languageSelect.addEventListener('click', function() {
            setTimeout(() => {
                const selectedLanguage = this.value;
                if (selectedLanguage !== currentLanguage) {
                    changeLanguage(selectedLanguage);
                }
            }, 100);
        });
    }

    // Mobile navigation
    document.querySelector('.hamburger').addEventListener('click', toggleMobileNav);

    // Close mobile nav when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });

    // Smooth scrolling for all navigation links with navbar offset
    function smoothScrollToElement(target) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70; // fallback height
        let extraPadding = 20;
        
        // Special handling for home section
        if (target.id === 'home') {
            extraPadding = -navbarHeight; // Scroll to very top for hero
        }
        
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - extraPadding;
        
        window.scrollTo({
            top: Math.max(0, offsetPosition), // Don't scroll above top
            behavior: 'smooth'
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                smoothScrollToElement(target);
            }
        });
    });

    // Initialize all animations and effects
    setupIntersectionObserver();
    setupGameCardEffects();
    setupFloatingAnimation();
    setupFAQ();
    setupFormSubmission();
    setupJobApplications();
    setupCarousel();
    initializeAOS();

    // Add scroll event listeners
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleNavbarScroll();
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Global function for testing language switching
window.testLanguageSwitch = function(lang) {
    console.log('Testing language switch to:', lang);
    changeLanguage(lang);
    console.log('Test completed');
};

// Add CSS for hamburger active state
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);