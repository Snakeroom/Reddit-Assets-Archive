// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.fea617c6e47f4549c9b3.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
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
				return u
			})), n.d(t, "h", (function() {
				return m
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
				u = Object(a.a)(r.g),
				m = Object(a.a)(r.h),
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

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${c.a.metaUrl}/orders`,
					data: {
						...t,
						products: t.products.map(e => ({
							...e,
							productId: "mainHeader",
							quantity: "1"
						}))
					}
				})
			}
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = () => async (e, t) => {
				e(Object(i.f)({
					kind: m.b.Error,
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
				} = e, i = n().user.account, c = Object(p.a)(n(), {
					subredditId: d
				});
				if (!i) return;
				const l = i.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: d
				}));
				const m = await u(r(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: c && c.owner || "",
						ownerId: c && c.ownerId || ""
					}]
				});
				m.ok ? (t(Object(o.g)({
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
					error: m.error
				})), Object(s.a)(t, m.error))
			}, h = e => async (t, n, a) => {
				let {
					apiContext: i
				} = a;
				const {
					subredditId: m
				} = e, b = n().user.account, g = Object(p.a)(n(), {
					subredditId: m
				}), x = n().structuredStyles.models[m];
				if (!b || !g) return;
				const h = b.displayText || "",
					I = [],
					f = void 0 !== e.newPrice && g.price !== e.newPrice,
					v = function(e, t, n) {
						const a = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== n.bannerBackgroundImage ? a.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (a.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (a.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), a
					}(g.content, e.content, x),
					j = !r()(v);
				(f || j) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: m
				})), f ? I.push(u(i(), {
					subredditId: m,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: g.owner || "",
						ownerId: g.ownerId || ""
					}]
				})) : I.push(Promise.resolve()), j && I.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: `${c.a.metaUrl}/communities/${t.subredditId}`,
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(i(), {
					subredditId: m,
					content: v
				}));
				const [C, O] = await Promise.all(I);
				f && C.ok && j && O.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: m,
					styles: v
				}))) : f && C.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: g.content
					}
				})), j && !O.ok && Object(s.a)(t, O.error)) : j && O.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: g.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: m,
					styles: v
				})), f && !C.ok && Object(s.a)(t, C.error)) : (f && Object(s.a)(t, C.error), j && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: m,
					error: C.error
				})), Object(s.a)(t, O.error)))
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
				u = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/featureFlags/component.tsx"),
				g = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/lib/uploadToS3/index.ts"),
				h = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				f = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				v = n("./src/reddit/endpoints/governance/imageLease.ts"),
				j = n("./src/reddit/helpers/media/index.ts"),
				C = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				O = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less"),
				_ = n.n(O);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = "bannerBackgroundImage";
			class y extends o.a.Component {
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
						const a = await Object(j.h)(e.file) || e.file.type,
							r = await Object(v.a)(t(), n, e.file.name, k, a);
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
					}, N._("Banner", null, {
						hk: "3zcHcv"
					})), o.a.createElement("div", {
						className: _.a.imageHeader
					}, o.a.createElement("div", {
						className: _.a.imageTitle
					}, N._("Image", null, {
						hk: "1eG4ER"
					})), o.a.createElement("div", {
						className: _.a.imageSize
					}, N._("192 px high", null, {
						hk: "eRhw6"
					}))), o.a.createElement(h.a, {
						className: _.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: N._("Drag and Drop or Upload Image", null, {
							hk: "3F92gt"
						}),
						tabIndex: n,
						value: r,
						onChange: this.handleBannerImageUpload
					}), r && o.a.createElement("div", {
						className: _.a.imagePreview,
						style: {
							background: a ? `url(${r}) center top repeat` : `url(${r}) center top / cover no-repeat`
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
					}), N._("Tile", null, {
						hk: "2uQa0q"
					})), o.a.createElement(C.a, {
						className: _.a.remove,
						tabIndex: n ? n + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var E = Object(d.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(I.b)(y)),
				w = n("./src/lib/classNames/index.ts"),
				T = n("./src/lib/prettyPrintNumber/index.ts"),
				B = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/components/Governance/Token/index.tsx"),
				U = n("./src/reddit/helpers/governance/tokens.ts"),
				D = n("./src/reddit/selectors/crypto/points.ts"),
				H = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less"),
				S = n.n(H);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const M = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(D.b)(e, n)
				},
				wallet: g.d
			});
			var L = Object(d.b)(M, e => ({
					onClose: () => e(Object(B.f)())
				}))((function(e) {
					var t;
					return o.a.createElement("div", {
						className: Object(w.a)(S.a.container, e.className)
					}, o.a.createElement("div", {
						className: S.a.wallet
					}, e.wallet && o.a.createElement(s.Fragment, null, A._("You have", null, {
						hk: "TlDwo"
					}), o.a.createElement(P.a, {
						grey: !0,
						className: S.a.token,
						subredditId: e.subredditId
					}), Object(T.a)(Object(U.c)(e.wallet.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)))), o.a.createElement("div", {
						className: S.a.buttons
					}, o.a.createElement(p.o, {
						className: S.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, A._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(p.l, {
						className: Object(w.a)(S.a.button, S.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, A._("Save", null, {
						hk: "nbpNh"
					}))))
				})),
				F = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less"),
				G = n.n(F);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = {
				t5_37jgj: "https://mainnet.aragon.org/#/ethtraderdao.eth/0xc6cfc6a31e516d1622b80c0864b16f665712f89e/",
				t5_vsb5g: "https://rinkeby.aragon.org/#/0xa23434b973dA1Af103Da4037F04C5b44ba7BDFcF/0x5024a25a6316c371114fdc91567dd1a635f4fa80/"
			};
			class z extends o.a.Component {
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
						const t = W(e) === W(this.props) ? this.state.image ? this.state.image[k] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(q(this.props, t)), this.originalState = q(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement(u.a, {
						className: G.a.title
					}, R._("Manage Banner", null, {
						hk: "NMRRK"
					})), o.a.createElement("div", {
						className: G.a.manage
					}, o.a.createElement("div", {
						className: G.a.manageTitle
					}, R._("Manage the banner's price, tax, and balance", null, {
						hk: "39e58h"
					})), o.a.createElement("div", {
						className: G.a.manageDescription
					}, R._("Change the banner price and top up your balance in the Aragorn DApp", null, {
						hk: "4f5PNI"
					})), o.a.createElement(p.p, {
						href: K[e.id],
						target: "_blank"
					}, R._("Open in Aragon", null, {
						hk: "UMPAO"
					}))), o.a.createElement(E, {
						className: G.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), o.a.createElement(L, {
						className: G.a.controls,
						subredditId: e.id,
						submitEnabled: !r()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function W(e) {
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
			const V = Object(i.c)({
					mainHeaderAsset: (e, t) => {
						const n = Object(m.s)(e, t);
						if (n) return Object(g.a)(e, {
							subredditId: n.id
						})
					},
					savedStyles: (e, t) => {
						const n = Object(m.s)(e, t);
						return n ? e.structuredStyles.models[n.id] : {}
					},
					subreddit: m.s
				}),
				Q = Object(d.b)(V, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				Z = Object(m.v)();
			t.default = Object(b.a)("spHarberger", Object(c.a)(Z(Q(z))))
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
				c = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(c.b)(e, n)
				}
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const a = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${d.a.assetPath}/${a}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return r.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: s
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
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(l.a, "ImageUploadIcon", m.a), g = o.a.div("ImageIconRow", m.a), x = o.a.div("ImageUploadText", m.a), h = o.a.wrapped(d.a, "FileDrop", m.a), I = o.a.div("ContainerUploading", m.a), f = e => r.a.createElement(I, {
				className: e.className
			}, r.a.createElement(g, null, r.a.createElement(c.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(x, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = o.a.label("Label", m.a);
			t.b = e => r.a.createElement(h, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(v, {
					className: Object(s.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(g, null, e.icon || r.a.createElement(b, null)), r.a.createElement(x, null, e.label), r.a.createElement(i.a, {
					className: m.a.ImageInput,
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
				u = r()(Object(d.DropTarget)(l, {
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
			class m extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
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
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(d.a.loadingIcon, n, {
						[d.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
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
				endpoint: `${a.a.metaUrl}/communities/${t}/upload-lease`,
				method: r.ob.POST,
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
				return i
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts");

			function i(e, t, n) {
				const a = Object(o.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(s.b)(a)(e => {
					const {
						featureEnabled: a,
						...s
					} = e, o = s;
					return a ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function d(e, t) {
				const n = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}

			function i(e) {
				const t = new a.BigNumber(e),
					n = new a.BigNumber("1e18");
				return t.dividedBy(n).toString()
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
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var a = n("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				s = {},
				o = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				d = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				i = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : s
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						a = n && n.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				u = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(a.o)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.fea617c6e47f4549c9b3.js.map