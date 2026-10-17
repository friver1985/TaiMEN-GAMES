# TaiMEN GAMES

TaiMENのゲームで使うAI判定用プロンプト・ルール・使い方を公開する静的サイト。
ゲーム選択・説明・全文コピーはトップページ1枚で完結します。判定は利用者自身のChatGPTで行います。

## 構成

- index.html：ゲーム一覧、各作品の説明とプロンプト全文、共通の開始手順
- assets/style.css：共通デザイン
- assets/prompt.js：各ゲームの全文コピーと、失敗時の手動選択
- games/*/index.html：旧URLからトップの該当ゲームへの転送のみ
- .nojekyll：ビルド不要で配信

## プロンプトを公開・更新する

1. 正式ルールとプロンプトを確認します。GPTsの知識ファイルに必須情報がある場合は全文に統合します。採点基準を推測して追加しません。
2. index.html の対象 article（idが作品の識別子）の textarea data-prompt 内に全文を書きます。HTMLとして & は &amp;、< は &lt; にします。コピー時には元の文字になります。不要な改行や空白をタグの内側に追加しないでください。
3. 対象作品の説明、バージョン、更新日、必要な入力を更新します。
4. 対象のbuttonからdisabledを外し、文言を「判定用プロンプトをコピー」に変更します。準備中・未公開の案内、placeholder、ゲーム数の状態表記も更新します。
5. 通常のChatGPTの新しいチャットへ全文を1回貼り付け、開始と判定を確認します。
6. 下記の動作確認後、GitHubへ反映します。

全文の更新元はindex.html内の各textareaだけです。JavaScriptが動かなくても「プロンプト全文・手動コピー」を開いて全文を選択できます。

## ゲームを追加する

index.html内のarticle data-gameを複製し、一意なid、作品名、説明、textareaのaria-label、正式プロンプトと公開状態を更新します。ゲーム選択ナビに同じidへのリンクを追加し、ゲーム数も更新します。コピー処理は対象article内の全文だけを扱います。新しい個別ページは不要です。

## 公開とQRコード

GitHub Pagesはmainブランチの /(root) から配信します。更新反映には数分かかる場合があります。

公開先：https://friver1985.github.io/TaiMEN-GAMES/

ゲーム別QRコードには次のURLを使います。すべて同じトップページ内の各作品へ移動します。

- あいまい三銃士を連れてきてよ：https://friver1985.github.io/TaiMEN-GAMES/#aimai-sanjushi
- AIまいアリーナ：https://friver1985.github.io/TaiMEN-GAMES/#aimai-arena
- ワンチャンポーカー：https://friver1985.github.io/TaiMEN-GAMES/#one-chance-poker
- in暴論：https://friver1985.github.io/TaiMEN-GAMES/#in-bouron

旧games/配下のURLは転送用に残しています。すでに配ったGPTs直リンクQRは自動で切り替わりません。
内部リンクは相対パスです。ビルド、依存ライブラリ、外部フォント、APIキーは不要です。

## 動作確認

- スマホで横にはみ出さず、選択・説明・コピーが1ページで使えること。
- 各ゲームのナビとQR用URLが正しいゲームへ移動すること。
- 各コピーボタンが、そのゲームの全文だけを改行・末尾までコピーすること。
- コピー失敗時に対象ゲームの全文が選択され、手動コピーの案内が出ること。
- JavaScript無効でも各全文を開いて選択できること。
- 公開URLでCSS、JavaScript、ChatGPTへのリンク、旧URLの転送が動くこと。
- 準備中のコピーが無効であること。

in暴論は提供された正式プロンプトv1.0（2026-10-17）を公開済みです。他3作品の正式プロンプトは未提供です。全文の一致とコピー処理を確認しています。実際のChatGPTでの写真審査テストは未実施です。
ライセンスは設定していません。
