// https://www.redditstatic.com/desktop2x/SpecialMembershipsGifsTooltip.8aa61f47eb7108a43f1b.js
// Retrieved at 4/7/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SpecialMembershipsGifsTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_38dbigXGGrbLqPyAm7KuuU"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/draft-js/lib/Draft.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less"),
				d = s.n(c);
			class l extends n.a.Component {
				constructor(e) {
					super(e), this.updateTooltipPosition = null, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.gifToolbarButtonEl = e.currentTarget), this.props.isVisible || this.props.sendEvent(), this.props.setIsVisible(!this.props.isVisible)
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === r.a.Escape && this.closeTooltip(!0)
					}, this.closeTooltip = e => {
						if (e) {
							const {
								editorState: e,
								onChange: t
							} = this.props;
							t(i.EditorState.forceSelection(e, e.getSelection()))
						}
						this.props.setIsVisible(!1)
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						toggleTooltip: this.toggleTooltip
					})
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate() {
					this.props.isVisible && this.updatePosition()
				}
				updatePosition() {
					if (!this.updateTooltipPosition || !this.props.isVisible) return;
					const e = this.gifToolbarButtonEl && this.gifToolbarButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				render() {
					const {
						isVisible: e
					} = this.props;
					return n.a.createElement(a.b, {
						className: d.a.tooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: a.a.Below
					}, e && n.a.createElement("div", {
						onKeyDown: this.onKeyPressedInTooltip
					}, this.props.children))
				}
			}
			t.a = l
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				headerWithTitleLine: "_2d5Y14DbQhaeFQexgn_8Nr",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				c = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				p = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/config.ts"),
				b = s("./src/lib/addQueryParams/index.ts");
			const x = "pg";

			function E(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				T = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/economics.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				C = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let N;

			function G() {
				N || (N = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var O = s("./node_modules/lodash/debounce.js"),
				j = s.n(O),
				S = s("./src/reddit/icons/svgs/Search/index.tsx"),
				k = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				R = s.n(w);
			const B = 400;
			class M extends l.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = j()(() => {
						this.props.onChange(this.state.query)
					}, B), this.focusOnInput = () => {
						this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
					}
				}
				componentDidMount() {
					this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
				}
				render() {
					const {
						isNightMode: e
					} = this.props, {
						query: t
					} = this.state, s = `powered-by-giphy-${e?"dark":"light"}.png`;
					return l.a.createElement("div", {
						className: Object(o.a)(R.a.searchBox, this.props.className)
					}, l.a.createElement("button", {
						className: R.a.searchIconButton,
						onClick: this.focusOnInput
					}, l.a.createElement(S.a, {
						className: R.a.searchIcon
					})), l.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: R.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && l.a.createElement("div", {
						className: R.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${g.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const L = Object(h.c)({
				isNightMode: k.cb
			});
			var U = Object(p.b)(L)(M),
				P = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				A = s.n(P);
			const F = 4,
				H = r()((function() {
					const e = Object(b.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: g.a.giphyApiKey,
						rating: x
					});
					return fetch(e).then(E)
				}));
			class V extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: ""
					}, this.mounted = !1, this.onQueryChange = e => {
						this.props.sendEvent(t => ({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? I.hb(t, this.props.subreddit.id) : void 0,
							post: I.j(t),
							search: {
								query: e
							},
							...I.n(t)
						})), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = c()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = I.n(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? I.hb(e, this.props.subreddit.id) : void 0,
								post: I.j(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(C.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), v.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), G()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					H().then(e => {
						this.state.query || this.addGiphyResults(e)
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: s
					} = this.state;
					!e && s && null !== t && (await
						function(e) {
							return G(), N.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(b.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: g.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || x
							});
							return fetch(t).then(E)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(i.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const i = this.getSimplifiedResult(e),
							o = s.reduce((e, t, i) => t < s[e] ? i : e, 0);
						t[o].push(i), s[o] += i.fixedWidthHeight + F
					});
					const i = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: i < e.pagination.total_count ? i : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						i = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: i.url,
						hasDownsizedImage: s,
						width: parseInt(i.width),
						height: parseInt(i.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return l.a.createElement("div", {
						className: A.a.tooltip
					}, l.a.createElement("div", {
						className: Object(o.a)(A.a.header, {
							[A.a.headerWithTitleLine]: !!this.props.title
						})
					}, this.props.title && l.a.createElement("div", {
						className: A.a.titleLine
					}, l.a.createElement("span", {
						className: A.a.title
					}, this.props.title), l.a.createElement(y.a, {
						className: A.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), l.a.createElement("div", {
						className: A.a.searchLine
					}, l.a.createElement(U, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: A.a.searchBox
					}), !this.props.title && l.a.createElement(y.a, {
						className: A.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), l.a.createElement("div", {
						className: A.a.body,
						onScroll: this.onScroll
					}, l.a.createElement("div", {
						className: Object(o.a)(A.a.results, {
							[A.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => l.a.createElement("div", {
						className: A.a.column,
						key: t
					}, e.map(e => l.a.createElement("button", {
						className: A.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, l.a.createElement("img", {
						className: A.a.gifResultImage,
						src: e.url
					})))))), t && l.a.createElement("div", {
						className: A.a.loadingSpinner
					}, l.a.createElement(f.a, {
						sizePx: 20,
						center: !0
					})), this.props.children, l.a.createElement("div", {
						className: A.a.whiteScrim
					})))
				}
			}
			const D = Object(h.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(_.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(p.b)(D, e => ({
				showErrorToast: t => e(Object(u.f)({
					text: t,
					kind: T.b.Error,
					duration: 5e3
				}))
			}))(V))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, s) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/GifUpsell.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_2_Uw7dsIKTFKE_NCj6EleY",
				closeIcon: "_1brvWyJVaOAXkOXqIHpH3j",
				header: "kcYeL00LNhZ3PMQHSQpQv",
				description: "_1RMwvfYmtFIOtxsnawzdBv",
				divider: "_2RMMTIo3RSbHDSN8tkrOh4",
				unlockButton: "_1kOwvLyqtdcWmtE0-cya_c",
				unlockIcon: "_1wLJ603y3v9_FDIEvkOyGn"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/reddit/helpers/trackers/crypto.ts"),
				r = s("./src/reddit/hooks/useTracking.ts"),
				a = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/economics/membershipPage.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				u = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/GifUpsell.m.less"),
				m = s.n(u);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				return o.a.createElement("div", {
					className: m.a.tooltip
				}, o.a.createElement(p.a, {
					className: m.a.closeIcon,
					onClick: e.onClose
				}), o.a.createElement("p", {
					className: m.a.header
				}, f._("Join a GIF Train", null, {
					hk: "4oQ9RF"
				})), o.a.createElement("p", {
					className: m.a.description
				}, f._("Anyone can add a GIF to their comment when replying to another comment with a GIF.", null, {
					hk: "2fVCMx"
				})), o.a.createElement("div", {
					className: m.a.divider
				}), o.a.createElement("p", {
					className: m.a.header
				}, f._("GIF Anywhere", null, {
					hk: "DSBTZ"
				})), o.a.createElement("p", {
					className: m.a.description
				}, f._("Get a Special Membership to use GIFs in all of your comments {subredditName} .", [f._param("subredditName", `r/${e.subredditName}`)], {
					hk: "dQagV"
				})), o.a.createElement(d.s, {
					className: m.a.unlockButton,
					to: Object(l.a)(e.subredditName, e.correlationId)
				}, o.a.createElement(h.a, {
					className: m.a.unlockIcon
				}), f._("Unlock GIFs in Comments", null, {
					hk: "1sbCTr"
				})))
			}
			t.default = e => {
				const t = Object(r.a)(),
					[s, d] = Object(i.useState)(!1),
					l = () => d(!1);
				return o.a.createElement(a.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => {
						var s, i;
						return e.userCanUseGifs ? t(Object(n.a)(e.correlationId, null === (s = e.subreddit) || void 0 === s ? void 0 : s.id)) : t(Object(n.b)(e.correlationId, null === (i = e.subreddit) || void 0 === i ? void 0 : i.id))
					},
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: d
				}, e.userCanUseGifs ? o.a.createElement(c.a, {
					correlationId: e.correlationId,
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: l,
					subreddit: e.subreddit
				}) : o.a.createElement(g, {
					correlationId: e.correlationId,
					onClose: l,
					subredditName: e.subreddit.name
				}))
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function o(e, t) {
				return Object(i.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/trackers/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var i = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o, n) => r => {
					const a = {
						...Object(i.n)(r),
						source: "meta",
						action: e,
						noun: "transaction",
						subreddit: Object(i.hb)(r, s),
						actionInfo: {
							settingValue: t,
							reason: n
						}
					};
					return o && (a.payment = {
						amountInSmallestDenom: parseInt(o)
					}), a
				},
				n = (e, t, s) => o("submit", e, t, s),
				r = (e, t, s, i) => o("fail", e, t, s, i),
				a = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? Object(i.hb)(s, t) : void 0,
					correlationId: e,
					...Object(i.n)(s)
				}),
				c = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_upsell",
					subreddit: t ? Object(i.hb)(s, t) : void 0,
					correlationId: e,
					...Object(i.n)(s)
				})
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SpecialMembershipsGifsTooltip.8aa61f47eb7108a43f1b.js.map