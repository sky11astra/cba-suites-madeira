// Галерея: ключ фото (dist/img/<ключ>-<ширина>.avif/.webp) і категорія. Підписи — у src/i18n/<мова>.mjs → gallery.alts.
export const gallery = [
  ["612644740", "views"], ["474754100", "pool"], ["240155183", "lounge"], ["474756863", "views"],
  ["courtyard-dusk", "pool"], ["612644780", "suites"], ["599496750", "lounge"], ["474756830", "suites"],
  ["474755098", "views"], ["244741748", "pool"], ["599502789", "suites"], ["599497006", "details"],
  ["474756817", "suites"], ["240155229", "lounge"], ["599500529", "suites"], ["599497603", "views"],
  ["facade-pool", "pool"], ["474755127", "suites"], ["599502300", "details"], ["598772545", "suites"],
  ["437912696", "pool"], ["240137137", "details"], ["599502761", "suites"], ["240155223", "suites"],
  ["474754710", "details"], ["612644819", "suites"], ["599497378", "details"], ["474754027", "suites"]
].map(([key, cat]) => ({ key, cat }));
