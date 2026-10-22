// js/app.js

/**
 * 翻訳データ (Translations)
 * シーリングライト・ヘアアイロン・その他更新内容をすべて反映した完全版
 */
const translations = {
    // ==========================================
    // ナビゲーション & 共通
    // ==========================================
    nav_access: { ja: "アクセス", en: "Access", ko: "오시는 길", zh: "交通出行" },
    nav_checkin: { ja: "チェックイン", en: "Check-in", ko: "체크인", zh: "入住指南" },
    nav_wifi: { ja: "部屋情報 / Wi-Fi", en: "Room / Wi-Fi", ko: "객실 정보 / Wi-Fi", zh: "房间信息 / Wi-Fi" },
    nav_amenities: { ja: "設備利用方法", en: "Amenities", ko: "설비 사용방법", zh: "设备使用方法" },
    nav_amenities_list: { ja: "アメニティ・設備", en: "Amenities", ko: "아메니티・설비", zh: "物品设备" },
    nav_trash: { ja: "ごみについて", en: "Trash", ko: "쓰레기 분리배출", zh: "垃圾分类" },
    nav_rules: { ja: "ハウスルール", en: "Rules", ko: "숙소 규칙", zh: "住宿规则" },
    nav_policy: { ja: "ポリシー", en: "Policies", ko: "숙소 정책", zh: "住宿政策" },
    nav_around: { ja: "周辺案内", en: "Guide", ko: "주변 안내", zh: "周边导览" },
    nav_checkout: { ja: "チェックアウト", en: "Check-out", ko: "체크아웃", zh: "退房指南" },
    copy_text: { ja: "コピー", en: "Copy", ko: "복사", zh: "复制" },
    copy_success: { ja: "完了!", en: "Copied!", ko: "복사됨!", zh: "已复制!" },

    // ==========================================
    // 部屋情報 / Wi-Fi
    // ==========================================
    wifi_title: { ja: "部屋情報 & Wi-Fi", en: "Room Info & Wi-Fi", ko: "객실 정보 & Wi-Fi", zh: "房间信息 & Wi-Fi" },
    room_specs_title: { ja: "物件情報", en: "Room Info", ko: "숙소 기본 정보", zh: "房源概况" },
    room_name_label: { ja: "お部屋", en: "Room", ko: "객실 번호", zh: "房号" },
    room_addr_label: { ja: "住所", en: "Address", ko: "주소", zh: "地址" },
    wifi_info_title: { ja: "Wi-Fi 情報", en: "Wi-Fi Details", ko: "Wi-Fi 정보", zh: "Wi-Fi 信息" },
    wifi_desc: { ja: "部屋専用の高速Wi-Fiです。", en: "Exclusive high-speed Wi-Fi.", ko: "객실 전용 고속 고정 Wi-Fi입니다.", zh: "房间专用高速固定Wi-Fi。" },
    wifi_security_label: { ja: "暗号化方式", en: "Security", ko: "암호화 방식", zh: "加密方式" },
    room_name_value: { ja: "Nest Glow 301号室", en: "Nest Glow Room 301", ko: "Nest Glow 301호실", zh: "Nest Glow 301号室" },
    room_addr_value: { ja: "〒812-0041 福岡県福岡市博多区吉塚６丁目１−１１(グラディート吉塚駅東)", en: "6-1-11 Yoshizuka, Hakata-ku, Fukuoka-shi, Fukuoka, 812-0041", ko: "〒812-0041 후쿠오카현 후쿠오카시 하카타구 요시즈카 6초메 1-11", zh: "邮编812-0041 福冈县福冈市博多区吉塚６丁目１−１１" },
    trouble_title: { ja: "接続できない場合", en: "Troubleshooting", ko: "연결이 안 되는 경우", zh: "无法连接时" },
    trouble_desc: { ja: "ルーターのコンセントを一度抜き、10秒待ってから再度差し込んでください。", en: "Unplug the router, wait 10 seconds, and plug it back in.", ko: "라우터의 전원 코드를 뽑고 10초간 기다린 후 다시 꽂아 주십시오.", zh: "请拔掉路由器电源插头，等待10秒后重新插上试一下。" },

    // ==========================================
    // アクセス
    // ==========================================
    access_title: { ja: "アクセス", en: "Access", ko: "오시는 길", zh: "交通出行" },
    google_map_btn: { ja: "Google マップで開く", en: "Open on Google Maps", ko: "Google 지도에서 열기", zh: "在 Google 地图上打开" },
    route_guide_h: { ja: "吉塚駅からの詳細ルート案内（徒歩5分）", en: "Route Guide from Yoshizuka Station (5 mins walk)", ko: "요시즈카역발 도보 경로 상세 안내 (도보 5분)", zh: "吉塚站出站步行路线指引（步行5分钟）" },
    rg_s1: { ja: "吉塚駅の改札を出たら、案内板に従って左折し、東口へ進みます。茶色のレンガの出口から外へ出てください。", en: "After passing through the ticket gates at Yoshizuka Station, turn left following the signs to the East Gate. Exit through the brown brick gateway.", ko: "요시즈카역 개찰구를 나오면 좌측으로 꺾어 안내판을 따라 동구(East Gate)로 향합니다. 갈색 벽돌 출구를 통해 밖으로 나가주십시오.", zh: "出吉塚站剪票口后请左转，顺着指示牌往东口（East Gate）方向前进。从棕色砖墙的出口走到室外。" },
    rg_s2: { ja: "屋根付きのレンガの通路出口を出たら、そのまま真っ直ぐ進んでください。", en: "Once you step out of the covered brick walkway exit, keep walking straight ahead.", ko: "지붕이 있는 벽돌 통로 출구를 나오면 그대로 곧장 직진해 주십시오.", zh: "从带有遮雨棚的砖墙通道出口出来后，请直接向前直行。" },
    rg_s3: { ja: "通路を抜けて真っ直ぐ進むと、前方に「大賀薬局」の青い看板幕が見える交差点に出ます。この交差点を、薬局がある正面側へ真っ直ぐ渡ってください。", en: "As you continue straight, you will reach an intersection with a blue \"大賀薬局 (OHGA Pharmacy)\" banner ahead. Cross this intersection straight toward the pharmacy.", ko: "통로를 빠져나와 곧장 직진하다 보면 전방에 “大賀薬局 (OHGA Pharmacy)”의 파란색 간판막이 보이는 교차로가 나옵니다. 이 교차로에서 약국 방향으로 횡단보도를 건너십시오.", zh: "穿过通道并一直向前直行后，您会来到一个十字路口，前方可以看到“大賀薬局 (OHGA Pharmacy)”的蓝色招牌幕。请笔直过马路到药局那一侧。" },
    rg_s4: { ja: "横断歩道を渡ったら左折し、右手に大賀薬局を見ながら道なりに100メートルほど真っ直ぐ進みます。", en: "After crossing the pedestrian walkway, turn left and walk straight for about 100 meters, keeping \"大賀薬局 (OHGA Pharmacy)\" on your right.", ko: "횡단보도를 건넌 후 좌회전하여, 우측에 “大賀薬局 (OHGA Pharmacy)”를 두고 길을 따라 100미터 정도 곧장 직진합니다.", zh: "走过人行横道后请左转，让“大賀薬局 (OHGA Pharmacy)”保持在您的右侧，顺着道路向前直行约100米。" },
    rg_s5: { ja: "進んでいくと、右側に「ローソン吉塚本町店」が見えてきます。このローソンの角を「右」に曲がります。", en: "As you go further, you will see \"ローソン (LAWSON) 吉塚本町店\" on your right. Turn \"right\" at the corner of this LAWSON.", ko: "가시다 보면 우측에 편의점 “ローソン (LAWSON) 吉塚本町店”이 보입니다. 이 “ローソン (LAWSON)” 모퉁이에서 '오른쪽'으로 고개를 돌리십시오.", zh: "继续前行，您的右侧会出现一家便利店“ローソン (LAWSON) 吉塚本町店”。请在“ローソン (LAWSON)”的角口向“右”转。" },
    rg_s6: { ja: "右に曲がった後、150メートルほど真っ直ぐ歩くと、右側に「麺屋 蓮々」というお店が見えてきます。", en: "After turning right, walk straight for about 150 meters, and you will see a restaurant called \"麺屋 蓮々 (Menya Renren)\" on your right.", ko: "오른쪽으로 꺾은 후, 150미터 정도 곧장 걸어가면 우측에 “麺屋 蓮々 (Menya Renren)”이라는 가게가 보입니다.", zh: "右转后，笔直向前步行约150米，您的右侧就会出现一家名为“麺屋 蓮々 (Menya Renren)”的店铺。" },
    rg_s7: { ja: "「麺屋 蓮々」のある交差点を「左折」し、「麺屋 蓮々」を背にする形で50メートルほど進むと、左手に「Nest Glow（グラディート吉塚駅東）」がございます。", en: "Turn \"left\" at the intersection where \"麺屋 蓮々 (Menya Renren)\" is located, and walk straight for about 50 meters with the restaurant behind you. \"Nest Glow (Gradito Yoshizuka Ekihigashi)\" will be on your left.", ko: "“麺屋 蓮々 (Menya Renren)”이 있는 교차로에서 '좌회전'한 뒤, “麺屋 蓮々”을 등지고 50미터 정도 직진하면 좌측에 “Nest Glow (그라디토 요시즈카에키히가시)” 건물이 있습니다.", zh: "在“麺屋 蓮々 (Menya Renren)”所在的十字路口向“左”转，背对着“麺屋 蓮々”的方向向前直行约50米，“Nest Glow（Gradito吉塚站东）”就会出现在您的左手边。" },
    rg_s8: { ja: "建物のエントランス手前に見える機械式駐車場のフェンスに鍵を設置してます。暗証番号****で開錠し、鍵を受け取り、エントランスまでお進み下さい。", en: "The key is located on the fence of the mechanical parking lot just before the building entrance. Open the key box using the code ****, take the key, and proceed to the main entrance.", ko: "건물 공동현관 바로 앞에 보이는 기계식 주차장 펜스에 열쇠가 설치되어 있습니다. 비밀번호 ****을 입력하여 함을 열고 열쇠를 꺼낸 뒤, 공동현관 앞으로 이동해 주십시오.", zh: "房间钥匙设置在大楼入口前方的机械式停车场围栏上。请输入密码 **** 打开钥匙盒并取出钥匙，然后前往大楼正门。" },
    rg_s9: { ja: "エントランス入り口に、部屋番号を入力するパネルがあります。そのパネル内に301号室の鍵を差しこみ、鍵を回していただけると、エントランスの自動ドアが開きます。", en: "At the main entrance, you will see an intercom/keypad panel. Insert the key for room 301 into this panel and turn it to unlock and open the automatic glass doors.", ko: "공동현관 입구에 방 번호를 입력하는 패널이 있습니다. 해당 패널 열쇠 구멍에 301호 열쇠를 꽂고 돌려주시면 공동현관 자동문이 열립니다.", zh: "在大楼正门入口处，有一个输入房间号码的操作面板。请将301号室的钥匙插入该面板的钥匙孔中并转动钥匙，正门自动门就会打开。" },
    rg_s10: { ja: "中へ入り、エレベーターで3階へお上がりください。301号室があなたのお部屋です。お気をつけてお越しくださいませ。", en: "Enter the building and take the elevator to the 3rd floor. Room 301 is your room. We wish you a safe and pleasant journey.", ko: "안으로 들어가 엘리베이터를 타고 3층으로 올라오십시오. 301호가 고객님의 객실입니다. 조심히 오시기 바랍니다.", zh: "进入大楼内，乘坐电梯上3楼。301号室就是您的房间。祝您旅途平安，期待您的光临。" },

    // ==========================================
    // チェックイン・アウト・ルール等
    // ==========================================
    ci_title: { ja: "チェックイン手順", en: "Check-in Steps", ko: "체크인 절차", zh: "入住步骤" },
    ci_badge: { ja: "CHECK-IN | 16:00 (午後4時) ~", en: "CHECK-IN | 4:00 PM ~", ko: "CHECK-IN | 16:00 (오후 4시) ~", zh: "CHECK-IN | 16:00 ~" },
    ci_step1_title: { ja: "前日までに宿泊者名簿の提出", en: "Submit Guest List (by the day before)", ko: "전날까지 숙박객 명부 제출", zh: "请于前一天前提交住客名簿" },
    ci_step1_desc: { ja: "チェックイン前日までに、必ず下記リンクから宿泊者名簿をご提出ください。", en: "Please submit the guest list via the link below by the day before check-in.", ko: "체크인 전날까지 반드시 아래 링크를 통해 숙박객 명부를 제출해 주십시오.", zh: "请务必在入住前一天之前，通过下方链接提交住客名簿。" },
    ci_link_text: { ja: "宿泊者名簿の提出はこちら", en: "Guest Registration Form", ko: "여기에서 숙박객 명부 작성하기", zh: "点击此处提交住客名簿" },
    ci_step2_title: { ja: "アクセス（お部屋までのご案内）", en: "Station → Keybox → Room Entry", ko: "역에서 키박스 및 입실까지의 안내", zh: "从车站 → 钥匙盒 → 入住指南" },
    ci_step2_desc: { ja: "お部屋までの行き方は、アクセスページの「駅→キーボックス→入室までのご案内」をご確認ください。", en: "For directions to your room and keybox retrieval instructions, please check the 'Route Guide from the Station' on the Access page.", ko: "객실까지 오시는 길과 키박스 이용 방법은 '오시는 길' 페이지의 '역에서의 상세 경로 안내'를 확인해 주십시오.", zh: "关于前往房间以及获取钥匙的详细步骤，请查看“交通出行”页面中的“从车站出发的详细路线指引”。" },
    ci_access_link: { ja: "駅→キーボックス→入室までのご案内", en: "See the Route Guide from the Station", ko: "역에서의 경로 안내 보기", zh: "点击此处查看从车站出发的路线指引" },
    ci_keybox_notice: { ja: "※キーボックスの暗証番号は、宿泊者名簿ご回答後に個別にご案内いたします。", en: "※The key box PIN will be provided individually after you submit the guest list.", ko: "※키박스 비밀번호는 숙박객 명부 회신 후 개별적으로 안내해 드립니다.", zh: "※钥匙盒的密码将在您回复住客名簿后单独告知。" },

    co_title: { ja: "チェックアウト手順", en: "Check-out Steps", ko: "체크아웃 절차", zh: "退房步骤" },
    co_badge: { ja: "CHECK-OUT | ~ 10:00 (午前10時)", en: "CHECK-OUT | ~ 10:00 AM", ko: "CHECK-OUT | ~ 10:00 (오전 10시)", zh: "CHECK-OUT | ~ 10:00" },
    co_alert: { ja: "レイトチェックアウトは承れません。次の予約準備があるため時間厳守でお願いします。", en: "Late check-out is not accepted. Please follow the time strictly.", ko: "레이트 체크아웃은 불가능합니다. 다음 객실 청소 일정이 있으므로 시간을 엄수해 주십시오.", zh: "恕不接受延迟退房。因紧接着有保洁工作，请务必严格遵守退房时间。" },
    co_step1: { ja: "使用した食器や調理器具は洗って元の場所にお戻しください。", en: "Wash used dishes and put them back.", ko: "사용한 식기나 조리도구는 설거지 후 제자리에 놓아 주십시오.", zh: "使用过的餐具和厨具请清洗干净并放回原处。" },
    co_step2: { ja: "家具を移動された場合は元の位置にお戻しください。", en: "Return moved furniture to its original place.", ko: "가구를 이동한 경우 원래 위치로 되돌려 놓아 주십시오.", zh: "若移动过家具，请将其恢复至原位。" },
    co_step3: { ja: "ゴミは分別のうえ、指定のごみ箱にお入れください。", en: "Separate trash and put it in the bins.", ko: "쓰레기는 분리수거하여 지정된 쓰레기통에 넣어 주십시오.", zh: "请将垃圾分类，放入指定的垃圾桶内。" },
    co_step4: { ja: "退室時には全ての照明・テレビ・エアコンの電源をお切りください。", en: "Turn off lights, TV, and AC before leaving.", ko: "퇴실 시 모든 조명, TV, 에어컨 전원을 꺼 주십시오.", zh: "离开时，请关闭所有照明、电视和空调的电源。" },
    co_final: { ja: "退室後、メッセージにて「チェックアウト完了」のご連絡をお願いします。", en: "Please send a message 'Check-out completed' after leaving.", ko: "퇴실 후, 예약하신 사이트의 메시지로 '체크아웃 완료'를 보내 주십시오.", zh: "退房离开后，请通过官方平台发送信息通知我们“已完成退房”。" },

    rules_title: { ja: "ハウスルール", en: "House Rules", ko: "숙소 규칙", zh: "住宿规则" },
    rules_desc_header: { ja: "施設基本ルール", en: "Basic Facility Rules", ko: "숙소 이용 기본 수칙", zh: "民宿基本守则" },
    mr1: { ja: "当施設は民泊施設です。", en: "This facility is a Vacation Rental.", ko: "본 숙소는 민박 시설(Vacation Rental)입니다.", zh: "本设施为民宿（Vacation Rental）。" },
    mr2: { ja: "毎日の清掃及びタオルの交換は行っておりません。", en: "Daily cleaning and towel change is not provided.", ko: "매일 객실 청소 및 수건 교체 서비스는 제공되지 않습니다.", zh: "不提供每日客房清扫及更换毛巾的服务。" },
    mr3: { ja: "建物内はすべて禁煙です。", en: "Smoking is not allowed.", ko: "건물 내 모든 구역은 절대 금연입니다.", zh: "大楼及室内全体区域全面禁烟。" },
    mr4: { ja: "パーティーやイベント時は騒音にご配慮ください。", en: "Please be mindful of noise during parties and events.", ko: "파티나 이벤트 소음에 각별히 주의해 주십시오.", zh: "举办派对或聚会时，请注意控制音量，切勿扰邻。" },
    mr5: { ja: "ペットはお断りしています。", en: "Pets are not allowed.", ko: "반려동물 동반은 금지되어 있습니다.", zh: "禁止携带宠物入住。" },
    mr6: { ja: "室内は土足厳禁です。", en: "No shoes inside the room.", ko: "실내에서는 신발을 벗어 주십시오.", zh: "室内严禁穿鞋，请在玄关脱鞋。" },
    mr7: { ja: "22時以降はお静かにお願いします。", en: "Please be quiet after 22:00.", ko: "오후 22:00 이후에는 조용히 해 주십시오.", zh: "晚上 22:00 以后请保持安静。" },
    luggage_title: { ja: "荷物預かりについて", en: "Luggage Storage", ko: "짐 보관 안내", zh: "关于寄放行李" },
    luggage_desc_ci: { ja: "【チェックイン前】お荷物をお預かりすることはできません。", en: "[Before Check-in] Luggage storage is not available.", ko: "[체크인 전] 짐을 맡기실 수 없습니다.", zh: "[入住前] 恕无法提供行李寄存服务。" },
    luggage_desc_co: { ja: "【チェックアウト後】お荷物をお預かりすることはできません。駅周辺のコインロッカー等をご利用ください。", en: "[After Check-out] Luggage storage is not available. Please use station coin lockers.", ko: "[체크아웃 후] 짐을 맡기실 수 없습니다. 역 주변의 코인 락커를 이용해 주십시오.", zh: "[退房后] 恕无法提供行李寄存服务。请使用车站周边的投币式储物柜。" },
    penalty_title: { ja: "⚠️ 重要禁止・注意事項（ペナルティ規定）", en: "⚠️ Regulations & Fines", ko: "⚠️ 중요 금지 사항 및 위약금 규정", zh: "⚠️ 违规罚款与重要注意事项" },
    p_intro: { ja: "故意・過失、規約違反により施設が損害を被った場合、以下の定額違約金および実費全額を請求いたします。", en: "In the event of damage caused by intentional acts, negligence, or violation of the rules, we will charge the following fixed penalty fees plus actual costs.", ko: "고의, 과실 또는 규정 위반으로 인해 숙소에 손해가 발생한 경우, 아래의 정액 위약금 및 실비 전액을 청구합니다.", zh: "如因故意、过失或违反规定给本设施造成损失，我们将收取以下定额违约金及全额实际费用。" },
    p1: { ja: "1. 室内・敷地内での喫煙（電子タバコ・ベランダ含む）: 違約金100,000円 ＋ 特別清掃費・休業損害等の実費", en: "1. Smoking anywhere (including e-cigarettes & balconies): 100,000 JPY penalty + actual costs for deep cleaning & loss of business.", ko: "1. 실내 및 부지 내 흡연 (전자담배·발코니 포함): 위약금 100,000엔 + 특별 청소비 및 휴업 손해 등의 실비", zh: "1. 室内及周边区域吸烟（含电子烟及阳台）：违约金100,000日元 ＋ 深度清洁及停业损失等实际费用" },
    p2: { ja: "2. 無断宿泊・定員超過: 超過1人1泊につき基本宿泊料の2倍 ＋ 即時退去（悪質な場合は警察へ通報）", en: "2. Unauthorized guests / Exceeding capacity: Penalty of double the base rate per extra person/night + immediate eviction (reported to police if malicious).", ko: "2. 무단 숙박 및 정원 초과: 초과 1인 1박당 기본 숙박료의 2배 + 즉시 퇴실 (악질적인 경우 경찰 통보)", zh: "2. 未经登记入住或超员：每超1人1晚收取基本房费2倍的违约金 ＋ 立即退房（情节严重者报警处理）" },
    p3: { ja: "3. 施設・備品の破損・汚損・異臭（嘔吐・血液・過度な香水等）: 違約金30,000円 ＋ 特殊清掃・備品買い替え等の実費", en: "3. Damage, stains, or severe odors (vomit, blood, perfume, etc.): 30,000 JPY penalty + actual costs for deep cleaning & replacement.", ko: "3. 시설·비품 파손, 오손, 악취 (구토, 혈흔, 향수 등): 위약금 30,000엔 + 특수 청소 및 비품 교체 등의 실비", zh: "3. 设施、备品损坏、污损或异味（呕吐物、血液、香水等）：违约金30,000日元 ＋ 特殊清洁及购买替换品等实际费用" },
    p4: { ja: "4. 無断でのペット持ち込み: 違約金50,000円 ＋ 特別清掃費等の実費", en: "4. Unauthorized pets: 50,000 JPY penalty + actual costs for special cleaning.", ko: "4. 무단 반려동물 동반: 위약금 50,000엔 + 특별 청소비 등의 실비", zh: "4. 未经允许携带宠物：违约金50,000日元 ＋ 深度清洁等实际费用" },
    p5: { ja: "5. 無断パーティー・イベント開催（騒音・迷惑行為等）: 違約金50,000円 ＋ 即時退去", en: "5. Unauthorized parties / events (noise issues): 50,000 JPY penalty + immediate eviction.", ko: "5. 무단 파티 및 이벤트 개최 (소음 등): 위약금 50,000엔 + 즉시 퇴실", zh: "5. 未经允许举办派对或活动（噪音等）：违约金50,000日元 ＋ 立即退房" },
    p6: { ja: "6. ゴミの不適切処理・放置（近隣への放置等）: 違約金30,000円 ＋ 特別処分実費", en: "6. Improper trash disposal: 30,000 JPY penalty + actual disposal costs.", ko: "6. 쓰레기 무단 투기 및 방치: 위약금 30,000엔 + 특별 처분 실비", zh: "6. 乱扔或违规处理垃圾：违约金30,000日元 ＋ 垃圾特殊处理实际费用" },
    p7: { ja: "7. スーツケース等の粗大ゴミ放置: 1個あたり10,000円の処分費用", en: "7. Suitcase disposal: 10,000 JPY disposal fee per item left behind.", ko: "7. 캐리어 등 대형 쓰레기 방치: 1개당 10,000엔의 처분 비용", zh: "7. 遗留行李箱等大件垃圾：每个收取10,000日元的处理费" },
    p8: { ja: "8. 鍵、および部屋用ポケットWi-Fiの紛失: それぞれ50,000円の弁償代金", en: "8. Lost keys or pocket Wi-Fi: 50,000 JPY replacement fee each.", ko: "8. 열쇠 및 포켓 Wi-Fi 분실: 각각 50,000엔의 변상금", zh: "8. 遗失钥匙或随身Wi-Fi：每件需赔偿50,000日元" },

    policy_title: { ja: "ポリシー", en: "Policies", ko: "숙소 정책", zh: "住宿政策" },
    p_cxl_title: { ja: "💳 1. キャンセルポリシー", en: "💳 1. Cancellation Policy", ko: "💳 1. 환불 정책", zh: "💳 1. 取消政策" },
    p_cxl_intro: { ja: "予約確定後の変更・取消は、以下の規定（日本時間 JST 15:00基準）に基づきます。", en: "Changes or cancellations after confirmation are subject to the following rules (JST 15:00).", ko: "예약 확정 후의 변경・취소는 다음 규정(일본 시간 JST 15:00 기준)에 따릅니다.", zh: "订单确认后的任何变更或取消，均须遵循以下规定（以日本时间 JST 15:00为准）。" },
    p_cxl_item1: { ja: "宿泊日の30日前 15:00 まで： 無料（全額返金）", en: "Up to 30 days before check-in (by 15:00 JST): Free (Full refund)", ko: "숙박일 30일 전 15:00까지: 무료 (전액 환불)", zh: "入住日30天前 15:00 前： 免费（全额退款）" },
    p_cxl_note1: { ja: "※返金時の決済手数料はお客様負担となる場合があります。", en: "Note: Transaction fees for refunds may be charged to the guest.", ko: "※환불 시 결제 수수료는 게스트 부담이 될 수 있습니다.", zh: "注意：退款时产生的交易手续费可能需由房客承担。" },
    p_cxl_item2: { ja: "宿泊日の30日前 15:00 〜 7日前 15:00 まで： 宿泊料金の50%", en: "Between 30 days (after 15:00) and 7 days (by 15:00) before: 50% of the room fee", ko: "숙박일 30일 전 15:00 ~ 7일 전 15:00까지: 숙박 요금의 50%", zh: "入住日30天前（15:00后）至 7天前（15:00前）： 收取房费的50%" },
    p_cxl_note2: { ja: "※サービス料・清掃料は返金対象外です。", en: "Note: Service and cleaning fees are non-refundable.", ko: "※서비스 수수료 및 청소비는 환불 대상에서 제외됩니다.", zh: "注意：服务费和清洁费不予退还。" },
    p_cxl_item3: { ja: "宿泊日の7日前 15:00 以降： 宿泊料金の100%（返金不可）", en: "From 7 days before check-in (after 15:00): 100% of the room fee (Non-refundable)", ko: "숙박일 7일 전 15:00 이후: 숙박 요금의 100% (환불 불가)", zh: "入住日7天前 15:00 后： 收取房费的100%（不予退款）" },
    p_cxl_note3: { ja: "※ご連絡なくチェックイン予定時刻を過ぎた場合は全額請求となります。", en: "Note: No check-in without notice is treated as a \"No-Show\" and charged in full.", ko: "※사전 연락 없이 예정 시간을 지나면 '노쇼'로 간주하여 전액 청구됩니다.", zh: "注意：若未提前通知且超过预计入住时间未到，将被视为“未入住（No-Show）”，扣除全额费用。" },
    p_ci_title: { ja: "🔑 2. チェックインの仕方", en: "🔑 2. Check-in Instructions", ko: "🔑 2. 체크인 방법", zh: "🔑 2. 入住方式" },
    p_ci_intro: { ja: "当施設は非対面（セルフチェックイン）となっております。", en: "Our property uses a self-check-in system.", ko: "저희 숙소는 비대면 셀프 체크인 시스템입니다.", zh: "本房源采用非面对面的自助入住（Self Check-in）系统。" },
    p_ci_item1: { ja: "宿泊者情報の登録： 日本の法令に基づき、宿泊者全員分の情報登録が義務付けられております。", en: "Guest Registration: By Japanese law, registration of all guests is mandatory.", ko: "투숙객 정보 등록: 일본 법령에 따라 숙박객 전원의 정보 등록이 의무입니다.", zh: "登记住客信息： 根据日本法律，所有住客必须登记个人信息。" },
    p_ci_item2: { ja: "パスポートの送付： 海外のお客様はパスポート情報の写真をご送付ください。", en: "Passport Submission: International Guests must submit photo copies of passports.", ko: "여권 사진 전송: 해외 고객은 여권 사진을 보내주셔야 합니다.", zh: "发送护照照片： 海外住客须发送护照信息照片。" },
    p_ci_item3: { ja: "チェックイン時間： 16:00〜22:00（以降になる場合は事前連絡を）。", en: "Check-in Time: 16:00–22:00 (notify us in advance if after 22:00).", ko: "체크인 시간: 16:00~22:00(이후일 경우 사전 연락).", zh: "入住时间： 16:00 – 22:00（若22:00后抵达请务必提前联系）。" },
    p_key_title: { ja: "🔓 3. キーボックス解錠の手順", en: "🔓 3. How to Open the Key Box", ko: "🔓 3. 키박스 해제 순서", zh: "🔓 3. 钥匙盒开锁步骤" },
    p_key_s1: { ja: "玄関ドアに設置されている「キーボックス」をご確認ください。", en: "Locate the key box on the front entrance door.", ko: "현관문에 설치된 '키박스'를 확인해 주세요.", zh: "请找到安装在大门外侧的“钥匙盒”。" },
    p_key_s2: { ja: "ダイヤルを暗証番号 **** に合わせてください。", en: "Align the dial to the pin code: ****", ko: "다이얼을 비밀번호 **** 에 맞춰주세요.", zh: "将密码拨盘对准：****" },
    p_key_s3: { ja: "ボックスを開けて中の鍵を取り出し、ドアを開けてお入りください。", en: "Open the box, take out the key, and unlock the door.", ko: "박스를 열고 안의 열쇠를 꺼낸 뒤 문을 열고 입장하십시오.", zh: "打开盒子，取出里面的钥匙，开门入户。" },
    p_key_note: { ja: "※詳細な写真付きの案内は、ハウスマニュアル内にも記載がございます。", en: "Note: Detailed instructions with photos are in the House Manual.", ko: "※사진이 포함된 자세한 안내는 하우스 매뉴얼에도 있습니다.", zh: "※包含照片的详细指南也可在《房屋指南》中查看。" },
    p_smoke_title: { ja: "⚠️ 4. 施設内全面禁煙", en: "⚠️ 4. Strictly No Smoking", ko: "⚠️ 4. 숙소 내 전면 금연", zh: "⚠️ 4. 全馆严禁吸烟" },
    p_smoke_body: { ja: "敷地内はすべて「完全禁煙」とさせていただきます。", en: "Smoking is strictly prohibited throughout the premises.", ko: "숙소 전 구역은 완전 금연입니다.", zh: "整个房源区域全面禁烟。" },
    p_co_title: { ja: "⏰ 5. チェックアウトの仕方", en: "⏰ 5. Check-out Instructions", ko: "⏰ 5. 체크아웃 방법", zh: "⏰ 5. 退房方式" },
    p_co_item1: { ja: "チェックアウト時間： 午前10:00まで（厳守）。", en: "Check-out Time: By 10:00 AM (strict).", ko: "체크아웃 시간: 오전 10:00까지(엄수).", zh: "退房时间： 上午 10:00 前（严格执行）。" },
    p_co_list_h: { ja: "■ ご出発前のチェックリスト：", en: "■ Pre-Departure Checklist:", ko: "■ 퇴실 전 체크리스트:", zh: "■ 离店前清理清单：" },
    p_co_s1: { ja: "施錠： ドアを施錠し、鍵を元のキーボックスへご返却ください。", en: "Locking: Lock the door and return the key.", ko: "잠금: 문을 잠그고 열쇠를 반납해 주세요.", zh: "锁门： 请锁好房门，并将钥匙放回原处。" },
    p_co_s2: { ja: "食器類： 使用した食器や調理器具はきれいに洗い、元の場所へお戻しください。", en: "Dishes: Wash used dishes and return them.", ko: "식기류: 사용한 식기를 깨끗이 씻어 제자리에 놓아주세요.", zh: "餐具： 请将使用过的碗筷和厨具清洗干净并放回原位。" },
    p_co_s3: { ja: "家具： 移動させた家具や備品は元の位置にお戻しください。", en: "Furniture: Return any moved furniture to its original position.", ko: "가구: 이동시킨 가구는 원래 위치로 되돌려 주세요.", zh: "家具： 如果移动过家具，请恢复原位。" },
    p_co_s4: { ja: "ゴミ： ゴミは分別し、室内ゴミ箱または指定の袋にまとめてください。", en: "Trash: Separate trash into room bins or designated bags.", ko: "쓰레기: 분리수거하여 지정 쓰레기통에 모아주세요.", zh: "垃圾： 请将垃圾分类，放入客房内垃圾桶。" },
    p_co_s5: { ja: "消電： 電気、テレビ、エアコンなどの電源がオフかご確認ください。", en: "Power Off: Ensure all lights, TV, and AC are off.", ko: "전원 차단: 전등, TV, 에어컨 등의 전원이 꺼졌는지 확인해 주세요.", zh: "关闭电源： 请确保关闭所有电灯、电视、空调电源。" },
    p_co_note: { ja: "■ 荷物預かり： チェックアウト後のお荷物のお預かりは承っておりません。", en: "■ Luggage Storage: Not available after check-out.", ko: "■ 짐 보관: 체크아웃 후 짐 보관 서비스는 제공하지 않습니다.", zh: "■ 行李寄存： 退房后不提供行李寄存服务。" },
    p_lost_title: { ja: "📦 6. お忘れ物や備品に関する大切なお願い", en: "📦 6. Notice on Left-Behind Items & Damages", ko: "📦 6. 분실물 및 비품 관련 안내", zh: "📦 6. 关于遗留物品及设施损坏的重要提示" },
    p_lost_item1: { ja: "お忘れ物の保管： チェックアウト日から1週間保管し、その後廃棄となります。", en: "Storage: Items are kept for 1 week from check-out, then disposed of.", ko: "분실물 보관: 체크아웃일로부터 1주일 보관 후 폐기됩니다.", zh: "遗留物品的保管： 遗留物品自退房日起保管1周，逾期作销毁处理。" },
    p_lost_note1: { ja: "※タオル・下着・冷蔵庫内の食品は衛生上すぐに廃棄させていただきます。", en: "Note: Towels, underwear, and refrigerator food are disposed of immediately.", ko: "※수건, 속옷, 냉장고 내 식품은 위생상 즉시 폐기됩니다.", zh: "注意：出于卫生考虑，毛巾、内衣及冰箱内食物将立即丢弃。" },
    p_lost_item2: { ja: "お忘れ物の返送： 郵送（着払い）をご希望の場合、別途3,000円を申し受けます。", en: "Returns: For mailing (cash on delivery), a 3,000 JPY handling fee applies.", ko: "분실물 반송: 착불 발송 시 별도 3,000엔의 수수료가 청구됩니다.", zh: "寄回遗留物品： 如需寄回（到付），需额外支付3,000日元手续费。" },
    p_lost_item3: { ja: "スーツケースの処分： 放置があった場合、1個10,000円の処分手数料を請求いたします。", en: "Suitcase Disposal: 10,000 JPY per item left behind.", ko: "캐리어 처분: 방치 시 1개당 10,000엔이 청구됩니다.", zh: "行李箱处理： 留在房间将收取每个10,000日元处理费。" },
    p_lost_item4: { ja: "備品の破損・紛失： 実費相当額を請求いたします。ご出発前にお知らせください。", en: "Damage/Loss: Actual repair/replacement cost will be charged.", ko: "비품 파손・분실: 실비 상당액을 청구합니다.", zh: "设施损坏/物品丢失： 若发现损坏，将索赔实际费用。" },

    // ==========================================
    // ごみについて
    // ==========================================
    trash_title: { ja: "ごみについて", en: "Trash", ko: "쓰레기 분리배출", zh: "垃圾分类" },
    trash_rule_h: { ja: "★基本ルール★", en: "★Basic Rules★", ko: "★기본 규칙★", zh: "★基本守则★" },
    trash_main_rule: { ja: "ごみはごみ箱もしくは袋にまとめていただければ、チェックアウト後にまとめて回収いたします。お部屋には燃えるごみ・燃えないごみ・リサイクルごみ用のゴミ箱を設置しておりますので、分別にご協力をお願いいたします。", en: "Please put your garbage in a garbage can or bag and we will collect it together after check-out. There are trash cans in your room for burnable, non-burnable, and recyclable trash, and we ask for your cooperation in separating these items.", ko: "쓰레기는 쓰레기통이나 봉투에 모아 두시면 체크아웃 후 일괄 수거합니다. 객실 내에 가연성, 불연성, 재활용 쓰레기 전용 쓰레기통이 있으니 분리배출에 협조해 주십시오.", zh: "垃圾请分类放入房间内的垃圾桶或袋子里。退房后保洁人员会统一回收。房间内设有可燃、不可燃、可回收垃圾专用桶，请务必配合分类。" },
    fukuoka_trash_h: { ja: "【福岡市指定 燃えるごみ対象項目】", en: "[Fukuoka City Designated Burnable Trash]", ko: "【후쿠오카시 지정 타는 쓰레기 대상】", zh: "【福冈市指定 可燃垃圾范围】" },
    fukuoka_trash_body: { ja: "生ごみ / プラスチックごみ / 紙 / おむつ / 吸い殻 / 木製ごみ", en: "Food waste / Plastics / Papers / Diaper / Cigarette butt / Wooden waste", ko: "음식물 쓰레기 / 플라스틱류 / 종이류 / 기저귀 / 담배꽁초 / 목재류", zh: "厨余生垃圾 / 塑料制品 / 纸类 / 尿不湿 / 烟头 / 木制废弃物" },
    stay_5_7_h: { ja: "■ 5泊から7泊のご滞在の場合", en: "■ For stays of 5 to 7 nights", ko: "■ 5박~7박 장기 투숙의 경우", zh: "■ 连续入住 5 至 7 晚的住客" },
    stay_5_7_body: { ja: "棚に指定燃えるゴミ袋がございます。分別をして物件指定の場所に捨てていただくことができます。", en: "Designated burnable trash bags are located on the shelf. You may sort and dispose of your garbage in the designated area.", ko: "선반 위에 지정 가연성 쓰레기 봉투가 구비되어 있습니다. 분리수거 후 건물 내 지정된 수거장에 직접 버리실 수 있습니다.", zh: "置物架上备有指定的可燃垃圾袋。您可以自行打包分类，并丢弃至公寓指定的垃圾存放处。" },
    stay_1w_h: { ja: "■ 1週間以上のご滞在の場合", en: "■ For stays of 1 week or more", ko: "■ 1주일 이상 투숙의 경우", zh: "■ 连续入住 1 周以上的住客" },
    stay_1w_body: { ja: "お客様にて指定ごみ袋の購入をお願いいたします。その際、分別・曜日の厳守をお願いいたします。", en: "Customers are requested to purchase designated garbage bags. Please sort and adhere strictly to the days.", ko: "고객님께서 직접 시 지정 쓰레기 봉투를 구매하셔야 합니다. 배출 시 분리수거 및 배출 요일을 엄수해 주십시오.", zh: "请自行购买福冈市指定的垃圾袋。丢弃时必须严格遵守垃圾分类与丢弃日期限制。" },

    // ==========================================
    // 設備利用方法 (Amenities / Devices)
    // ==========================================
    amenities_title: { ja: "設備利用方法", en: "How to Use Amenities", ko: "설비 사용방법", zh: "设备使用方法" },
    dev_rice: { ja: "1. 炊飯器（マイコン炊飯ジャー）", en: "1. Rice Cooker", ko: "1. 전기밥솥", zh: "1. 微电脑电饭煲" },
    dev_ih: { ja: "2. IHクッキングヒーター", en: "2. IH Cooktop", ko: "2. IH 인덕션", zh: "2. IH 电磁炉" },
    dev_micro: { ja: "3. 電子レンジ", en: "3. Microwave", ko: "3. 전자레인지", zh: "3. 微波炉" },
    dev_kettle: { ja: "4. 電気ケトル", en: "4. Electric Kettle", ko: "4. 전기포트", zh: "4. 电热水壶" },
    dev_ac: { ja: "5. エアコン", en: "5. Air Conditioner", ko: "5. 에어컨", zh: "5. 空调" },
    dev_intercom: { ja: "6. インターホン", en: "6. Intercom", ko: "6. 인터폰", zh: "6. 壁挂式对讲机" },
    dev_living_water: { ja: "7. リビングの給湯器（お風呂・お湯）", en: "7. Water Heater (Living Room Panel)", ko: "7. 보일러・온수 조절기 (거실 패널)", zh: "7. 热水器（客厅操作面板）" },
    dev_bath_water: { ja: "8. 浴室内の給湯器（お風呂）", en: "8. Water Heater (Bathroom Panel)", ko: "8. 보일러 조절기 (욕실 패널)", zh: "8. 热水器（浴室操作面板）" },
    dev_shower: { ja: "9. シャワー・蛇口の使いかた", en: "9. Shower and Faucet", ko: "9. 샤워기 및 수도꼭지", zh: "9. 淋浴与水龙头" },
    dev_toilet: { ja: "10. 温水洗浄便座（トイレ）", en: "10. Bidet Toilet Seat", ko: "10. 비데 (화장실)", zh: "10. 电子温水冲洗便座" },
    dev_light: { ja: "11. シーリングライト（照明）リモコン", en: "11. Ceiling Light Remote", ko: "11. 조명 리모컨", zh: "11. 吸顶灯遥控器" },
    dev_wash: { ja: "12. ドラム式洗濯乾燥機", en: "12. Washer-Dryer", ko: "12. 드럼 세탁건조기", zh: "12. 滚筒洗衣烘干机" },
    dev_mirror: { ja: "13. 卓上ミラー", en: "13. Tabletop Mirror", ko: "13. 탁상용 거울", zh: "13. 桌面化妆镜" },
    dev_dryer: { ja: "14. ドライヤー", en: "14. Hair Dryer", ko: "14. 헤어드라이어", zh: "14. 吹风机" },
    dev_hairiron: { ja: "15. ヘアアイロン（カール用）", en: "15. Curling Hair Iron", ko: "15. 컬링 헤어 아이론", zh: "15. 卷发棒" },
    dev_tv: { ja: "16. テレビリモコン", en: "16. TV Remote Control", ko: "16. TV 리모컨", zh: "16. 电视遥控器" },

    /* 炊飯器 */
    rice_h1: { ja: "■ 基本の炊飯手順", en: "■ Cooking Instructions", ko: "■ 취사 순서", zh: "■ 煮饭步骤" },
    rice_m1: { ja: "お米をはかる：付属の計量カップすりきり1杯で1合（180mL）です。", en: "Measure Rice: Use the included measuring cup (1 level cup = 1合 / 180mL).", ko: "쌀 계량: 부속된 계량컵으로 윗부분을 깎아 평평하게 담으면 1합(180mL)입니다.", zh: "量米：使用附带的量杯，平杯刮平为1合（180毫升）。" },
    rice_m2: { ja: "お米を洗う：たっぷりの水で手早く洗い、水気を切ります（※お湯は不可）。", en: "Wash Rice: Rinse quickly with plenty of water and drain. (Do not use hot water.)", ko: "쌀 씻기: 많은 양의 물로 재빨리 씻은 후 물기를 뺍니다. (※따뜻한 물은 사용하지 마십시오.)", zh: "淘米：用大量清水快速淘洗并沥干水分（※请勿使用热水）。" },
    rice_m3: { ja: "水加減をする：内釜を水平な場所に置き、お米のカップ数に合わせた目盛の線まで水を入れます。", en: "Add Water: Place the inner pot on a flat surface and add water up to the scale line for the number of cups.", ko: "물 맞추기: 내솥을 평평한 곳에 두고, 쌀의 양에 맞는 눈금선까지 물을 넣습니다.", zh: "加水：将内胆平放，根据米量（合数）加水至对应的刻度线。" },
    rice_m4: { ja: "内釜を本体にセットする：内釜のまわりの水滴をふき取り、本体にまっすぐ入れて、ふたを「カチッ」と音がするまで閉めます。", en: "Set: Wipe off any water from the outside of the inner pot, place it inside, and close the lid until it clicks.", ko: "세팅: 내솥 바깥쪽의 물기를 닦아내고 본체에 똑바로 넣은 후, 뚜껑을 '딸깍' 소리가 날 때까지 닫습니다.", zh: "放入：擦干内胆外部的水滴，放入机身内，盖上盖子直至听到“咔哒”声。" },
    rice_m5: { ja: "メニューを選んでスタート：【メニュー】ボタンで「白米」を選び、【炊飯 スタート】ボタンを押します（目安約50分）。", en: "Start: Press [メニュー (Menu)] to select \"白米 (White Rice)\", then press [炊飯 スタート (Start)] (approx. 50 mins).", ko: "시작: [メニュー(메뉴)] 버튼으로 '白米(백미)'를 선택한 다음, [炊飯 スタート(취사 시작)] 버튼을 누릅니다(약 50분).", zh: "开始：按下 [メニュー（菜单）] 键选择 “白米”，然后按下 [炊飯 スタート（开始煮饭）] 键（约需50分钟）。" },
    rice_h2: { ja: "■ 炊き上がり・保温について", en: "■ After Cooking / Keep Warm", ko: "■ 취사 완료 및 보온에 대하여", zh: "■ 关于煮好与保温" },
    rice_m6: { ja: "炊き上がるとブザーが鳴り、自動的に「保温」に切り替わります。すぐにしゃもじで全体をほぐしてください。【保温/取消】ボタンを押すと停止できます。炊飯中の熱い蒸気にご注意ください。", en: "Once cooked, it automatically switches to \"保温 (Keep Warm)\". Stir and fluff the rice as soon as possible. To stop, press [保温/取消 (Keep Warm/Cancel)]. Do not touch the steam vent.", ko: "취사가 완료되면 자동으로 '保温(보온)'으로 전환됩니다. 가능한 한 빨리 밥을 골고루 섞어주십시오. 중지하려면 [保温/取消] 버튼을 누릅니다. 취사 중에는 증기구에서 뜨거운 증기가 나오므로 손을 대지 마십시오.", zh: "煮好后会自动切换至 “保温” 模式。请尽快用饭勺将米饭翻松。如需停止，请按下 [保温/取消] 键。煮饭过程中蒸汽口会排出高温蒸汽，请勿触摸。" },

    /* IH */
    ih_h1: { ja: "■ 鍋（なべ）の準備", en: "■ Compatible Cookware", ko: "■ 사용 가능한 냄비", zh: "■ 锅具指南" },
    ih_note1: { ja: "底の直径が12cm〜22cmのもの（揚げ物は18cmまで）。中央に載せてください。※土鍋、耐熱ガラス、アルミ箔なべ、底が丸いものは使用できません。", en: "Flat-bottomed pots/pans with a diameter of 12cm to 22cm (up to 18cm for deep frying). Earthenware, glass, and aluminum foil pans cannot be used.", ko: "바닥이 평평하고 지름이 12cm~22cm인 냄비/프라이팬(튀김은 18cm 이하). 뚝배기, 내열 유리, 알루미늄 호일 냄비는 사용할 수 없습니다.", zh: "锅底平坦、直径在 12厘米至22厘米 之间（油炸时为18厘米以内）。不可使用土锅、耐热玻璃锅和铝箔锅。" },
    ih_h2: { ja: "■ 火力調理（ゆでる・煮る・焼く・炒める）", en: "■ General Cooking", ko: "■ 일반 조리", zh: "■ 火力烹饪" },
    ih_s1: { ja: "【電源】ボタンを押します。", en: "Press the [電源 (Power)] button.", ko: "[電源(전원)] 버튼을 누릅니다.", zh: "按下 [電源（电源）] 键。" },
    ih_s2: { ja: "【スタート】ボタンを押すと加熱が始まります。", en: "Press the [スタート (Start)] button to begin heating.", ko: "[スタート(시작)] 버튼을 누르면 가열이 시작됩니다.", zh: "按下 [スタート（开始）] 键开始加热。" },
    ih_s3: { ja: "【＋】または【－】ボタンを押して、お好みの火力に調節してください（ランプ1個/弱 〜 ランプ5個/強）。", en: "Press [＋] or [－] to adjust heat level (1 Light: Low to 5 Lights: High).", ko: "[＋] 또는 [－] 버튼을 눌러 화력을 조절합니다(램프 1개/약 ~ 램프 5개/강).", zh: "按下 [＋] 或 [－] 键调节火力（1个灯：小火 〜 5个灯：大火）。" },
    ih_s4: { ja: "使用後は【電源】ボタンを押して電源を切ってください。", en: "After use, press the [電源 (Power)] button to turn it off.", ko: "사용 후 [電源(전원)] 버튼을 눌러 전원을 꺼주십시오.", zh: "使用后，按下 [電源（电源）] 键关闭。" },
    ih_h3: { ja: "■ 揚げ物調理・保温", en: "■ Deep Frying & Keep Warm", ko: "■ 튀김 및 보온", zh: "■ 油炸烹饪・保温" },
    ih_note2: { ja: "【電源】➔【メニュー】で「揚げ物」や「保温」を選び【スタート】します。【＋】【－】で温度を設定（揚げ物160℃〜200℃ / 保温40℃・60℃・80℃）。※揚げ物中は絶対にその場を離れず、鍋にふたはしないでください。", en: "Deep Frying: [電源] ➔ [メニュー] select \"揚げ物 (Fry)\" ➔ [スタート] ➔ adjust temp with [＋/－] (160-200°C). Do not use a lid and never leave unattended. Keep Warm: [電源] ➔ [メニュー] select \"保温\" ➔ [スタート] ➔ [＋/－] (40/60/80°C).", ko: "튀김: [전원] ➔ [메뉴]에서 '揚げ物' 선택 ➔ [시작] ➔ [＋/－]로 온도 조절(160℃~200℃). 뚜껑을 닫지 말고 자리를 비우지 마십시오. 보온: [전원] ➔ [메뉴]에서 '保温' 선택 ➔ [시작] ➔ [＋/－]로 온도 조절(40/60/80℃).", zh: "油炸：按下 [电源] ➔ [菜单] 选择 “揚げ物（油炸）” ➔ [开始] ➔ 通过 [＋/－] 调节温度（160℃至200℃）。请勿盖锅盖，且人员切勿离开。保温：按下 [电源] ➔ [菜单] 选择 “保温” ➔ [开始] ➔ 通过 [＋/－] 调节温度（40℃ / 60℃ / 80℃）。" },

    /* 電子レンジ */
    micro_h1: { ja: "■ 手動であたためる場合（500W / 650W）", en: "■ Manual Heating (500W / 650W)", ko: "■ 수동으로 데우기 (500W / 650W)", zh: "■ 手动加热（500W / 650W）" },
    micro_s1: { ja: "食品をターンテーブルの中央に置き、ドアを閉めます。", en: "Place food in the center and close the door.", ko: "음식을 회전판 중앙에 두고 문을 닫습니다.", zh: "将食物放在转盘中央，关上炉门。" },
    micro_s2: { ja: "【レンジ】ボタンを押し、お好みの出力を選びます。", en: "Press the [レンジ (Microwave)] button and choose the wattage.", ko: "[レンジ(레인지)] 버튼을 눌러 원하는 출력을 선택합니다.", zh: "按下 [レンジ（微波）] 键，选择所需的功率。" },
    micro_s3: { ja: "【1分】または【10秒】ボタンを繰り返し押して、加熱時間を設定します。", en: "Press [1分 (1 Min)] or [10秒 (10 Sec)] to set the time.", ko: "[1分(1분)] 또는 [10秒(10초)] 버튼을 눌러 시간을 설정합니다.", zh: "按下 [1分] 或 [10秒] 键设置时间。" },
    micro_s4: { ja: "【スタート】ボタンを押すとあたためが始まります。", en: "Press the [スタート (Start)] button.", ko: "[スタート(시작)] 버튼을 누릅니다.", zh: "按下 [スタート（开始）] 键。" },
    micro_h2: { ja: "■ オートメニュー（自動あたため）・解凍", en: "■ Auto Menus & Defrost", ko: "■ 자동 메뉴 및 해동", zh: "■ 自动菜单与解冻" },
    micro_note1: { ja: "【ごはん 150g】や【飲み物】を押し【スタート】します（※飲み物は加熱前後にスプーンでよくかき混ぜてください）。【解凍】はボタンを押し重さを設定してスタートします。", en: "Rice: [ごはん 150g] ➔ [スタート]. Beverages: [飲み物] ➔ [スタート] (stir well before and after). Defrost: [解凍], set weight ➔ [スタート].", ko: "밥: [ごはん 150g] ➔ [시작]. 음료: [음료]로 잔 수 선택 ➔ [시작](데우기 전후 잘 섞어주십시오). 해동: [解凍] ➔ 무게 설정 ➔ [시작].", zh: "米饭：按下 [ごはん 150g（米饭）] ➔ [开始]。饮品：按下 [飲み物（饮品）] ➔ [开始]（加热前后请充分搅拌）。解冻：按下 [解凍]，设置重量 ➔ [开始]。" },
    micro_warn: { ja: "※絶対に使用不可：アルミホイル、金属製の容器、金や銀の飾り模様があるお皿は火花が出て故障や火災の原因になります。", en: "※Metal containers, aluminum foil, and plates with gold/silver accents are strictly prohibited as they cause sparks.", ko: "※금속 용기, 알루미늄 호일, 금이나 은으로 장식된 접시는 스파크가 발생하므로 절대 사용 금지입니다.", zh: "※严禁使用金属容器、铝箔以及带有金银边装饰的盘子，否则会产生火花引发故障。" },

    /* ケトル */
    ket_s1: { ja: "ふたを開けて水を入れる：レバーをつまみ引き上げます。内側の「MAX」線を超えないようにしてください。", en: "Remove the lid by squeezing the levers on both sides. Do not exceed the \"MAX\" line.", ko: "뚜껑 양쪽 레버를 누르며 위로 들어 올립니다. 내부 'MAX' 선을 넘지 않도록 하십시오.", zh: "用手指按住壶盖两侧的手柄，向上提起。加水时切勿超过“MAX”刻度线。" },
    ket_s2: { ja: "ふたを閉める：ふたを上から「カチッ」と音がするまでしっかりと押し込んで閉めます。", en: "Push the lid down until it clicks securely.", ko: "뚜껑을 '딸깍' 소리가 날 때까지 닫습니다.", zh: "盖上壶盖直至听到“咔哒”声。" },
    ket_s3: { ja: "本体をセットしてコンセントに差す：電源プレートに本体をしっかりと載せ、電源プラグを差し込みます。", en: "Place the kettle on the power base and plug it in.", ko: "전원 베이스 위에 본체를 올리고 플러그를 콘센트에 꽂습니다.", zh: "将水壶放在电源底座上，并将插头插入插座。" },
    ket_s4: { ja: "お湯を沸かす：【電源スイッチ】を下に押し下げます。ランプが点灯し、湯沸かしが始まります。", en: "Press down the [Power Switch] near the handle. The light turns on and it starts boiling.", ko: "손잡이 부근의 [전원 스위치]를 아래로 누릅니다. 램프가 켜지며 물이 끓기 시작합니다.", zh: "向下按下手柄附近的 [电源开关]。指示灯亮起，开始烧水。" },
    ket_s5: { ja: "沸騰・自動OFF：お湯が沸くと、自動的にスイッチが上がり、ランプが消えて電源が切れます。", en: "Once boiled, the switch flips up automatically and the power shuts off.", ko: "물이 끓으면 스위치가 자동으로 올라가고 전원이 차단됩니다.", zh: "水烧开后，开关会自动弹起，电源自动切断。" },
    ket_warn: { ja: "※湯沸かし中や直後は、蒸気口付近が非常に熱くなりますので手を触れないでください。", en: "※Steam near the outlet is extremely hot. Do not touch during or right after boiling.", ko: "※물을 끓이는 중이나 직후에는 증기구 부근이 매우 뜨거우므로 손을 대지 마십시오.", zh: "※烧水中或刚烧好时，蒸汽口附近非常烫，请勿触摸。" },

    /* エアコン */
    ac_main_desc: { ja: "壁のリモコンで、お好みの運転モードや温度を設定してください。", en: "Please use the wall-mounted remote control to set your preferred operation mode and temperature.", ko: "벽에 있는 리모컨으로 원하시는 운전 모드와 온도를 설정해 주세요.", zh: "请使用墙壁上的遥控器设定您喜欢的运行模式或温度。" },
    ac_mode_desc: { 
        ja: "【冷房】/【暖房】/【除湿】/【自動】：それぞれのボタンを押すと、そのモードで運転が始まります。", 
        en: "[Cool] / [Heat] / [Dry] / [Auto]: Press the respective button to start operating in that mode.", 
        ko: "【냉방】 / 【난방】 / 【제습】 / 【자동】: 각 버튼을 누르면 해당 모드로 운전이 시작됩니다.", 
        zh: "【制冷】/【制热】/【除湿】/【自动】：按下相应按钮即可开始该模式的运行。" 
    },
    ac_stop_desc: { 
        ja: "【停止】：運転を止めるときに押します。", 
        en: "[Off]: Press to stop operation.", 
        ko: "【정지】: 운전을 멈출 때 누릅니다.", 
        zh: "【停止】：需要停止运行时按下此键。" 
    },
    ac_temp_desc: { 
        ja: "【温度 ▲ / ▼】：お部屋の温度を調節します。", 
        en: "[Temp ▲ / ▼]: Adjusts the room temperature.", 
        ko: "【온도 ▲ / ▼】: 방 온도를 조절합니다.", 
        zh: "【温度 ▲ / ▼】：调节房间温度。" 
    },
    ac_speed_desc: { 
        ja: "【風量】：風の強さを切り替えます。", 
        en: "[Fan Speed]: Changes the airflow strength.", 
        ko: "【풍량】: 바람의 세기를 전환합니다.", 
        zh: "【风量】：切换风力大小。" 
    },
    ac_updown_desc: { 
        ja: "【上下】：風の向き（上下）を調節します。", 
        en: "[Up/Down]: Adjusts the vertical airflow direction.", 
        ko: "【상하】: 바람의 방향(상하)을 조절합니다.", 
        zh: "【上下】：调节风向（上下）。" 
    },
    ac_lr_desc: { 
        ja: "【左右】：風の向き（左右）を調節します。", 
        en: "[Left/Right]: Adjusts the horizontal airflow direction.", 
        ko: "【좌우】: 바람의 방향(좌우)을 조절합니다.", 
        zh: "【左右】：调节风向（左右）。" 
    },
    ac_note_gradito: { ja: "※床暖房はございません。エアコンを使用してお部屋の温度調整をしてください。※電源を入れてから風が出てくるまでに少し時間がかかりますが、故障ではございません。", en: "※There is no floor heating. Please use the air conditioner. ※It takes a little time for wind to come out after power on; this is not a malfunction.", ko: "※온돌 시스템은 없습니다. 에어컨을 사용해 주십시오. ※전원을 켠 후 바람이 나오기까지 시간이 걸리나 고장이 아닙니다.", zh: "※本房源未配备地暖。请使用空调调节房间温度。※开机后到出风需要一点时间，并非故障。" },

    /* インターホン */
    int_guest: { ja: "来客への対応：チャイムが鳴ったら、画面下の【通話】ボタンを押すと、ハンズフリーで会話ができます。", en: "Answering Guests: When the chime rings, press [通話 (Talk)] to speak hands-free.", ko: "방문객 응대: 초인종이 울리면 화면 아래의 【通話(통화)】 버튼을 누르고 핸즈프리로 대화할 수 있습니다.", zh: "回应访客：当门铃响起时，按下屏幕下方的【通话】键，即可进行免提通话。" },
    int_end: { ja: "通話を終える：会話が終わったら、右下の【終了】ボタンを押してください。", en: "Ending a Call: Press [終了 (End)] on the bottom right when finished.", ko: "통화 종료: 대화가 끝나면 우측 아래의 【終了(종료)】 버튼을 눌러주십시오.", zh: "结束通话：通话结束后，请按下右下方的【終了（结束）】键。" },
    int_unlock: { ja: "オートロックの解錠：通話中に左下の【解錠】ボタンを押すと、ドアが開きます。", en: "Unlocking the Door: Press [解錠 (Unlock)] on the bottom left while talking.", ko: "공동현관문 해제: 통화 중에 좌측 아래의 【解錠(해제)】 버튼을 누르면 문이 열립니다.", zh: "开启一楼大门锁：在通话过程中，按下左下方的【解錠（开锁）】键。" },
    int_emergency: { ja: "※トラブルや緊急時は、右上にある【非常】ボタンを押してください。", en: "※In case of an emergency, press [非常 (Emergency)] on the top right.", ko: "※위급 상황 시에는 우측 상단의 【非常(비상)】 버튼을 눌러주십시오.", zh: "※如遇突发状况或紧急情况，请按下右上角的【非常（紧急）】键。" },

    /* 給湯・シャワー関係 */
    lw_h1: { ja: "■ お湯を出す（基本操作）", en: "■ Basic Operation (Turning on hot water)", ko: "■ 온수 사용 (기본 조작)", zh: "■ 使用热水（基本操作）" },
    lw_s1: { ja: "パネル中央下の【運転】ボタンを押して、電源を入れます。", en: "Press the [運転 (Power)] button at the bottom center.", ko: "패널 아래의 【運転(전원)】 버튼을 눌러 전원을 켭니다.", zh: "按下操作面板正下方的【運転（电源）】键开启系统。" },
    lw_s2: { ja: "中央の【 ▲ / ▼ 】ボタンを押し、お好みの給湯温度を設定してください。", en: "Press the center [ ▲ / ▼ ] buttons to set your preferred temperature.", ko: "중앙의 【 ▲ / ▼ 】 버튼을 눌러 원하는 온수 온도를 설정합니다.", zh: "按下中央的【 ▲ / ▼ 】键，设定您需要的水温。" },
    lw_h2: { ja: "■ お風呂にお湯をためる・温め直す", en: "■ Filling the Bathtub & Reheating", ko: "■ 욕조에 물 받기 및 재가열", zh: "■ 浴缸自动放水与再加热" },
    lw_auto_desc: { ja: "右下の【ふろ自動】ボタンを押すと、自動でお湯はりが始まります。お湯が冷めたときは、右中央の【追いだき】ボタンを押してください。", en: "Press [ふろ自動 (Auto Bath)] to fill the tub. If the water gets cold, press [追いだき (Reheat)].", ko: "우측 아래의 【ふろ自動】 버튼을 누르면 자동으로 물받기가 시작됩니다. 물이 식었을 때는 【追いだき】 버튼을 눌러주십시오.", zh: "按下右下角的【ふろ自動】键自动放水。若热水变凉，请按下右侧中央的【追いだき】键。" },

    bw_desc: { ja: "浴室内の壁にある操作パネルです。", en: "This is the control panel located on the bathroom wall.", ko: "욕실 내부 벽면에 있는 조작 패널입니다.", zh: "这是位于浴室墙壁上的操作面板。" },
    bw_base: { ja: "お湯を出す（基本操作）：運転ボタンを押して電源を入れます。中央の ▲ / ▼ ボタンで温度を設定します。", en: "Hot Water (Basic): Press 運転 (Power). Use center ▲ / ▼ to adjust temperature.", ko: "온수 사용 (기본 조작): 運転(전원) 버튼을 눌러 전원을 켭니다. 중앙의 ▲ / ▼ 버튼으로 온도를 설정합니다.", zh: "使用热水（基本操作）：按下 運転（电源）键。按下中央的 ▲ / ▼ 键调节温度。" },
    bw_auto: { ja: "お風呂にお湯をためる：ふろ自動ボタンを押すと、自動でお湯はりが始まります。", en: "Filling the Bathtub: Press ふろ自動 (Auto Bath) to automatically fill.", ko: "욕조에 물 받기: ふろ自動 버튼을 누르면 자동으로 급수됩니다.", zh: "浴缸自动放水：按下 ふろ自動 键，系统将自动向浴缸内放水。" },
    bw_reheat: { ja: "お湯を温め直す：お風呂のお湯が冷めたときは、追いだきボタンを押してください。", en: "Reheating: If the water gets cold, press 追いだき (Reheat).", ko: "욕조 물 다시 데우기: 욕조의 물이 식었을 때는 追いだき(재가열) 버튼을 눌러주십시오.", zh: "浴缸热水再加热：如果浴缸内的热水变凉了，请按下 追いだき 键。" },
    bw_add: { ja: "お湯や水を足す：たし湯ボタンでお湯を、たし水ボタンで水を足すことができます。", en: "Adding Water: Press たし湯 to add hot water, たし水 to add cold water.", ko: "온수/냉수 추가: たし湯 버튼으로 온수를, たし水 버튼으로 냉수를 추가할 수 있습니다.", zh: "注入热水或冷水：按下 たし湯 加热水，按下 たし水 加冷水。" },
    bw_call: { ja: "スタッフを呼ぶ：気分が悪くなったときなどは、呼出ボタンを押してください。", en: "Calling for Assistance: Press 呼出 (Call) if you feel unwell.", ko: "직원 호출: 욕실에서 몸 상태가 좋지 않을 때 등은 呼出(호출) 버튼을 눌러주십시오.", zh: "呼叫：如果您在浴室感到身体不适，请按下 呼出（呼叫）键。" },

    sh_desc: { ja: "浴室内のシャワー水栓の操作方法です。", en: "This is how to operate the shower fixture in the bathroom.", ko: "욕실 내 샤워 수전의 조작 방법입니다.", zh: "这是浴室淋浴水栓的操作方法。" },
    sh_handle_r: { ja: "お湯の出しかた（右側のハンドル）：ハンドルを上に回すとシャワーから、下に回すと下の蛇口からお湯が出ます。中央の「止」で水が止まります。", en: "Water (Right Handle): Rotate up for the shower, down for the faucet. Center (止/Stop) to turn off.", ko: "물 틀기 (우측 핸들): 핸들을 위로 돌리면 샤워기, 아래로 돌리면 하단 수도꼭지에서 물이 나옵니다. '止(정지)' 위치로 돌리면 멈춥니다.", zh: "出水控制（右侧手柄）：向上旋转由淋浴出水，向下旋转由下方水龙头出水。转回中央“止”位置关闭。" },
    sh_handle_l: { ja: "温度の調節（左側のハンドル）：「40」の目盛を目安にハンドルを回して調節してください。", en: "Temperature (Left Handle): Rotate using the \"40\" mark as a guide.", ko: "온도 조절 (좌측 핸들): '40' 눈금을 기준으로 핸들을 돌려 조절해 주십시오.", zh: "温度调节（左侧手柄）：请以“40”刻度为基准，旋转手柄调节温度。" },
    sh_warn_text: { ja: "※40℃以上の高温にする場合は、ハンドルのグレーのボタン（ストッパー解除）を押しながら回してください。※火傷防止のため、ハンドルはゆっくり動かし、必ず手で温度を確かめてからご使用ください。", en: "To set above 40°C, turn the handle while pressing the gray safety-lock button. Adjust slowly and always check the water temperature by hand first.", ko: "40℃ 이상으로 설정할 때는 핸들의 회색 버튼(스토퍼 해제)을 누른 상태에서 돌려주십시오. 화상 방지를 위해 천천히 움직이고 반드시 손으로 온도를 확인해 주십시오.", zh: "如需调至40℃以上，请按住手柄上的灰色按钮并同时旋转。为防止烫伤，请缓慢调节，使用前用手测试确认水温。" },

    /* トイレ */
    toilet_desc: { ja: "便座の右側にある操作パネルをご利用ください。", en: "Use the control panel located on the right side of the toilet seat.", ko: "변기 우측에 있는 조작 패널을 이용해 주십시오.", zh: "请使用马桶座右侧的操作面板。" },
    t_wash: { ja: "【おしり】：おしりを洗浄します。【ビデ】：女性用の洗浄機能です。", en: "[おしり (Rear)]: Rear wash. [ビデ (Bidet)]: Feminine wash.", ko: "【おしり(세정)】 / 【비데(비데)】 기능.", zh: "【おしり（臀部冲洗）】/【ビデ（妇洗）】。" },
    t_stop: { ja: "【停止】（赤色マーク）：洗浄を止めるときに押します。", en: "[停止 (Stop)] (Red mark): Press to stop the spray.", ko: "【停止(정지)】(빨간색 표시): 세정을 멈출 때 누릅니다.", zh: "【停止】（红色标记）：停止冲洗。" },
    t_pressure: { ja: "【洗浄強さ 弱 / 強】：お好みの水圧に調節します。", en: "[洗浄強さ (Pressure) 弱/強]: Adjusts spray pressure.", ko: "【洗浄強さ 弱 / 強】: 원하는 수압으로 조절합니다.", zh: "【洗浄強さ 弱 / 強】：调节冲洗的水压大小。" },
    t_temp: { ja: "【温度設定（温水 / 便座）】：ボタンを押すごとに、シャワーの温度や便座の温度を調節できます（低 〜 高）。", en: "[温度設定 (Temp) 温水/便座]: Adjusts water spray or seat warmth (低 Low to 高 High).", ko: "【温度設定(온수 / 便座)】: 버튼을 누를 때마다 세정 수온이나 변기 시트 온도를 조절할 수 있습니다(低 ~ 高).", zh: "【温度設定（水温 / 便座）】：可将冲洗水温或马桶座圈温度调节至您满意的舒适度（低 〜 高）。" },

    /* シーリングライト（３種分割） */
    light_bed_title: { 
        ja: "①照明リモコン 寝室（黒色）", 
        en: "① Bedroom Remote Control (Black)", 
        ko: "① 침실 리모컨 (검은색)", 
        zh: "① 卧室遥控器（黑色）" 
    },
    light_bed_onoff: { 
        ja: "上部の [ I ] でON / [ O ] でOFF", 
        en: "Turn On/Off: Press [ I ] at the top for ON / [ O ] for OFF.", 
        ko: "전원 ON / OFF: 상단의 [ I ] 버튼으로 ON / [ O ] 버튼으로 OFF.", 
        zh: "开关: 按下顶部的 [ I ] 开灯 / 按下 [ O ] 关灯。" 
    },
    light_bed_bright: { 
        ja: "[十字ボタン上] で強く / [十字ボタン下] で弱く", 
        en: "Brightness: Press [Up Button] for brighter / [Down Button] for dimmer.", 
        ko: "밝기 조절: [십자 버튼 위] 버튼으로 밝게 / [십자 버튼 아래] 버튼으로 어둡게.", 
        zh: "调节亮度: 按下 [十字键 上] 变亮 / 按下 [十字键 下] 变暗。" 
    },
    light_bed_color: { 
        ja: "[十字ボタン右] で白く / [十字ボタン左] でオレンジ色", 
        en: "Color Temp: Press [Right Button] for cool white / [Left Button] for warm orange.", 
        ko: "색상 조절: [십자 버튼 오른쪽] 하얗게(주광색) / [십자 버튼 왼쪽] 주황색(전구색).", 
        zh: "调节色温: 按下 [十字键 右] 偏白光 / 按下 [十字键 左] 偏暖色光（暖橙色）。" 
    },
    light_bed_night: { 
        ja: "上部の[ O ] を3秒以上長押しすると就寝用の薄暗い光になります", 
        en: "Night Light: Press and hold [ O ] at the top for >3 sec to switch to dim light.", 
        ko: "취침등: 상단의 [ O ] 버튼을 3초 이상 길게 누르면 은은한 조명으로 바뀝니다.", 
        zh: "夜灯模式: 长按顶部的 [ O ] 3秒以上，可切换为适合睡觉的微光。" 
    },

    light_liv_title: { 
        ja: "②照明リモコン リビング（白色）", 
        en: "② Living Room Remote Control (White)", 
        ko: "② 거실 리모컨 (흰색)", 
        zh: "② 客厅遥控器（白色）" 
    },
    light_liv_onoff: { 
        ja: "上部の [点灯] でON / [消灯] でOFF", 
        en: "Turn On/Off: Press [点灯 (On)] at the top for ON / [消灯 (Off)] for OFF.", 
        ko: "전원 ON / OFF: 상단의 [点灯(점등)] 버튼으로 ON / [消灯(소등)] 버튼으로 OFF.", 
        zh: "开关: 按下顶部的 [点灯] 开灯 / 按下 [消灯] 关灯。" 
    },
    light_liv_bright: { 
        ja: "中央の【明】で明るく/【暗】で暗くなります", 
        en: "Brightness: Press [明 (Brighter)] in the center for brighter / [暗 (Dimmer)] for dimmer.", 
        ko: "밝기 조절: 중앙의 [明(밝음)] 버튼으로 밝게 / [暗(어두움)] 버튼으로 어둡게.", 
        zh: "调节亮度: 按下中间的 [明] 变亮 / 按下 [暗] 变暗。" 
    },
    light_liv_color: { 
        ja: "中央の【暖色】でオレンジ/【白色】で白くなります", 
        en: "Color Temp: Press [暖色 (Warm)] for warm orange / [白色 (Cool)] for cool white.", 
        ko: "색상 조절: 중앙의 [暖色(난색)] 버튼으로 주황색 / [白色(백색)] 버튼으로 하얗게.", 
        zh: "调节色温: 按下中间的 [暖色] 偏暖色光 / 按下 [白色] 偏白光。" 
    },
    light_liv_night: { 
        ja: "下部【常夜灯】の上半分で豆電球の明るさに / 下半分で明るさ10％に調整", 
        en: "Night Light: Press upper half of [常夜灯] for night bulb / lower half for 10% brightness.", 
        ko: "취침등: 중앙 하단 [常夜灯] 위쪽을 누르면 미등 밝기 / 아래쪽을 누르면 밝기 10% 조절.", 
        zh: "夜灯模式: 按下中下部 [常夜灯] 上半部分调整为小夜灯 / 下半部分调整为10%亮度。" 
    },
    light_liv_preset: { 
        ja: "電球色/昼光色/昼白色：特定の色に直接調整できます", 
        en: "Preset Modes (電球色/昼光色/昼白色): Select specific color temperature presets.", 
        ko: "색상 지정: 원하시는 특정 조명 색상(전구색/주광색/주백색)으로 직접 조절 가능.", 
        zh: "特定色温: 可直接调整为特定的光色（暖光/冷白光/自然白光）。" 
    },
    light_liv_timer: { 
        ja: "15分/30分/60分：消灯するタイマーの設定ができます", 
        en: "Timer: Set an auto-off timer (15 / 30 / 60 min).", 
        ko: "타이머: 소등 타이머(15분 / 30분 / 60분)를 설정할 수 있습니다.", 
        zh: "定时关灯: 可设置自动关灯定时器（15分/30分/60分）。" 
    },

    light_kit_title: { 
        ja: "③照明リモコン キッチン（四角 白色）", 
        en: "③ Kitchen Remote Control (Square, White)", 
        ko: "③ 주방 리모컨 (사각형, 흰색)", 
        zh: "③ 厨房遥控器（方形 白色）" 
    },
    light_kit_onoff: { 
        ja: "上部の【点灯】でON / 【消灯】でOFF", 
        en: "Turn On/Off: Press [点灯 (On)] for ON / [消灯 (Off)] for OFF.", 
        ko: "전원 ON / OFF: 상단의 [点灯(점등)] 버튼으로 ON / [消灯(소등)] 버튼으로 OFF.", 
        zh: "开关: 按下顶部的 [点灯] 开灯 / 按下 [消灯] 关灯。" 
    },
    light_kit_full: { 
        ja: "下部中央部の【全灯】で最大の明るさになります", 
        en: "Full Brightness: Press [全灯 (Full Light)] for maximum brightness.", 
        ko: "전체 점등: 하단 중앙의 [全灯(전등)] 버튼으로 최대 밝기 설정.", 
        zh: "全亮: 按下中下部的 [全灯] 调整至最高亮度。" 
    },
    light_kit_bright: { 
        ja: "中央部の【明るい】で明るく / 【暗い】で暗くなります", 
        en: "Brightness: Press [明るい (Brighter)] for brighter / [暗い (Dimmer)] for dimmer.", 
        ko: "밝기 조절: 중앙의 [明るい(밝게)] 버튼으로 밝게 / [暗い(어둡게)] 버튼으로 어둡게.", 
        zh: "调节亮度: 按下中间的 [明るい] 变亮 / 按下 [暗い] 变暗。" 
    },
    light_kit_color: { 
        ja: "中央部の【昼光色】で白く / 【電球色】でオレンジになります", 
        en: "Color Temp: Press [昼光色 (Cool White)] for white / [電球色 (Warm White)] for orange.", 
        ko: "색상 조절: 중앙의 [昼光色(주광색)] 버튼으로 하얗게 / [電球色(전구색)] 버튼으로 주황색.", 
        zh: "调节色温: 按下中间的 [昼光色] 偏白光 / 按下 [电球色] 偏暖色光。" 
    },
    light_kit_night: { 
        ja: "下部の【常夜灯】で薄暗い光になります", 
        en: "Night Light: Press [常夜灯 (Night Light)] at the bottom for a dim night light.", 
        ko: "취침등: 하단의 [常夜灯(상야등)] 버튼으로 은은한 조명 설정.", 
        zh: "夜灯模式: 按下下部的 [常夜灯] 切换为微弱微光。" 
    },
    light_kit_timer: { 
        ja: "15分/30分：消灯するタイマーの設定ができます", 
        en: "Timer: Set an auto-off timer (15 / 30 min).", 
        ko: "타이머: 소등 타이머(15분 / 30분)를 설정할 수 있습니다.", 
        zh: "定时关灯: 可设置自动关灯定时器（15分/30分）。" 
    },
    light_kit_50: { 
        ja: "50％：明るさを約50％に設定できます", 
        en: "50% Brightness: Press [50%] to set brightness to approximately 50%.", 
        ko: "50% 밝기: 밝기를 약 50%로 설정할 수 있습니다.", 
        zh: "50% 亮度: 按下 [50%] 可将亮度设置为约 50%。" 
    },

    /* 洗濯乾燥機 */
    wash_s1: { 
        ja: "洗濯物を入れる：ドアを開け、洗濯物をいれてドアを閉めます。", 
        en: "Load the laundry: Open the door, put in your laundry, and close the door firmly.", 
        ko: "빨랫감 넣기: 문을 열고 빨랫감을 넣은 후 문을 닫습니다.", 
        zh: "放入衣物： 打开机门，放入待洗衣物，然后将门关紧。" 
    },
    wash_s2: { 
        ja: "洗剤を入れる：左上の洗剤ケースを引き出し、左側スペースに洗剤、真ん中スペースに柔軟剤を入れます。（※予洗時は右側にも洗剤を追加）", 
        en: "Add detergent: Pull out the top-left drawer. Add detergent to the left compartment and softener to the middle. (For Pre-wash, add detergent to the right as well.)", 
        ko: "세제 넣기: 왼쪽 상단 세제함을 열고, 왼쪽 칸에 세제, 중앙 칸에 섬유유연제를 넣습니다. (※애벌세탁 시 오른쪽 칸에도 세제 투입)", 
        zh: "添加洗涤剂： 拉开左上角洗涤剂抽屉，左侧格放洗衣液，中间格放柔顺剂。（※若选择预洗，右侧格也需加洗涤剂）" 
    },
    wash_s3: { 
        ja: "コースを選ぶ：【電源】を入れ、中央の【ダイヤルつまみ】を回してコース（「ミックス」「すすぎ＋脱水」「乾燥」など）を選びます。", 
        en: "Select a cycle: Press the [Power] button, then turn the central dial to select your cycle (e.g., \"Mix\", \"Rinse+Spin\", \"Dry\").", 
        ko: "코스 선택: 【전원】 버튼을 켜고, 중앙 다이얼 노브를 돌려 원하는 코스(‘혼합’, ‘행굼+탈수’, ‘건조’ 등)를 선택합니다.", 
        zh: "选择模式： 按下【电源】键，旋转中央控制旋钮选择所需模式（如：“混合”、“漂洗+脱水”、“烘干”等）。" 
    },
    wash_s4: { 
        ja: "スタート：【スタート/一時停止】ボタンを押して、洗濯を開始します。", 
        en: "Start: Press the [Start / Pause] button to begin the cycle.", 
        ko: "시작: 【시작/일시정지】 버튼을 눌러 세탁을 시작합니다.", 
        zh: "启动： 按下【启动/暂停】按钮开始洗衣。" 
    },
    wash_s5: { 
        ja: "チャイルドロック：コース開始後、「脱水回転数」＋「温度」ボタンを同時に2秒以上長押しすると、チャイルドロックのオン/オフを設定できます。（※電源以外の操作不可になります）", 
        en: "Child Lock: After starting, press and hold both [Spin Speed] and [Temperature] buttons for >2s to toggle Child Lock. (Locks all controls except Power).", 
        ko: "차일드락: 코스 시작 후 [탈수 회전수] + [온도] 버튼을 동시에 2초 이상 길게 누르면 차일드락 ON/OFF 가능. (※전원 외 조작 불가)", 
        zh: "童锁功能： 程序启动后，同时长按【脱水转速】和【温度】按钮2秒以上即可开启/关闭。（※开启后除电源键外均无法操作）" 
    },

    /* 卓上ミラー */
    mirror_h1: { ja: "■ 使いかた", en: "■ How to Use", ko: "■ 사용 방법", zh: "■ 使用方法" },
    mirror_s1: { ja: "真ん中のボタンを押して点灯します。", en: "Press the center button to turn on the light.", ko: "가운데 버튼을 눌러 조명을 켭니다.", zh: "按下中间按钮即可开灯。" },
    mirror_s2: { ja: "ボタンを長く押すと、お好みの明るさに細かく調整できます。", en: "Press and hold the button to fine-tune the brightness.", ko: "버튼을 길게 누르면 원하는 밝기로 세밀하게 조절할 수 있습니다.", zh: "长按按钮，可将亮度调节至您喜欢的程度。" },
    mirror_s3: { ja: "ボタンをタッチするだけで3色の照明モードを切り替えられます。", en: "Tap the button to switch between three lighting modes.", ko: "버튼을 가볍게 터치하면 3가지 조명 모드를 전환할 수 있습니다.", zh: "轻触按钮即可自由切换三种灯光模式。" },
    mirror_s4: { ja: "ボタンを押すと消灯します。", en: "Press the button again to turn off.", ko: "버튼을 다시 누르면 조명이 꺼집니다.", zh: "再次按下按钮即可关灯。" },
    mirror_h2: { ja: "■ 充電方法", en: "■ Charging", ko: "■ 충전 방법", zh: "■ 充电方法" },
    mirror_c1: { ja: "Type-Cケーブルを電源アダプターまたはPCに接続して充電します。", en: "Connect a Type-C cable to a power adapter or PC to charge.", ko: "Type-C 케이블을 전원 어댑터 또는 PC에 연결하여 충전합니다.", zh: "使用 Type-C 充电线连接电源适配器或电脑进行充电。" },
    mirror_c2: { ja: "充電中は充電ランプが赤色、完了すると青色になります。", en: "The indicator lights up red while charging and turns blue when complete.", ko: "충전 중에는 표시등이 빨간색, 완료되면 파란색으로 바뀝니다.", zh: "充电时指示灯显示红色，充电完成后变为蓝色。" },
    mirror_warn: { ja: "※充電する前に必ずボタンをOFFにしてください。", en: "※Always turn off the power before charging.", ko: "※충전하기 전에 반드시 전원을 꺼 주세요.", zh: "※充电前请务必先关闭电源。" },

    /* ドライヤー */
    dryer_s1: { 
        ja: "タオルドライ後、手グシまたはブラシで髪のもつれを取ります。", 
        en: "Prep your hair: Towel-dry your hair and gently remove any tangles using a comb or your fingers.", 
        ko: "타월 드라이 및 머릿결 정돈: 타월로 머리의 물기를 털어낸 후, 손가락이나 빗으로 엉킨 머리를 풀어줍니다.", 
        zh: "毛巾擦干/梳理髪丝： 用毛巾擦干头发后，用手梳或梳子将头发梳理顺畅。" 
    },
    dryer_s2: { 
        ja: "電源プラグをコンセントに差し込みます。", 
        en: "Plug in: Insert the power plug into an electrical outlet.", 
        ko: "플러그 연결: 전원 플러그를 콘센트에 꽂습니다.", 
        zh: "插入电源： 将电源插头插入插座。" 
    },
    dryer_s3: { 
        ja: "電源/温冷切り替えスイッチを【HOT】にします。\n・本体側面のインジケーターが点灯したあと、温風が出ます。\n・スタンバイ状態のまま約60秒操作しないと、自動的に電源がオフになります。", 
        en: "Power On: Slide the Switch to [HOT].\nWarm air will start blowing after the indicator light turns on. (Turns off automatically if inactive for ~60s).", 
        ko: "전원 ON: 전원/온·냉풍 전환 스위치를 【HOT】으로 설정합니다.\n표시등 점등 후 따뜻한 바람이 나옵니다. (대기 상태에서 약 60초간 조작이 없으면 자동 OFF)", 
        zh: "开启电源： 将 冷热切换开关 拨至 【HOT】。\n侧面指示灯亮起后会吹出温风。（待机超60秒无操作将自动关闭）" 
    },
    dryer_s4: { 
        ja: "送風モードを選びます。\n[HIGH]（温風:強）/ [LOW]（温風:弱）/ [COOL]（冷風）", 
        en: "Select Airflow Mode: Press Mode Button to cycle through:\n[HIGH] (Strong) / [LOW] (Weak) / [COOL]", 
        ko: "송풍 모드 선택: [모드 버튼]을 눌러 모드를 선택합니다.\n[HIGH](강풍) / [LOW](약풍) / [COOL](냉풍)", 
        zh: "选择出风模式： 按 [模式按钮] 切换出风模式：\n[HIGH]（强温风） / [LOW]（弱温风） / [COOL]（冷风）" 
    },
    dryer_s5: { 
        ja: "プロセシング（センシングボタン）を選びます。\n[MOIST] / [VOLUME UP] / オフ\n※[SCALP]や[MOIST]にすると温風と冷風が自動で切り替わります（HOT時のみ）。", 
        en: "Select Sensing Program:\n[MOIST] / [VOLUME UP] / [OFF]\n(Alternates hot/cold air to protect hair from heat damage. Only selectable on HOT mode).", 
        ko: "센싱 프로그램 선택:\n[MOIST] / [VOLUME UP] / OFF\n※[SCALP]나 [MOIST] 설정 시 따뜻한 바람과 찬 바람이 자동 교차됩니다 (HOT 상태일 때만 가능).", 
        zh: "选择感应程序：\n[MOIST]（保湿） / [VOLUME UP]（丰盈） / [关]\n※设置为[SCALP]或[MOIST]时会自动交替温风和冷风（仅在HOT状态下可选）。" 
    },
    dryer_s6: { 
        ja: "髪全体に風を当てます。", 
        en: "Dry your hair: Apply airflow evenly across your hair.", 
        ko: "머리 말리기: 머리 전체에 바람을 골고루 쐬어주며 말립니다.", 
        zh: "吹干头发： 将风均匀吹向全体头发。" 
    },
    dryer_s7: { 
        ja: "電源/温冷スイッチを【OFF】にして、電源をオフにします。", 
        en: "Power Off: Set the Power / Hot & Cold Switch to [OFF].", 
        ko: "전원 OFF: 전원/온·냉풍 스위치를 【OFF】로 맞춰 전원을 끕니다.", 
        zh: "关闭电源： 将冷热开关拨至 【OFF】 关闭电源。" 
    },
    dryer_s8: { 
        ja: "電源プラグをコンセントから抜きます。", 
        en: "Unplug: Remove the power plug from the wall outlet.", 
        ko: "플러그 뽑기: 전원 플러그를 콘센트에서 뽑습니다.", 
        zh: "拔出插头： 将电源插头从插座上拔下。" 
    },

    /* ヘアアイロン（カール用） */
    hairiron_s1: { 
        ja: "髪をブラッシングします。\n髪が濡れているときは、ドライヤーなどで乾かしてください。", 
        en: "Brush your hair thoroughly.\nIf your hair is wet, dry it completely with a hair dryer before use.", 
        ko: "머리를 빗어 정리합니다.\n머리가 젖어 있는 경우에는 드라이어로 완전히 말린 후 사용하십시오.", 
        zh: "先将头发梳理顺畅。\n如果头发是湿的，请先彻底吹干后再使用。" 
    },
    hairiron_s2: { 
        ja: "髪をブロッキングします。\n毛束をわけて、ヘアクリップで留めてください。", 
        en: "Divide your hair into sections.\nSeparate your hair into small sections and secure them with hair clips.", 
        ko: "머리카락을 여러 구역으로 나눕니다.\n모발을 적당한 양으로 나누고 헤어클립으로 고정합니다.", 
        zh: "将头发分区。\n把头发分成适当的发束，并用发夹固定。" 
    },
    hairiron_s3: { 
        ja: "電源プラグをコンセントに差し込みます。", 
        en: "Plug the power cord into a power outlet.", 
        ko: "전원 플러그를 콘센트에 꽂습니다.", 
        zh: "将电源插头插入电源插座。" 
    },
    hairiron_s4: { 
        ja: "電源ボタンを約2秒以上長押しして、電源をオンにします。\n温度表示ランプと「＋」「－」ランプが白色点灯し、設定温度が赤色点滅します。（180℃ / 160℃ / 140℃ / 120℃）", 
        en: "Press and hold the Power button for about 2 seconds to turn on the device.\nThe indicator and \"+\"/\"−\" buttons light up white, and selected temp flashes red.", 
        ko: "전원 버튼을 약 2초 이상 길게 눌러 전원을 켭니다.\n온도 표시등과 \"+\" 및 \"−\" 버튼에 흰색 불이 켜지고, 설정 온도가 빨간색으로 깜박입니다.", 
        zh: "长按电源键约2秒，开启电源。\n温度指示灯及“+”“−”按钮亮起白灯，设定温度会闪烁红灯。（180℃ / 160℃ / 140℃ / 120℃）" 
    },
    hairiron_s5: { 
        ja: "約5秒以内に「＋」「－」ボタンで温度を設定します（120℃〜180℃ / 20℃ずつ）。\n・約5秒操作しないと温度変更がロックされます（「＋」「－」ボタンを約2秒長押しで解除可能）。", 
        en: "Within ~5 seconds, press \"+\" or \"−\" to select the temperature.\nIf no button is pressed for ~5 seconds, setting will be locked (hold + or - for 2s to unlock).", 
        ko: "약 5초 이내에 \"+\" 또는 \"−\" 버튼을 눌러 온도를 설정합니다.\n약 5초간 조작하지 않으면 설정이 잠깁니다 (버튼을 약 2초 길게 눌러 해제 가능).", 
        zh: "开机后约5秒内，按“+”或“−”按钮设定温度。\n若约5秒内未操作，温度设定将自动锁定（长按“+”或“−”约2秒可解除锁定）。" 
    },
    hairiron_s6: { 
        ja: "温度表示ランプが赤色点滅から「赤色点灯」に変わったら、髪をスタイリングします。\n・内巻き（ワンカール巻き）\n・外巻き（リバース巻き）", 
        en: "When the temperature indicator lights solid red, begin styling your hair.\n・Inward curls\n・Outward curls", 
        ko: "설정 온도에 도달하여 빨간색 점등으로 바뀌면 스타일링을 시작합니다.\n・안쪽 말기\n・밖으로 말기", 
        zh: "当温度指示灯变为红色常亮时，即可开始造型。\n・内卷\n・外卷" 
    },
    hairiron_s7: { 
        ja: "電源ボタンを押し、電源をオフにします。\nすべてのランプが消灯します。", 
        en: "Press the Power button to turn off the device.\nAll indicator lights will turn off.", 
        ko: "전원 버튼을 눌러 전원을 끕니다.\n모든 표시등이 꺼집니다.", 
        zh: "按下电源键关闭电源。\n所有指示灯都会熄灭。" 
    },
    hairiron_s8: { 
        ja: "電源プラグをコンセントから抜きます。\n本体の温度が十分下がってから、直射日光や高温多湿（浴室など）を避けて保管してください。", 
        en: "Unplug the power cord from the outlet.\nAllow the appliance to cool completely before storing it away from heat, humidity, and direct sunlight.", 
        ko: "전원 플러그를 콘센트에서 뽑습니다.\n기기의 열이 충분히 식은 후, 고온다습한 곳을 피하고 직사광선이 닿지 않는 곳에 보관하십시오.", 
        zh: "拔下电源插头。\n待机身完全冷却后，请存放于阴凉干燥、避免阳光直射的地方，切勿存放于浴室等高温潮湿环境。" 
    },

    /* テレビ */
    tv_watch: { ja: "テレビを見る：【地上】【BS】【CS】【4K】を選び、数字ボタン（1〜12）を押します。", en: "Watching TV: Select [地上/BS/CS/4K], then press a number button (1–12).", ko: "TV 시청: [地上/BS/CS/4K] 중 선택 후 숫자 버튼(1~12)을 누릅니다.", zh: "观看电视：选择[地上/BS/CS/4K]，然后按数字键（1〜12）选择频道。" },
    tv_input: { ja: "外部入力：【入力切換】を押し、【▲/▼】で「HDMI1」等を選んで【決定】を押します。", en: "External Input: Press [入力切換], select \"HDMI1\" etc. with ▲/▼, then press [決定].", ko: "외부 입력 전환: [入力切換]을 누르고 ▲/▼로 'HDMI1' 등을 선택한 후 [決定]을 누릅니다.", zh: "切换外部输入：按[入力切換]，用▲/▼选择“HDMI1”等，再按[決定]。" },
    tv_stream: { ja: "動画配信：下部の【Netflix】【YouTube】等を押すと起動します。", en: "Streaming: Press [Netflix], [YouTube], etc. at the bottom to launch directly.", ko: "OTT 서비스: 하단의 [Netflix], [YouTube] 등의 버튼을 누르면 바로 실행됩니다.", zh: "流媒体：按底部的[Netflix]、[YouTube]等专用键可直接启动。" },
    tv_warn: { ja: "※動画配信はご自身のアカウントでログインが必要です。退室時は必ずログアウトをご確認ください。", en: "※Log in with your own account. Please remember to log out before check-out.", ko: "※본인 계정으로 로그인해야 합니다. 체크아웃 시 로그아웃을 꼭 확인해 주세요.", zh: "※需登录您自己的账号。退房时请务必退出登录。" },

    // ==========================================
    // 周辺案内 (Around/Spots)
    // ==========================================
    around_title: { ja: "周辺案内", en: "Neighborhood Guide", ko: "주변 안내", zh: "周边导览" },
    cat_food: { ja: "1. 飲食店・レストラン", en: "1. Restaurants", ko: "1. 음식점", zh: "1. 餐饮店" },
    cat_shop: { ja: "2. スーパー・薬局", en: "2. Supermarkets & Pharmacies", ko: "2. 슈퍼마켓・약국", zh: "2. 超市・药局" },
    cat_convenience: { ja: "3. コンビニ", en: "3. Convenience Stores", ko: "3. 편의점", zh: "3. 便利店" },
    cat_laundry: { ja: "4. コインランドリー", en: "4. Laundromats", ko: "4. 코인 세탁소", zh: "4. 自助洗衣店" },
    cat_parking: { ja: "5. 駐車場", en: "5. Parking", ko: "5. 주차장", zh: "5. 停车场" },
    cat_smoking: { ja: "6. 喫煙所付き店舗", en: "6. Smoking Areas", ko: "6. 흡연 구역이 있는 매장", zh: "6. 有吸烟区的店铺" },

    lbl_review: { ja: "[クチコミ]", en: "[Reviews]", ko: "[대중 리뷰]", zh: "[大众点评]" },
    lbl_staff: { ja: "[スタッフレビュー]", en: "[Staff Review]", ko: "[스태프 리뷰]", zh: "[员工评语]" },
    lbl_recommend: { ja: "[スタッフおすすめ]", en: "[Recommended]", ko: "[추천 상품]", zh: "[员工推荐]" },
    lbl_service: { ja: "[おすすめサービス]", en: "[Service]", ko: "[추천 서비스]", zh: "[推荐服务]" },
    lbl_point: { ja: "[おすすめポイント]", en: "[Points]", ko: "[추천 포인트]", zh: "[推荐点]" },

    sp_banshaku_t: { ja: "はかた焼き鳥 晩酌亭 吉塚店 (★4.0)", en: "Hakata Yakitori Banshakutei (★4.0)", ko: "하카타 야키토리 반샤쿠테이 (★4.0)", zh: "博多烤鸡肉串 晚酌亭 (★4.0)" },
    sp_banshaku_r: { ja: "お持ち帰り（テイクアウト）専門の焼き鳥屋さんです。1本あたりの価格がリーズナブルで、手軽に本格的な博多の焼き鳥が楽しめると圧倒的な支持を得ています。注文を受けてから焼き上げてくれるため、いつでも熱々で香ばしい焼き鳥が受け取れると大好評です。", en: "A yakitori shop specializing in takeout. The price per skewer is reasonable, and it has gained overwhelming support for authentic Hakata yakitori. Since they grill after receiving an order, you can always receive piping hot, fragrant yakitori.", ko: "포장 전문 야키토리 상점입니다. 1개당 가격이 저렴하여 간편하게 본격적인 하카타 야키토리를 즐길 수 있다고 압도적인 지지를 얻고 있습니다. 주문 후 구워주어 언제나 뜨겁고 향긋한 야키토리를 받을 수 있습니다.", zh: "这是一家专营外带的烤鸡肉串店。每串价格经济实惠，能轻松享用到地道的博多烤鸡肉串而广受好评。接到订单后才烤制，无论何时都能拿到热气腾腾、香气四溢的烤鸡肉串。" },
    sp_banshaku_s: { ja: "宿から目と鼻の先にあるため、お部屋に戻ってゆっくり部屋飲みをしたい日に最高の選択肢になります。お好きなドリンクをコンビニ等で調達し、焼き立ての焼き鳥と一緒に楽しむのがスタッフ一押しの過ごし方です。", en: "Just a stone's throw from the accommodation, it's the best option for a relaxing drink in your room. Grab your favorite drinks at a convenience store and enjoy them with freshly grilled yakitori.", ko: "숙소에서 아주 가까워 방에서 느긋하게 한잔하고 싶은 날 최고의 선택지입니다. 편의점에서 음료를 조달해 갓 구운 야키토리와 함께 즐기는 것이 스태프 추천 방법입니다.", zh: "因为就在民宿眼皮底下，想回房间悠闲小酌时是最好的选择。可在便利店备好喜欢的饮料，与刚烤好的烤鸡肉串一起享用，是员工最推荐的方式。" },
    sp_banshaku_m: { ja: "豚バラ：福岡の焼き鳥といえば外せない定番。ジューシーで脂の旨味が最高です。\nとり皮：タレもしっかり染み込んでいて、お酒のおつまみにこれ以上ない一品です。\n手羽先：皮目はパリッと、中はジューシーで食べ応えがあります。", en: "Pork Belly: A Fukuoka yakitori standard. Juicy with the best fat flavor.\nChicken Skin: Well-soaked in sauce; an unparalleled appetizer.\nChicken Wings: Crispy skin, juicy inside, and satisfying.", ko: "돼지 삼겹살: 후쿠오카 야키토리의 정석. 쥬시하고 지방의 감칠맛이 최고입니다.\n닭껍질: 양념이 잘 배어 술안주로 최고입니다.\n닭날개: 껍질은 바삭, 속은 쥬시하여 먹는 보람이 있습니다.", zh: "猪五花：福冈烤鸡肉串的经典。鲜嫩多汁，油脂美味。\n鸡皮：酱汁入味，是绝佳的下酒菜。\n鸡翅：外酥内嫩，很有分量感。" },

    sp_renren_t: { ja: "麺屋 蓮々 (★4.2)", en: "Menya Renren (★4.2)", ko: "멘야 렌렌 (★4.2)", zh: "面屋 莲莲 (★4.2)" },
    sp_renren_r: { ja: "博多では珍しい非とんこつ系の鶏だしラーメン専門店として、地元で非常に高く評価されているお店です。濃厚な味わいのスープと、歯ごたえのある極細ストレート麺との相性が抜群だと評判です。", en: "A non-tonkotsu chicken-broth ramen specialty shop, rare in Hakata and highly rated locally. The rich soup and firm, extra-fine straight noodles go perfectly together.", ko: "하카타에서 드문 비돈코츠 계열 닭 육수 라멘 전문점으로 지역에서 매우 높게 평가받는 가게입니다. 진한 스프와 단단한 극세 직면의 궁합이 발군입니다.", zh: "作为在博多罕见的非豚骨系鸡汤拉面专卖店，在当地获得极高评价。浓郁的汤头与劲道的极细直面相性堪称完美。" },
    sp_renren_s: { ja: "濃厚でありながらクドさが一切なく、最後までスープを飲み干したくなる完成度です。到着日のランチや、あっさり美味しい夕食をとりたい日にとてもおすすめです。", en: "Rich yet not heavy at all—so good you'll want to finish every drop. Highly recommended for arrival-day lunch or a light, delicious dinner.", ko: "진하면서도 텁텁함이 없어 마지막까지 스프를 다 마시고 싶은 완성도입니다. 도착일 점심이나 담백한 저녁을 원할 때 추천합니다.", zh: "浓郁却完全不腻，让人想把汤喝到最后一滴。非常推荐在抵达当天的午餐或想吃清爽晚餐时前往。" },
    sp_renren_m: { ja: "鶏白湯ラーメン：トロみのある特製濃厚スープ。レモンを絞ると味変も楽しめます。1日15杯限定です。\n鶏塩ラーメン：透き通ったクリアな鶏ガラスープに上品な塩ダレがマッチしたサッパリ系の一杯。", en: "Chicken Paitan Ramen: A rich, thick soup from boiled-down chicken bones. Squeeze the lemon for a refreshing change. Limited to 15 bowls/day.\nChicken Shio Ramen: Clear chicken broth with an elegant salt sauce; refreshing.", ko: "닭백탕 라멘: 걸쭉한 특제 진한 스프. 레몬을 짜면 맛의 변화도 즐길 수 있습니다. 1일 15그릇 한정.\n닭소금 라멘: 맑은 닭 육수에 고급스러운 소금 양념이 어울리는 깔끔한 한 그릇.", zh: "鸡白汤拉面：带黏稠感的特制浓郁汤头。挤入柠檬可享受口味变化。每天限量15碗。\n鸡盐拉面：清澈的鸡骨汤与高雅盐味相得益彰的清爽一碗。" },

    sp_lee_t: { ja: "KOREAN DINING LEE (★4.6)", en: "KOREAN DINING LEE (★4.6)", ko: "KOREAN DINING LEE (★4.6)", zh: "KOREAN DINING LEE (★4.6)" },
    sp_lee_r: { ja: "レンガ調のおしゃれな空間で、本格的で家庭的な韓国居酒屋メニューや焼肉が楽しめるお店です。熟成にんにくタレのサムギョプサルや、2日間煮込んだテールスープが絶品と絶賛されています。", en: "Enjoy authentic, home-style Korean izakaya dishes and yakiniku in a stylish brick-toned space. The aged-garlic samgyeopsal and two-day-simmered tail soup are praised as movingly delicious.", ko: "벽돌풍의 세련된 공간에서 본격적이고 가정적인 한국 이자카야 메뉴와 야키니쿠를 즐길 수 있습니다. 숙성 마늘 양념 삼겹살과 2일간 끓인 꼬리곰탕이 절품으로 극찬받습니다.", zh: "在砖墙风格的时髦空间里，享用正宗且家庭风味的韩国居酒屋菜单及烤肉。熟成大蒜酱的五花肉和2天熬制的牛尾汤令人感动地美味。" },
    sp_lee_s: { ja: "店内は非常に清潔感があり、居心地が抜群です。本格的な韓国の家庭料理を味わいながらお酒を飲みたい夜にとてもおすすめです。", en: "Very clean and comfortable inside. Highly recommended for a night of drinks with authentic Korean home cooking.", ko: "매장이 매우 청결하고 안락합니다. 본격 한국 가정 요리를 맛보며 술을 마시고 싶은 밤에 추천합니다.", zh: "店内非常有清洁感，舒适度出群。想边品尝正宗韩国家庭料理边喝酒的夜晚非常推荐。" },
    sp_lee_m: { ja: "サムギョプサルセット：にんにくタレが派手すぎず絶品。\nオンマのテールスープ：コクがあり奥深い、優しくも力強い本場の味わいです。", en: "Samgyeopsal Set: Exquisite garlic sauce that's not too flashy.\nOmma's Tail Soup: Rich, deep, gentle yet powerful authentic taste.", ko: "삼겹살 세트: 마늘 양념이 과하지 않고 절품입니다.\n엄마 손맛 꼬리곰탕: 깊고 진하며 부드럽고 힘찬 본고장의 맛입니다.", zh: "五花肉套餐：大蒜酱不会过于张扬，堪称绝品。\n妈妈的牛尾汤：浓郁深奥，温柔又有力的正宗风味。" },

    sp_hanabi_t: { ja: "BAR HANABI (★4.9)", en: "BAR HANABI (★4.9)", ko: "BAR HANABI (★4.9)", zh: "BAR HANABI (★4.9)" },
    sp_hanabi_r: { ja: "最新のダーツマシンやカラオケ、ボードゲームが楽しめる賑やかなアミューズメントバーです。おひとり様でもグループでもワイワイ楽しめると高評価。30分単位の単品飲み放題もあり2軒目に重宝されています。", en: "A lively amusement bar with the latest dart machines, karaoke, and board games. High repeat rate—solo or group, you can have a lively time. A 30-min single-item all-you-can-drink plan makes it great as a second stop.", ko: "최신 다트 머신, 가라오케, 보드게임을 즐길 수 있는 활기찬 어뮤즈먼트 바입니다. 혼자든 그룹이든 즐겁게 즐길 수 있어 높은 평가. 30분 단위 단품 무제한 음료로 2차 이용에 좋습니다.", zh: "可享受最先进飞镖机、卡拉OK和桌游的热闹娱乐酒吧。无论单人还是团体都能热闹畅玩。还有30分钟单点无限畅饮，作为第二场很受欢迎。" },
    sp_hanabi_s: { ja: "吉塚の夜をトコトン楽しみたい時や、旅先で少し夜遊びをしたい時に最適なバーです。2軒目の行き先に迷ったら間違いなくここです。", en: "Ideal for thoroughly enjoying a night in Yoshizuka. Friendly staff welcome you warmly—definitely the place if you're unsure where to go next.", ko: "요시즈카의 밤을 제대로 즐기고 싶을 때 최적인 바입니다. 싹싹한 스태프가 맞아주니 2차 장소가 고민되면 여기입니다.", zh: "想彻底享受吉塚的夜晚时最合适的酒吧。开朗的员工热情迎接，若对第二场去哪迷茫，毫无疑问就是这里。" },
    sp_hanabi_m: { ja: "単品飲み放題（30分〜）：柔軟に選べるお得なプランです。\nコカレロなど：ショットで盛り上がれる人気のハーブリキュールです。", en: "Single-item All-You-Can-Drink (from 30 mins): A flexible, good-value plan.\nCocalero, etc.: A popular herb liqueur great for shots.", ko: "단품 무제한 음료(30분〜): 유연하게 선택 가능한 알찬 플랜.\n코카레로 등: 샷으로 분위기를 띄우는 인기 허브 리큐어입니다.", zh: "单点无限畅饮（30分钟〜）：灵活选择的划算方案。\nCocalero等：可用一口杯活跃气氛的人气草本利口酒。" },

    sp_bataru_t: { ja: "よしづかバタる (★4.3)", en: "Yoshizuka Bataru (★4.3)", ko: "よしづかバタる (★4.3)", zh: "Yoshizuka Bataru (★4.3)" },
    sp_bataru_r: { ja: "明太フランスとクロワッサンが高評価。明太フランスは明太子たっぷりで外カリ中もちの食感。クロワッサンはサクサクでバターの香りが楽しめると評判です。", en: "The Mentaiko France and croissants are highly rated. The Mentaiko France has plenty of flavorful mentaiko—crispy outside, chewy inside. The croissant is flaky with a deep butter aroma.", ko: "명란 프랑스와 크루아상이 높은 평가. 명란 프랑스는 명란이 듬뿍 들어 겉은 바삭 속은 쫄깃. 크루아상은 바삭하고 버터 향이 좋습니다.", zh: "明太法国面包和可颂面包评价很高。明太法国面包放入大量明太子，外皮酥脆内里软糯。可颂面包酥脆且黄油香气浓郁。" },
    sp_bataru_s: { ja: "朝食や軽食にちょうど良いサイズ感で、価格も手頃です。近くにお越しの際はぜひお立ち寄りください。", en: "Just-right size for breakfast or a snack, and affordable. Be sure to stop by when nearby.", ko: "아침이나 가벼운 식사에 딱 좋은 크기이며 가격도 적당합니다. 근처에 오시면 꼭 들러 주십시오.", zh: "作为早餐或轻食分量刚好，价格适中。来到附近时请务必顺道光顾。" },
    sp_bataru_m: { ja: "明太子フランス：和の明太子×バターの組み合わせが絶妙。まずはこれを食べてほしい。", en: "Mentaiko France: The mentaiko x butter combo is exquisite. Try this first.", ko: "명란 프랑스: 명란젓×버터 조합이 절묘. 먼저 이것을 드셔보세요.", zh: "明太子法国面包：日式明太子×黄油的组合绝妙。希望你首先尝尝这个。" },

    sp_ohga_t: { ja: "大賀薬局 吉塚店 (★4.0)", en: "Ohga Pharmacy (★4.0)", ko: "오가 약국 (★4.0)", zh: "大贺药局 (★4.0)" },
    sp_ohga_r: { ja: "調剤薬局だけでなく、日用品やコスメ、食品、お酒まで幅広く取り扱う便利なドラッグストアです。通路が広く明るいため商品が探しやすいと評判です。", en: "A convenient drugstore handling not only prescriptions but daily necessities, cosmetics, food, and alcohol. Wide, bright aisles make products easy to find.", ko: "조제 약국뿐 아니라 일용품, 코스메, 식품, 술까지 폭넓게 취급하는 편리한 드럭스토어입니다. 통로가 넓고 밝아 상품을 찾기 쉽습니다.", zh: "这是一家非常便利的药妆店，不仅有调剂药局，还经营日用品、化妆品、食品乃至酒类。通道宽敞明亮、商品易于寻找。" },
    sp_ohga_s: { ja: "駅からの最短ルート上にあり、大きな青い看板が目印。何でもリーズナブルに揃うため、チェックイン前に立ち寄る店舗として最もおすすめです。", en: "On the shortest route from the station with a large blue sign as a landmark. Everything is reasonably priced—most recommended to drop by before check-in.", ko: "역에서 최단 루트 상에 있고 큰 파란색 간판이 표시입니다. 무엇이든 저렴하게 갖춰져 체크인 전에 들르기 가장 추천합니다.", zh: "位于从车站出发的最短路线上，大蓝色招牌是标志。什么都能实惠备齐，作为入住前顺道拜访的店铺最推荐。" },
    sp_ohga_m: { ja: "豊富なお薬・衛生用品：急な体調不良や怪我の際にも、スタッフの方が親切に対応してくれます。", en: "Abundant Medicines & Sanitary Goods: Staff respond kindly for sudden illness or injury.", ko: "풍부한 의약품・위생용품: 갑작스러운 컨디션 난조나 부상 시에도 친절하게 대응해 줍니다.", zh: "丰富的药品・卫生用品：在突然身体不适或受伤时，员工也会亲切应对。" },

    sp_direx_t: { ja: "ダイレックス 吉塚店 (★4.0)", en: "Direx (★4.0)", ko: "다이렉스 (★4.0)", zh: "Direx (★4.0)" },
    sp_direx_r: { ja: "生鮮食品から日用品、家電、医薬品まで何でも揃うディスカウントストアです。価格がリーズナブルで、新鮮な食材が安く手に入ると高く評価されています。", en: "A discount store with everything from fresh food to daily goods, appliances, and pharmaceuticals. Reasonable prices; fresh ingredients cheaply available.", ko: "생선 식품부터 일용품, 가전, 의약품까지 갖춘 디스카운트 스토어입니다. 가격이 저렴하고 신선한 식재료를 싸게 살 수 있습니다.", zh: "从生鲜食品到日用品、家电、医药品什么都有的折扣店。价格实惠，能便宜买到新鲜食材。" },
    sp_direx_s: { ja: "お財布に優しい価格設定なので、長期滞在の方や飲み物・スナックを大量に買いたいときに非常に重宝します。", en: "Wallet-friendly prices make it very useful for long stays or buying lots of drinks and snacks.", ko: "지갑에 착한 가격이라 장기 체류나 음료・스낵을 대량 구매할 때 매우 요긴합니다.", zh: "极具性价比，对于长期滞在或想大量采购饮料零食的时候非常管用。" },
    sp_direx_m: { ja: "お弁当各種：ボリューム満点で価格も驚くほど安いです。", en: "Various Bento Boxes: Full of volume and surprisingly cheap.", ko: "도시락 각종: 볼륨 만점에 가격도 놀랍도록 쌉니다.", zh: "各式便当：分量十足且价格便宜得惊人。" },

    sp_sunny_t: { ja: "サニー 吉塚駅前店 (★3.8)", en: "Sunny (★3.8)", ko: "써니 (★3.8)", zh: "Sunny (★3.8)" },
    sp_sunny_r: { ja: "駅前にある大型スーパーです。夜遅い到着や早朝出発でもいつでも開いている安心感があります。プライベートブランド商品が安くて高品質と評判です。", en: "A large supermarket in front of the station, open at any time—reassuring for late arrivals or early departures. Private-brand products are cheap and high quality.", ko: "역 앞 대형 슈퍼마켓입니다. 밤늦은 도착이나 이른 출발에도 열려 있어 안심됩니다. PB 상품이 싸고 고품질입니다.", zh: "位于车站前方的大型超市。深夜抵达或清晨出发都营业，令人安心。自有品牌商品便宜且高质。" },
    sp_sunny_s: { ja: "深夜にお腹が空いたときや、早朝に飲み物を調達したいときにこれ以上ない便利なスポットです。", en: "An unbeatable spot when hungry late at night or grabbing drinks early in the morning.", ko: "심야에 배가 고플 때나 이른 아침 음료 조달에 더없이 편리한 스폿입니다.", zh: "深夜肚子饿或清晨想采购饮料时，再方便不过的便利去处。" },
    sp_sunny_m: { ja: "みなさまのお墨付きシリーズ：安くて美味しい食品やドリンクが多数揃っています。", en: "Everyone's Approval Series: Many cheap and delicious foods and drinks.", ko: "모두의 인정 시리즈: 싸고 맛있는 식품과 음료가 다수 있습니다.", zh: "深受大家认可系列：备有很多便宜且美味的食品和饮料。" },

    sp_mrmax_t: { ja: "ミスターマックス吉塚店 (★3.7)", en: "Mr.Max (★3.7)", ko: "미스터 맥스 (★3.7)", zh: "Mr.Max (★3.7)" },
    sp_mrmax_r: { ja: "ディスカウント型のスーパーマーケットです。食料品はもちろん洗剤などの日用品が他店より安く手に入るため、地域の生活の要として重宝されています。惣菜コーナーのコスパも抜群です。", en: "A discount supermarket. Food and daily goods like detergent are much cheaper than other stores—a cornerstone of local life. The deli corner's value is outstanding.", ko: "디스카운트형 슈퍼마켓입니다. 식품은 물론 세제 등 일용품이 타 점포보다 저렴해 지역 생활의 요체로 소중히 여겨집니다. 반찬 코너의 가성비도 뛰어납니다.", zh: "折扣型超级市场。食品及洗涤剂等日用品比其他店便宜得多，作为地区生活核心受重宝。熟食专区性价比也很出众。" },
    sp_mrmax_s: { ja: "夜間に急に必要になった日用品の買い出しや食料品の調達に最適の大型ストアです。", en: "Ideal large store for suddenly-needed daily goods at night or procuring food.", ko: "야간에 갑자기 필요한 일용품 쇼핑이나 식료품 조달에 최적인 대형 스토어입니다.", zh: "夜间突然需要购买日用品或采购食品时的最佳大型商店。" },
    sp_mrmax_m: { ja: "プライベートブランド日用品各種：旅行や滞在に欠かせない消耗品が非常にお得に購入できます。", en: "Private Brand Daily Necessities: Travel consumables at great value.", ko: "PB 일용품 각종: 여행에 필수적인 소모품을 매우 이득인 가격에 구매할 수 있습니다.", zh: "各式自有品牌日用品：可非常划算地购买旅行必不可少的消耗品。" },

    sp_marushoku_t: { ja: "マルショク 吉塚店 (★3.7)", en: "Marushoku (★3.7)", ko: "마루쇼쿠 (★3.7)", zh: "Marushoku (★3.7)" },
    sp_marushoku_r: { ja: "地域に根ざした昔ながらの親しみやすいスーパーマーケットです。特に野菜や果物の鮮度が良く、地元の方が普段の買い物によく利用されています。", en: "An old-fashioned, community-rooted supermarket. Especially fresh vegetables and fruits; locals use it for daily shopping.", ko: "지역에 뿌리내린 친근한 슈퍼마켓입니다. 채소와 과일의 신선도가 좋아 지역 주민이 자주 이용합니다.", zh: "扎根社区、自古亲切的超级市场。蔬菜水果新鲜，当地人常在此购物。" },
    sp_marushoku_s: { ja: "アットホームな雰囲気で、日本の普段の暮らしを感じられるスーパーです。ちょっとした食材の買い出しに便利です。", en: "A homey atmosphere where you feel everyday Japanese life. Convenient for minor ingredient shopping.", ko: "가족 같은 분위기로 일본의 평소 생활을 느낄 수 있습니다. 자잘한 식재료 쇼핑에 편리합니다.", zh: "温馨家庭氛围，能感受日本平常生活的超市。采购少量食材很方便。" },
    sp_marushoku_m: { ja: "新鮮な季節のフルーツ：旬の果物がお手頃価格で手に入ります。", en: "Fresh Seasonal Fruits: Seasonal fruits at affordable prices.", ko: "신선한 제철 과일: 제철 과일을 저렴하게 살 수 있습니다.", zh: "新鲜的时令水果：可以以适中的价格买到当季水果。" },

    sp_lawson_t: { ja: "ローソン 吉塚本町店 (★3.8)", en: "Lawson (★3.8)", ko: "로손 (★3.8)", zh: "罗森 Lawson (★3.8)" },
    sp_lawson_r: { ja: "駅から宿へ向かう途中の大通り沿いにあり、非常にアクセスがしやすいと評判のコンビニです。お弁当やスイーツの品揃えも安定しています。", en: "Along the main street from the station to the accommodation—very easy to access. Bento and sweets lineup is stable.", ko: "역에서 숙소로 가는 큰길가에 있어 매우 접근하기 쉽습니다. 도시락과 디저트 구색도 안정적입니다.", zh: "位于从车站前往民宿途中的大马路沿线，极易到达。便当和甜品的商品种类也很稳定。" },
    sp_lawson_s: { ja: "宿から徒歩3分以内という抜群の近さに加え、道中にあるため迷うことなく利用できます。深夜の買い物やATM利用に欠かせない存在です。", en: "Within a 3-min walk and on the way, so easy to use without getting lost. Essential for late-night shopping or ATM use.", ko: "도보 3분 이내이며 오는 길목에 있어 헤매지 않고 이용할 수 있습니다. 심야 쇼핑이나 ATM 이용에 필수적입니다.", zh: "距离民宿步行3分钟以内且就在道中，可毫无迷路之忧地利用。深夜购物或利用ATM时不可或缺。" },
    sp_lawson_m: { ja: "からあげクン：定番のホットスナック。小腹が空いたときのおやつに最適です。", en: "Karaage-kun: A standard hot snack. Ideal when a little hungry.", ko: "카라아게쿤: 정석 핫 스낵. 출출할 때 간식으로 최적입니다.", zh: "炸鸡块：经典的炸物热食。最适合作为肚子有点饿时的小点心。" },

    sp_ministop_t: { ja: "ミニストップ 吉塚３丁目店 (★3.8)", en: "Ministop (★3.8)", ko: "미니스톱 (★3.8)", zh: "Ministop (★3.8)" },
    sp_ministop_r: { ja: "コンビニでありながら、注文後に作る本格的なソフトクリームやパフェが絶品と大人気のお店です。手作りのレジ横ポテトも美味しいと評判です。", en: "Despite being a convenience store, its made-to-order soft-serve and parfaits are exquisite. The handmade fries by the register are also delicious.", ko: "편의점이면서 주문 후 만드는 본격 소프트크림과 파페가 절품으로 인기입니다. 계산대 옆 수제 감자튀김도 맛있습니다.", zh: "虽是便利店，但下单后才制作的正宗冰淇淋和芭菲堪称绝品。收银台旁的手工薯条也很美味。" },
    sp_ministop_s: { ja: "美味しいスイーツを食べて一息つきたい時にわざわざ足を運ぶ価値のあるコンビニです。", en: "Worth the trip when you want delicious sweets and a break.", ko: "맛있는 디저트를 먹고 쉬고 싶을 때 일부러 찾아갈 가치가 있는 편의점입니다.", zh: "想吃美味甜点歇一口气时，值得特意走一趟的便利店。" },
    sp_ministop_m: { ja: "特製ソフトクリーム：濃厚なミルク感が味わえる、ミニストップ最大の看板商品です。", en: "Special Soft-Serve Ice Cream: Rich, milky—Ministop's flagship product.", ko: "특제 소프트크림: 진한 우유 맛을 즐길 수 있는 미니스톱 최대 간판 상품입니다.", zh: "特制冰淇淋：可品尝到浓郁牛奶感，Ministop最大的招牌商品。" },

    sp_washhouse_t: { ja: "WASHハウス 福岡吉塚店 (★3.6)", en: "WASH House (★3.6)", ko: "WASH하우스 (★3.6)", zh: "WASH House (★3.6)" },
    sp_washhouse_r: { ja: "明るくて清潔感のある大型コインランドリーです。台数が多く、布団などの大物から日々の衣類まで一気に洗濯・乾燥できると好評です。女性一人でも安心して利用できるという声が多いです。", en: "A large, bright, clean laundromat. Many machines let you wash and dry everything from futons to daily clothes at once. Well-managed and clean—many say even solo women feel safe.", ko: "밝고 청결한 대형 코인 세탁소입니다. 대수가 많아 이불 등 대형부터 일상 의류까지 한 번에 세탁・건조 가능합니다. 관리가 잘 되어 여성 혼자도 안심입니다.", zh: "明亮清洁的大型投币式洗衣店。机器数量多，从被子等大件到日常衣物都能一次性洗涤・烘干。管理周到，女性一人也能安心利用。" },
    sp_washhouse_s: { ja: "宿にも洗濯機はございますが、滞在中に溜まった衣類をまとめて洗いたいときや、雨の日に素早く乾燥させたいときに非常に便利です。", en: "Although the accommodation has a washer, this is very convenient for washing accumulated laundry at once or quick drying on rainy days.", ko: "숙소에도 세탁기가 있지만, 체류 중 쌓인 의류를 한 번에 빨거나 비 오는 날 빠르게 건조할 때 편리합니다.", zh: "虽然民宿内也有洗衣机，但想一次性洗完积攒的衣物或雨天快速烘干时非常方便。" },
    sp_washhouse_m: { ja: "大型乾燥機：短時間でふっくらと仕上がり、生乾きの臭いも残りません。", en: "Large Dryer: Fluffy in a short time, no half-dried smell.", ko: "대형 건조기: 짧은 시간에 폭신하게 마무리되고 덜 마른 냄새도 없습니다.", zh: "大型烘干机：短时间内烘干蓬松，不会残留半干异味。" },

    sp_laclass_t: { ja: "コインランドリー LA'CLASS 吉塚店 (★3.4)", en: "Laundromat LA'CLASS (★3.4)", ko: "코인 세탁소 LA'CLASS (★3.4)", zh: "自助洗衣店 LA'CLASS (★3.4)" },
    sp_laclass_r: { ja: "全面改装され、新しく洗練された空間に生まれ変わったランドリーです。専用アプリ「スマートランドリー」で機械の空き状況確認・キャッシュレス決済・終了通知・電子領収書まで対応でき、非常に高く評価されています。", en: "Fully renovated from the former Welcome Yoshizuka, reborn as a new, sophisticated space. The \"Smart Laundry\" app lets you check availability, pay cashless, get finish notifications, and issue e-receipts—rated very highly.", ko: "전면 개조되어 새롭고 세련된 공간으로 거듭난 세탁소입니다. 전용 앱 '스마트 런드리'로 빈 상황 확인・캐시리스 결제・종료 알림・전자 영수증까지 지원해 매우 높게 평가받습니다.", zh: "从旧店全面改装、蜕变为新颖洗练空间的洗衣店。可用专用应用“Smart Laundry”确认机器空闲、无现金支付、接收结束通知、开具电子收据，评价极高。" },
    sp_laclass_s: { ja: "リニューアルされたばかりで清潔でスタイリッシュ。小銭不要のアプリ決済が便利なので、旅行中にスマートに洗濯を済ませたいゲストに特におすすめの最新スポットです。", en: "Just renewed, top-class clean and stylish. Coin-free app payment is truly convenient—recommended for finishing laundry smartly during your trip.", ko: "리뉴얼 직후라 청결하고 스타일리시합니다. 동전이 필요 없는 앱 결제가 편리해 여행 중 스마트하게 세탁을 마치고 싶은 게스트에게 추천합니다.", zh: "刚翻新不久，清洁又时尚。不需零钱的App支付很方便，特别推荐给想在旅行中快速完成洗衣的客人。" },
    sp_laclass_m: { ja: "アプリ連携：小銭いらずで決済から終了通知まで完結。\nスニーカーランドリー：旅行中に汚れた靴を丸ごと洗濯・乾燥できます。", en: "App Integration: No coins; everything from payment to notification on your phone.\nSneaker Laundry: Wash and dry shoes dirtied during travel.", ko: "앱 연동: 동전 없이 결제부터 종료 알림까지 완결.\n스니커즈 세탁기: 여행 중 더러워진 신발을 통째로 세탁・건조할 수 있습니다.", zh: "专属软件：无需零钱，用手机就能完成从支付到结束通知。\n运动鞋洗衣机：可将旅行中弄脏的鞋子整体洗涤・烘干。" },

    sp_yoshizuka4_t: { ja: "吉塚第４コインパーク (★4.0)", en: "Yoshizuka 4th Coin Park (★4.0)", ko: "요시즈카 제4 코인 파크 (★4.0)", zh: "吉塚第４投币式停车场 (★4.0)" },
    sp_yoshizuka4_r: { ja: "宿のすぐ周辺に位置しており、荷物が多い時の出し入れやチェックイン・アウト時に移動が最小限で済むと評判のパーキングです。枠線がしっかりしていて停めやすいという声があります。", en: "Right around the accommodation—minimal movement for luggage and check-in/out. Firm frame lines make it easy to park.", ko: "숙소 바로 주변에 위치해 짐이 많을 때나 체크인・아웃 시 이동이 최소한입니다. 주차 선이 확실해 대기 편합니다.", zh: "位于民宿紧邻周边，行李多时的搬运或入住・退房时移动最小。车位线清晰、易于停放。" },
    sp_yoshizuka4_s: { ja: "お車でお越しの方に最初に確認いただきたい、宿最寄りの便利なコインパーキングです。料金は現地の看板をご確認の上ご利用ください。", en: "The nearest convenient coin parking—check this first if arriving by car. Please check the local price board before use.", ko: "차로 오시는 분이 가장 먼저 확인할, 숙소에서 가장 가까운 편리한 코인 주차장입니다. 요금은 현지 표지판을 확인 후 이용해 주십시오.", zh: "驾车前来的人应首先确认的、距民宿最近的便利投币式停车场。费用请确认现场价格牌后再利用。" },
    sp_yoshizuka4_m: { ja: "抜群の近さ：宿の近くで車を預けてすぐに部屋へ向かいたい方に最適です。", en: "Outstanding Closeness: Ideal to park near and head to your room right away.", ko: "발군의 가까움: 숙소 근처에 차를 맡기고 바로 방으로 향하고 싶은 분께 최적입니다.", zh: "出群的近距离：最适合想在民宿附近停车并立即前往房间的人。" },

    sp_dparking_t: { ja: "Dパーキング東吉塚PS第１", en: "D-Parking Higashi Yoshizuka PS 1st", ko: "D파킹 히가시요시즈카 PS 제1", zh: "D-Parking东吉塚PS第1" },
    sp_dparking_r: { ja: "大手大和ハウスグループが管理する安心のコインパーキングです。フラットで段差が少なく、夜間でも照明が明るいため防犯面でも安心です。", en: "A secure coin parking managed by the major Daiwa House Group. Flat with few bumps and bright at night—reassuring for security.", ko: "다이와 하우스 그룹이 관리하는 안심 코인 주차장입니다. 평평하고 턱이 적으며 야간 조명이 밝아 방범 면에서도 안심입니다.", zh: "由大和房屋集团管理的安心投币式停车场。平坦段差少，夜间照明明亮，防犯方面也安心。" },
    sp_dparking_s: { ja: "吉塚第４コインパークが満車だった場合の候補としても優秀な、綺麗に管理された駐車場です。最新料金は入庫前に現地の電光掲示板でご確認ください。", en: "An excellent, well-managed backup if Yoshizuka 4th Coin Park is full. Check the latest fees on the local board before entering.", ko: "제4 코인 파크가 만차일 때 후보로도 우수한, 깨끗하게 관리된 주차장입니다. 최신 요금은 입차 전 현지 전광판에서 확인해 주십시오.", zh: "第４投币式停车场停满时的优秀候选，管理得非常干净。最新费用请入库前通过现场电光告示牌确认。" },
    sp_dparking_m: { ja: "明るく綺麗な駐車スペース：夜間駐車や不慣れなレンタカーのバック駐車も比較的スムーズです。", en: "Bright, Clean Space: Smooth for night parking or unfamiliar rental car back-in.", ko: "밝고 깨끗한 주차 공간: 야간 주차나 익숙하지 않은 렌터카 후진 주차도 비교적 원활합니다.", zh: "明亮干净的停车空间：夜间停车或不熟悉的租赁车倒车入库也较顺畅。" },

    sp_takenoya_t: { ja: "竹乃屋 吉塚店 (★3.5)", en: "Takenoya (★3.5)", ko: "타케노야 (★3.5)", zh: "竹乃屋 (★3.5)" },
    sp_takenoya_r: { ja: "店内に「紙巻き・電子タバコ両対応の喫煙ブース」がある貴重な和風居酒屋です。名物「博多ぐるぐるとりかわ」が絶品で大人気です。", en: "A precious Japanese izakaya with a smoking booth for both paper and e-cigarettes. The famous Hakata Guruguru Torikawa is exquisite and popular.", ko: "매장 내 '궐련・전자담배 겸용 흡연 부스'가 있는 귀중한 일본식 이자카야입니다. 명물 '博多ぐるぐるとりかわ'가 절품으로 대인기입니다.", zh: "店内设有“纸烟・电子烟两用吸烟亭”的珍贵日式居酒屋。招牌“博多ぐるぐるとりかわ”堪称绝品，大受欢迎。" },
    sp_takenoya_s: { ja: "吉塚駅周辺は路上喫煙が禁止で公衆喫煙所がありません。専用喫煙ブース完備のため、喫煙される方の食事や一息に最適です。", en: "Street smoking is banned around Yoshizuka with no public smoking areas. With a dedicated booth, it's ideal for smokers to dine or take a break.", ko: "요시즈카역 주변은 길거리 흡연 금지이며 공공 흡연소가 없습니다. 전용 흡연 부스가 완비되어 흡연자의 식사나 휴식에 최적입니다.", zh: "吉塚站周边禁止路上吸烟且无公共吸烟所。店内完备专用吸烟亭，是吸烟者用餐或歇息的最佳去处。" },
    sp_takenoya_m: { ja: "博多ぐるぐるとりかわ：何本でも食べられる福岡のソウルフード。ビールとの相性は抜群です。", en: "Hakata Guruguru Torikawa: Fukuoka soul food you can eat endlessly. Great with beer.", ko: "博多ぐるぐるとりかわ: 몇 개든 먹을 수 있는 후쿠오카 소울 푸드. 맥주와 궁합이 발군입니다.", zh: "博多ぐるぐるとりかわ：无论多少串都能吃下的福冈灵魂美食。与啤酒相性极佳。" },

    sp_uotami_t: { ja: "魚民 吉塚東口駅前店 (★3.2)", en: "Uotami (★3.2)", ko: "우오타미 (★3.2)", zh: "鱼民 (★3.2)" },
    sp_uotami_r: { ja: "大手居酒屋チェーンです。個別の喫煙ブースがあり、個室風の席で周囲を気にせずゆっくり楽しめると定評があります。", en: "A major izakaya chain with individual smoking booths and private-room-like seats to relax without worrying about others.", ko: "대형 이자카야 체인입니다. 개별 흡연 부스가 있어 개별실 분위기 좌석에서 주변을 신경 쓰지 않고 즐길 수 있습니다.", zh: "大型居酒屋连锁店。设有独立吸烟亭，可在包厢感座位上不介意周围地悠闲享受。" },
    sp_uotami_s: { ja: "夜遅い時間にタバコを吸いながら、ゆっくり日本の居酒屋メニューを楽しみたいときにおすすめです。", en: "Recommended for slowly enjoying Japanese izakaya dishes while smoking late at night.", ko: "밤늦게 담배를 피우며 일본 이자카야 메뉴를 느긋하게 즐기고 싶을 때 추천합니다.", zh: "推荐在深夜想边抽烟边悠闲享受各种日本居酒屋菜单时前往。" },
    sp_uotami_m: { ja: "遅い時間も営業：夜遅くの到着でも開いているので非常に助かります。", en: "Open Until Late: Open even for late arrivals—very helpful.", ko: "늦은 시간도 영업: 밤늦게 도착해도 열려 있어 큰 도움이 됩니다.", zh: "深夜也营业：夜间很晚抵达时也在营业，非常帮了大忙。" },

    sp_teppano_t: { ja: "鉄板王 吉塚駅前店 (★3.8)", en: "Teppan-o (★3.8)", ko: "텟판오 (★3.8)", zh: "铁板王 (★3.8)" },
    sp_teppano_r: { ja: "博多名物のスタミナ鉄板焼肉が楽しめる人気店です。一部の席で喫煙が可能で、愛煙家の方から強く支持されています。", en: "A popular shop for Hakata's stamina teppan yakiniku. Smoking is allowed at some seats—strongly supported by smokers.", ko: "하카타 명물 스태미나 철판 야키니쿠를 즐길 수 있는 인기 매장입니다. 일부 좌석에서 흡연 가능해 애연가에게 지지받습니다.", zh: "可享用博多名物能量铁板烧肉的人气店。部分座位可吸烟，得到吸烟者群体强烈支持。" },
    sp_teppano_s: { ja: "ガッツリとスタミナのつく博多グルメを味わいながら、お煙草も楽しみたい方にぴったりのお店です。", en: "Perfect for enjoying hearty Hakata gourmet while smoking.", ko: "든든한 하카타 음식을 맛보며 담배도 즐기고 싶은 분께 딱 맞는 가게입니다.", zh: "非常适合想边品尝干劲十足的博多美食边享受烟草的人。" },
    sp_teppano_m: { ja: "びっくり鉄板焼肉：辛味噌を油に溶かして食べるスタイル。ご飯とビールが止まらなくなります。", en: "Bikkuri Teppan Yakiniku: Dissolve spicy miso in oil. Rice and beer won't stop.", ko: "びっくり鉄板焼肉: 매운 미소를 기름에 녹여 먹는 스타일. 밥과 맥주가 멈추지 않습니다.", zh: "びっくり铁板烧肉：将辣味噌溶入油中享用。米饭和啤酒会让人停不下来。" },

    sp_gonbei_t: { ja: "焼とり 権兵衛 (★4.0)", en: "Yakitori Gonbei (★4.0)", ko: "야키토리 곤베에 (★4.0)", zh: "烤鸡肉串 权兵卫 (★4.0)" },
    sp_gonbei_r: { ja: "地元の人で毎晩賑わう、炭火焼きの本格焼き鳥が味わえる老舗です。店内は喫煙可能で、昔ながらの居心地の良い空間が愛されています。", en: "A long-established shop crowded nightly with locals for authentic charcoal-grilled yakitori. Smoking allowed; a beloved old-fashioned, cozy space.", ko: "매일 밤 지역 주민으로 붐비는, 숯불에 구운 본격 야키토리를 맛볼 수 있는 노포입니다. 매장 내 흡연 가능하며 옛 정취의 안락한 공간이 사랑받습니다.", zh: "每晚都因当地人热闹非凡、能品尝炭火烤制正宗烤鸡肉串的老字号。店内可吸烟，昔日舒适的空间深受喜爱。" },
    sp_gonbei_s: { ja: "日本の伝統的な焼き鳥屋の雰囲気が好きな方、タバコを吸いながら串焼きを楽しみたい方に最適な隠れ家的名店です。", en: "A hidden gem for those who love traditional yakitori atmosphere and enjoying skewers while smoking.", ko: "일본 전통 야키토리 가게 분위기를 좋아하거나 담배를 피우며 꼬치를 즐기고 싶은 분께 최적인 숨은 명점입니다.", zh: "最适合喜欢日本传统烤鸡肉串店氛围、想边抽烟边享受串烧的人的隐藏名店。" },
    sp_gonbei_m: { ja: "豚バラ・皮：博多の焼き鳥といえば定番の豚バラ。脂が乗っていてジューシーです。", en: "Pork Belly & Skin: The Hakata yakitori standard—fatty and juicy.", ko: "돼지 삼겹살・껍질: 하카타 야키토리의 정석. 기름기가 있어 쥬시합니다.", zh: "猪五花・皮：提到博多的烤鸡肉串就是经典的猪五花。带有油脂，鲜嫩多汁。" },

    // ==========================================
    // アメニティ・設備一覧
    // ==========================================
    al_title: { ja: "民泊アメニティ・設備一覧", en: "Amenities & Facilities", ko: "민박 어메니티・설비 목록", zh: "民宿设备・用品一览" },
    al_cat_bed: { ja: "寝室・寝具", en: "Bedroom & Bedding", ko: "침실・침구", zh: "卧室・寝具" },
    al_cat_bath: { ja: "バスルーム・アメニティ", en: "Bathroom & Amenities", ko: "욕실・어메니티", zh: "浴室・洗漱用品" },
    al_cat_kitchen: { ja: "キッチン・ダイニング", en: "Kitchen & Dining", ko: "주방・다이닝", zh: "厨房・餐厅" },
    al_cat_laundry: { ja: "洗濯・ランドリー", en: "Laundry", ko: "세탁", zh: "洗衣" },
    al_cat_living: { ja: "リビング・設備", en: "Living & Facilities", ko: "거실・설비", zh: "客厅・设备" },
    al_cat_security: { ja: "安全・セキュリティ", en: "Safety & Security", ko: "안전・보안", zh: "安全・防护" },
    al_cat_other: { ja: "その他・サービス", en: "Others & Services", ko: "기타・서비스", zh: "其他・服务" },

    al_bed_h1: { ja: "寝具", en: "Bedding", ko: "침구", zh: "寝具" },
    al_bed_h2: { ja: "クローゼット", en: "Closet", ko: "옷장", zh: "衣柜" },
    al_bed_h3: { ja: "ハンガー", en: "Hangers", ko: "옷걸이", zh: "衣架" },
    al_bed_n1: { ja: "パジャマ／浴衣", en: "Pajamas / Yukata", ko: "잠옷／유카타", zh: "睡衣／浴衣" },
    al_bed_n2: { ja: "お布団セット", en: "Extra Futon Set", ko: "여분 이불 세트", zh: "备用被褥套装" },
    al_bed_n3: { ja: "アイマスク・耳栓", en: "Eye Mask / Earplugs", ko: "안대・귀마개", zh: "眼罩・耳塞" },

    al_bath_h1: { ja: "シャンプー類", en: "Shampoo, etc.", ko: "샴푸류", zh: "洗发水等" },
    al_bath_h2: { ja: "タオル", en: "Towels", ko: "수건", zh: "毛巾" },
    al_bath_h3: { ja: "バスマット", en: "Bath Mat", ko: "욕실 매트", zh: "浴室地垫" },
    al_bath_h4: { ja: "使い捨て歯ブラシ（1本/人）", en: "Disposable Toothbrush (1/person)", ko: "일회용 칫솔(1개/인)", zh: "一次性牙刷（1支/人）" },
    al_bath_h5: { ja: "スリッパ（1足/人）", en: "Slippers (1 pair/person)", ko: "슬리퍼(1켤레/인)", zh: "拖鞋（1双/人）" },
    al_bath_h6: { ja: "ドライヤー", en: "Hair Dryer", ko: "드라이어", zh: "吹风机" },
    al_bath_h7: { ja: "ヘアアイロン", en: "Hair Iron", ko: "헤어 아이론", zh: "卷发棒" },
    al_bath_h8: { ja: "美顔ローラー", en: "Facial Roller", ko: "미용 롤러", zh: "美容滚轮" },
    al_bath_h9: { ja: "入浴用イス", en: "Bath Chair", ko: "목욕 의자", zh: "洗澡凳" },
    al_bath_n1: { ja: "スキン・ヘアケア類", en: "Skin / Hair Care", ko: "스킨・헤어케어류", zh: "护肤・护发用品" },
    al_bath_n2: { ja: "剃刀・髭剃り", en: "Razor", ko: "면도기", zh: "剃须刀" },
    al_bath_n3: { ja: "綿棒", en: "Cotton Swabs", ko: "면봉", zh: "棉签" },
    al_bath_n4: { ja: "洗面器", en: "Wash Basin", ko: "세면대야", zh: "洗脸盆" },
    al_bath_n5: { ja: "除菌シート", en: "Sanitizing Wipes", ko: "제균 시트", zh: "消毒湿巾" },
    al_bath_n6: { ja: "浴室乾燥機", en: "Bathroom Dryer", ko: "욕실 건조기", zh: "浴室干燥机" },
    al_bath_n7: { ja: "入浴剤", en: "Bath Salts", ko: "입욕제", zh: "沐浴剂" },

    al_kit_h1: { ja: "冷蔵庫", en: "Refrigerator", ko: "냉장고", zh: "冰箱" },
    al_kit_h2: { ja: "電子レンジ", en: "Microwave", ko: "전자레인지", zh: "微波炉" },
    al_kit_h3: { ja: "電気ケトル", en: "Electric Kettle", ko: "전기포트", zh: "电热水壶" },
    al_kit_h4: { ja: "IHコンロ", en: "IH Cooktop", ko: "IH 인덕션", zh: "IH电磁炉" },
    al_kit_h5: { ja: "炊飯器", en: "Rice Cooker", ko: "전기밥솥", zh: "电饭煲" },
    al_kit_h6: { ja: "食器用洗剤", en: "Dish Soap", ko: "주방세제", zh: "洗洁精" },
    al_kit_h7: { ja: "スポンジ", en: "Sponge", ko: "수세미", zh: "海绵" },
    al_kit_h8: { ja: "食器・カトラリー", en: "Dishes & Cutlery", ko: "식기・커틀러리", zh: "餐具・刀叉" },
    al_kit_h9: { ja: "調理器具", en: "Cookware", ko: "조리도구", zh: "烹饪器具" },
    al_kit_h10: { ja: "水切りラック", en: "Dish Rack", ko: "식기 건조대", zh: "沥水架" },
    al_kit_n1: { ja: "サランラップ・アルミホイル", en: "Plastic Wrap / Foil", ko: "랩・호일", zh: "保鲜膜・铝箔纸" },
    al_kit_n2: { ja: "調味料", en: "Seasonings", ko: "조미료", zh: "调味料" },
    al_kit_n3: { ja: "浄水器", en: "Water Purifier", ko: "정수기", zh: "净水器" },
    al_kit_n4: { ja: "コーヒー・ティーパック", en: "Coffee / Tea Bags", ko: "커피・티백", zh: "咖啡・茶包" },
    al_kit_n5: { ja: "ペットボトルのお水", en: "Bottled Water", ko: "생수(페트병)", zh: "瓶装水" },
    al_kit_n6: { ja: "トースター", en: "Toaster", ko: "토스터", zh: "烤面包机" },
    al_kit_n7: { ja: "キッチンペーパー", en: "Paper Towels", ko: "키친타월", zh: "厨房纸巾" },

    al_lau_h1: { ja: "洗濯乾燥機", en: "Washer/Dryer", ko: "세탁 건조기", zh: "洗衣烘干机" },
    al_lau_h2: { ja: "洗濯用洗剤", en: "Laundry Detergent", ko: "세탁 세제", zh: "洗衣液" },
    al_lau_n1: { ja: "物干しスタンド・ハンガー", en: "Drying Rack / Hangers", ko: "빨래 건조대・옷걸이", zh: "晾衣架" },
    al_lau_n2: { ja: "アイロン・アイロン台", en: "Iron & Ironing Board", ko: "다리미・다리미판", zh: "熨斗・熨衣板" },
    al_lau_n3: { ja: "柔軟剤", en: "Fabric Softener", ko: "섬유유연제", zh: "柔顺剂" },

    al_liv_h1: { ja: "エアコン", en: "Air Conditioner", ko: "에어컨", zh: "空调" },
    al_liv_h2: { ja: "65インチスマートTV", en: "65\" Smart TV", ko: "65인치 스마트 TV", zh: "65英寸智能电视" },
    al_liv_h3: { ja: "高速Wi-Fi", en: "High-Speed Wi-Fi", ko: "고속 Wi-Fi", zh: "高速Wi-Fi" },
    al_liv_h4: { ja: "ソファ", en: "Sofa", ko: "소파", zh: "沙发" },
    al_liv_h5: { ja: "ローテーブル", en: "Coffee Table", ko: "로테이블", zh: "茶几" },
    al_liv_h6: { ja: "ゴミ箱", en: "Trash Can", ko: "쓰레기통", zh: "垃圾桶" },
    al_liv_h7: { ja: "USB付延長コード", en: "Extension Cord w/ USB", ko: "USB 멀티탭", zh: "带USB插排" },
    al_liv_h8: { ja: "ティッシュ", en: "Tissues", ko: "티슈", zh: "纸巾" },
    al_liv_h9: { ja: "卓上ミラー", en: "Tabletop Mirror", ko: "탁상 거울", zh: "桌面化妆镜" },
    al_liv_n1: { ja: "空気清浄機", en: "Air Purifier", ko: "공기청정기", zh: "空气净化器" },
    al_liv_n2: { ja: "加湿器", en: "Humidifier", ko: "가습기", zh: "加湿器" },
    al_liv_n3: { ja: "ヒーター・ストーブ", en: "Heater", ko: "히터・난로", zh: "暖气・取暖器" },
    al_liv_n4: { ja: "サーキュレーター", en: "Circulator Fan", ko: "서큘레이터", zh: "空气循环扇" },
    al_liv_n5: { ja: "ウェットティッシュ", en: "Wet Wipes", ko: "물티슈", zh: "湿纸巾" },

    al_sec_h1: { ja: "オートロック（共用部）", en: "Auto-Lock (Common Area)", ko: "오토록(공용부)", zh: "自动门锁（公共区域）" },
    al_sec_h2: { ja: "火災報知器", en: "Fire Alarm", ko: "화재경보기", zh: "火灾报警器" },
    al_sec_h3: { ja: "監視カメラ（玄関ドア上部）", en: "Security Camera (above entrance)", ko: "CCTV(현관문 상단)", zh: "监控摄像头（门口上方）" },
    al_sec_h4: { ja: "非常用照明", en: "Emergency Lighting", ko: "비상등", zh: "应急照明" },
    al_sec_n1: { ja: "救急箱", en: "First-Aid Kit", ko: "구급상자", zh: "急救箱" },

    al_oth_h1: { ja: "ウォシュレット付トイレ", en: "Bidet Toilet", ko: "비데 화장실", zh: "带温水冲洗马桶" },
    al_oth_h2: { ja: "粘着クリーナー（コロコロ）", en: "Lint Roller", ko: "점착 클리너(돌돌이)", zh: "粘毛滚筒" },
    al_oth_h3: { ja: "ゴミ袋", en: "Trash Bags", ko: "쓰레기 봉투", zh: "垃圾袋" },
    al_oth_h4: { ja: "サニタリー袋", en: "Sanitary Bags", ko: "위생 봉투", zh: "卫生袋" },
    al_oth_h5: { ja: "便器ブラシ", en: "Toilet Brush", ko: "변기 솔", zh: "马桶刷" },
    al_oth_h6: { ja: "観光ガイド", en: "Tourist Guide", ko: "관광 가이드", zh: "观光指南" },
    al_oth_h7: { ja: "ハウスマニュアル", en: "House Manual", ko: "하우스 매뉴얼", zh: "房屋指南" },
    al_oth_h8: { ja: "折畳式踏台", en: "Folding Step Stool", ko: "접이식 발판", zh: "折叠踏凳" },
    al_oth_h9: { ja: "トイレ消臭剤", en: "Toilet Deodorizer", ko: "화장실 탈취제", zh: "厕所除臭剂" },
    al_oth_n1: { ja: "掃除機", en: "Vacuum Cleaner", ko: "청소기", zh: "吸尘器" },
    al_oth_n2: { ja: "傘・傘立て", en: "Umbrella / Stand", ko: "우산・우산꽂이", zh: "雨伞・伞架" },
    al_oth_n3: { ja: "Bluetoothスピーカー", en: "Bluetooth Speaker", ko: "블루투스 스피커", zh: "蓝牙音箱" },
    al_oth_n4: { ja: "HDMIケーブル・LANケーブル", en: "HDMI / LAN Cable", ko: "HDMI・LAN 케이블", zh: "HDMI・网线" },
    al_oth_n5: { ja: "スマホ充電ケーブル", en: "Phone Charging Cable", ko: "휴대폰 충전 케이블", zh: "手机充电线" },
    al_oth_n6: { ja: "ゲーム機", en: "Game Console", ko: "게임기", zh: "游戏机" },
    al_oth_n7: { ja: "ベビー用品", en: "Baby Items", ko: "유아용품", zh: "婴儿用品" },
    al_oth_n8: { ja: "デスク", en: "Desk", ko: "책상", zh: "书桌" },
    al_oth_n9: { ja: "文具", en: "Stationery", ko: "문구류", zh: "文具" },
    al_oth_n10: { ja: "衣類用消臭スプレー", en: "Clothing Deodorant Spray", ko: "의류 탈취 스프레이", zh: "衣物除臭喷雾" },
    al_oth_n11: { ja: "体重計", en: "Body Scale", ko: "체중계", zh: "体重秤" }
};


