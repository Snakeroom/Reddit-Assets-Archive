// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.41b9f56b01425334846d.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxManageModal"], {
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/lodash/isEqual.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				g = a("./src/reddit/contexts/PageLayer/index.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/featureFlags/component.tsx"),
				p = a("./src/reddit/selectors/gov.ts"),
				h = a("./src/lib/uploadToS3/index.ts"),
				x = a("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				v = a("./src/reddit/contexts/ApiContext.tsx"),
				I = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				_ = a("./src/reddit/endpoints/governance/imageLease.ts"),
				f = a("./src/reddit/helpers/media/index.ts"),
				C = a("./src/reddit/icons/svgs/Remove/index.tsx"),
				N = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less"),
				k = a.n(N);
			const {
				fbt: j
			} = a("./node_modules/fbt/lib/FbtPublic.js"), B = "bannerBackgroundImage";
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleBannerImageUpload = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const n = await Object(f.g)(e.file) || e.file.type,
							s = await Object(_.a)(t(), a, e.file.name, B, n);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							i = await Object(h.a)(e.file, r);
						if (i.ok) {
							const e = decodeURIComponent(i.body.PostResponse.Location);
							this.props.onImageChange({
								[B]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[B]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: t,
						tabIndex: a,
						tiled: n
					} = this.props, s = t ? t[B] : void 0;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: k.a.title
					}, j._("banner", null, {
						hk: "2SKzEU"
					})), i.a.createElement("div", {
						className: k.a.imageHeader
					}, i.a.createElement("div", {
						className: k.a.imageTitle
					}, j._("Image", null, {
						hk: "1eG4ER"
					})), i.a.createElement("div", {
						className: k.a.imageSize
					}, j._("192 px high", null, {
						hk: "eRhw6"
					}))), i.a.createElement(x.a, {
						className: k.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: j._("Drag and Drop or Upload Image", null, {
							hk: "3F92gt"
						}),
						tabIndex: a,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && i.a.createElement("div", {
						className: k.a.imagePreview,
						style: {
							background: "url(".concat(s, n ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), i.a.createElement("div", {
						className: k.a.modifiers
					}, i.a.createElement("div", {
						className: k.a.toggle
					}, i.a.createElement(I.a, {
						redditStyle: !0,
						className: k.a.toggleSwitch,
						tabIndex: a ? a + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), j._("Tile", null, {
						hk: "2uQa0q"
					})), i.a.createElement(C.a, {
						className: k.a.remove,
						tabIndex: a ? a + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var y = Object(o.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(v.b)(O)),
				E = a("./src/lib/classNames/index.ts"),
				S = a("./src/lib/prettyPrintNumber/index.ts"),
				T = a("./src/reddit/actions/modal.ts"),
				M = a("./src/reddit/components/Governance/Token/index.tsx"),
				A = a("./src/reddit/helpers/governance/tokens.ts"),
				w = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less"),
				H = a.n(w);
			const {
				fbt: D
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const P = Object(d.c)({
				tokenDisplayConversion: p.o,
				wallet: p.g
			});
			var U = Object(o.b)(P, e => ({
					onClose: () => e(Object(T.f)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: Object(E.a)(H.a.container, e.className)
					}, i.a.createElement("div", {
						className: H.a.wallet
					}, e.wallet && i.a.createElement(r.Fragment, null, D._("You have", null, {
						hk: "TlDwo"
					}), i.a.createElement(M.a, {
						grey: !0,
						className: H.a.token,
						subredditId: e.subredditId
					}), Object(S.a)(Object(A.b)(e.wallet.amount, e.tokenDisplayConversion)))), i.a.createElement("div", {
						className: H.a.buttons
					}, i.a.createElement(b.i, {
						className: H.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, D._("cancel", null, {
						hk: "2OL6QC"
					})), i.a.createElement(b.f, {
						className: Object(E.a)(H.a.button, H.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, D._("save", null, {
						hk: "3joVpg"
					}))))
				})),
				F = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less"),
				L = a.n(F);
			const {
				fbt: G
			} = a("./node_modules/fbt/lib/FbtPublic.js"), R = {
				t5_37jgj: "https://mainnet.aragon.org/#/ethtraderdao.eth/0xc6cfc6a31e516d1622b80c0864b16f665712f89e/",
				t5_vsb5g: "https://rinkeby.aragon.org/#/0xa23434b973dA1Af103Da4037F04C5b44ba7BDFcF/0x5024a25a6316c371114fdc91567dd1a635f4fa80/"
			};
			class K extends i.a.Component {
				constructor(e) {
					super(e), this.handleImageChange = e => this.setState({
						image: e
					}), this.handleTilingChange = () => this.setState(e => ({
						tiled: !e.tiled
					})), this.handleSubmit = () => {
						this.props.subreddit && this.props.onUpdateBanner({
							subredditId: this.props.subreddit.id,
							content: {
								bannerBackgroundImage: this.state.image ? this.state.image[B] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = q(e, e.savedStyles.bannerBackgroundImage), this.originalState = q(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = Q(e) === Q(this.props) ? this.state.image ? this.state.image[B] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(q(this.props, t)), this.originalState = q(this.props, t)
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
					}, G._("Manage Banner", null, {
						hk: "NMRRK"
					})), i.a.createElement("div", {
						className: L.a.manage
					}, i.a.createElement("div", {
						className: L.a.manageTitle
					}, G._("Manage the banner's price, tax, and balance", null, {
						hk: "39e58h"
					})), i.a.createElement("div", {
						className: L.a.manageDescription
					}, G._("Change the banner price and top up your balance in the Aragorn DApp", null, {
						hk: "4f5PNI"
					})), i.a.createElement(b.j, {
						href: R[e.id],
						target: "_blank"
					}, G._("Open in Aragon", null, {
						hk: "UMPAO"
					}))), i.a.createElement(y, {
						className: L.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), i.a.createElement(U, {
						className: L.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function Q(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function q(e, t) {
				const {
					mainHeaderAsset: a
				} = e;
				return a ? {
					image: t ? {
						[B]: t
					} : a.content && a.content.bannerBackgroundImage ? {
						[B]: a.content.bannerBackgroundImage
					} : {
						[B]: ""
					},
					tiled: !!a.content && "tiled" === a.content.bannerBackgroundImagePosition
				} : {
					image: t ? {
						[B]: t
					} : {
						[B]: ""
					},
					tiled: !1
				}
			}
			const z = Object(d.c)({
					mainHeaderAsset: (e, t) => {
						const a = Object(g.q)(e, t);
						if (a) return Object(p.c)(e, {
							subredditId: a.id
						})
					},
					savedStyles: (e, t) => {
						const a = Object(g.q)(e, t);
						return a ? e.structuredStyles.models[a.id] : {}
					},
					subreddit: g.q
				}),
				V = Object(o.b)(z, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				Y = Object(g.t)();
			t.default = Object(u.a)("spHarberger", Object(c.a)(Y(V(K))))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return i
			})), a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				s = a("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const a = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return a.dividedBy(s).decimalPlaces(2).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const a = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return a.multipliedBy(s).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=CryptoHarbergerTaxManageModal.41b9f56b01425334846d.js.map