<script setup></script>

<template>
  <section>
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="施工実績"
      icon="mdi:achievement"
      sectionId="work-info"
    />
    <h3 class="long-copy-text px-reg -mt-4 md:w-4/5">
      当社は、高圧10か所及び低圧18か所の太陽光発電所を建設し、その発電出力の合計は約５ＭＷです。
    </h3>
    <h3 class="long-copy-text px-reg mt-reg :w-4/5">
      計画、設計、事業計画認定申請(経済産業省)、接続検討申込(電力会社)、補助金申請(経済産業省、環境省)、施工、発電管理、パネル・PCS等の保守管理、除草、除雪等をワンストップサービスで行います。
    </h3>
    <div class="mt-lg space-y-reg md:grid md:grid-cols-3 md:gap-reg md:px-reg">
      <BaseAchieveCard
        location="石川県かほく市"
        name="松浜太陽光発電所"
        watts="500"
        :img="'images/pastwork/past-work-img-1.jpg'"
      />
      <BaseAchieveCard
        location="富山県小矢部市"
        name="水島第一太陽光発電所"
        watts="300"
        :img="'images/pastwork/past-work-img-2.jpg'"
      />
      <BaseAchieveCard
        location="富山県小矢部市"
        name="水島第二太陽光発電所"
        watts="480"
        :img="'images/pastwork/past-work-img-3.jpg'"
      />
    </div>
  </section>
</template>