// ==========================================
// アプリ動作ロジック
// ==========================================
const supportedLangs = ['ja', 'en', 'ko', 'zh'];
let currentLang = new URLSearchParams(window.location.search).get('lang');
if (!supportedLangs.includes(currentLang)) {
    currentLang = 'ja';
}

document.addEventListener("DOMContentLoaded", () => {
    switchLanguage(currentLang);
});

function switchLanguage(lang) {
    if (!supportedLangs.includes(lang)) lang = 'ja';
    currentLang = lang;

    // data-i18n属性を持つすべての要素を更新
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // 翻訳データにキーが存在し、かつ該当言語のテキストがある場合
        if (translations[key] && translations[key][lang] !== undefined) {
            const val = translations[key][lang];
            // 改行コード（\n）がある場合は <br> に置換して innerHTML にセット
            if (val.indexOf('\n') !== -1) {
                element.innerHTML = val.replace(/\n/g, '<br>');
            } else {
                element.textContent = val;
            }
        }
    });

    // ページの言語属性を更新
    document.documentElement.setAttribute('lang', lang);

    // 言語切り替えボタンのアクティブ状態を更新
    document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // URLのパラメータを更新（リロード時にも言語状態を保持するため）
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
}

function copyPassword(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const textSpan = buttonElement.querySelector('.copy-text');
        
        // 言語に応じたコピーツールチップのテキストを取得
        const originalText = (translations['copy_text'] && translations['copy_text'][currentLang]) || 'コピー';
        const successText = (translations['copy_success'] && translations['copy_success'][currentLang]) || '完了!';
        
        textSpan.textContent = successText;
        buttonElement.classList.add('success');
        
        // 2秒後に元のテキストに戻す
        setTimeout(() => {
            textSpan.textContent = originalText;
            buttonElement.classList.remove('success');
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

function openTab(tabId, event) {
    // 全てのタブコンテンツとボタンのアクティブ状態を解除
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    // 対象のタブコンテンツを表示
    document.getElementById(tabId).classList.add('active');
    
    // クリックされたボタンをアクティブにする
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    // 画面の一番上へスムーズにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}