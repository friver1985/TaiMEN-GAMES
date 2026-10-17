# TaiMEN GAMES

TaiMEN GAMESは「AIを使って対面を面白く」をモットーに活動しているボドゲサークルです。

**[公式サイト・ゲーム用プロンプトはこちら](https://friver1985.github.io/TaiMEN-GAMES/)**

各ゲームで使うプロンプトを公開しています。サイトでプロンプトをコピーし、ご自身のChatGPTの新しいチャットに貼り付けて送信してください。サイトの閲覧にGitHubアカウントは必要ありません。

お問い合わせは、[XのDM（チャット）へ：@TaiMENGAMES](https://x.com/TaiMENGAMES)。

## ゲーム一覧

| リリース | 作品 |
| --- | --- |
| 2026年秋 | [in暴論](https://friver1985.github.io/TaiMEN-GAMES/#in-bouron) |
| 2026年春 | [名所MIXカルタ](https://friver1985.github.io/TaiMEN-GAMES/#meisho-mix-karuta) |
| 2025年秋 | [ワンチャンポーカー](https://friver1985.github.io/TaiMEN-GAMES/#one-chance-poker) |
| 2025年春 | [AIまいアリーナ・ダンジョン（拡張）](https://friver1985.github.io/TaiMEN-GAMES/#aimai-arena-dungeon) |
| 2024年秋 | [AIまい三銃士を連れてきたよ！](https://friver1985.github.io/TaiMEN-GAMES/#aimai-sanjushi) |
| 2024年春 | [AIまい探偵の事件簿](https://friver1985.github.io/TaiMEN-GAMES/#aimai-detective) |
| 2023年秋 | [AIまいアリーナ](https://friver1985.github.io/TaiMEN-GAMES/#aimai-arena) |
| 2023年春 | [ねこはいますか？](https://friver1985.github.io/TaiMEN-GAMES/#neko-wa-imasuka) |

ダンジョンはアリーナの拡張で、同じ作品欄・プロンプトを使います。事件簿のA・Bパーツは2つで1作品です。全7作品のプロンプトを公開しています。

上記の作品別リンクは、印刷物のQRコードにも使えます。すでに配布したGPTsへの直リンクQRは、自動ではこのサイトへ切り替わりません。

## サイトの構成

HTML・CSS・少量のJavaScriptで動く静的サイトです。GitHub Pagesで、mainブランチのルートから公開しています。ビルドや依存ライブラリ、APIキーは不要です。

| ファイル | 内容 |
| --- | --- |
| index.html | サークル紹介、使い方、ゲーム一覧、各プロンプトの全文 |
| assets/style.css | 共通デザイン |
| assets/prompt.js | 全文コピーと、コピー失敗時の手動選択 |
| assets/covers/ | ゲームの表紙 |
| assets/brand/、assets/icons/ | ロゴなどの素材 |
| games/*/index.html | 旧URLから現在の作品欄への転送 |
| .nojekyll | Jekyllによる処理を使わず配信するためのファイル |

## プロンプトの更新方法

1. index.htmlで対象作品のarticleを探し、textarea data-prompt内の全文を更新します。判定に必要なルールや画像スタイルは、1回のコピーにすべて含めます。
2. HTML内では & を &amp;、< を &lt; と記述します。コピー時は元の文字になります。
3. 作品の説明、プロンプトのバージョン、更新日も更新します。リリース時期は作品の発売時期なので、プロンプト更新日とは別に管理します。
4. 通常のChatGPTの新しいチャットで、ゲームの開始と判定・画像生成を確認します。
5. 下記の確認後、mainブランチへ反映します。GitHub Pagesへの反映には数分かかる場合があります。

新しい作品を追加する場合は、article data-gameを複製して一意のidを付け、作品ナビと作品数も更新します。準備中の作品はコピーボタンを無効にし、正式版と区別します。

CSS・JavaScriptを更新した場合は、index.html内の読み込みURLの?v=番号も更新します。プロジェクトサイトのため、画像やページへのリンクには相対パスを使います。印刷物で使った作品idや旧URLは維持します。

## 更新時の確認

- スマホで横にはみ出さず、説明とボタンが読みやすい。
- 作品ナビとQR用URLが正しい作品へ移動する。
- コピーボタンで、その作品の全文が改行・末尾までコピーできる。
- コピーに失敗しても、全文の表示・選択によって手動コピーできる。
- JavaScriptが無効でもプロンプト全文を表示できる。
- 公開先で画像・CSS・JavaScript・ChatGPTへのリンク・旧URLの転送が動く。

実際のChatGPTでのゲーム判定・画像生成を使ったプレイテストは未実施です。

素材の出典・切り出し範囲・制作時の改訂記録は[制作記録](docs/production-notes.md)に残しています。ライセンスは設定していません。
