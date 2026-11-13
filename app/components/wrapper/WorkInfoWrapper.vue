<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
</script>

<template>
  <section class="">
    <!-- =================================================================== -->
    <!-- SECTION 1: 事業案内 (Business Overview / Intro)                     -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="事業案内"
      icon="mdi:company"
      sectionId="work-info"
    />
    <ScrollNextBtn
      nextId="system-info"
      label="需要設備の保守点検へスクロール"
    />

    <h3 class="long-copy-text px-reg md:text-xl lg:text-2xl">
      自家用電気設備のあらゆる疑問点や不安なことを弊社にご相談してください。
    </h3>
    <h3 class="long-copy-text px-reg mt-reg md:text-xl lg:text-2xl">
      現地調査から施工まで、一社完結の安心体制でご対応します。
    </h3>

    <!-- =================================================================== -->
    <!-- SECTION 2: 太陽光設備の保守点検 (Solar Equipment Maintenance)        -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-orange"
      title="太陽光設備の保守点検"
      icon="mdi:solar-panel"
      sectionId="work-info"
    />
    <section class="space-y-lg md:two-grid-upsize md:space-y-0 md:gap-lg mb-24">
      <BaseInfoCard
        bgColor="bg-orange"
        number="1"
        subheading="年次・月次の点検・報告"
        longCopy="長期にわたり、安定した電力を確保するため、年次・月次点検を行います。"
        :images="['images/work/work-info-img-1.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="2"
        subheading="パワーコンディショナー・パネル等の修復"
        longCopy="焼損コネクタの撤去、新コネクタの取付け、配線接続により故障復旧を図ります。"
        :slideCopy="['(例)焼損コネクタの修復']"
        :images="[
          'images/work/work-info-img-2b.webp',
          'images/work/work-info-img-2.webp',
        ]"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="3"
        subheading="遠隔監視による不具合の早期発見"
        longCopy="事務所から常時監視し、異常を即時に検知。早期発見と迅速対応で、発電損失や設備トラブルを防ぎます。"
        :images="[
          'images/work/work-info-img-3.webp',
          'images/work/work-info-img-3b.webp',
        ]"
        data-aos="fade-in"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="4"
        subheading="監視カメラで障害発生を検知"
        longCopy="発電所の防犯のため監視します。
        さらに、設備の障害発生をリアルタイムで監視し、物理的要因を把握して早急に対処します。"
        :images="['images/work/work-info-img-4.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="5"
        subheading="パネル簡易診断"
        longCopy="太陽光パネル計測器のソラメンテ等を用いてストリングや、パネルの異常を迅速に数値化し、発電トラブルを未然に防ぎます。"
        :images="['images/work/work-info-img-5.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="6"
        subheading="キュービクルの保守点検"
        longCopy="外観・盤内点検、電力量積算値・デマンド検針 漏れ電流・トランス温度の測定等を行います。"
        :images="['images/work/work-info-img-6.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="7"
        subheading="除草作業"
        longCopy="成長した雑草の影による発電量の低下を防止すると共に、つる植物の巻付きによるケーブルの損傷を防止するため除草します。"
        :slideCopy="[
          '当社所有重機等①乗用草刈機×６台②自走式草刈機×７台③ラジコン操縦草刈機×２台運搬車（除雪兼用×５台',
        ]"
        :images="['images/work/work-info-img-7.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="8"
        subheading="除雪作業"
        longCopy="積雪荷重によるパネル倒壊を防止すると共に、パネル上の積雪を落下させて発電可能にするため除雪します。 "
        :slideCopy="[
          '当社所有重機等④ロータリー式除雪車×４台⑤大型除雪機×４台⑥ホイールローダー×２台',
        ]"
        :images="['images/work/work-info-img-8.webp']"
      />
      <BaseInfoCard
        bgColor="bg-orange"
        number="9"
        subheading="ドローンによる点検"
        longCopy="機能性の高い赤外線カメラが搭載されたドローンにより、上空より肉眼で確認できない異常（ホットスポット等）を正確に感知し、発電効率の低下を早期に発見します。"
        :images="['images/work/work-info-img-9.webp']"
      />
    </section>

    <!-- =================================================================== -->
    <!-- SECTION 3: 需要設備の保守点検 (Demand Equipment Maintenance)         -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-brand-red"
      title="需要設備の保守点検"
      icon="mdi:gear"
      sectionId="system-info"
    />
    <ScrollNextBtn
      nextId="battery-info"
      label="系統用蓄電所の管理へスクロール"
    />
    <section class="space-y-4 md:two-grid-upsize md:space-y-0 md:gap-lg mb-24">
      <BaseInfoCard
        bgColor="bg-light-red"
        number="1"
        subheading="月次・年次点検・報告"
        longCopy="設備の状態を定期的に点検し、異常や劣化を早期に発見。結果を分かりやすく報告し、安全で安定した電気設備の運用をサポートします。"
        :images="['images/work/work-info-img-10.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-red"
        number="2"
        subheading="停電・無停電点検"
        :slideCopy="['高圧絶縁診断', '熱画像診断', '', '', '低圧絶縁診断']"
        longCopy="お客様の契約内容に応じて、年1回程で停電・無停電点検を実施し、電気設備の安全と安定稼働を確保します。点検日は24時間何時でもお客様のご要望にお応えしております。"
        :images="[
          'images/work/work-info-img-10b.webp',
          'images/work/work-info-img-10b2.webp',
          'images/work/work-info-img-10b3.webp',
          'images/work/work-info-img-10b4.webp',
          'images/work/work-info-img-10b5.webp',
        ]"
      />
      <BaseInfoCard
        bgColor="bg-light-red"
        number="3"
        subheading="異常発見時の緊急対応"
        longCopy="設備に異常や故障が起きた場合に、直ちに復旧作業・緊急対応し、停電や火災のリスクを最小限に抑えます。"
        :images="['images/work/work-info-new-img-3.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-red"
        number="4"
        subheading="デマンド管理装置の取り付け"
        longCopy="使用電力をリアルタイムに把握し、ピーク超過を防止。電気料金の増加や損失を最小限に抑えます。空調機等を自動制御してコントロールしています。"
        :images="[
          'images/work/work-info-new-img-2.webp',
          'images/work/work-info-new-img-2a.webp',
          'images/work/work-info-new-img-2b.webp',
          'images/work/work-info-new-img-2c.webp',
          'images/work/work-info-new-img-2d.webp',
          'images/work/work-info-new-img-2e.webp',
        ]"
      />
      <BaseInfoCard
        bgColor="bg-light-red"
        number="5"
        subheading="絶縁監視装置による漏電の常時監視"
        longCopy="設備の絶縁状態を常にチェックし、漏電の兆候を早期に検知して事故や火災を未然に防ぐ監視システムです。"
        :images="['images/work/work-info-new-img-1.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-red"
        number="6"
        subheading="受電・負荷・発電設備の点検"
        longCopy="高圧受電設備、配電盤、負荷設備、発電設備などの点検を行い、異常や劣化を早期に発見。"
        :images="['images/work/work-info-img-10.webp']"
      />
    </section>

    <!-- =================================================================== -->
    <!-- SECTION 4: 系統用蓄電所の管理 (Grid Storage Battery Management)     -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-blue-1"
      title="系統用蓄電所の管理"
      icon="mdi:battery-charging"
      sectionId="battery-info"
    />
    <ScrollNextBtn
      nextId="tool-info"
      label="除草作業を支える重機へスクロール"
    />
    <section class="space-y-4 md:two-grid-upsize md:space-y-0 md:gap-lg mb-24">
      <BaseInfoCard
        bgColor="bg-blue-1"
        number="1"
        subheading="蓄電設備の巡視・点検"
        longCopy="蓄電所内の設備や周辺環境を確認し、異常の早期発見と設備の安全な運用をサポートします。"
        :images="['images/work/work-info-new-1.webp']"
      />
      <BaseInfoCard
        bgColor="bg-blue-1"
        number="2"
        subheading="電気設備の状態確認"
        longCopy="蓄電池システムや電気設備の状態を確認し、設備の安定稼働とトラブルの予防に努めます。"
        :images="['images/work/work-info-new-2.webp']"
      />
      <BaseInfoCard
        bgColor="bg-blue-1"
        number="3"
        subheading="異常時の対応・保守管理"
        longCopy="設備の異常や不具合が発生した際には、状況の確認や関係者との連携を通じて、適切な対応をサポートします。"
        :images="['images/work/work-info-new-3.webp']"
      />
    </section>

    <!-- =================================================================== -->
    <!-- SECTION 5: 重機等一覧 (Heavy Machinery & Equipment List)            -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-brand-green"
      title="除草作業を支える重機"
      icon="mdi:tractor"
      sectionId="tool-info"
    />
    <ScrollNextBtn
      nextId="snow-info"
      label="除雪作業を支える重機へスクロール"
    />
    <section class="space-y-4 md:two-grid-upsize md:space-y-0 md:gap-lg mb-24">
      <BaseInfoCard
        bgColor="bg-light-green"
        number="1"
        subheading="乗用草刈機 ×6台"
        longCopy="広範囲の草刈りを効率的に行います。"
        :images="['images/work/work-info-img-11a.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-green"
        number="2"
        subheading="自走式草刈機 ×7台"
        longCopy="傾斜地や狭い場所の草刈りに最適です。"
        :images="['images/work/work-info-img-11b.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-green"
        number="3"
        subheading="ラジコン操縦草刈機 ×2台"
        longCopy="危険な斜面や太陽光パネル下の除草に活躍します。"
        :images="['images/work/work-info-img-11c.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-green"
        number="4"
        subheading="ラジコン操作草刈機 ×2台"
        longCopy="遠隔操作で安全かつ効率的に作業できます。"
        :images="['images/work/work-info-img-11cnew.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-green"
        number="5"
        subheading="動力噴霧機 ×2台"
        longCopy="動力噴霧により、敷地全体へ均一に薬剤を散布します。"
        :images="['images/work/work-info-img-11c-new-2.webp']"
      />
      <BaseInfoCard
        bgColor="bg-light-green"
        number="6"
        subheading="リモコン式草刈機 ×1台"
        longCopy="イタリア製多目的ラジコン草刈機 最大55度の急傾斜にも対応！遠隔操作で太陽光発電所の広大な敷地を安全・スピーディーに除草します。"
        :images="['images/work/work-info-img-11c-new-3.webp']"
      />
    </section>

    <!-- =================================================================== -->
    <!-- SECTION 6: 除雪作業を支える重機 (Snow Removal Machinery)             -->
    <!-- =================================================================== -->
    <BaseSectionHeader
      bgColor="bg-blue-2"
      title="除雪作業を支える重機"
      icon="mdi:snowflake"
      sectionId="snow-info"
    />
    <ScrollNextBtn nextId="customer-merits" label="特記事項へスクロール" />
    <section class="space-y-4 md:two-grid-upsize md:space-y-0 md:gap-lg mb-24">
      <BaseInfoCard
        bgColor="bg-blue-2"
        number="1"
        subheading="ロータリー式除雪車 ×2台"
        longCopy="大量の積雪を効率よく除雪し、発電所内の通路や作業スペースの確保に活躍します。"
        :images="['images/work/work-info-snow-1.webp']"
      />
      <BaseInfoCard
        bgColor="bg-blue-2"
        number="2"
        subheading="大型除雪機 ×4台"
        longCopy="パワフルな除雪能力で、広範囲の積雪や深い雪にも対応します。"
        :images="['images/work/work-info-snow-2.webp']"
      />
      <BaseInfoCard
        bgColor="bg-blue-2"
        number="3"
        subheading="ホイールローダー ×2台"
        longCopy="大量の雪を押し出し・運搬し、発電所周辺の除雪や雪の集積に活躍します。"
        :images="['images/work/work-info-snow-3.webp']"
      />
      <BaseInfoCard
        bgColor="bg-blue-2"
        number="4"
        subheading="リモコン式除雪機"
        longCopy="イタリア製多目的ラジコン式スノーブロワー 豪雪地帯や大規模施設の除雪に最適。強力な性能と安全性で、冬の作業を快適にサポートします。"
        :images="['images/work/work-info-snow-4.webp']"
      />

      <!-- Special Card 5: 雪上バイク (Full-width 2-column feature card) -->
      <article
        class="relative bg-blue-2 w-[90%] mx-auto rounded-sm md:w-full md:col-span-2 md:grid md:grid-cols-2 md:items-center md:p-reg lg:p-lg mt-6 md:mt-2"
        data-aos="fade-up"
      >
        <!-- Top-left Floating Pill Badge -->
        <span
          class="absolute -top-4 left-4 bg-white text-primary-dark border border-primary-dark rounded-xl px-5 py-1 text-sm md:text-base shadow-xs z-10"
        >
          新規導入
        </span>

        <!-- Left Column: Number, Title, Copy, 3-Column Feature Icons -->
        <div class="pt-8 pb-reg px-sm md:py-reg md:pr-lg">
          <header class="flex items-center gap-3">
            <p class="work-info-card-number mb-0!">5</p>
            <h3 class="card-heading-text text-xl md:text-2xl text-balance">
              雪上バイク <span class="text-base md:text-lg ml-2">×2台</span>
            </h3>
          </header>

          <p class="long-copy-text py-reg md:text-lg">
            山間部や積雪地域の太陽光発電設備を、冬季でもしっかりサポートします。
          </p>

          <!-- 3-Column Icon Row -->
          <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
            <div class="flex flex-col items-center gap-1.5 sm:gap-2">
              <Icon
                name="mdi:terrain"
                class="text-primary-white shrink-0 w-7 h-7 sm:w-9 sm:h-9"
              />
              <span
                class="text-[11px] sm:text-xs lg:text-sm text-primary-dark leading-tight"
              >
                山間部への<br />アクセス
              </span>
            </div>

            <div class="flex flex-col items-center gap-1.5 sm:gap-2">
              <Icon
                name="mdi:clock-outline"
                class="text-primary-white shrink-0 w-7 h-7 sm:w-9 sm:h-9"
              />
              <span
                class="text-[11px] sm:text-xs lg:text-sm text-primary-dark leading-tight"
              >
                迅速な<br />現場対応
              </span>
            </div>

            <div class="flex flex-col items-center gap-1.5 sm:gap-2">
              <Icon
                name="mdi:snowmobile"
                class="text-primary-white shrink-0 w-7 h-7 sm:w-9 sm:h-9"
              />
              <span
                class="text-[11px] sm:text-xs lg:text-sm text-primary-dark leading-tight"
              >
                現場内の<br />移動を効率化
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Video + Image Swiper -->
        <div class="w-full">
          <Swiper
            :modules="[Pagination, Navigation]"
            :loop="true"
            :pagination="true"
            :navigation="true"
          >
            <SwiperSlide>
              <figure
                class="h-[300px] sm:h-[350px] lg:h-[340px] bg-black rounded-sm"
              >
                <video
                  src="/images/work/work-info-snow-6-opt.mp4"
                  poster="/images/work/work-info-snow-5.webp"
                  controls
                  muted
                  playsinline
                  preload="metadata"
                  class="h-full w-full object-cover rounded-sm"
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure class="h-[300px] sm:h-[350px] lg:h-[340px]">
                <img
                  src="/images/work/work-info-snow-5.webp"
                  loading="lazy"
                  alt="雪上バイク"
                  class="h-full w-full object-cover object-center rounded-sm"
                />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </section>

    <!-- Bottom Closing Copy -->
    <p
      class="text-center font-bold text-primary-dark tracking-wider px-reg mt-8 md:mt-10 md:text-lg"
    >
      豊富な重機・機材と確かな技術で、お客様の大切な設備を年間を通じて支えます。
    </p>
  </section>
</template>
