// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.2d2874e280a73d6ecfcd.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxManageModal"], {
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less": function(e, a, t) {
			e.exports = {
				imageHeader: "_8KzrRA8yTvd9679j1V0k7",
				imagePreview: "_3kdojCGNHRrL3GuViOkNME",
				imageSize: "hF6aODChg-UwqFkuX9AM1",
				imageTitle: "_2PCxQueuNHfH879r7jogwa",
				imageUpload: "_18zr_AaKzfDtZrepiFFTCe",
				modifiers: "_2LKli1iQrUdbsYzShsg3YR",
				remove: "SMnx1tAfXpJWO3Sr2VcVz",
				toggle: "_2_xIar-pQzcaZejOyC1w3a",
				toggleSwitch: "_2s-oHqBMgiuPqK4pBrF3TJ",
				title: "_3mpNZcpYy4GnKd5JLKPX8D"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less": function(e, a, t) {
			e.exports = {
				flexRow: "_3PPR8mt1R20DxTj3CZ8yIm",
				button: "_2q4TPKjyndrZrOp9_tI8BD",
				buttons: "_18rBVBY2QtpOFBuJhoXLbT",
				container: "_2iGjgTij3kidyBVsQ8myCL",
				save: "_3cecHSNIclgao2GZIQ7y1h",
				token: "KN3bC8Yq1FNJ9TufUghPn",
				wallet: "hAV4hcf2m0HZDqGFw7SFP"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less": function(e, a, t) {
			e.exports = {
				banner: "DX7QCT5kfhSb16VaMhfM5",
				container: "CTEnq1P6XACIyTxmN9rkU",
				controls: "SGICMsRyp2MQuLbevlICf",
				manage: "_2NxpbYaWRDYHvoA89CfRtv",
				manageDescription: "_2AMmIm-EO0dLeahfe0Ak-k",
				manageTitle: "_1JEVA_bd7b53YOeZTNZaH5",
				title: "_1YKnQMdfez_QaQS9O4lf95"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/lodash/isEqual.js"),
				s = t.n(n),
				r = t("./node_modules/react/index.js"),
				i = t.n(r),
				o = t("./node_modules/react-redux/es/index.js"),
				d = t("./node_modules/reselect/es/index.js"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				l = t("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = t("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				g = t("./src/reddit/contexts/PageLayer/index.tsx"),
				b = t("./src/reddit/controls/Button/index.tsx"),
				p = t("./src/reddit/featureFlags/component.tsx"),
				u = t("./src/reddit/i18n/components.tsx"),
				h = t("./src/reddit/selectors/gov.ts"),
				x = t("./src/lib/uploadToS3/index.ts"),
				v = t("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				I = t("./src/reddit/contexts/ApiContext.tsx"),
				C = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				f = t("./src/reddit/endpoints/governance/imageLease.ts"),
				E = t("./src/reddit/helpers/media/index.ts"),
				N = t("./src/reddit/i18n/utils.ts"),
				j = t("./src/reddit/icons/svgs/Remove/index.tsx"),
				B = t("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less"),
				_ = t.n(B);
			const y = "bannerBackgroundImage";
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleBannerImageUpload = async e => {
						const {
							apiContext: a,
							subredditId: t
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const n = await Object(E.g)(e.file) || e.file.type,
							s = await Object(f.a)(a(), t, e.file.name, y, n);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							i = await Object(x.a)(e.file, r);
						if (i.ok) {
							const e = decodeURIComponent(i.body.PostResponse.Location);
							this.props.onImageChange({
								[y]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[y]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: a,
						tabIndex: t,
						tiled: n
					} = this.props, s = a ? a[y] : void 0;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: _.a.title
					}, i.a.createElement(u.c, null, "banner")), i.a.createElement("div", {
						className: _.a.imageHeader
					}, i.a.createElement("div", {
						className: _.a.imageTitle
					}, i.a.createElement(u.c, null, "Image")), i.a.createElement("div", {
						className: _.a.imageSize
					}, i.a.createElement(u.c, null, "192 px high"))), i.a.createElement(v.a, {
						className: _.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: Object(N.c)("Drag and Drop or Upload Image"),
						tabIndex: t,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && i.a.createElement("div", {
						className: _.a.imagePreview,
						style: {
							background: "url(".concat(s, n ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), i.a.createElement("div", {
						className: _.a.modifiers
					}, i.a.createElement("div", {
						className: _.a.toggle
					}, i.a.createElement(C.a, {
						redditStyle: !0,
						className: _.a.toggleSwitch,
						tabIndex: t ? t + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), i.a.createElement(u.c, null, "Tile")), i.a.createElement(j.a, {
						className: _.a.remove,
						tabIndex: t ? t + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var S = Object(o.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(I.b)(O)),
				k = t("./src/lib/classNames/index.ts"),
				T = t("./src/lib/prettyPrintNumber/index.ts"),
				A = t("./src/reddit/actions/modal.ts"),
				M = t("./src/reddit/components/Governance/Token/index.tsx"),
				H = t("./src/reddit/helpers/governance/tokens.ts"),
				w = t("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less"),
				D = t.n(w);
			const U = Object(d.c)({
				tokenDisplayConversion: h.o,
				wallet: h.g
			});
			var P = Object(o.b)(U, e => ({
					onClose: () => e(Object(A.f)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: Object(k.a)(D.a.container, e.className)
					}, i.a.createElement("div", {
						className: D.a.wallet
					}, e.wallet && i.a.createElement(r.Fragment, null, i.a.createElement(u.c, null, "You have"), i.a.createElement(M.a, {
						grey: !0,
						className: D.a.token,
						subredditId: e.subredditId
					}), Object(T.a)(Object(H.b)(e.wallet.amount, e.tokenDisplayConversion)))), i.a.createElement("div", {
						className: D.a.buttons
					}, i.a.createElement(b.i, {
						className: D.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, i.a.createElement(u.c, null, "cancel")), i.a.createElement(b.f, {
						className: Object(k.a)(D.a.button, D.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, i.a.createElement(u.c, null, "save"))))
				})),
				F = t("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less"),
				L = t.n(F);
			const G = {
				t5_37jgj: "https://mainnet.aragon.org/#/ethtraderdao.eth/0xc6cfc6a31e516d1622b80c0864b16f665712f89e/",
				t5_vsb5g: "https://rinkeby.aragon.org/#/0xa23434b973dA1Af103Da4037F04C5b44ba7BDFcF/0x5024a25a6316c371114fdc91567dd1a635f4fa80/"
			};
			class R extends i.a.Component {
				constructor(e) {
					super(e), this.handleImageChange = e => this.setState({
						image: e
					}), this.handleTilingChange = () => this.setState(e => ({
						tiled: !e.tiled
					})), this.handleSubmit = () => {
						this.props.subreddit && this.props.onUpdateBanner({
							subredditId: this.props.subreddit.id,
							content: {
								bannerBackgroundImage: this.state.image ? this.state.image[y] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = K(e, e.savedStyles.bannerBackgroundImage), this.originalState = K(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const a = q(e) === q(this.props) ? this.state.image ? this.state.image[y] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(K(this.props, a)), this.originalState = K(this.props, a)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? i.a.createElement("div", {
						className: L.a.container
					}, i.a.createElement(m.a, {
						className: L.a.title
					}, i.a.createElement(u.c, null, "Manage Banner")), i.a.createElement("div", {
						className: L.a.manage
					}, i.a.createElement("div", {
						className: L.a.manageTitle
					}, i.a.createElement(u.c, null, "Manage the banner's price, tax, and balance")), i.a.createElement("div", {
						className: L.a.manageDescription
					}, i.a.createElement(u.c, null, "Change the banner price and top up your balance in the Aragorn DApp")), i.a.createElement(b.j, {
						href: G[e.id],
						target: "_blank"
					}, i.a.createElement(u.c, null, "Open in Aragon"))), i.a.createElement(S, {
						className: L.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), i.a.createElement(P, {
						className: L.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function q(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function K(e, a) {
				const {
					mainHeaderAsset: t
				} = e;
				return t ? {
					image: a ? {
						[y]: a
					} : t.content && t.content.bannerBackgroundImage ? {
						[y]: t.content.bannerBackgroundImage
					} : {
						[y]: ""
					},
					tiled: !!t.content && "tiled" === t.content.bannerBackgroundImagePosition
				} : {
					image: a ? {
						[y]: a
					} : {
						[y]: ""
					},
					tiled: !1
				}
			}
			const Q = Object(d.c)({
					mainHeaderAsset: (e, a) => {
						const t = Object(g.q)(e, a);
						if (t) return Object(h.c)(e, {
							subredditId: t.id
						})
					},
					savedStyles: (e, a) => {
						const t = Object(g.q)(e, a);
						return t ? e.structuredStyles.models[t.id] : {}
					},
					subreddit: g.q
				}),
				Y = Object(o.b)(Q, e => ({
					onUpdateBanner: a => e(Object(l.c)(a))
				})),
				z = Object(g.t)();
			a.default = Object(p.a)("spHarberger", Object(c.a)(z(Y(R))))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return r
			})), t.d(a, "c", (function() {
				return i
			})), t.d(a, "a", (function() {
				return o
			}));
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = t("./node_modules/bignumber.js/bignumber.js"),
				s = t("./src/lib/prettyPrintNumber/index.ts");

			function r(e, a) {
				const t = new n.BigNumber(e),
					s = new n.BigNumber(a);
				return t.dividedBy(s).decimalPlaces(2).toString()
			}

			function i(e, a) {
				return Object(s.b)(parseInt(r(e, a), 10))
			}

			function o(e, a) {
				const t = new n.BigNumber(e),
					s = new n.BigNumber(a);
				return t.multipliedBy(s).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=CryptoHarbergerTaxManageModal.2d2874e280a73d6ecfcd.js.map