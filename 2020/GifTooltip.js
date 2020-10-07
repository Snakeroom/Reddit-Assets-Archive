// https://www.redditstatic.com/desktop2x/GifTooltip.ad047433729c6757a4aa.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GifTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/memoize.js"),
				n = s.n(o),
				a = s("./node_modules/lodash/throttle.js"),
				r = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/config.ts"),
				f = s("./src/lib/addQueryParams/index.ts");
			const b = "pg";

			function x(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error("".concat(e.meta.status, " ").concat(e.meta.msg));
					return e
				})
			}
			var T = s("./src/reddit/icons/svgs/Close/index.tsx"),
				y = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/economics.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				I = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			let v;

			function G() {
				v || (v = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var N = s("./node_modules/lodash/debounce.js"),
				j = s.n(N),
				w = s("./src/lib/classNames/index.ts"),
				R = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				B = s.n(O);
			const k = 400;
			class M extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = j()(() => {
						this.props.onChange(this.state.query)
					}, k), this.focusOnInput = () => {
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
					} = this.state, s = "powered-by-giphy-".concat(e ? "dark" : "light", ".png");
					return d.a.createElement("div", {
						className: Object(w.a)(B.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: B.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(R.a, {
						className: B.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: B.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: B.a.poweredByGiphy,
						style: {
							backgroundImage: "url(".concat(g.a.assetPath, "/img/memberships/").concat(s)
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const P = Object(h.c)({
				isNightMode: S.T
			});
			var H = Object(l.b)(P)(M),
				U = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				A = s.n(U);
			const F = 4,
				L = n()((function() {
					const e = Object(f.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: g.a.giphyApiKey,
						rating: b
					});
					return fetch(e).then(x)
				}));
			class V extends d.a.Component {
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
						this.props.sendEvent(t => Object.assign({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? _.subredditById(t, this.props.subreddit.id) : void 0,
							post: _.currentPost(t),
							search: {
								query: e
							}
						}, _.defaults(t))), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = r()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = _.defaults(e);
							return Object.assign(Object.assign({}, t), {
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? _.subredditById(e, this.props.subreddit.id) : void 0,
								post: _.currentPost(e),
								actionInfo: Object.assign(Object.assign({}, t.actionInfo), {
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								})
							})
						});
						const t = this.props.editorState,
							s = Object(I.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), C.a.after);
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
					L().then(e => {
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
							return G(), v.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(f.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: g.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || b
							});
							return fetch(t).then(x)
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
					return d.a.createElement("div", {
						className: A.a.tooltip
					}, d.a.createElement("div", {
						className: A.a.header
					}, d.a.createElement(H, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: A.a.searchBox
					}), d.a.createElement(T.a, {
						className: A.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), d.a.createElement("div", {
						className: A.a.body,
						onScroll: this.onScroll
					}, d.a.createElement("div", {
						className: A.a.results
					}, e.map((e, t) => d.a.createElement("div", {
						className: A.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: A.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: "".concat(e.fixedWidthHeight, "px")
						}
					}, d.a.createElement("img", {
						className: A.a.gifResultImage,
						src: e.url
					})))))), t && d.a.createElement("div", {
						className: A.a.loadingSpinner
					}, d.a.createElement(m.a, {
						sizePx: 20,
						center: !0
					})), d.a.createElement("div", {
						className: A.a.whiteScrim
					})))
				}
			}
			const q = Object(h.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(E.w)(e, s.id)
				}
			});
			t.a = Object(u.c)(Object(l.b)(q, e => ({
				showErrorToast: t => e(Object(p.e)({
					text: t,
					kind: y.b.Error,
					duration: 5e3
				}))
			}))(V))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifUpsell.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3cYR7OUcviXMIAo6m3xbQH",
				closeIcon: "_26UbCYHHIMhlMgswzMfEyi",
				header: "E8x4hV-NoLCv2uPQKBSf6",
				description: "_1rZa8bPg4xwlTibeLtljFX",
				divider: "_3HCWWdDiRzqu-YBp4J33wE",
				unlockButton: "_1uqrOS7DW6xjsfreKJ0ypM",
				unlockIcon: "Z40_wf6Cpr0p8m1PFglGr"
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
		"./src/reddit/components/RichTextEditor/media/GifTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3iJQNTNjHB9X0oZ8xZXPIS"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "GiphyTooltip", (function() {
				return C
			}));
			var i = s("./node_modules/draft-js/lib/Draft.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/uuid/v4.js"),
				r = s.n(a),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/constants/keycodes.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				p = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/economics/membershipPage.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				b = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifUpsell.m.less"),
				x = s.n(b);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function y(e) {
				return n.a.createElement("div", {
					className: x.a.tooltip
				}, n.a.createElement(g.a, {
					className: x.a.closeIcon,
					onClick: e.onClose
				}), n.a.createElement("p", {
					className: x.a.header
				}, T._("Join a GIF Train", null, {
					hk: "4oQ9RF"
				})), n.a.createElement("p", {
					className: x.a.description
				}, T._("Anyone can add a GIF to their comment when replying to another comment with a GIF.", null, {
					hk: "2fVCMx"
				})), n.a.createElement("div", {
					className: x.a.divider
				}), n.a.createElement("p", {
					className: x.a.header
				}, T._("GIF Anywhere", null, {
					hk: "DSBTZ"
				})), n.a.createElement("p", {
					className: x.a.description
				}, T._("Get a Special Membership to use GIFs in all of your comments {subredditName} .", [T._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "dQagV"
				})), n.a.createElement(u.p, {
					className: x.a.unlockButton,
					to: Object(m.a)(e.subredditName, e.correlationId)
				}, n.a.createElement(f.a, {
					className: x.a.unlockIcon
				}), T._("Unlock GIFs in Comments", null, {
					hk: "1sbCTr"
				})))
			}
			var E = s("./src/reddit/components/RichTextEditor/media/GifTooltip/index.m.less"),
				_ = s.n(E);
			class C extends n.a.Component {
				constructor(e) {
					super(e), this.updateTooltipPosition = null, this.state = {
						isTooltipVisible: !1
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.gifToolbarButtonEl = e.currentTarget), this.state.isTooltipVisible || this.props.sendEvent(e => Object.assign({
							source: "meta",
							action: "open",
							noun: this.props.userCanUseGifs ? "gif_tooltip" : "gif_upsell",
							correlationId: this.correlationId,
							subreddit: this.props.subreddit.id ? l.subredditById(e, this.props.subreddit.id) : void 0
						}, l.defaults(e))), this.setState({
							isTooltipVisible: !this.state.isTooltipVisible
						}, () => this.updatePosition())
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === d.a.Escape && this.closeTooltip(!0)
					}, this.closeTooltip = e => {
						if (e) {
							const {
								editorState: e,
								onChange: t
							} = this.props;
							t(i.EditorState.forceSelection(e, e.getSelection()))
						}
						this.setState({
							isTooltipVisible: !1
						})
					}, this.correlationId = r()()
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
				updatePosition() {
					if (!this.updateTooltipPosition || !this.state.isTooltipVisible) return;
					const e = this.gifToolbarButtonEl && this.gifToolbarButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				render() {
					const {
						userCanUseGifs: e
					} = this.props, {
						isTooltipVisible: t
					} = this.state;
					return n.a.createElement(h.b, {
						className: _.a.tooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: h.a.Below
					}, t && n.a.createElement("div", {
						onKeyDown: this.onKeyPressedInTooltip
					}, e ? n.a.createElement(p.a, {
						correlationId: this.correlationId,
						editorState: this.props.editorState,
						onChange: this.props.onChange,
						onClose: this.closeTooltip,
						subreddit: this.props.subreddit
					}) : n.a.createElement(y, {
						correlationId: this.correlationId,
						onClose: () => this.closeTooltip(!0),
						subredditName: this.props.subreddit.name
					})))
				}
			}
			t.default = Object(c.c)(C)
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function o(e, t) {
				return Object(i.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GifTooltip.ad047433729c6757a4aa.js.map