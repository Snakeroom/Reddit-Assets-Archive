// https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.ec52dc1859356e7209aa.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxManageModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var n = a("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less": function(e, t, a) {
			e.exports = {
				imageHeader: "_3l_z5oBbQrRZRtTyvqbl6x",
				imagePreview: "_1-R7D0TwlV8GPVKMdUwu4D",
				imageSize: "PPqV8AsEba7hyp5onB7kq",
				imageTitle: "ybJpUHv27p_eiolLG1pw9",
				imageUpload: "_2RbtsyQybzzFTA7e01stdy",
				modifiers: "_3qsI6dGH_7Jb9ugZ_Hqfmt",
				remove: "_3wdxtzlLbZ0yvPrtfoz-4q",
				toggle: "_3-kMH1t8f_upFpKnJ26tLo",
				toggleSwitch: "_2LeKK3pzwVJodlBiS9-7Bm",
				title: "_1iqK2jcQlmjQi-XsHG7WcS"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less": function(e, t, a) {
			e.exports = {
				flexRow: "_1ixaK0srqt2UgGOzYy_rBx",
				button: "_3ujSmlJxAfLghb3aGdMxE9",
				buttons: "_2kzYDV6Ylwn9eSNeVNi7X8",
				container: "_1ha2zfvzpISAPpdy9eFmZh",
				save: "_1D6ZsNPANCG-LE4zZ8RedZ",
				token: "l0_GNP1pa_RzjpDApD7lB",
				wallet: "_1WyqOs8RnPL-FzLqnJs-ck"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less": function(e, t, a) {
			e.exports = {
				dailyTax: "_3d85Uvq9ilZbSF-InVXVd9",
				equals: "_2PHYhcdQ9hNJRfU-FiMiTX",
				explanation: "U1cnwO9wnHoeLiRpx-qqe",
				input: "_2-au_1KjABOAorQTVuMoab",
				tax: "_1rklAUluF3U-SKHpB_wZ-a",
				taxAmount: "_3padfslcSFZkQPPQ6o6mAk",
				taxRate: "_28kSbiA3xbZCgmTn2mxSlQ",
				token: "Et61RG0Ef8CpUmKfhisap",
				title: "sGj9DIa992KWiFKRfRdIw"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less": function(e, t, a) {
			e.exports = {
				banner: "_3l95gQw6MCtUIjEyo3C9W6",
				container: "_1hmKFovfO3FycaLmi0738y",
				controls: "_1MJu5fkr9tMpNdTwH6FOoe",
				price: "GvcKlfm4P-OebPfkgFJAD",
				title: "_1dtGMMD-cseaekE1amTo2e"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/lodash/isEqual.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = a("./src/reddit/contexts/PageLayer/index.tsx"),
				p = a("./src/reddit/featureFlags/component.tsx"),
				h = a("./src/reddit/i18n/components.tsx"),
				g = a("./src/reddit/selectors/gov.ts"),
				b = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less"),
				x = a.n(b),
				v = a("./src/lib/uploadToS3/index.ts"),
				E = a("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				f = a("./src/reddit/contexts/ApiContext.tsx"),
				N = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = a("./src/reddit/endpoints/governance/imageLease.ts"),
				O = a("./src/reddit/helpers/media/index.ts"),
				_ = a("./src/reddit/i18n/utils.ts"),
				j = a("./src/reddit/icons/svgs/Remove/index.tsx"),
				C = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less"),
				w = a.n(C);
			const T = "bannerBackgroundImage";
			class y extends i.a.Component {
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
						const n = await Object(O.g)(e.file) || e.file.type,
							s = await Object(I.a)(t(), a, e.file.name, T, n);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							i = await Object(v.a)(e.file, r);
						if (i.ok) {
							const e = decodeURIComponent(i.body.PostResponse.Location);
							this.props.onImageChange({
								[T]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[T]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: t,
						tabIndex: a,
						tiled: n
					} = this.props, s = t ? t[T] : void 0;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: w.a.title
					}, i.a.createElement(h.c, null, "banner")), i.a.createElement("div", {
						className: w.a.imageHeader
					}, i.a.createElement("div", {
						className: w.a.imageTitle
					}, i.a.createElement(h.c, null, "Image")), i.a.createElement("div", {
						className: w.a.imageSize
					}, i.a.createElement(h.c, null, "192 px high"))), i.a.createElement(E.a, {
						className: w.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: Object(_.c)("Drag and Drop or Upload Image"),
						tabIndex: a,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && i.a.createElement("div", {
						className: w.a.imagePreview,
						style: {
							background: "url(".concat(s, n ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), i.a.createElement("div", {
						className: w.a.modifiers
					}, i.a.createElement("div", {
						className: w.a.toggle
					}, i.a.createElement(N.a, {
						redditStyle: !0,
						className: w.a.toggleSwitch,
						tabIndex: a ? a + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), i.a.createElement(h.c, null, "Tile")), i.a.createElement(j.a, {
						className: w.a.remove,
						tabIndex: a ? a + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var M = Object(l.b)(null, e => ({
					onImageUploadFailed: () => e(Object(d.a)())
				}))(Object(f.b)(y)),
				S = a("./src/lib/classNames/index.ts"),
				B = a("./src/lib/prettyPrintNumber/index.ts"),
				k = a("./src/reddit/actions/modal.ts"),
				P = a("./src/reddit/components/Governance/Token/index.tsx"),
				A = a("./src/reddit/controls/Button/index.tsx"),
				H = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less"),
				R = a.n(H);
			const D = Object(o.c)({
				wallet: g.g
			});
			var F = Object(l.b)(D, e => ({
					onClose: () => e(Object(k.f)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: Object(S.a)(R.a.container, e.className)
					}, i.a.createElement("div", {
						className: R.a.wallet
					}, e.wallet && i.a.createElement(r.Fragment, null, i.a.createElement(h.c, null, "You have"), i.a.createElement(P.a, {
						grey: !0,
						className: R.a.token,
						subredditId: e.subredditId
					}), Object(B.a)(e.wallet.amount))), i.a.createElement("div", {
						className: R.a.buttons
					}, i.a.createElement(A.i, {
						className: R.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, i.a.createElement(h.c, null, "cancel")), i.a.createElement(A.f, {
						className: Object(S.a)(R.a.button, R.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, i.a.createElement(h.c, null, "save"))))
				})),
				U = a("./src/lib/currency/cleanNumber/index.ts"),
				L = a("./src/reddit/controls/FormFields/index.tsx"),
				V = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less"),
				G = a.n(V);
			var q = function(e) {
				return i.a.createElement("div", {
					className: Object(S.a)(G.a.container, e.className)
				}, i.a.createElement("div", {
					className: G.a.title
				}, i.a.createElement(h.c, null, "Price and Hamburger Tax")), i.a.createElement("div", {
					className: G.a.explanation
				}, i.a.createElement(h.c, null, "You can protect your ownership by raising the price. This also increases the daily tax. If you're unable to pay the tax, the price goes to 0.")), i.a.createElement("div", {
					className: G.a.tax
				}, i.a.createElement(L.c, {
					redditStyle: !0,
					className: G.a.input,
					label: Object(_.c)("banner price"),
					placeholder: "0",
					tabIndex: e.tabIndex,
					type: "text",
					value: Object(B.a)(e.price),
					onChange: t => e.onPriceChange(Object(U.a)(t.currentTarget.value))
				}), i.a.createElement(P.a, {
					className: G.a.token,
					subredditId: e.subredditId
				}), i.a.createElement("div", {
					className: G.a.equals
				}, "="), i.a.createElement("div", {
					className: G.a.dailyTax
				}, i.a.createElement("div", {
					className: G.a.taxRate
				}, i.a.createElement(h.c, null, "1% daily tax")), i.a.createElement("div", {
					className: G.a.taxAmount
				}, Object(B.a)((.01 * parseInt(e.price || "0")).toFixed(2))))))
			};
			class z extends i.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => this.setState({
						price: e
					}), this.handleImageChange = e => this.setState({
						image: e
					}), this.handleTilingChange = () => this.setState(e => ({
						tiled: !e.tiled
					})), this.handleSubmit = () => {
						this.props.subreddit && this.props.onUpdateBanner({
							currentPrice: this.originalState.price,
							newPrice: this.state.price,
							subredditId: this.props.subreddit.id,
							content: {
								bannerBackgroundImage: this.state.image ? this.state.image[T] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = Y(e, e.savedStyles.bannerBackgroundImage), this.originalState = Y(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = W(e) === W(this.props) ? this.state.image ? this.state.image[T] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(Y(this.props, t)), this.originalState = Y(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? i.a.createElement("div", {
						className: x.a.container
					}, i.a.createElement(m.a, {
						className: x.a.title
					}, i.a.createElement(h.c, null, "Manage Banner")), i.a.createElement(q, {
						className: x.a.price,
						price: this.state.price,
						subredditId: e.id,
						tabIndex: 1,
						onPriceChange: this.handlePriceChange
					}), i.a.createElement(M, {
						className: x.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), i.a.createElement(F, {
						className: x.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function W(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function Y(e, t) {
				const {
					mainHeaderAsset: a
				} = e;
				return a ? {
					price: a.price,
					image: t ? {
						[T]: t
					} : a.content && a.content.bannerBackgroundImage ? {
						[T]: a.content.bannerBackgroundImage
					} : {
						[T]: ""
					},
					tiled: !!a.content && "tiled" === a.content.bannerBackgroundImagePosition
				} : {
					price: "",
					image: t ? {
						[T]: t
					} : {
						[T]: ""
					},
					tiled: !1
				}
			}
			const K = Object(o.c)({
					mainHeaderAsset: (e, t) => {
						const a = Object(u.q)(e, t);
						if (a) return Object(g.c)(e, {
							subredditId: a.id
						})
					},
					savedStyles: (e, t) => {
						const a = Object(u.q)(e, t);
						return a ? e.structuredStyles.models[a.id] : {}
					},
					subreddit: u.q
				}),
				Z = Object(l.b)(K, e => ({
					onUpdateBanner: t => e(Object(d.c)(t))
				})),
				X = Object(u.t)();
			t.default = Object(p.a)("spHarberger", Object(c.a)(X(Z(z))))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/lodash/uniqueId.js"),
				s = a.n(n),
				r = a("./node_modules/raf/index.js"),
				i = a.n(r),
				l = a("./node_modules/react/index.js"),
				o = a.n(l),
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/actions/modal.ts"),
				p = a("./src/reddit/i18n/utils.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				g = a("./node_modules/fbt/lib/FbtPublic.js"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				v = a("./src/reddit/layout/row/Inline/index.tsx"),
				E = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = a.n(E);
			var N = Object(b.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return o.a.createElement("div", {
						className: f.a.wrapper
					}, o.a.createElement(v.a, {
						className: f.a.titleRow
					}, a), o.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), o.a.createElement(v.a, {
						className: f.a.buttonRow
					}, o.a.createElement(x.f, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, g.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				I = a("./src/reddit/controls/ErrorText/index.m.less"),
				O = a.n(I);
			a.d(t, "a", (function() {
				return w
			})), a.d(t, "c", (function() {
				return T
			}));
			const _ = Object(d.c)({
				activeModalId: h.a
			});
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.spanRef = o.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(s()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: a,
						errorModalBody: n,
						errorModalTitle: s = Object(p.c)("Error"),
						moreText: r = Object(p.c)("More")
					} = this.props, {
						modalId: i,
						textHasOverflowed: l
					} = this.state;
					return o.a.createElement("div", {
						className: Object(m.a)(O.a.wrapper, a)
					}, o.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), l && o.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, r), t === i && o.a.createElement(N, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const C = Object(c.b)(_, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(j),
				w = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? o.a.createElement("div", {
						className: t
					}, i.map((e, t) => o.a.createElement(C, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				T = e => o.a.createElement(w, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = C
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return b
			})), a.d(t, "c", (function() {
				return x
			})), a.d(t, "d", (function() {
				return f
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/controls/ErrorText/index.tsx"),
				o = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				m = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
				}
				return a
			};
			const h = i.a.input("input", m.a),
				g = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: i
					} = e, l = p(e, ["label", "children", "inputRef", "className"]), o = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, i, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: g
					}, s.a.createElement(h, u({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, l)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: o
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: i,
						redditStyle: l
					} = e, o = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsRedditStyle]: l
						}),
						onClick: g
					}, s.a.createElement(h, u({
						innerRef: n
					}, o)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				v = e => s.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(o.a, {
					className: m.a.plus
				}));
			var E;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(E || (E = {}));
			class f extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: E.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: E.REMOVE,
							value: a,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: a,
						placeholder: n,
						errors: r = []
					} = this.props;
					return e.map((e, i) => s.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, i),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(c.b, {
						className: m.a.trash
					})), !!r[i] && s.a.createElement(l.b, {
						className: m.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: i,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const o = !(!!n && a.length >= n) && !l;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && o && s.a.createElement(v, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && o && s.a.createElement(v, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = a.n(i);
			const o = e => s.a.createElement("svg", {
				className: Object(r.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = o
		}
	}
]);
//# sourceMappingURL=HarbergerTaxManageModal.ec52dc1859356e7209aa.js.map