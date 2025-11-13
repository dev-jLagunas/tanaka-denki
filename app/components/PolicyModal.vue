<script setup>
const props = defineProps({
  show: Boolean,
});
const emits = defineEmits(["close"]);
const close = () => emits("close");
</script>

<template>
  <div v-if="show" class="modal-wrapper" @click.self="close">
    <div class="modal-bg">
      <BaseSectionHeader
        bgColor="bg-brand-blue"
        title="プライバシーポリシー"
        icon="mdi:document"
        sectionId="privacy-policy"
        topMargin="mt-10"
        color="text-primary-white"
      />
      <button @click="close" class="policy-close-btn">✕</button>
      <main
        class="text-primary-dark overflow-y-auto max-h-[70vh] long-copy-text"
      >
        <h4>
          本ウェブサイトは、株式会社田中電気システムサービス（以下「当サイト」）のホームページです。
        </h4>
        <div class="red-underline"></div>

        <ul class="space-y-lg mt-reg">
          <li>
            <h5 class="font-bold mb-1">個人情報保護方針</h5>
            <p class="light-underline">
              当サイトは、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進致します。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">個人情報の管理</h5>
            <p class="light-underline">
              当サイトは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">個人情報の利用目的</h5>
            <p class="light-underline">
              本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
              お客さまからお預かりした個人情報は、当サイトからのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">個人情報の第三者への開示・提供の禁止</h5>
            <p class="light-underline">
              当サイトは、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              ・お客さまの同意がある場合
              ・お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
              ・法令に基づき開示することが必要である場合
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">個人情報の安全対策</h5>
            <p class="light-underline">
              当サイトは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">ご本人の照会</h5>
            <p class="light-underline">
              お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">法令、規範の遵守と見直し</h5>
            <p class="light-underline">
              当サイトは、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
            </p>
          </li>
          <li>
            <h5 class="font-bold mb-1">お問い合せ</h5>
            <p class="light-underline">
              当サイトの個人情報の取扱に関するお問い合せは下記までご連絡ください。
            </p>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>
