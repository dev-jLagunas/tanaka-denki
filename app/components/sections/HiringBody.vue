<script setup lang="tx"></script>

<template>
  <section class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-reg">
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="求める人物像"
      icon="mdi:person"
      sectionId="hiring-points"
      topMargin="mt-10"
      class="lg:hidden"
    />
    <ScrollNextBtn
      nextId="hiring-points"
      label="募集要項へスクロール"
      class="lg:hidden"
    />
    <img
      src="/images/logo-only.png"
      alt="company logo"
      class="h-16 mx-auto my-lg lg:hidden"
    />
    <ul
      class="space-y-reg px-reg w-fit md:text-xl lg:w-full lg:border-r-2 lg:border-brand-red/20"
    >
      <li>
        <img
          src="/images/logo-only.png"
          alt="company logo"
          class="h-16 mx-auto my-lg hidden lg:grid"
        />
      </li>
      <li class="lg:flex-row-start-center lg:gap-sm">
        <Icon name="mdi:talk" size="50" class="text-brand-blue" />
        <div class="long-copy-text space-y-sm">
          <p class="font-bold">コミュニケーション力</p>
          <p class="border-b border-brand-blue/10 pb-sm">
            多くの人と協力していけるコミュニケーション力がある。
          </p>
        </div>
      </li>

      <li class="lg:flex-row-start-center lg:gap-sm">
        <Icon name="mdi:star" size="50" class="text-brand-green" />
        <div class="long-copy-text space-y-sm">
          <p class="font-bold">将来の志がある</p>
          <p class="border-b border-brand-blue/10 pb-sm">
            将来こうなりたい、こうしたいなどの志がある。
          </p>
        </div>
      </li>
      <li class="lg:flex-row-start-center lg:gap-sm">
        <Icon name="mdi:fire" size="50" class="text-brand-red" />
        <div class="long-copy-text space-y-sm">
          <p class="font-bold">向上心がある</p>
          <p class="border-b border-brand-blue/10 pb-sm">
            年齢・経験に関係なく、いつまでも向上心を持っている。
          </p>
        </div>
      </li>
    </ul>
    <div class="px-reg space-y-reg md:text-xl lg:space-y-lg">
      <h4
        class="long-copy-text font-bold text-center mt-lg text-lg md:text-start md:text-xl"
      >
        経験のない方も丁寧に指導いたします
      </h4>
      <div
        class="h-0.5 w-1/3 bg-brand-red/50 mt-1 mx-auto md:mx-0 lg:-mt-reg"
      ></div>
      <p class="long-copy-text">
        上記の全部を満たしている必要はありませんが、やはりコミュニケーションは大事にしています。
      </p>
      <p class="long-copy-text">
        そして仕事をしている時間は長いため、好きなものを仕事にできると自ずと向上心も出てくると考えています。
      </p>
      <p class="long-copy-text">
        私たちが目指すものに共感していただき、みんなで向き合える仲間と働きたいです。
      </p>
      <p
        class="long-copy-text font-bold text-center text-lg md:text-start md:text-xl"
      >
        ぜひ興味を持った方、ご応募お待ちしております。
      </p>
      <div
        class="h-0.5 w-1/3 bg-brand-red/50 mt-1 mx-auto md:mx-0 lg:-mt-reg"
      ></div>
    </div>
  </section>
</template>
