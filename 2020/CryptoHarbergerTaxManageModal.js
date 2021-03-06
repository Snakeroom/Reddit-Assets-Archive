// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.7934de3f3b7fc99a7f17.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxManageModal"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(a.a)(r.c),
				o = Object(a.a)(r.e),
				d = Object(a.a)(r.a),
				i = Object(a.a)(r.b),
				c = Object(a.a)(r.d),
				l = Object(a.a)(r.f),
				m = Object(a.a)(r.g),
				u = Object(a.a)(r.h),
				p = Object(a.a)(r.i),
				b = Object(a.a)(r.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(a),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				o = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				d = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: "".concat(c.a.metaUrl, "/orders"),
					data: Object.assign(Object.assign({}, t), {
						products: t.products.map(e => Object.assign(Object.assign({}, e), {
							productId: "mainHeader",
							quantity: "1"
						}))
					})
				})
			}
			var u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = () => async (e, t) => {
				e(Object(i.e)({
					kind: u.b.Error,
					text: b.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, x = e => async (t, n, a) => {
				let {
					apiContext: r
				} = a;
				const {
					subredditId: d
				} = e, i = n().user.account, c = Object(p.c)(n(), {
					subredditId: d
				});
				if (!i) return;
				const l = i.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: d
				}));
				const u = await m(r(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: c && c.owner || "",
						ownerId: c && c.ownerId || ""
					}]
				});
				u.ok ? (t(Object(o.g)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: l,
						ownerId: i.id,
						price: e.newPrice || e.currentPrice,
						content: c ? c.content : {}
					}
				})), t(Object(o.c)({
					subredditId: d
				}))) : (t(Object(o.d)({
					productId: "mainHeader",
					subredditId: d,
					error: u.error
				})), Object(s.a)(t, u.error))
			}, h = e => async (t, n, a) => {
				let {
					apiContext: i
				} = a;
				const {
					subredditId: u
				} = e, b = n().user.account, g = Object(p.c)(n(), {
					subredditId: u
				}), x = n().structuredStyles.models[u];
				if (!b || !g) return;
				const h = b.displayText || "",
					I = [],
					f = void 0 !== e.newPrice && g.price !== e.newPrice,
					j = function(e, t, n) {
						const a = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== n.bannerBackgroundImage ? a.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (a.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (a.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), a
					}(g.content, e.content, x),
					v = !r()(j);
				(f || v) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: u
				})), f ? I.push(m(i(), {
					subredditId: u,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: g.owner || "",
						ownerId: g.ownerId || ""
					}]
				})) : I.push(Promise.resolve()), v && I.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: "".concat(c.a.metaUrl, "/communities/").concat(t.subredditId),
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(i(), {
					subredditId: u,
					content: j
				}));
				const [O, C] = await Promise.all(I);
				f && O.ok && v && C.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: u,
					styles: j
				}))) : f && O.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: g.content
					}
				})), v && !C.ok && Object(s.a)(t, C.error)) : v && C.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: g.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: u,
					styles: j
				})), f && !O.ok && Object(s.a)(t, O.error)) : (f && Object(s.a)(t, O.error), v && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: u,
					error: O.error
				})), Object(s.a)(t, C.error)))
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/lodash/isEqual.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/featureFlags/component.tsx"),
				g = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/lib/uploadToS3/index.ts"),
				h = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				f = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = n("./src/reddit/endpoints/governance/imageLease.ts"),
				v = n("./src/reddit/helpers/media/index.ts"),
				O = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				C = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less"),
				_ = n.n(C);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = "bannerBackgroundImage";
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleBannerImageUpload = async e => {
						const {
							apiContext: t,
							subredditId: n
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const a = await Object(v.g)(e.file) || e.file.type,
							r = await Object(j.a)(t(), n, e.file.name, k, a);
						if (!r.ok) return void this.props.onImageUploadFailed();
						const s = r.body.s3UploadLease,
							o = await Object(x.a)(e.file, s);
						if (o.ok) {
							const e = decodeURIComponent(o.body.PostResponse.Location);
							this.props.onImageChange({
								[k]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[k]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: t,
						tabIndex: n,
						tiled: a
					} = this.props, r = t ? t[k] : void 0;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: _.a.title
					}, y._("banner", null, {
						hk: "2SKzEU"
					})), o.a.createElement("div", {
						className: _.a.imageHeader
					}, o.a.createElement("div", {
						className: _.a.imageTitle
					}, y._("Image", null, {
						hk: "1eG4ER"
					})), o.a.createElement("div", {
						className: _.a.imageSize
					}, y._("192 px high", null, {
						hk: "eRhw6"
					}))), o.a.createElement(h.a, {
						className: _.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: y._("Drag and Drop or Upload Image", null, {
							hk: "3F92gt"
						}),
						tabIndex: n,
						value: r,
						onChange: this.handleBannerImageUpload
					}), r && o.a.createElement("div", {
						className: _.a.imagePreview,
						style: {
							background: "url(".concat(r, a ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), o.a.createElement("div", {
						className: _.a.modifiers
					}, o.a.createElement("div", {
						className: _.a.toggle
					}, o.a.createElement(f.a, {
						redditStyle: !0,
						className: _.a.toggleSwitch,
						tabIndex: n ? n + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), y._("Tile", null, {
						hk: "2uQa0q"
					})), o.a.createElement(O.a, {
						className: _.a.remove,
						tabIndex: n ? n + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var E = Object(d.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(I.b)(N)),
				w = n("./src/lib/classNames/index.ts"),
				T = n("./src/lib/prettyPrintNumber/index.ts"),
				B = n("./src/reddit/actions/modal.ts"),
				U = n("./src/reddit/components/Governance/Token/index.tsx"),
				P = n("./src/reddit/helpers/governance/tokens.ts"),
				S = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less"),
				D = n.n(S);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const M = Object(i.c)({
				tokenDisplayConversion: g.o,
				wallet: g.g
			});
			var A = Object(d.b)(M, e => ({
					onClose: () => e(Object(B.f)())
				}))((function(e) {
					return o.a.createElement("div", {
						className: Object(w.a)(D.a.container, e.className)
					}, o.a.createElement("div", {
						className: D.a.wallet
					}, e.wallet && o.a.createElement(s.Fragment, null, H._("You have", null, {
						hk: "TlDwo"
					}), o.a.createElement(U.a, {
						grey: !0,
						className: D.a.token,
						subredditId: e.subredditId
					}), Object(T.a)(Object(P.b)(e.wallet.amount, e.tokenDisplayConversion)))), o.a.createElement("div", {
						className: D.a.buttons
					}, o.a.createElement(p.l, {
						className: D.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, H._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(p.i, {
						className: Object(w.a)(D.a.button, D.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, H._("save", null, {
						hk: "3joVpg"
					}))))
				})),
				F = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less"),
				L = n.n(F);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = {
				t5_37jgj: "https://mainnet.aragon.org/#/ethtraderdao.eth/0xc6cfc6a31e516d1622b80c0864b16f665712f89e/",
				t5_vsb5g: "https://rinkeby.aragon.org/#/0xa23434b973dA1Af103Da4037F04C5b44ba7BDFcF/0x5024a25a6316c371114fdc91567dd1a635f4fa80/"
			};
			class K extends o.a.Component {
				constructor(e) {
					super(e), this.handleImageChange = e => this.setState({
						image: e
					}), this.handleTilingChange = () => this.setState(e => ({
						tiled: !e.tiled
					})), this.handleSubmit = () => {
						this.props.subreddit && this.props.onUpdateBanner({
							subredditId: this.props.subreddit.id,
							content: {
								bannerBackgroundImage: this.state.image ? this.state.image[k] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = q(e, e.savedStyles.bannerBackgroundImage), this.originalState = q(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!r()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = z(e) === z(this.props) ? this.state.image ? this.state.image[k] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(q(this.props, t)), this.originalState = q(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? o.a.createElement("div", {
						className: L.a.container
					}, o.a.createElement(m.a, {
						className: L.a.title
					}, G._("Manage Banner", null, {
						hk: "NMRRK"
					})), o.a.createElement("div", {
						className: L.a.manage
					}, o.a.createElement("div", {
						className: L.a.manageTitle
					}, G._("Manage the banner's price, tax, and balance", null, {
						hk: "39e58h"
					})), o.a.createElement("div", {
						className: L.a.manageDescription
					}, G._("Change the banner price and top up your balance in the Aragorn DApp", null, {
						hk: "4f5PNI"
					})), o.a.createElement(p.m, {
						href: R[e.id],
						target: "_blank"
					}, G._("Open in Aragon", null, {
						hk: "UMPAO"
					}))), o.a.createElement(E, {
						className: L.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), o.a.createElement(A, {
						className: L.a.controls,
						subredditId: e.id,
						submitEnabled: !r()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function z(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function q(e, t) {
				const {
					mainHeaderAsset: n
				} = e;
				return n ? {
					image: t ? {
						[k]: t
					} : n.content && n.content.bannerBackgroundImage ? {
						[k]: n.content.bannerBackgroundImage
					} : {
						[k]: ""
					},
					tiled: !!n.content && "tiled" === n.content.bannerBackgroundImagePosition
				} : {
					image: t ? {
						[k]: t
					} : {
						[k]: ""
					},
					tiled: !1
				}
			}
			const W = Object(i.c)({
					mainHeaderAsset: (e, t) => {
						const n = Object(u.q)(e, t);
						if (n) return Object(g.c)(e, {
							subredditId: n.id
						})
					},
					savedStyles: (e, t) => {
						const n = Object(u.q)(e, t);
						return n ? e.structuredStyles.models[n.id] : {}
					},
					subreddit: u.q
				}),
				V = Object(d.b)(W, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				Q = Object(u.t)();
			t.default = Object(b.a)("spHarberger", Object(c.a)(Q(V(K))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(s.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(d.f)()), n && n()
					}
				}
			})((function(e) {
				return r.a.createElement(i.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = n.n(d);

			function c(e) {
				return r.a.createElement("div", {
					className: Object(s.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, r.a.createElement("div", {
					className: i.a.title
				}, e.children), r.a.createElement(o.a, {
					className: i.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				m = n.n(l);
			const u = Object(o.c)({
				tokenSymbol: c.q
			});
			t.a = Object(s.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(d.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return r.a.createElement("div", {
						className: Object(i.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(o.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: n,
						labelClassName: a,
						value: o,
						controlName: d,
						isUploading: i,
						tabIndex: c
					} = this.props;
					return i ? r.a.createElement(s.a, {
						className: e
					}) : r.a.createElement(s.b, {
						className: e,
						icon: t,
						name: d,
						label: n,
						labelClassName: a,
						multiple: !1,
						tabIndex: c,
						value: o,
						onChange: this.onChange
					})
				}
			}
			t.a = d
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/FileDrop/index.tsx"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(l.a, "ImageUploadIcon", u.a), g = o.a.div("ImageIconRow", u.a), x = o.a.div("ImageUploadText", u.a), h = o.a.wrapped(d.a, "FileDrop", u.a), I = o.a.div("ContainerUploading", u.a), f = e => r.a.createElement(I, {
				className: e.className
			}, r.a.createElement(g, null, r.a.createElement(c.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(x, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), j = o.a.label("Label", u.a);
			t.b = e => r.a.createElement(h, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(j, {
					className: Object(s.a)({
						[u.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(g, null, e.icon || r.a.createElement(b, null)), r.a.createElement(x, null, e.label), r.a.createElement(i.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/flow.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				d = n("./node_modules/react-dnd/lib/index.js"),
				i = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				c = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = i.NativeTypes.FILE,
				m = r()(Object(d.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), c.a);
			class u extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/imageLease.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			const i = async (e, t, n, i, c) => Object(s.a)(Object(o.a)(e, [d.a]), {
				endpoint: "".concat(a.a.metaUrl, "/communities/").concat(t, "/upload-lease"),
				method: r.db.POST,
				data: {
					filepath: n,
					imagetype: i,
					mimetype: c
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
					}
					return n
				};

			function c(e, t, n) {
				const a = Object(o.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(s.b)(a)(e => {
					const {
						featureEnabled: a
					} = e, s = i(e, ["featureEnabled"]);
					return a ? r.a.createElement(t, s) : void 0 !== n ? r.a.createElement(n, s) : null
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(r);
			t.a = Object(a.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new a.BigNumber(e),
					r = new a.BigNumber(t);
				return n.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function d(e, t) {
				const n = new a.BigNumber(e),
					r = new a.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				d = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(d.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), r.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.7934de3f3b7fc99a7f17.js.map