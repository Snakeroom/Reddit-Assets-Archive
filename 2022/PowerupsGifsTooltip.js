// https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.5e7fecbf3e9bcef2e610.js
// Retrieved at 10/24/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsGifsTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_38dbigXGGrbLqPyAm7KuuU"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/draft-js/lib/Draft.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less"),
				d = s.n(c);
			class l extends n.a.Component {
				constructor(e) {
					super(e), this.updateTooltipPosition = null, this.handleWindowClick = e => {
						this.props.isVisible && this.props.setIsVisible(!1)
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.gifToolbarButtonEl = e.currentTarget), this.props.isVisible || this.props.sendEvent(), this.props.setIsVisible(!this.props.isVisible)
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === r.a.Escape && this.closeTooltip(!0)
					}, this.closeTooltip = e => {
						if (e) {
							const {
								editorState: e,
								onChange: t
							} = this.props;
							t(o.EditorState.forceSelection(e, e.getSelection()))
						}
						this.props.setIsVisible(!1)
					}, this.onTooltipBodyClick = e => {
						e.stopPropagation()
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						toggleTooltip: this.toggleTooltip
					})
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null), window.removeEventListener("click", this.handleWindowClick)
				}
				componentDidUpdate() {
					this.props.isVisible ? (this.updatePosition(), window.addEventListener("click", this.handleWindowClick)) : window.removeEventListener("click", this.handleWindowClick)
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
						onKeyDown: this.onKeyPressedInTooltip,
						onClick: this.onTooltipBodyClick
					}, this.props.children))
				}
			}
			t.a = l
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				textContentContainer: "_1zuJvm1vjxI3wdBQ_0G8Ix",
				reloadButton: "SxlCrByp5by6J_IRxVRh",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
				noResultsText: "_3Eng5EPqWhaHeqg_gRxoe_",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				c = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				h = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/config.ts"),
				b = s("./src/lib/addQueryParams/index.ts");
			const x = "pg";

			function y(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var T = s("./src/reddit/icons/svgs/Close/index.tsx"),
				E = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/economics.ts"),
				C = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				w = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let v;

			function k() {
				v || (v = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var j = s("./node_modules/lodash/debounce.js"),
				I = s.n(j),
				R = s("./src/reddit/icons/svgs/Search/index.tsx"),
				G = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				B = s.n(S);
			const O = 400;
			class N extends l.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = I()(() => {
						this.props.onChange(this.state.query)
					}, O), this.focusOnInput = () => {
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
						className: Object(i.a)(B.a.searchBox, this.props.className)
					}, l.a.createElement("button", {
						className: B.a.searchIconButton,
						onClick: this.focusOnInput
					}, l.a.createElement(R.a, {
						className: B.a.searchIcon
					})), l.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: B.a.searchInput,
						placeholder: o.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && l.a.createElement("div", {
						className: B.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${g.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const P = Object(u.c)({
				isNightMode: G.eb
			});
			var A = Object(h.b)(P)(N),
				M = s("./src/lib/constants/icons.ts"),
				U = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/icons/fonts/index.tsx");
			var L = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				V = s.n(L);
			const F = 4,
				H = r()((function() {
					const e = Object(b.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: g.a.giphyApiKey,
						rating: x
					});
					return fetch(e).then(y)
				}));
			class D extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: "",
						showReload: !1
					}, this.mounted = !1, this.reloadGifs = () => {
						this.setState({
							showReload: !1
						}), this.state.query ? this.loadMoreResults() : this.loadTrendingGifs()
					}, this.onQueryChange = e => {
						this.props.onQueryChange(e), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => {
							e ? this.loadMoreResults() : this.loadTrendingGifs()
						})
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = c()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.onResultClick(this.props.hasGifProduct);
						const t = this.props.editorState,
							s = Object(w.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), C.a.before);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), k()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					H().then(e => {
						this.state.query || this.addGiphyResults(e)
					}).catch(() => {
						this.mounted && (this.setState({
							showReload: !0,
							loading: !1
						}), H.cache.clear())
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
							return k(), v.then(t => {
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
							return fetch(t).then(y)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(o.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1,
								showReload: !0
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const o = function(e) {
							var t, s;
							const o = (null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.height) ? parseInt(e.images.fixed_width.height) : null,
								i = !!(null === (s = e.images.downsized) || void 0 === s ? void 0 : s.url) && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
								n = i ? e.images.downsized : e.images.fixed_height;
							return n && n.url && n.width && n.height && o ? {
								id: e.id,
								url: n.url,
								hasDownsizedImage: i,
								width: parseInt(n.width),
								height: parseInt(n.height),
								fixedWidthHeight: o
							} : null
						}(e);
						if (o) {
							const e = s.reduce((e, t, o) => t < s[e] ? o : e, 0);
							t[e].push(o), s[e] += o.fixedWidthHeight + F
						}
					});
					const o = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: o < e.pagination.total_count ? o : null
					})
				}
				render() {
					var e;
					const {
						columns: t,
						loading: s,
						showReload: n
					} = this.state;
					let r = null;
					return r = n ? l.a.createElement("div", {
						className: V.a.textContentContainer
					}, l.a.createElement(U.t, {
						priority: U.c.Plain,
						size: U.d.XS,
						text: o.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						"aria-label": o.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						onClick: this.reloadGifs,
						Icon: Object(q.b)(M.a.refresh)
					})) : s ? l.a.createElement("div", {
						className: V.a.loadingSpinner
					}, l.a.createElement(f.a, {
						sizePx: 20,
						center: !0
					})) : 0 === (null === (e = t[0]) || void 0 === e ? void 0 : e.length) ? l.a.createElement("div", {
						className: Object(i.a)(V.a.textContentContainer, V.a.noResultsText)
					}, o.fbt._("No results", null, {
						hk: "2vJ2bd"
					})) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(i.a)(V.a.results, {
							[V.a.disabled]: this.props.disabled
						})
					}, t.map((e, t) => l.a.createElement("div", {
						className: V.a.column,
						key: t
					}, e.map(e => l.a.createElement("button", {
						className: V.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, l.a.createElement("img", {
						className: V.a.gifResultImage,
						src: e.url
					})))))), this.props.children), l.a.createElement("div", {
						className: V.a.tooltip
					}, l.a.createElement("div", {
						className: V.a.header
					}, l.a.createElement("div", {
						className: V.a.searchLine
					}, l.a.createElement(A, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: V.a.searchBox
					}), l.a.createElement(T.a, {
						className: V.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), l.a.createElement("div", {
						className: V.a.body,
						onScroll: this.onScroll
					}, r, l.a.createElement("div", {
						className: V.a.whiteScrim
					})))
				}
			}
			const Q = Object(u.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(_.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(h.b)(Q, e => ({
				showErrorToast: t => e(Object(p.f)({
					text: t,
					kind: E.b.Error,
					duration: 5e3
				}))
			}))(D))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				i = s.n(o),
				n = s("./src/reddit/helpers/trackers/features/gifTooltip.ts"),
				r = s("./src/reddit/helpers/trackers/powerups.ts"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				d = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				const t = Object(a.a)(),
					[s, l] = Object(o.useState)(!1);
				return i.a.createElement(c.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => {
						var s;
						return t(Object(r.d)(e.correlationId, null === (s = e.subreddit) || void 0 === s ? void 0 : s.id))
					},
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: l
				}, i.a.createElement(d.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: () => l(!1),
					onQueryChange: s => t(Object(n.a)(s, e.subreddit.id, e.correlationId)),
					onResultClick: s => t(Object(n.b)(s, e.subreddit.id, e.correlationId)),
					subreddit: e.subreddit,
					disabled: !e.userCanUseGifs
				}))
			}
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
		"./src/reddit/helpers/trackers/features/gifTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => i => ({
					source: "meta",
					action: "change",
					noun: "gif_tooltip_search",
					correlationId: s,
					subreddit: t ? o.kb(i, t) : void 0,
					post: o.k(i),
					search: {
						query: e
					},
					...o.o(i)
				}),
				n = (e, t, s) => i => {
					const n = o.o(i);
					return {
						...n,
						source: "meta",
						action: "select",
						noun: "gif_tooltip_result",
						correlationId: s,
						subreddit: t ? o.kb(i, t) : void 0,
						post: o.k(i),
						actionInfo: {
							...n.actionInfo,
							reason: e ? "has-gif-product" : "gif-train"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "f", (function() {
				return h
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, s) => ({
					...i.o(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: i.T(e),
					subreddit: i.jb(e),
					powerups: {
						...i.ob(e),
						freeCount: t,
						paidCount: s
					}
				}),
				r = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e)
				}),
				a = (e, t) => s => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...n(s),
					powerups: {
						...i.ob(s),
						emojiCount: e
					}
				}),
				c = (e, t) => s => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...n(s),
					powerups: {
						...i.ob(s),
						emojiCount: e
					}
				}),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return s => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...n(s),
						powerups: {
							...i.ob(s),
							emojiCount: e
						}
					})
				},
				l = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? i.kb(s, t) : void 0,
					...n(s),
					correlationId: e
				}),
				h = (e, t, s) => o => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: i.jb(o),
					...i.o(o)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.5e7fecbf3e9bcef2e610.js.map