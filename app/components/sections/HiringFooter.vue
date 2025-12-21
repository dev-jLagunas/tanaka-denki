<script setup lang="tx"></script>

<template>
  <section class="lg:grid lg:grid-cols-2 lg:items-center" data-aos="fade-up">
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="募集要項"
      icon="mdi:work"
      sectionId="hiring-description"
      topMargin="mt-10"
      class="lg:hidden"
    />
    <h3 class="long-copy-text px-reg mb-2 md:text-xl lg:text-2xl lg:hidden">
      当社のスタッフは経験豊富な層が多く、若手からベテランまでバランスよく在籍しています。年代の偏りが少なく、相談しやすい職場環境が特徴です。
    </h3>
    <img
      src="/images/hiring-img-2.png"
      alt=""
      class="w-[90%] mx-auto rounded-sm object-cover h-full lg:hidden"
    />
    <div
      class="text-primary-dark grid grid-cols-2 mt-4 place-items-center lg:hidden"
    >
      <article>
        <h5 class="font-bold text-lg">年代別割合</h5>
        <p>全従業員含む</p>
        <ul class="mt-2">
          <li><Icon name="mdi:chevron-right" size="12" />40代：4 名</li>
          <li><Icon name="mdi:chevron-right" size="12" />50代：3 名</li>
          <li><Icon name="mdi:chevron-right" size="12" />30代：3 名</li>
          <li><Icon name="mdi:chevron-right" size="12" />60代：3 名</li>
          <li><Icon name="mdi:chevron-right" size="12" />70代：2 名</li>
          <li><Icon name="mdi:chevron-right" size="12" />20代：3 名</li>
        </ul>
      </article>
      <article>
        <h5 class="font-bold text-lg">経験年数別割合</h5>

        <ul class="mt-2">
          <li><Icon name="mdi:chevron-right" size="12" />入社0〜3年： 9名</li>
          <li><Icon name="mdi:chevron-right" size="12" />入社4〜6年： 1名</li>
          <li><Icon name="mdi:chevron-right" size="12" />入社7年以上：2名</li>
        </ul>
      </article>
    </div>

    <ul
      class="space-y-reg mt-lg px-sm border-2 border-brand-blue py-reg mx-sm rounded-sm lg:border-0 long-copy-text lg:border-r-2 lg:border-brand-red/20"
    >
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          職種
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          技術職（電気主任技術者）
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          詳細
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          認定校を卒業の方は、第3種電気主任技術者の取得が可能です。
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          応募資格
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          第二種電気工事士、普通自動車免許必須第3種電気主任技術者優遇
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          勤務時間
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          8：30～17：00（休憩1時間）
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          加入保険
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          雇用保険、労災保険、健康保険、厚生年金
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          休日
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          週休2日制土曜日、日曜日、祝日、年末年始
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          年次休暇
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          6か月経過後の年次有給休暇日数：10日
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          勤務地
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          石川県白山市
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          雇用形態
        </p>
        <p
          class="text-primary-dark tracking-wide text-lg border-b pb-2 border-lightest-blue/20 mt-1"
        >
          正社員
        </p>
      </li>
      <li class="md:flex md:justify-start md:items-center md:gap-2">
        <p
          class="bg-brand-blue py-1 text-primary-white w-24 text-center rounded-sm"
        >
          仕事内容
        </p>
        <div>
          <p class="text-primary-dark tracking-wide text-lg">
            補助作業からスタートします。
          </p>
          <p>現場での軽工事、測定、試験の実施を補助</p>
          <p>保守管理部で現場事業所の設備管理業務を担当</p>
          <p>測定、試験データの報告書作成</p>
          <p class="border-b pb-2 border-lightest-blue/20 mt-1">
            太陽光発電所内の除草、除雪作業
          </p>
        </div>
      </li>
    </ul>
    <figure class="h-full flex-col-center">
      <img
        src="/images/logo-only.png"
        alt="company logo"
        class="h-10 mx-auto my-lg hidden lg:grid"
      />
      <h3
        class="long-copy-text px-reg mb-12 hidden lg:text-lg lg:text-center lg:block"
      >
        当社のスタッフは経験豊富な層が多く、若手からベテランまでバランスよく在籍しています。年代の偏りが少なく、相談しやすい職場環境が特徴です。
      </h3>
      <img
        src="/images/hiring-img-2.png"
        alt=""
        class="hidden lg:grid -mt-reg w-[90%] mx-auto rounded-sm max-h-[350px] object-cover"
      />
      <div
        class="text-primary-dark lg:grid grid-cols-2 mt-4 place-items-center hidden lg:w-full"
      >
        <article>
          <h5 class="font-bold text-lg">年代別割合</h5>
          <p>全従業員含む</p>
          <ul class="mt-2">
            <li><Icon name="mdi:chevron-right" size="12" />40代：4 名</li>
            <li><Icon name="mdi:chevron-right" size="12" />50代：3 名</li>
            <li><Icon name="mdi:chevron-right" size="12" />30代：3 名</li>
            <li><Icon name="mdi:chevron-right" size="12" />60代：3 名</li>
            <li><Icon name="mdi:chevron-right" size="12" />70代：2 名</li>
            <li><Icon name="mdi:chevron-right" size="12" />20代：3 名</li>
          </ul>
        </article>
        <article>
          <h5 class="font-bold text-lg">経験年数別割合</h5>

          <ul class="mt-2">
            <li><Icon name="mdi:chevron-right" size="12" />入社0〜3年： 9名</li>
            <li><Icon name="mdi:chevron-right" size="12" />入社4〜6年： 1名</li>
            <li><Icon name="mdi:chevron-right" size="12" />入社7年以上：2名</li>
          </ul>
        </article>
      </div>
    </figure>
  </section>
</template>
