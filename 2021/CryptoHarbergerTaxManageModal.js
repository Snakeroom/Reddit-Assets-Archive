// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.58c8f6bc3c5d8277dfc6.js
// Retrieved at 7/19/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxManageModal"], {
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return p
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(r.a)(a.c),
				o = Object(r.a)(a.e),
				i = Object(r.a)(a.a),
				d = Object(r.a)(a.b),
				c = Object(r.a)(a.d),
				l = Object(r.a)(a.f),
				u = Object(r.a)(a.g),
				m = Object(r.a)(a.h),
				b = Object(r.a)(a.i),
				p = Object(r.a)(a.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/isEmpty.js"),
				a = n.n(r),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				o = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
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
				b = n("./src/reddit/selectors/gov.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = () => async (e, t) => {
				e(Object(d.f)({
					kind: m.b.Error,
					text: p.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, h = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					subredditId: a
				} = e, i = n().user.account, d = Object(b.a)(n(), {
					subredditId: a
				});
				if (!i) return;
				const c = i.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: a
				}));
				const l = await u(r(), {
					subredditId: a,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: d && d.owner || "",
						ownerId: d && d.ownerId || ""
					}]
				});
				l.ok ? (t(Object(o.g)({
					productId: "mainHeader",
					subredditId: a,
					mainHeader: {
						owner: c,
						ownerId: i.id,
						price: e.newPrice || e.currentPrice,
						content: d ? d.content : {}
					}
				})), t(Object(o.c)({
					subredditId: a
				}))) : (t(Object(o.d)({
					productId: "mainHeader",
					subredditId: a,
					error: l.error
				})), Object(s.a)(t, l.error))
			}, x = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					subredditId: d
				} = e, m = n().user.account, p = Object(b.a)(n(), {
					subredditId: d
				}), g = n().structuredStyles.models[d];
				if (!m || !p) return;
				const h = m.displayText || "",
					x = [],
					f = void 0 !== e.newPrice && p.price !== e.newPrice,
					v = function(e, t, n) {
						const r = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== n.bannerBackgroundImage ? r.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (r.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (r.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), r
					}(p.content, e.content, g),
					I = !a()(v);
				(f || I) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: d
				})), f ? x.push(u(r(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: p.owner || "",
						ownerId: p.ownerId || ""
					}]
				})) : x.push(Promise.resolve()), I && x.push(function(e, t) {
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
				}(r(), {
					subredditId: d,
					content: v
				}));
				const [j, y] = await Promise.all(x);
				f && j.ok && I && y.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || p.price,
						content: e.content
					}
				})), t(Object(i.l)({
					subredditId: d,
					styles: v
				}))) : f && j.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || p.price,
						content: p.content
					}
				})), I && !y.ok && Object(s.a)(t, y.error)) : I && y.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: p.price,
						content: e.content
					}
				})), t(Object(i.l)({
					subredditId: d,
					styles: v
				})), f && !j.ok && Object(s.a)(t, j.error)) : (f && Object(s.a)(t, j.error), I && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: d,
					error: j.error
				})), Object(s.a)(t, y.error)))
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
			var r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				u = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				g = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/lib/uploadToS3/index.ts"),
				x = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				f = n("./src/reddit/contexts/ApiContext.tsx"),
				v = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = n("./src/reddit/endpoints/governance/imageLease.ts"),
				j = n("./src/reddit/helpers/media/index.ts"),
				y = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				O = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Banner/index.m.less"),
				C = n.n(O);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = "bannerBackgroundImage";
			class E extends o.a.Component {
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
						const r = await Object(j.g)(e.file) || e.file.type,
							a = await Object(I.a)(t(), n, e.file.name, k, r);
						if (!a.ok) return void this.props.onImageUploadFailed();
						const s = a.body.s3UploadLease,
							o = await Object(h.a)(e.file, s);
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
						tiled: r
					} = this.props, a = t ? t[k] : void 0;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: C.a.title
					}, _._("Banner", null, {
						hk: "3zcHcv"
					})), o.a.createElement("div", {
						className: C.a.imageHeader
					}, o.a.createElement("div", {
						className: C.a.imageTitle
					}, _._("Image", null, {
						hk: "1eG4ER"
					})), o.a.createElement("div", {
						className: C.a.imageSize
					}, _._("192 px high", null, {
						hk: "eRhw6"
					}))), o.a.createElement(x.a, {
						className: C.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: _._("Drag and Drop or Upload Image", null, {
							hk: "3F92gt"
						}),
						tabIndex: n,
						value: a,
						onChange: this.handleBannerImageUpload
					}), a && o.a.createElement("div", {
						className: C.a.imagePreview,
						style: {
							background: r ? `url(${a}) center top repeat` : `url(${a}) center top / cover no-repeat`
						}
					}), o.a.createElement("div", {
						className: C.a.modifiers
					}, o.a.createElement("div", {
						className: C.a.toggle
					}, o.a.createElement(v.a, {
						redditStyle: !0,
						className: C.a.toggleSwitch,
						tabIndex: n ? n + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), _._("Tile", null, {
						hk: "2uQa0q"
					})), o.a.createElement(y.a, {
						className: C.a.remove,
						tabIndex: n ? n + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var N = Object(i.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(f.b)(E)),
				w = n("./src/lib/classNames/index.ts"),
				T = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				U = n("./src/reddit/components/Governance/Token/index.tsx"),
				B = n("./src/reddit/helpers/governance/tokens.ts"),
				A = n("./src/reddit/selectors/crypto/points.ts"),
				D = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/Controls/index.m.less"),
				S = n.n(D);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const H = Object(d.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(A.b)(e, t),
				wallet: g.d
			});
			var L = Object(i.b)(H, e => ({
					onClose: () => e(Object(P.f)())
				}))((function(e) {
					var t;
					return o.a.createElement("div", {
						className: Object(w.a)(S.a.container, e.className)
					}, o.a.createElement("div", {
						className: S.a.wallet
					}, e.wallet && o.a.createElement(s.Fragment, null, M._("You have", null, {
						hk: "TlDwo"
					}), o.a.createElement(U.a, {
						grey: !0,
						className: S.a.token,
						subredditId: e.subredditId
					}), Object(T.a)(Object(B.b)(e.wallet.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)))), o.a.createElement("div", {
						className: S.a.buttons
					}, o.a.createElement(b.l, {
						className: S.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, M._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(b.i, {
						className: Object(w.a)(S.a.button, S.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, M._("Save", null, {
						hk: "nbpNh"
					}))))
				})),
				R = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.m.less"),
				F = n.n(R);
			const {
				fbt: G
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
					}, this.state = $(e, e.savedStyles.bannerBackgroundImage), this.originalState = $(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!a()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = q(e) === q(this.props) ? this.state.image ? this.state.image[k] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState($(this.props, t)), this.originalState = $(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? o.a.createElement("div", {
						className: F.a.container
					}, o.a.createElement(u.a, {
						className: F.a.title
					}, G._("Manage Banner", null, {
						hk: "NMRRK"
					})), o.a.createElement("div", {
						className: F.a.manage
					}, o.a.createElement("div", {
						className: F.a.manageTitle
					}, G._("Manage the banner's price, tax, and balance", null, {
						hk: "39e58h"
					})), o.a.createElement("div", {
						className: F.a.manageDescription
					}, G._("Change the banner price and top up your balance in the Aragorn DApp", null, {
						hk: "4f5PNI"
					})), o.a.createElement(b.m, {
						href: K[e.id],
						target: "_blank"
					}, G._("Open in Aragon", null, {
						hk: "UMPAO"
					}))), o.a.createElement(N, {
						className: F.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), o.a.createElement(L, {
						className: F.a.controls,
						subredditId: e.id,
						submitEnabled: !a()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function q(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function $(e, t) {
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
			const W = Object(d.c)({
					mainHeaderAsset: (e, t) => {
						const n = Object(m.q)(e, t);
						if (n) return Object(g.a)(e, {
							subredditId: n.id
						})
					},
					savedStyles: (e, t) => {
						const n = Object(m.q)(e, t);
						return n ? e.structuredStyles.models[n.id] : {}
					},
					subreddit: m.q
				}),
				V = Object(i.b)(W, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				Q = Object(m.t)();
			t.default = Object(p.a)("spHarberger", Object(c.a)(Q(V(z))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(i);

			function c(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: d.a.title
				}, e.children), a.a.createElement(o.a, {
					className: d.a.closeIcon
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(c.b)(e, t)
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${i.a.assetPath}/${r}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return a.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: s
				})
			}))
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class i extends a.a.Component {
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
						labelClassName: r,
						value: o,
						controlName: i,
						isUploading: d,
						tabIndex: c
					} = this.props;
					return d ? a.a.createElement(s.a, {
						className: e
					}) : a.a.createElement(s.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: r,
						multiple: !1,
						tabIndex: c,
						value: o,
						onChange: this.onChange
					})
				}
			}
			t.a = i
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
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				d = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = o.a.wrapped(l.a, "ImageUploadIcon", m.a), g = o.a.div("ImageIconRow", m.a), h = o.a.div("ImageUploadText", m.a), x = o.a.wrapped(i.a, "FileDrop", m.a), f = o.a.div("ContainerUploading", m.a), v = e => a.a.createElement(f, {
				className: e.className
			}, a.a.createElement(g, null, a.a.createElement(c.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(h, null, b._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), I = o.a.label("Label", m.a);
			t.b = e => a.a.createElement(x, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(I, {
					className: Object(s.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, a.a.createElement(g, null, e.icon || a.a.createElement(p, null)), a.a.createElement(h, null, e.label), a.a.createElement(d.a, {
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
			var r = n("./node_modules/lodash/flow.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-dnd/lib/index.js"),
				d = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				c = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = d.NativeTypes.FILE,
				u = a()(Object(i.DropTarget)(l, {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class s extends a.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = n || r;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple) && a.a.createElement("input", {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return c
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "n", (function() {
				return f
			}));
			var r, a = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function c(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const b = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				g = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				x = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function f(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/imageLease.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const d = async (e, t, n, d, c) => Object(s.a)(Object(o.a)(e, [i.a]), {
				endpoint: `${r.a.metaUrl}/communities/${t}/upload-lease`,
				method: a.hb.POST,
				data: {
					filepath: n,
					imagetype: d,
					mimetype: c
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						...s
					} = e, o = s;
					return r ? a.a.createElement(t, o) : void 0 !== n ? a.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(a);
			t.a = Object(r.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var i = (e = o, t) => {
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case a.b:
						case a.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === a.b
								}
							};
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/governance/constants.ts");
			const c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, r, a, s;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == o ? void 0 : o.contracts,
					d = null == i ? void 0 : i.unlocked,
					c = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					u = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
					m = (null == d ? void 0 : d.decimals) || 0,
					b = "1" + "0".repeat(m);
				return {
					blockchainProvider: c,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: b,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var m = (e = c, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: u(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = (e = b, t) => {
				switch (t.type) {
					case d.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, a = Object.keys(r).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[n]: r[a]
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: i,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: i.a
				}
			});
			const d = (e, t) => {
				var n, r, a;
				return t ? null === (a = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function c() {
				const e = Object(a.bb)(),
					t = Object(r.e)(t => Object(a.q)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const l = (e, t) => {
				var n;
				const r = null === (n = d(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby || r === s.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				s = {},
				o = (e, t) => {
					const n = b(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				d = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : s
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal.58c8f6bc3c5d8277dfc6.js.map