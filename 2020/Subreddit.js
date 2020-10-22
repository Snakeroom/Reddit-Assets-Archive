// https://www.redditstatic.com/desktop2x/Subreddit.91719686299c38e25368.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "Frontpage~SubredditWiki", "reddit-components-ContentGate"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				a = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return a(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				a = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = a(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					a = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var i = s(n, a),
						o = e[i];
					e[i] = e[n], e[n] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/orderBy.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseOrderBy.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n, a) {
				return null == e ? [] : (r(t) || (t = null == t ? [] : [t]), r(n = a ? void 0 : n) || (n = null == n ? [] : [n]), s(e, t, n))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				o = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return o(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				a = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : o(t), (a(e) ? s : r)(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > i) return [];
				var n = o,
					d = c(e, o);
				t = r(t), e -= o;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/graphql/operations/RecordCommunityAnswer.json": function(e) {
			e.exports = JSON.parse('{"id":"fea84f5739a4"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n, s) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(r)
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				a = n("./node_modules/tlds/index.js"),
				i = n.n(a),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				f = p.normalize;
			p.normalize = e => {
				f.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(r.e)(e),
					i = encodeURIComponent("".concat(t).concat(a));
				return "".concat(s.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(i.r),
				g = Object(r.a)(i.s),
				x = Object(r.a)(i.q),
				f = (e, t, n) => async (s, r, a) => {
					const i = Object(p.B)(r(), {
						subredditName: e
					});
					if (i) return v(i, t, n)(s, r, a)
				}, y = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, n) => async (r, i, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const v = i();
					try {
						await Object(a.g)("communityIcon", f, e.id)(r, i, p)
					} catch (O) {
						return Object(b.a)(Object(d.c)(v, "something went wrong with the uploading the image")), r(Object(o.e)({
							kind: u.b.Error,
							text: y()
						})), void r(x())
					}
					const E = Object(m.d)(i(), {
						name: "communityIcon"
					});
					if (!E) return Object(b.a)(Object(d.c)(v, "image is null")), r(Object(o.e)({
						kind: u.b.Error,
						text: y()
					})), void r(x());
					await Object(a.k)(e.id, {
						communityIcon: E
					}, c.b.idCard, n)(r, i, p), r(Object(o.e)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/banners.ts"),
				o = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				h = n("./src/reddit/models/Gold/Award.ts"),
				g = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				x = n.n(g);
			const f = 11,
				y = 1e3,
				v = 500,
				E = [x.a.iconCarouselInnerWrapper0, x.a.iconCarouselInnerWrapper1];

			function O(e) {
				let {
					asset: t
				} = e;
				return r.a.createElement("div", {
					className: x.a.awardIcon,
					style: {
						backgroundImage: "url('".concat(t, "')")
					}
				})
			}
			const C = Object(m.c)({
				awards: e => e.awards.models
			});
			class k extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: E[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), y + v)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === E[0] ? E[1] : E[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === h.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, f).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(O, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: x.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var j = Object(u.b)(C)(k);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(w || (w = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(i.a.AWARDED_LISTING_BANNER, o.f), [u, m] = Object(s.useState)(n ? w.Hidden : w.Visible);
				if (u === w.Hidden) return null;
				const p = () => {
					m(w.Visible), Object(c.O)(i.a.AWARDED_LISTING_BANNER, !1, o.f)
				};
				return u === w.Dismissed ? r.a.createElement("div", {
					className: Object(a.a)(x.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: x.a.dismissedText
				}, A._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.i, {
					onClick: p
				}, A._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(a.a)(x.a.container, t)
				}, r.a.createElement("h2", {
					className: x.a.title
				}, A._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(j, null), r.a.createElement(l.a, {
					className: x.a.close,
					onClick: () => {
						m(w.Dismissed), Object(c.O)(i.a.AWARDED_LISTING_BANNER, !0, o.f)
					}
				}))
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				c = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/doubleclickForPublishers/index.ts"),
				u = n("./src/lib/intersectionObserver/index.ts"),
				m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/components/BannerAd/index.m.less"),
				f = n.n(x),
				y = n("./src/lib/lessComponent.tsx");
			const v = y.a.div("Container", f.a),
				E = y.a.div("LoadingHitbox", f.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: n,
						sizes: s = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: n,
							sizes: s
						})
					} catch (r) {
						O(r)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= o.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(g.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
					}
					this.loader && u.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < o.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), o.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && u.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: n
					} = this.props;
					return t ? r.a.createElement(v, {
						"data-slot": t
					}, r.a.createElement(E, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: n,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: n
					})
				}
			}
			C.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(a.b)(() => Object(i.c)({
				properties: Object(m.a)((e, t) => {
					const n = e.platform.currentPage;
					if (!n) return {};
					const s = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(c.a)("".concat(s).concat(n.url), n.queryParams), Object(b.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const n = e.platform.currentPage;
					return n && n.meta ? l.c(t.listingName, n.meta.name) : ""
				}
			}))(Object(h.c)(C))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				u = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = n("./src/reddit/components/SubredditNav/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/constants/posts.ts"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				f = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/selectors/telemetry.ts");
			var v = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = n("./src/reddit/selectors/widgets.ts"),
				C = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				k = n.n(C);
			const j = d.a.wrapped(v.a, "Planet", k.a),
				A = d.a.img("SubredditIcon", k.a),
				w = Object(i.c)({
					spPollsEnabled: g.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(E.a)(e, {
							subredditId: n
						})
					},
					widget: O.f
				});
			t.a = Object(a.b)(w)(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					s = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					i = e.subreddit && Object(x.a)(e),
					c = !(!e.theme || !i),
					d = n.charAt(0).toUpperCase() + n.slice(1),
					g = !!e.subreddit && e.subredditInlineEditingEnabled,
					v = Object(o.a)(k.a.SubredditIcon, k.a.editableIcon, {
						[k.a.emptyEditableIcon]: !i
					}),
					E = r.a.createElement(u.a, {
						className: v,
						subreddit: e.subreddit,
						iconUrl: i || void 0,
						inTopBar: !0
					}),
					O = c ? r.a.createElement(A, {
						src: i || void 0
					}) : r.a.createElement(j, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					w = e.layout ? e.layout === b.g.Large ? "".concat(984, "px") : "100%" : "".concat(1086, "px");
				return r.a.createElement("div", {
					className: k.a.container,
					style: {
						maxWidth: w
					}
				}, r.a.createElement("div", {
					className: k.a.subredditMetaContainer
				}, g ? E : O, r.a.createElement("div", {
					className: Object(o.a)(k.a.textContainer, {
						[k.a.textContainerNoIcon]: !c
					})
				}, r.a.createElement("div", {
					className: k.a.text
				}, r.a.createElement("h1", {
					className: k.a.title
				}, a || d), !!a && r.a.createElement("h2", {
					className: k.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: k.a.subscribeButtonContainer
				}, r.a.createElement(p.a, {
					className: k.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign(Object.assign({}, y.defaults(t)), {
							source: "id_banner",
							action: f.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: n,
						type: h.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(l.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), C && r.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: s,
					subredditId: t,
					subredditNavContainerClassName: k.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CommunityTopicSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				survey: "_38x4rPvvkwQ6NMJG2ex7X",
				title: "_2A9MyuPuWpjhwR74--2-4O",
				closeButton: "V_TnSwg2o9gHakrKQhX3C",
				closeText: "_3HI49Q7TJQME5s2hgKebpJ",
				question: "IVHmIcBw9nMeqPbAkzV1D",
				buttonGroup: "_3MlgEhOs_SeeHPBxl7OdG_",
				submitButton: "_7RdJywSTypfwEbpxEdDba"
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/loginHref/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = p.a.div("FooterContainer", h.a), f = p.a.div("UserAgreement", h.a), y = p.a.a("UserAgreementLink", h.a), v = p.a.a("PrivacyLink", h.a);
			var E = () => a.a.createElement(x, null, a.a.createElement(f, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(y, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(v, {
					href: "".concat(s.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				O = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				j = n.n(k),
				A = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				S = n("./src/reddit/controls/OutboundLink/index.tsx");
			const N = /\[(.+?)\]\((.+?)\)/g,
				_ = e => {
					const t = e.split(N);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, a] = t.slice(s, s + 3);
						n.push(e), n.push([a, r])
					}
					return n
				};
			var P = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, _)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = A.e.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return a.a.createElement(S.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/ContentGate/index.m.less"),
				R = n.n(M);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", R.a), W = p.a.div("Container", R.a), H = p.a.div("Description", R.a), V = p.a.div("PrivateSubredditDetails", R.a), K = p.a.div("PrivateSubredditDescription", R.a), q = p.a.h3("PrivateSubredditName", R.a), G = p.a.a("Link", R.a), z = p.a.wrapped(T.k, "LinkRouterButton", R.a), Y = p.a.wrapped(T.j, "LinkButton", R.a), J = p.a.wrapped(T.n, "SecondaryLinkRouterButton", R.a), Z = p.a.wrapped(T.m, "SecondaryLinkButton", R.a), Q = p.a.wrapped(z, "GoHomeLinkButton", R.a), X = p.a.img("Image", R.a), $ = p.a.img("ImagePlaceholder", R.a), ee = p.a.wrapped(z, "LeftLinkRouterButton", R.a), te = p.a.wrapped(Y, "LeftLinkButton", R.a), ne = p.a.wrapped(Z, "SecondaryLeftLinkButton", R.a), se = p.a.wrapped(J, "SecondaryLeftLinkRouterButton", R.a), re = p.a.h3("Title", R.a), ae = p.a.div("PageBody", R.a), ie = p.a.div("QuarantineMessageWrapper", R.a), oe = Object(c.c)({
				isLoggedIn: F.H,
				origin: L.l,
				user: F.i
			}), ce = Object(I.t)(), de = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: i,
					location: o,
					origin: c,
					pageLayer: u,
					quarantineRequiresEmail: p,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: g,
					setNSFWPreference: x,
					subredditDescription: f,
					subredditName: y,
					user: v
				} = e, E = () => {
					i ? x() : Object(l.k)(), window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(re, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", y)], {
							hk: "2lyDwB"
						})), a.a.createElement(H, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(U, null, v ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(d.a)(o, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), v ? a.a.createElement(z, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Z, {
							href: Object(d.a)(o, c)
						}, D._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(re, null, n === B.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(H, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(U, null, a.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Z, {
							onClick: E
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(re, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), f && f.length && a.a.createElement(V, null, a.a.createElement(q, null, "r/", y), a.a.createElement(K, null, a.a.createElement("div", null, f))), a.a.createElement(H, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(U, null, v ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(y)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(d.a)(o, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(z, {
							to: "/"
						}, v ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case B.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(re, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(H, null, D._("This community is {=quarantined}", [D._param("=quarantined", a.a.createElement(G, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, g ? a.a.createElement(C.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? a.a.createElement(O.a, {
							html: h
						}) : b || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(U, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(U, null, a.a.createElement(se, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Y, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(U, null, a.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Z, {
								onClick: t
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(v, r, p)));
					case B.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(re, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", y)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(H, null, e ? a.a.createElement(P, {
							linkClassName: R.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(U, null, a.a.createElement(z, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(U, null, a.a.createElement(z, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(re, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(H, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(U, null, v && a.a.createElement(m.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", a.a.createElement(G, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(re, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(H, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(U, null, a.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(U, null, a.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(U, null, a.a.createElement(z, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(de(Object(o.i)(e => a.a.createElement(W, null, a.a.createElement("div", null, a.a.createElement(ae, null, le(e))), a.a.createElement(E, null)))))
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e(0).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				i = Object(r.a)(a);
			t.a = i
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				x = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				y = x.a.wrapped(d.c, "StyledTooltip", g.a),
				v = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.db)(e),
					userIsSuspended: b.N
				});
			t.a = Object(i.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return a.a.createElement(u.l, {
					className: t,
					disabled: l || d,
					onClick: () => o(c),
					onMouseEnter: r,
					onMouseLeave: i,
					id: f,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? a.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				p = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				x = n.n(g);
			const f = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(o.e)({
						kind: h.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class y extends a.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.O)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(m.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(m.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(m.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? a.a.createElement("div", {
						className: x.a.banner
					}, a.a.createElement("button", {
						className: x.a.closeContainer,
						onClick: this.closeBanner
					}, a.a.createElement(b.a, {
						className: x.a.close
					})), a.a.createElement(p.a, {
						className: x.a.postIcon
					}), a.a.createElement("div", {
						className: x.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", " ".concat(e.displayText, " "))], {
						hk: "3ZioIj"
					})), a.a.createElement("div", {
						className: x.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), a.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), a.a.createElement("div", {
						className: x.a.buttonWrapper
					}, a.a.createElement(l.j, {
						className: x.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = f(Object(c.c)(y))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				o = n.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(o.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(o.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? o.a.bodyHidePadding : o.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_23HWOAAvtr9XUARUICwS1l",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs",
				button2020: "r3XKG_J-drDr2MfDhoOXH"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/hooks/useButtons2020.ts"),
				m = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				p = n("./src/reddit/selectors/downToChat.ts"),
				b = n("./src/reddit/selectors/experiments/downToChat.ts"),
				h = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				g = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(i.c)({
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(p.c)(e, n.id)
				}
			}), y = Object(a.b)(f, e => ({
				startChatting: t => e(Object(c.i)(t))
			}));
			t.a = y(Object(d.c)(e => {
				const t = Object(u.a)(),
					n = () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					{
						headerButton: s,
						isEnabled: a,
						isDownToChatExperimentEnabled: i
					} = e;
				if (!a || !i) return null;
				const c = x._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return t ? r.a.createElement(l.q, {
					className: g.a.button2020,
					text: c,
					Icon: s ? m.a : void 0,
					onClick: n,
					redditStyle: !0
				}) : r.a.createElement(l.i, {
					className: Object(o.a)(g.a.button, s ? g.a.headerButton : ""),
					redditStyle: !0,
					onClick: n
				}, s && r.a.createElement(m.a, {
					className: Object(o.a)(g.a.chatIcon)
				}), r.a.createElement("span", {
					className: Object(o.a)(g.a.buttonCaption)
				}, c))
			}))
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundAnimationStyles: "nu9ZkGwD7hyrRLI6Isf0L",
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				AvatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				avatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				Avatar: "_368cN6FwbMRDo7PzTz7IsF",
				avatar: "_368cN6FwbMRDo7PzTz7IsF",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				CloseButton: "_32Qext59XJHMV7WLlayaa",
				closeButton: "_32Qext59XJHMV7WLlayaa",
				Close: "_1KqEjgaeL1FeIc48mzjBo4",
				close: "_1KqEjgaeL1FeIc48mzjBo4",
				Counter: "_1I9s8rY01sj6dSMpZ120Pu",
				counter: "_1I9s8rY01sj6dSMpZ120Pu"
			}
		},
		"./src/reddit/components/DownToChatBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/icons/svgs/DownToChatAvatar/index.tsx"),
				p = n("./src/reddit/selectors/downToChat.ts"),
				b = n("./src/reddit/selectors/experiments/downToChat.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				x = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				f = n.n(x);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = o.a.wrapped(m.a, "Avatar", f.a), E = o.a.div("AvatarContainer", f.a), O = o.a.wrapped(u.a, "Close", f.a), C = o.a.button("CloseButton", f.a), k = o.a.div("Counter", f.a), j = o.a.p("Description", f.a), A = o.a.div("Footer", f.a), w = o.a.h1("Title", f.a), S = o.a.div("Container", f.a), N = Object(i.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(h.y)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(p.b)(e, n.id)
				}
			}), _ = Object(a.b)(N, e => ({
				dismissBanner: t => e(Object(d.h)(t)),
				fetchDownToChatAvailability: t => e(Object(d.j)(t))
			}));
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.onCloseButtonClick = () => {
						const {
							subreddit: e,
							dismissBanner: t
						} = this.props, {
							isDismissed: n
						} = this.state;
						n || (this.setState({
							isDismissed: !0
						}), t(e.id))
					}, this.state = {
						isDismissed: !1
					}
				}
				componentDidMount() {
					const {
						isDownToChatExperimentEnabled: e,
						subreddit: t,
						fetchDownToChatAvailability: n
					} = this.props;
					e && n(t.id)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						fetchDownToChatAvailability: t,
						subreddit: n,
						isDownToChatExperimentEnabled: s
					} = this.props;
					e.subreddit.id !== n.id && s && t(e.subreddit.id)
				}
				render() {
					const {
						accountsActive: e,
						isDownToChatExperimentEnabled: t,
						subreddit: n,
						isEnabled: s
					} = this.props, {
						isDismissed: a
					} = this.state;
					return t && s && !a ? r.a.createElement(S, null, r.a.createElement(E, null, r.a.createElement(v, null)), r.a.createElement(w, null, y._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), r.a.createElement(j, null, y._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), r.a.createElement(A, null, r.a.createElement(g.a, {
						subreddit: n
					}), e ? r.a.createElement(k, null, y._("{viewingCount} Online", [y._param("viewingCount", Object(c.b)(e))], {
						hk: "LsWtb"
					})) : null), r.a.createElement(C, {
						onClick: this.onCloseButtonClick
					}, r.a.createElement(O, null))) : null
				}
			}
			t.a = _(Object(l.c)(P))
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PowerupsLevel2PerksBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PowerupsLevel2PerksBanner").then(n.bind(null, "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", a)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", a)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const x = g.a.div("PrimaryText", h.a),
				f = g.a.div("SecondaryText", h.a),
				y = g.a.div("MainContentWrapper", h.a),
				v = g.a.div("MainContent", h.a),
				E = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				O = g.a.wrapped(m.k, "SubmitLink", h.a),
				C = g.a.img("SnooImg", h.a),
				k = g.a.div("EmptyHomepage", h.a),
				j = e => {
					switch (e) {
						case d.O.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.O.TOP:
						case d.O.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				A = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = j(n);
					return o.a.createElement(v, null, o.a.createElement(x, null, (e => {
						switch (e) {
							case d.O.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.O.TOP:
							case d.O.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", a()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!r && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, null, j(n)), o.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				w = () => o.a.createElement(v, null, o.a.createElement(C, {
					src: "".concat(c.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(x, null, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), o.a.createElement(O, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => o.a.createElement(k, null, o.a.createElement(E, {
				isLoading: !1,
				layout: u.g.Classic
			}), o.a.createElement(y, null, e.subreddit ? o.a.createElement(A, e) : o.a.createElement(w, null))), "Component", h.a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: n
					} = this.state, a = n ? i.a.createElement(m, {
						src: o.a.assetPath + t
					}) : i.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a))
				}
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", a)
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceVotingBanner").then(n.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = c.a.wrapped(u.a, "Planet", h.a),
				x = c.a.div("SubredditIcon", h.a),
				f = c.a.div("PositionedImage", h.a),
				y = c.a.div("HeaderContent", h.a),
				v = c.a.div("HeaderContainer", h.a),
				E = c.a.span("HeaderText", h.a),
				O = c.a.wrapped(a.a, "HeaderUrl", h.a),
				C = c.a.span("Container", h.a),
				k = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (s) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const u = !!a && !!o && "left" === s,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						k = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + k, "px");
					return r.a.createElement(C, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(O, {
						className: e.className,
						to: e.url
					}, r.a.createElement(v, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(y, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(n, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), r.a.createElement(E, {
						style: {
							paddingTop: 32 === k ? "4px" : "14px"
						}
					}, t)), r.a.createElement(f, {
						className: Object(i.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!a,
							[h.a.hoverPositionedImage]: !!a && !!o
						}),
						style: Object.assign(Object.assign({}, c), {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = k
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				i = n.n(a);
			const o = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: i.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === a.b.Popular,
				c = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				u = e => {
					let t, n, i, u, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let f, y;
					return d(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), u = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/all", m = a.c[a.b.All]) : o(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, i = l(""), u = b.displayText, m = b.url, y = h && h.subscribersCount, f = h && h.currentlyViewingCount), Object.assign({
						snooBackground: i,
						description: n,
						titleText: u,
						url: m,
						subscribersCount: y,
						subscribersText: g,
						currentlyViewingText: x,
						currentlyViewingCount: f
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(o.a.Title, o.a.TitleShifted)
				}, r.a.createElement(c, {
					snooBackground: n
				}), r.a.createElement("div", {
					className: o.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: o.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				o = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", o.a),
				l = c.a.div("TextWrapper", o.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, o.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: o.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: o.a.title
				}, c), i && r.a.createElement("div", {
					className: o.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const g = a.a.createElement(u.a, {
					className: h.a.icon
				}),
				x = Object(o.c)({
					subreddit: m.B,
					subredditAboutInfo: m.y
				}),
				f = Object(i.b)(x);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					i = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return a.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: g,
					subtitle: a.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", a.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? a.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : i, " ", a.a.createElement(l.a, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "i", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				c = n.n(o),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const m = Object(i.c)({
				consumers: e => e.jsApi
			});
			class p extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: s
							} = t,
							r = u(t, ["className", "consumers"]);
						l.a.publish(d.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(m, {})(p),
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(a.b)(() => Object(i.a)(x, h.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const y = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(a.b)(() => Object(i.a)(y, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var E = Object(a.b)(() => Object(i.c)({
					subreddit: g.T
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				O = n("./src/reddit/selectors/posts.ts");
			var C = Object(a.b)(() => Object(i.c)({
				post: O.N,
				subredditOrProfile: O.ab,
				isModerator: (e, t) => {
					const n = Object(O.ab)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var k = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(O.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(O.ab)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var j = Object(a.b)(() => Object(i.c)({
				post: O.N,
				subredditOrProfile: O.ab,
				isModerator: (e, t) => {
					const n = Object(O.ab)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var A = Object(a.b)(() => Object(i.c)({
				subreddit: g.T
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var w = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(g.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var S = Object(a.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.T)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/LayerEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				layerCanvas: "_3FsXXcIhVTVryfADMRfvfS"
			}
		},
		"./src/reddit/components/LayerEmbed/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/config.ts"),
				o = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				c = n("./node_modules/query-string/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const m = Object(d.a)(e => {
				let {
					backgroundUrl: t,
					baseUrl: n,
					width: s,
					height: a,
					frameRef: i,
					options: o
				} = e, d = n + "/static/layermaker/";
				if (o) {
					const e = Object(c.stringify)(o, {
						skipNull: !0
					});
					e.length && (d += "?".concat(e))
				}
				return t && (d += "#".concat(encodeURIComponent(t))), r.a.createElement("iframe", {
					ref: i,
					style: {
						width: s,
						height: a
					},
					src: d
				})
			});
			var p = e => {
					var {
						onClose: t
					} = e, n = u(e, ["onClose"]);
					const [a, i] = Object(s.useState)(!1), c = () => i(!1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(m, l({}, n, {
						withOverlay: !0,
						onOverlayClick: () => i(!0)
					})), a && r.a.createElement(o.a, {
						titleText: "Close Layer maker",
						bodyText: "Are you sure you want to discard all your changes?",
						primaryButtonText: "Back to drawing",
						onPrimaryAction: c,
						secondaryButtonText: "Yes, discard",
						onSecondaryAction: t,
						onClose: c
					}))
				},
				b = n("./src/reddit/components/LayerEmbed/index.m.less"),
				h = n.n(b),
				g = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const x = e => {
				let {
					baseUrl: t,
					subredditId: n
				} = e;
				const c = Object(s.useRef)(null),
					d = Object(s.useRef)(null),
					l = Object(a.d)(e => e.user.session),
					u = Object(s.useCallback)(() => {
						l && [c, d].forEach(e => {
							var t, n;
							null === (n = null === (t = e.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage({
								action: "Layers.injectAuthHeaders",
								payload: {
									headers: {
										Authorization: "bearer ".concat(l.accessToken)
									},
									expires: new Date(l.expires).getTime()
								}
							}, i.a.layersUrl)
						})
					}, [l, c, d]),
					[m, b] = Object(s.useState)(!1),
					[x, f] = Object(s.useState)(),
					[y, v] = Object(s.useState)({}),
					[E, O] = Object(s.useState)([594, 628]),
					[C, k] = Object(s.useState)(""),
					[j, A] = Object(s.useState)(!1),
					w = () => A(!1),
					S = Object(s.useCallback)(e => {
						var t, n;
						c.current && e.data && e.data.layerEmbedHeight && (c.current.style.height = e.data.layerEmbedHeight + 8 + "px");
						const {
							action: s,
							payload: r
						} = e.data;
						if ("string" == typeof s && s.startsWith("layers.")) {
							if ("layers.openLayerMaker" === s) {
								const {
									backgroundUrl: e
								} = r, t = g(r, ["backgroundUrl"]);
								return f(e), v(t), void b(!0)
							}
							if ("layers.closeLayerMaker" === s) return b(!1);
							if ("layers.resizeLayerMaker" !== s) {
								if ("layers.refreshAuth" !== s) return "layers.reportLayer" === s ? (k(r.postUrl), void A(!0)) : void(null === (n = null === (t = c.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e.data, "*"));
								u()
							} else {
								const {
									width: e,
									height: t
								} = r;
								O([e, t])
							}
						}
					}, [c, u, b, f, O]);
				Object(s.useEffect)(() => (window.addEventListener("message", S), () => window.removeEventListener("message", S)), [S]), Object(s.useEffect)(u, [u]);
				const [N, _] = E, P = t + "/static/client/?platform=desktop&subreddit=".concat(n);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("iframe", {
					id: "layersEmbed",
					ref: c,
					className: h.a.layerCanvas,
					src: P
				}), m && r.a.createElement(p, {
					frameRef: d,
					backgroundUrl: x,
					baseUrl: t,
					onClose: () => {
						var e, t;
						b(!1), null === (t = null === (e = c.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
							action: "layers.closeLayerMaker"
						}, "*")
					},
					width: N,
					height: _,
					options: y
				}), j && r.a.createElement(o.a, {
					withOverlay: !0,
					onOverlayClick: w,
					titleText: "Report layer",
					bodyText: "Please use the Report menu on the Post",
					primaryButtonText: "Go to post",
					onPrimaryAction: () => {
						window.open(C), A(!1)
					},
					secondaryButtonText: "Cancel",
					onSecondaryAction: w,
					onClose: w
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, n),
					style: Object(o.c)(s, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(c.i, "PrimaryButton", m.a),
				h = p.a.wrapped(i.o, "ModalText", m.a);
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === o.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return r.a.createElement(i.d, null, r.a.createElement(i.h, null, r.a.createElement(l.a, null, r.a.createElement(i.p, null, this.props.titleText), r.a.createElement(d.a, {
						onClick: this.props.onClose
					}, r.a.createElement(i.b, null)))), r.a.createElement(i.k, null, r.a.createElement(h, null, this.props.bodyText)), r.a.createElement(i.f, null, r.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), r.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(a.a)(g)
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				titleRow: "ewR4vxWiJWGeWBdmzw6xS",
				barRow: "_1u97iAB8jvIzM_2sl3sjGu",
				track: "_19jmSuCu8wb_2oUOO1Ksr7",
				progress: "_1kpFqrDgv8X9yOZp129xkr",
				icon: "_1SSPWxztrUgxbJZ-XoxKNd"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json": function(e) {
			e.exports = JSON.parse('{"v":"5.7.1","fr":30,"ip":0,"op":40,"w":626,"h":626,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_3","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_5","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_6","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_7","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_8","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[715.167,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":-0.4,"op":23.6,"st":-0.4,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[736.722,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.8,"op":34.8,"st":13.8,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Pre-comp 4","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306.5,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.2,"op":40.2,"st":13.2,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[196.056,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4,"op":28,"st":4,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Pre-comp 6","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.833,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":15.8,"op":39.8,"st":15.8,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.167,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":31.8,"st":4.8,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[814.944,370.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":11.8,"op":41.8,"st":11.8,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[919.611,250.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.2,"op":28.2,"st":4.2,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[557.389,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":8.6,"op":35.6,"st":8.6,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[83.167,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":6.6,"op":30.6,"st":6.6,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[648.722,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":5.8,"op":26.8,"st":5.8,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1040.056,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16,"op":40,"st":16,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.167,190.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":12.8,"op":39.8,"st":12.8,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.944,270.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":34.8,"st":4.8,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.611,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16.2,"op":40.2,"st":16.2,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[293.389,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":2.6,"op":29.6,"st":2.6,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"1/Confetti_2.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[406.452]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,34,0],"to":[0,118.333,0],"ti":[0,-118.333,0]},{"t":24,"s":[78,744,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"3/Confetti_2.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[80.333,32,0],"to":[0,122.667,0],"ti":[0,-122.667,0]},{"t":21,"s":[80.333,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[150,150,100]},{"t":21,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":21,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"4/Confetti_2.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[75,37,0],"to":[0,121.333,0],"ti":[0,-121.333,0]},{"t":27,"s":[75,765,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_4","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"5/Confetti_2.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.333,31,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[77.333,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_5","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"6/Confetti_2.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[76.667,35,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[76.667,761,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_6","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"7/Confetti_2.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77,35,0],"to":[0,120.333,0],"ti":[0,-120.333,0]},{"t":27,"s":[77,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_7","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"8/Confetti_2.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.667,37,0],"to":[0,118,0],"ti":[0,-118,0]},{"t":30,"s":[77.667,745,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[150,150,100]},{"t":30,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":30,"st":0,"bm":0}]},{"id":"comp_8","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"9/Confetti_2.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,35,0],"to":[0,120,0],"ti":[0,-120,0]},{"t":24,"s":[78,755,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_9","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"10/Confetti_2.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78.667,28,0],"to":[0,123.333,0],"ti":[0,-123.333,0]},{"t":27,"s":[78.667,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"all anim","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[313,313,0],"ix":2},"a":{"a":0,"k":[562.5,562.5,0],"ix":1},"s":{"a":0,"k":[56,56,100],"ix":6}},"ao":0,"w":1125,"h":1125,"ip":0,"op":39,"st":0,"bm":0}],"markers":[]}')
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				title: "_11_vLMByyp2z23bapR4owd",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/helpers/trackers/powerups.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				h = n("./src/reddit/selectors/gold/powerups.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				O = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				C = n("./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less"),
				k = n.n(C);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var A = e => {
					const {
						className: t,
						powerups: n
					} = e, {
						tier: s,
						count: a,
						tiersInfo: i
					} = n, o = (i[s] || i[s - 1]).powerupsCost;
					if (!o) return null;
					const c = Math.min(o, a) / o;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: k.a.titleRow
					}, r.a.createElement("span", null, j._("Powerups", null, {
						hk: "DrcXp"
					})), r.a.createElement("span", null, a, "/", o)), r.a.createElement("div", {
						className: k.a.barRow
					}, r.a.createElement("div", {
						className: k.a.track
					}), r.a.createElement("div", {
						className: k.a.progress,
						style: {
							width: "".concat(100 * c, "%")
						}
					}, r.a.createElement(O.a, {
						className: k.a.icon
					}))))
				},
				w = n("./node_modules/lottie-web/build/player/lottie.js"),
				S = n.n(w),
				N = n("./node_modules/react-motion/lib/react-motion.js"),
				_ = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json"),
				I = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				T = n("./src/reddit/models/Gold/Powerups/index.ts"),
				B = n("./src/reddit/components/UserIcon/index.tsx"),
				L = n("./src/reddit/controls/InternalLink/index.tsx"),
				F = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				M = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				R = n.n(M);
			var D = function(e) {
					const {
						className: t,
						supporter: n
					} = e, {
						score: s,
						supporterInfo: a
					} = n, i = a ? a.name : I.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [I.fbt._plural(s)], {
						hk: "8kyEI"
					}).toString(), o = a && a.icon.url ? a.icon.url : void 0, c = !!a && a.profile.isNsfw, d = s === T.b ? O.a : F.a, l = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: R.a.userIconContainer
					}, r.a.createElement(B.a, {
						userName: i,
						iconUrl: o,
						className: R.a.userIcon,
						isNSFW: c
					})), r.a.createElement("h4", {
						className: R.a.name
					}, i));
					return r.a.createElement("div", {
						className: Object(_.a)(t, R.a.container)
					}, a ? r.a.createElement(L.a, {
						className: R.a.user,
						to: "/user/".concat(i, "/")
					}, l) : r.a.createElement("div", {
						className: R.a.user
					}, l), r.a.createElement("div", {
						className: R.a.counter
					}, r.a.createElement(d, {
						className: R.a.powerupIcon
					}), s))
				},
				U = n("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				W = n.n(U);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), V = 100, K = 302, q = 40, G = e => "".concat(e.lastSupportedAt, "__").concat(e.score), z = (e, t) => ({
				key: G(e),
				data: {
					supporter: e,
					isInitial: t
				}
			}), Y = () => ({
				width: K,
				height: Object(N.spring)(0)
			}), J = () => ({
				height: 0,
				width: 0,
				motionProgress: 0
			}), Z = e => {
				e && !e.children.length && S.a.loadAnimation({
					container: e,
					renderer: "svg",
					loop: !1,
					autoplay: !0,
					animationData: P,
					rendererSettings: {
						hideOnTransparent: !0
					}
				})
			};
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: e.supporters.slice(0, e.maxSupporters || V).map(e => z(e, !0))
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement("div", {
						className: Object(_.a)(W.a.container, e)
					}, r.a.createElement(N.TransitionMotion, {
						willLeave: Y,
						willEnter: J,
						styles: this.state.items.map(e => Object.assign(Object.assign({}, e), {
							style: {
								width: Object(N.spring)(K),
								height: Object(N.spring)(q),
								motionProgress: Object(N.spring)(1)
							}
						}))
					}, e => r.a.createElement(r.a.Fragment, null, e.map(e => {
						const t = !e.data.isInitial && 1 === e.style.motionProgress;
						return r.a.createElement("div", {
							className: W.a.item,
							key: e.key,
							style: {
								zIndex: t ? 100 : "unset"
							}
						}, t && r.a.createElement("div", {
							className: W.a.animation,
							ref: Z
						}), r.a.createElement("div", {
							className: W.a.itemCropper,
							style: Object.assign({}, e.style)
						}, r.a.createElement(D, {
							supporter: e.data.supporter
						})))
					}))))
				}
				static getDerivedStateFromProps(e, t) {
					const n = t.items;
					return {
						items: e.supporters.slice(0, e.maxSupporters || V).map(e => n.some(t => t.key === G(e)) ? z(e, !0) : z(e, !1))
					}
				}
			}
			var X = r.a.memo(Q),
				$ = n("./src/reddit/components/PowerupsSidebar/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(o.c)({
				currentUser: x.i,
				powerups: h.f,
				subreddit: g.T,
				topSupporters: h.g,
				userPowerupsData: h.l
			}), se = Object(p.c)(e => {
				const {
					className: t,
					currentUser: n,
					powerups: s,
					subreddit: o,
					topSupporters: p,
					userPowerupsData: b
				} = e, h = Object(a.c)(), g = Object(i.a)();
				if (!s || 1 === s.tiersInfo.length || !o) return null;
				const x = !!(null == b ? void 0 : b.freeCount);
				return r.a.createElement(f.a, null, r.a.createElement(y.a, {
					className: t,
					title: te._("Powerups", null, {
						hk: "DrcXp"
					})
				}, r.a.createElement("div", {
					className: ee.a.container
				}, r.a.createElement("div", {
					className: ee.a.titleGroup
				}, r.a.createElement("h2", {
					className: ee.a.title
				}, te._("Powerup and unlock perks for {subreddit name}", [te._param("subreddit name", o.displayText)], {
					hk: "2gDqtV"
				})), r.a.createElement("button", {
					className: ee.a.perksButton,
					onClick: () => {
						g(Object(d.d)()), h(n ? Object(m.h)(c.a.ECON_POWERUPS_MARKETING) : Object(u.h)())
					}
				}, te._("Show Perks", null, {
					hk: "3TgZRL"
				}))), r.a.createElement("div", {
					className: ee.a.group
				}, r.a.createElement("h3", {
					className: ee.a.subTitle
				}, te._("Community heroes", null, {
					hk: "1hGdba"
				})), r.a.createElement(A, {
					className: ee.a.progress,
					powerups: s
				}), !!(null == p ? void 0 : p.length) && r.a.createElement(X, {
					supporters: p,
					className: ee.a.heroes,
					maxSupporters: 50
				})), r.a.createElement("div", {
					className: ee.a.group
				}, r.a.createElement(v.i, {
					className: ee.a.button,
					onClick: () => {
						g(Object(d.d)()), h(Object(l.b)())
					}
				}, x ? te._("Apply Your Free Powerup", null, {
					hk: "3HJ66L"
				}) : te._("Become a Hero", null, {
					hk: "3IZNw3"
				})), x && r.a.createElement("div", {
					className: ee.a.premiumDescription
				}, r.a.createElement("div", {
					className: ee.a.premiumIconWrapper
				}, r.a.createElement(E.a, {
					className: ee.a.premiumIcon
				})), r.a.createElement("span", null, te._("Premium gives you 1 free Powerup", null, {
					hk: "3moHy5"
				})))))))
			});
			t.a = Object(b.b)(Object(a.b)(ne)(se))
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/LRUCache/index.ts"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				l = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				u = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				b = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = n.n(b),
				g = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				x = n.n(g);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				let {
					className: t
				} = e;
				const n = Object(o.d)(p.b) ? x.a.loading : x.a.noise;
				return r.a.createElement("div", {
					className: Object(c.a)(t, x.a.container, x.a.placeholder, x.a.large, h.a.largeAndMediumPostStyles)
				}, r.a.createElement(u.a, {
					className: x.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: x.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: x.a.title
				}, f._("Top broadcast", null, {
					hk: "HADCh"
				}))), r.a.createElement("div", {
					className: x.a.body
				}, r.a.createElement("div", {
					className: x.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(x.a.thumbnail, n)
				})))))
			};
			var v = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === m.g.Classic ? r.a.createElement(d.b, {
					className: Object(c.a)(t, x.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === m.g.Compact ? r.a.createElement(l.a, {
					className: Object(c.a)(t, x.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(y, {
					className: t
				})
			};
			const E = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: n
					} = e;
					return r.a.createElement(v, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit~reddit-components-MediumPost"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var O = e => r.a.createElement(E, e),
				C = n("./src/reddit/helpers/trackers/rpan.ts");
			const k = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340,
				j = new a.a(20),
				A = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						n = j.get(t);
					if (n) return n;
					const s = w(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: k(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(C.z)()),
								render: t => {
									let {
										className: n
									} = t;
									return r.a.createElement(O, {
										className: n,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: s
						};
					return j.set(t, a), a
				},
				w = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				f = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				C = n.n(O),
				k = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = n.n(k);
			const A = e => e.type === y.f.Spoiler,
				w = Object(h.t)();
			t.a = w(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: a,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: y,
					shouldOpenPost: O,
					showSubredditMeta: k = !0,
					showSubredditName: w,
					subredditOrProfile: S
				} = e, N = h && h.preview && h.preview.url || void 0, _ = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", I = O && P || y && Object(o.a)("/search", {
					q: y.rawQuery,
					source: _
				}) || P, T = y ? y.subredditInfo && y.subredditInfo.icon : S && S.icon.url, B = y ? y.subredditInfo && y.subredditInfo.displayText : S && (S.displayText || S.name), L = h ? h.flair.filter(A) : [], F = h ? h.score : 0, M = h ? h.numComments : 0, R = h && h.isSponsored, D = Object(E.a)(e).body, U = "linear-gradient(\n      ".concat(Object(r.g)(D, .2), ",\n      ").concat(Object(r.g)(D, .3), ",\n      ").concat(Object(r.g)(D, .4), ",\n      ").concat(Object(r.g)(D, .6), ",\n      ").concat(Object(r.g)(D, .8), ",\n      ").concat(D, "\n    )"), W = i.a.createElement("div", {
					id: a,
					className: Object(c.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!N
					})
				}, i.a.createElement(g.a, {
					to: I
				}, i.a.createElement("div", {
					className: Object(c.a)(j.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(E.a)(e).body, N || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, R && i.a.createElement("div", {
					className: j.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), i.a.createElement("div", {
					className: Object(c.a)(j.a.innerContainer, C.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, i.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? i.a.createElement("div", {
					className: Object(c.a)(j.a.description, n)
				}, L.length > 0 && i.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: L,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : i.a.createElement("div", {
					className: j.a.spacer
				}), k && T && B && i.a.createElement(x.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: T || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !k && h && i.a.createElement("div", {
					className: j.a.metaLine
				}, w && B && i.a.createElement("span", {
					className: j.a.meta
				}, Object(f.c)(B)), i.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "1Jm6il"
				})), i.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "311aXY"
				})))))));
				return R ? i.a.createElement(p.a, {
					post: h
				}, W) : W
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(o);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: o
				} = e, d = {
					[c.a["m-card"]]: o
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(o.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: "placeholder-post-".concat(t)
			}, r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/lodash/random.js"),
				o = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/BannerAd/index.tsx"),
				b = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/helpers/adCount/index.ts"),
				y = n("./src/reddit/helpers/trackers/ads.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/selectors/platform.ts"),
				O = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				C = n.n(O),
				k = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/lessComponent.tsx");
			const A = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				w = Object(u.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(f.a)(n, r, s)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(E.r)(e) === k.Bb.SUBREDDIT || Object(E.r)(e) === k.Bb.COMMENTS
				}),
				S = Object(l.b)(w),
				N = j.a.wrapped(p.a, "BannerAd", C.a),
				_ = j.a.wrapped(x.a, "ThemedWidget", C.a),
				P = j.a.div("SidebarAdPlaceholder", C.a),
				I = (e, t, n) => !!n && (!(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && (t === k.c.BELOW_THE_FOLD || t === k.c.ABOVE_THE_FOLD && m.a.dfpRefreshAtfSlotTestSubreddits.has(e.toLowerCase()))),
				T = (e, t, n) => {
					let s = "";
					return t && (s += "overlay-"), s += "sidebar-".concat(e), null != n && (s += "-".concat(n)), s
				},
				B = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(v.G)(e.media) && e.media.content)),
				L = e => !!e && e.isBlank,
				F = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				M = Object(g.c)(class extends d.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: n,
							redditStyle: s
						} = this.props;
						return n !== e.className || s !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= m.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(y.d)(e, t, n))
					}
					render() {
						const e = o()(0, F.length - 1),
							{
								img: t,
								href: n
							} = F[e],
							{
								className: s,
								placement: r,
								redditStyle: a,
								removeSidebarSpacer: i
							} = this.props,
							c = i ? d.a.Fragment : h.a;
						return d.a.createElement(c, null, d.a.createElement(_, {
							className: s,
							contentOnly: !0,
							redditStyle: a
						}, d.a.createElement(b.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						})))
					}
				});
			class R extends d.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: n,
						isOverlay: r,
						placementIndex: a,
						refreshKey: i,
						listingName: o,
						placement: c,
						sizes: l,
						position: u,
						redditStyle: m,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: g,
						isSubredditOrCommentsPage: x,
						removeSidebarSpacer: f
					} = this.props, y = s.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), v = f ? d.a.Fragment : h.a;
					return p || t || !B(n) && g ? d.a.createElement(v, null, d.a.createElement(_, {
						className: e,
						contentOnly: !0,
						redditStyle: m
					}, d.a.createElement(P, {
						"data-before-content": y
					}))) : b ? d.a.createElement(M, {
						className: e,
						redditStyle: m,
						placement: c,
						removeSidebarSpacer: f
					}) : B(n) ? d.a.createElement(v, null, d.a.createElement(A, {
						post: n,
						refreshKey: i,
						listingName: o,
						placement: c,
						placementIndex: a
					})) : d.a.createElement(v, null, d.a.createElement(_, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: m
					}, L(n) && d.a.createElement(A, {
						post: n,
						refreshKey: i,
						listingName: o,
						placement: c,
						placementIndex: a
					}), d.a.createElement(N, {
						id: T(c, r, a),
						isRefreshableAd: I(o, c, x),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: c,
						listingName: o,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: u,
						dataBeforeContent: y
					})))
				}
			}
			t.a = S(R)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const p = Object(i.t)();
			t.a = p(Object(a.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(o.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					a = Object(d.z)(e) || Object(c.a)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: r && !a,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: i
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: a
				} = e, i = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !n && t && a ? r.a.createElement(l.a, u({
					forceHouseAd: s
				}, i)) : null
			}))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				y = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = n.n(y),
				E = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = u.a.div("BladeContainer", v.a), k = u.a.wrapped(h.a, "CloseIcon", v.a), j = u.a.div("LoadingTitleContainer", v.a), A = u.a.div("LoadingNavContainer", v.a), w = u.a.div("ShortLoadingNav", v.a), S = u.a.wrapped(b.a, "ThemedChevron", v.a), N = e => {
				var t = E(e, []);
				return i.a.createElement(C, null, i.a.createElement(k, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, O._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(j, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingTitle, t.isLoading && v.a.loading)
				})), i.a.createElement(A, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(A, null, i.a.createElement(w, null), i.a.createElement(S, null)), i.a.createElement(A, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(A, null, i.a.createElement(w, null), i.a.createElement(S, null)), i.a.createElement(A, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)))))
			}, _ = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(c.c)({
				isEditing: x.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.j
			});
			t.a = Object(o.b)(P)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(_, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const i = s.a.section("FormPage", a.a),
				o = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				g = s.a.div("FormItem", a.a),
				x = s.a.h3("FormElementTitle", a.a),
				f = s.a.div("FormElementDescription", a.a),
				y = s.a.div("FormElementError", a.a),
				v = s.a.div("FormElementSubGroup", a.a),
				E = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3RAaeGnzROhVYLF2fmshH",
				closeIcon: "_3RAaeGnzROhVYLF2fmshH",
				ThemedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				themedChevron: "_2M_5xv3fWesOuUt2gytq6R",
				Button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				button: "_3Rt3ZY4ojMg7wfI9k69nvr",
				TertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				tertiaryButton: "_1K4F8XF0kX4Wn5JczKdGNw",
				SubFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				subFormTitle: "_2Mcs0_1b4khVpvd3VoPwgO",
				SecondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				secondaryButton: "_3eCD81J-e6itJCgpouLk7F",
				DeleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				deleteButton: "_3qK8hxcissqDUqh0hdhKpA",
				ModalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				modalBody: "NI1TKCw2eJdZ2OUDbjnH7",
				ModalHeader: "bLHAeXh7YjdFXThswBfW4",
				modalHeader: "bLHAeXh7YjdFXThswBfW4",
				ModalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				modalTitle: "_2JAYII4pHjv6tUdk_Nw86K",
				ModalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				modalMain: "_3sUbdYy2TxbnpDYjBKbQXg",
				ModalText: "_11keK7OntunlhHWXBYXlpv",
				modalText: "_11keK7OntunlhHWXBYXlpv",
				ModalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				modalFooter: "_20VE_S1Gf-ls6PlYBoW-gD",
				DisabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				disabledOverlay: "_14F_la6Xncrsnpa6o4LPO",
				ToggleInput: "_12tgaX8PtYIF1972W0C17O",
				toggleInput: "_12tgaX8PtYIF1972W0C17O",
				selected: "_3jtpy3ShATQhbYUePIhv4C"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleInput/index.tsx"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/StyledComponents/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = i.a.wrapped(l.a, "CloseIcon", m.a),
				h = i.a.wrapped(d.a, "ThemedChevron", m.a),
				g = i.a.wrapped(o.i, "Button", m.a),
				x = i.a.wrapped(o.o, "TertiaryButton", m.a),
				f = i.a.div("SubFormTitle", m.a),
				y = i.a.wrapped(o.l, "SecondaryButton", m.a),
				v = i.a.wrapped(x, "DeleteButton", m.a),
				E = (i.a.section("ModalBody", m.a), i.a.header("ModalHeader", m.a), i.a.h2("ModalTitle", m.a), i.a.div("ModalMain", m.a), i.a.p("ModalText", m.a), i.a.footer("ModalFooter", m.a), e => r.a.createElement(c.a, p({}, e, {
					className: Object(a.a)(m.a.ToggleInput, {
						[m.a.selected]: !!e.selected
					})
				})));
			i.a.div("DisabledOverlay", m.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Q
			}));
			var s = n("./node_modules/lodash/orderBy.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/reddit/actions/chat/subredditChannel.ts"),
				p = n("./src/reddit/actions/chat/toggle.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/trackers/chat.ts"),
				E = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				O = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				C = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = n("./src/reddit/icons/svgs/GroupChat/index.tsx"),
				j = n("./src/reddit/icons/svgs/Key/index.tsx"),
				A = n("./src/reddit/models/SubredditChannel/index.ts"),
				w = n("./src/reddit/selectors/chat.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/subredditChannel.ts"),
				_ = n("./src/reddit/components/SubredditChannelList/index.m.less"),
				P = n.n(_);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = d.a.wrapped(h.g, "ModalFormItem", P.a), B = d.a.wrapped(y.i, "PrimaryButton", P.a), L = d.a.wrapped(h.o, "ModalText", P.a), F = d.a.a("ItemLink", P.a), M = d.a.p("Detail", P.a), R = d.a.p("DescText", P.a), D = d.a.div("Title", P.a), U = d.a.div("Header", P.a), W = d.a.wrapped(O.a, "ChatIcon", P.a), H = d.a.wrapped(C.a, "PlanetIcon", P.a), V = d.a.wrapped(E.a, "Pencil", P.a), K = d.a.wrapped(k.a, "Group", P.a), q = d.a.wrapped(j.a, "Key", P.a), G = d.a.wrapped(g.b, "SubredditIcon", P.a), z = d.a.button("EditButton", P.a), Y = d.a.button("ShowAllLink", P.a), J = d.a.span("ChannelName", P.a), Z = d.a.div("HeaderText", P.a);
			var Q;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Q || (Q = {}));
			const X = Object(c.c)({
					isCollectionReady: N.e,
					isModerator: w.e,
					selectedSubreddit: S.T,
					shouldRequestCollection: N.f,
					subredditChannels: N.a
				}),
				$ = Object(o.b)(X, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						toggleModal: () => e(Object(b.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(b.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(b.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, n) => e(Object(p.c)({
							channelId: t,
							subredditName: n
						})),
						onSelectChannel: t => e(Object(m.m)({
							channelId: t
						}))
					}
				});
			class ee extends i.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const n = r()(t, ["name"]);
						return e ? n.slice(0, e) : n
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: n,
						onChatLinkClick: s
					} = this.props;
					s(t, n.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = A.a, {
						channelId: n,
						channelState: s
					} = e, {
						Widget: r,
						Modal: a
					} = Q, {
						parentContext: i,
						sendEvent: o
					} = this.props;
					return i === r && s === t ? o(Object(v.c)(n)) : i === r ? o(Object(v.e)(n)) : i === a && s === t ? o(Object(v.a)(n)) : i === a ? o(Object(v.b)(n)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(v.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: n,
							onAddChannel: s,
							toggleEditModal: r,
							selectedSubreddit: a,
							onSelectChannel: o,
							toggleCreateModal: c
						}
					} = this;
					if (!t) return null;
					const d = this.displayChannelsList();
					return i.a.createElement("div", {
						className: e
					}, d.length ? i.a.createElement(T, null, d.map((e, t) => i.a.createElement(F, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, i.a.createElement(D, {
						key: "item-link-title-".concat(t)
					}, i.a.createElement(W, {
						key: "item-link-icon-".concat(t)
					}), a.icon.url ? i.a.createElement(G, {
						key: "subreddit-icon-".concat(t),
						iconUrl: a.icon.url
					}) : i.a.createElement(H, {
						key: "planet-".concat(t),
						isSmall: !0
					}), i.a.createElement(U, {
						key: "item-header-".concat(t)
					}, i.a.createElement(Z, {
						key: "item-header-text-".concat(t)
					}, i.a.createElement(M, {
						key: "item-detail-".concat(t)
					}, a.name, I._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [I._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), i.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === A.c.Public ? i.a.createElement(K, null) : i.a.createElement(q, null), e.name)), n && i.a.createElement(z, {
						key: "button-".concat(t),
						onClick: t => {
							o(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(v.l)())
						}
					}, i.a.createElement(V, null)))), e.description && i.a.createElement(R, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && i.a.createElement(Y, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, I._("See more", null, {
						hk: "lhTm0"
					}))) : n ? i.a.createElement(T, null, i.a.createElement(L, null, I._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), i.a.createElement(B, {
						onClick: s || c
					}, I._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : i.a.createElement(T, null, i.a.createElement(L, null, I._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(x.c)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				x = n("./src/reddit/models/ApiRequestState/index.ts"),
				f = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				y = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(y);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class C extends a.a.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: n,
							inTopBar: s
						} = e,
						r = O(e, ["subredditId", "className", "inTopBar"]),
						i = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? i.push(v.a.emptyEditableIconInTopBar) : i.push(v.a.editableIcon, v.a.emptyEditableIcon), a.a.createElement("span", E({}, r, {
						className: Object(c.a)(...i)
					}), s ? a.a.createElement(g.a, {
						className: v.a.emptyUploadButton
					}) : a.a.createElement(h.a, {
						className: v.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const k = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: i,
						inTopBar: o,
						src: d
					} = e;
					return a.a.createElement("span", {
						className: v.a.iconContainer
					}, a.a.createElement("img", {
						alt: s,
						onClick: i,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[v.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				j = Object(o.c)({
					isLoading: f.b
				});
			class A extends a.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(x.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? a.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = a.a.createElement(a.a.Fragment, null, a.a.createElement(k, E({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, a.a.createElement(C, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : a.a.createElement(a.a.Fragment, null, a.a.createElement(C, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), a.a.createElement(m.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? a.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(j, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(A))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = n("./src/reddit/components/SubredditNav/index.m.less"),
				g = n.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const y = (e, t, n) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: n
				}),
				v = e => {
					var {
						children: t,
						isActive: n,
						isTopBannerVariant: s
					} = e, a = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", x({
						className: y(g.a.subNavTitle, n, s)
					}, a), r.a.createElement("span", null, t), r.a.createElement(b.b, {
						className: g.a.navDropdownIcon
					}))
				},
				E = e => {
					var {
						className: t,
						isActive: n,
						to: s,
						isTopBannerVariant: a
					} = e, i = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = y(g.a.navLink, n, a);
					return s ? r.a.createElement(m.a, x({
						className: o,
						to: s
					}, i)) : r.a.createElement("a", x({
						className: o
					}, i))
				},
				O = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement(m.a, x({
						className: y(g.a.navLink, n)
					}, s))
				},
				C = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement("a", x({
						className: y(g.a.subNavLink, n)
					}, s))
				},
				k = e => {
					var {
						className: t
					} = e, n = f(e, ["className"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavContainer, t)
					}, n))
				},
				j = e => {
					var {
						className: t,
						isOpen: n
					} = e, s = f(e, ["className", "isOpen"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavList, t, {
							[g.a.mIsOpen]: n
						})
					}, s))
				},
				{
					fbt: A
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var S = Object(c.t)()(Object(a.b)(w, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: n
					} = e;
					return n ? r.a.createElement(O, {
						className: g.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(c.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, A._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				N = n("./src/lib/linkMatchers/index.ts");
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(k, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var P = _;
			const I = e => {
				const t = e.url && Object(N.g)(N.e, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? r.a.createElement(E, {
					href: I(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(P, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(C, {
					key: "".concat(e.text, "-").concat(I(e)),
					role: "listitem",
					href: I(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				B = n("./src/lib/constants/index.ts");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const F = Object(c.t)(),
				M = [B.Bb.SUBREDDIT, B.Bb.COMMENTS, B.Bb.COLLECTION_COMMENTS],
				R = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && M.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = F(Object(a.b)(R, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: i
					} = e, o = s && !n;
					return r.a.createElement(E, {
						to: t,
						isActive: o,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), i())
						}
					}, L._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				U = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				W = n("./src/higherOrderComponents/makeAsync.tsx");
			var H = Object(W.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = n("./src/reddit/constants/postLayout.ts"),
				K = n("./src/reddit/constants/screenWidths.ts"),
				q = n("./src/reddit/models/Theme/index.ts"),
				G = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const Y = Object(U.a)(e => {
				var {
					className: t,
					children: n,
					isTopBannerVariant: s
				} = e, a = z(e, ["className", "children", "isTopBannerVariant"]);
				const i = Object(G.a)(a);
				return r.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(q.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var J = e => r.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(H, null))),
				Z = n("./src/reddit/constants/wiki.ts"),
				Q = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, a = !!s && !!s.meta && s.meta.name === B.Bb.SUBREDDIT_WIKI, i = "wiki/".concat(Z.i), o = t.endsWith("/") ? t + i : "".concat(t, "/").concat(i);
				return r.a.createElement(E, {
					isActive: a,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(Q.g)())
				}, X._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(d.a)("spPolls", S),
				te = Object(c.t)(),
				ne = Object(i.c)({
					layout: c.N,
					widget: l.f
				}),
				se = Object(a.b)(ne);
			t.a = te(se(Object(o.c)(e => r.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => r.a.createElement(T, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = n("./src/reddit/components/IdCard/async.tsx"),
				x = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/components/IdCard/helpers.ts"),
				y = e => !Object(x.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				v = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				O = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				C = n("./src/reddit/components/SidebarContainer/index.tsx"),
				k = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				A = n("./src/lib/classNames/index.ts"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/actions/tooltip.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/constants/modals.ts"),
				P = n("./src/reddit/controls/Dropdown/index.tsx"),
				I = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				T = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = n("./src/reddit/selectors/moderatorPermissions.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				M = n.n(F);
			const R = u.a.wrapped(P.a, "_Dropdown", M.a),
				D = u.a.wrapped(T.a, "Pencil", M.a),
				U = u.a.a("DropdownRow", M.a),
				W = Object(w.a)(R),
				H = e => "SubredditChannels--Menu--".concat(e),
				V = Object(d.c)({
					isModerator: B.g,
					isDropdownOpen: (e, t) => Object(L.b)(H(t.subredditId))(e)
				}),
				K = u.a.wrapped(e => {
					const {
						className: t,
						isModerator: n,
						onOpenDropdown: r,
						isDropdownOpen: a,
						toggleModal: i
					} = e, c = H(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": a,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Chat menu", null, {
							hk: "4DfuTV"
						}),
						className: Object(A.a)(M.a.top, t),
						id: c,
						onClick: () => r(c)
					}, o.a.createElement(I.a, null), o.a.createElement(W, {
						isOpen: a,
						tooltipId: c,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(U, {
						onClick: i
					}, n ? s.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : s.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(D, null))))
				}, "OverflowMenu", M.a);
			var q = Object(c.b)(V, e => ({
					onOpenDropdown: t => e(Object(S.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(N.i)(_.a.MANAGE_SUBREDDIT_CHAT))
				}))(K),
				G = n("./src/reddit/components/SubredditChannelList/index.tsx"),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				J = n("./src/reddit/helpers/trackers/chat.ts"),
				Z = n("./src/reddit/selectors/subreddit.ts"),
				Q = n("./src/reddit/selectors/subredditChannel.ts"),
				X = n("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				$ = n.n(X);
			const ee = u.a.div("Wrapper", $.a),
				te = Object(d.c)({
					isCollectionReady: Q.e,
					isModerator: B.g,
					isWhitelistedSubreddit: Z.e,
					shouldRequestCollection: Q.f,
					subredditChannels: Q.a
				});
			let ne;
			class se extends o.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				componentDidMount() {
					this.trackViewEvent()
				}
				trackViewEvent() {
					this.props.subredditId !== ne && (ne = this.props.subredditId, this.props.sendEvent(Object(J.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: n,
						subredditChannels: s
					} = this.props, r = s && s.length;
					return !(!t || !n || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, n = o.a.createElement(G.b, {
						maxChannels: 3,
						parentContext: G.a.Widget,
						subredditId: e
					});
					return t ? n : this.isEnabled() ? o.a.createElement(k.a, null, o.a.createElement(Y.a, {
						className: this.props.className,
						title: s.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(q, {
							subredditId: e
						})
					}, o.a.createElement(ee, null, n))) : null
				}
			}
			var re = Object(c.b)(te)(Object(z.c)(se)),
				ae = n("./src/lib/makeListingKey/index.ts"),
				ie = n("./src/reddit/actions/subreddit.ts"),
				oe = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ce = n("./src/reddit/controls/Button/index.tsx"),
				de = n("./src/reddit/helpers/name/index.ts"),
				le = n("./src/reddit/helpers/overlay/index.ts"),
				ue = n("./src/reddit/selectors/experiments/topPosts.ts"),
				me = n("./src/reddit/selectors/posts.ts"),
				pe = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const be = .99;
			class he extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= be && t(n)
					}
				}
				render() {
					return o.a.createElement(pe.a, {
						threshold: be,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var ge = he,
				xe = n("./src/lib/isUrl/index.ts"),
				fe = n("./src/lib/prettyPrintNumber/index.ts"),
				ye = n("./src/reddit/components/FlairWrapper/index.tsx"),
				ve = n("./src/reddit/components/Thumbnail/index.tsx"),
				Ee = n("./src/reddit/models/Flair/index.ts"),
				Oe = n("./src/reddit/models/Subreddit/index.ts"),
				Ce = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				ke = n.n(Ce);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = e => e.type === Ee.f.Nsfw || e.type === Ee.f.Spoiler, we = Object(d.c)({
				post: me.N,
				subredditOrProfile: me.ab
			});
			class Se extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, i = Object(xe.a)(Object(ve.b)(a)), c = t.flair.filter(Ae);
					return o.a.createElement("div", {
						className: Object(A.a)(ke.a.container, e, {
							[ke.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: ke.a.mainLine
					}, i && o.a.createElement("div", {
						className: ke.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(ve.a, a)), o.a.createElement("div", {
						className: Object(A.a)(ke.a.title, !i && ke.a.titleSingle),
						title: t.title
					}, c.length > 0 && o.a.createElement(ye.a, {
						className: ke.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: ke.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: ke.a.meta
					}, Object(Oe.g)(r) ? Object(de.d)(r.displayText || r.name) : Object(de.c)(r.displayText || r.name)), o.a.createElement("span", {
						className: ke.a.meta
					}, je._({
						"*": "{score} points",
						_1: "1 point"
					}, [je._plural(t.score, "score", Object(fe.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: ke.a.meta
					}, je._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [je._plural(t.numComments, "numComments", Object(fe.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Ne = Object(c.b)(we, e => ({
					openLightbox: t => e(Object(le.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Se),
				_e = n("./src/reddit/components/SidebarPostList/index.m.less"),
				Pe = n.n(_e);
			const {
				fbt: Ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = 10, Be = 2, Le = Object(d.a)(me.T, e => e.filter(e => !e.isSponsored)), Fe = Object(d.c)({
				posts: Le
			});
			class Me extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return o.a.createElement(ge, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Ne, {
							className: Object(A.a)(Pe.a.smallPost, a),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(x.a)(Object(de.g)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: a,
						redditStyle: i,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === a.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(ue.a)(d),
						p = Object(ue.b)(d),
						b = m || p,
						h = a.slice(l * u, (l + 1) * u),
						[g, ...f] = h,
						y = b ? h.slice(0, Be) : f.slice(0, Be),
						v = b ? h.slice(Be) : f.slice(Be);
					return o.a.createElement("div", {
						className: Object(A.a)(Pe.a.container, t, {
							[Pe.a.redditStyle]: i
						})
					}, !b && o.a.createElement(ge, {
						onPostVisible: r,
						postId: g.id
					}, o.a.createElement(oe.a, {
						backgroundWrapperClassName: Pe.a.largePostBackgroundWrapper,
						descriptionClassName: Pe.a.largePostDescription,
						innerContainerClassName: Pe.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(de.g)(n)),
						trendingPost: g
					})), y.map(this.renderSmallPost), e, v.map(this.renderSmallPost), c && o.a.createElement(ce.o, {
						className: Pe.a.SeeMore,
						onClick: this.showMorePosts
					}, s || Ie._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Re = Object(c.b)(Fe, e => ({
					openPost: t => e(Object(le.a)(t.permalink))
				}))(Me),
				De = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ue = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				We = n("./src/reddit/selectors/discoveryUnit.ts"),
				He = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Ve = n.n(He);
			const Ke = 10,
				qe = Object(d.a)((e, t) => t.subredditName, e => Object(ae.a)(e, l.O.TOP, {
					t: l.Sb.WEEK
				})),
				Ge = Object(d.c)({
					discoveryUnit: e => Object(We.c)(e, {
						unitName: Ue.j
					}),
					listingKey: qe,
					posts: (e, t) => {
						const n = qe(e, t);
						return Object(me.T)(e, {
							listingKey: n
						})
					},
					subreddit: Z.B
				});
			class ze extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(De.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(De.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(De.C)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: a,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					if (0 === a.length) return null;
					const d = i,
						l = a.length > Ke;
					return o.a.createElement(Y.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(Re, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Ve.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ye = Object(c.b)(Ge, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(ie.r)({
							sort: l.O.TOP,
							subredditName: n,
							t: l.Sb.WEEK
						}))
					}
				})(Object(z.c)(ze)),
				Je = n("./src/config.ts"),
				Ze = n("./src/lib/localStorageAvailable/index.ts"),
				Qe = n("./src/higherOrderComponents/asModal/index.tsx"),
				Xe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$e = n("./src/reddit/controls/TextButton/index.tsx"),
				et = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: tt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class nt extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Xe.d, null, o.a.createElement(Xe.h, null, o.a.createElement(et.a, null, o.a.createElement(Xe.p, null, tt._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement($e.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Xe.b, null)))), o.a.createElement(Xe.k, null, o.a.createElement(Xe.o, null, tt._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Xe.f, null, o.a.createElement(Xe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, tt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Xe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, tt._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var st = Object(Qe.a)(nt),
				rt = n("./src/reddit/components/IdCard/Banner.tsx"),
				at = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				it = n("./src/reddit/constants/blade.ts"),
				ot = n("./src/reddit/controls/InternalLink/index.tsx"),
				ct = n("./src/reddit/helpers/localStorage/index.ts"),
				dt = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				lt = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				ut = n("./src/reddit/icons/svgs/Close/index.tsx"),
				mt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				pt = n("./src/reddit/selectors/activeModalId.ts"),
				bt = n("./src/reddit/selectors/structuredStyles.ts"),
				ht = n("./src/reddit/components/IdCard/index.m.less"),
				gt = n.n(ht),
				xt = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				ft = n.n(xt);
			const yt = "mod_onboarding_modal",
				vt = "mod_onboarding_widget",
				Et = Object(d.a)(pt.a, (e, t) => Object(B.a)(mt.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(bt.l)(e, {
					subredditId: t.subredditId
				}), (e, t, n) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Ot extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(ct.bb)(vt, !0, this.props.subredditId), this.props.sendEvent(Object(dt.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(dt.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(dt.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(dt.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(dt.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, a = e && !(t && n && s) && (!Object(Ze.a)() || !Object(ct.r)(vt, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(dt.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditName: a,
						toggleCloseMenuModal: i
					} = this.props;
					return this.state.visible ? o.a.createElement(Y.a, {
						className: Object(A.a)(ft.a.container, this.props.className)
					}, o.a.createElement(rt.a, {
						bannerBackgroundImage: "".concat(Je.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(ut.a, {
						className: ft.a.closeIcon,
						onClick: i
					}), Object(at.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)("url('".concat(Je.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(A.a)(gt.a.Description, ft.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: it.e.exportImport,
						className: ft.a.modHelpLink,
						target: "_blank"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(ot.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(it.c.NameAndIcon),
						className: ft.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(lt.a, {
						className: ft.a.checked
					}) : o.a.createElement(lt.a, {
						className: ft.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(ot.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(it.c.Banner),
						className: ft.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(lt.a, {
						className: ft.a.checked
					}) : o.a.createElement(lt.a, {
						className: ft.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(ot.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(it.c.Global),
						className: ft.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(lt.a, {
						className: ft.a.checked
					}) : o.a.createElement(lt.a, {
						className: ft.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(ce.n, {
						to: "/r/".concat(a, "?styling=true"),
						className: ft.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: ft.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === yt && o.a.createElement(st, {
						withOverlay: !0,
						toggleModal: i,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Ct = Object(c.b)(Et, (e, t) => {
					let {
						subredditId: n,
						subredditName: s
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(N.i)(yt))
					}
				})(Object(z.c)(Ot)),
				kt = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				jt = n("./src/reddit/constants/tracking.ts"),
				At = n("./src/reddit/selectors/seo/linksModule.ts"),
				wt = n("./src/reddit/selectors/telemetry.ts"),
				St = n("./src/telemetry/models/Subreddit.ts");
			const Nt = e => t => Object.assign(Object.assign({}, wt.defaults(t)), {
					action: jt.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				_t = e => t => n => Object.assign(Object.assign({}, wt.defaults(n)), {
					action: jt.c.CLICK,
					noun: Object(St.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Pt = Object(d.c)({
					communities: At.c
				});
			var It = Object(c.b)(Pt)(e => {
					const t = Object(z.b)();
					return e.communities && e.communities.length ? o.a.createElement(k.a, null, o.a.createElement(kt.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Nt,
						getSubscribeEventFactoryHandler: _t,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Tt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Bt = n("./src/reddit/featureFlags/index.ts"),
				Lt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ft = n("./src/reddit/models/Widgets/index.ts"),
				Mt = n("./src/reddit/selectors/communityFlairs.ts"),
				Rt = n("./src/reddit/constants/experiments.ts"),
				Dt = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const Ut = Object(Dt.a)(Rt.kb);
			var Wt = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				Ht = n("./src/reddit/selectors/listings.ts"),
				Vt = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Kt = n.n(Vt);
			const qt = 250,
				Gt = 270,
				zt = u.a.wrapped(C.a, "SidebarContainer", Kt.a),
				Yt = Object(d.c)({
					apiError: Ht.c,
					apiPending: Ht.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Mt.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Mt.c)(e, n)
					},
					isPredictionsEnabled: Ut,
					showGovernance: Bt.d.spPoints,
					showLeaderboard: Bt.d.spLeaderboard,
					showPowerups: Wt.a,
					showPredictionsLeaderboard: Z.N,
					widgets: Z.t
				}),
				Jt = Object(c.b)(Yt);
			class Zt extends i.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign(Object.assign({}, this.getPostFlairWidget()), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: Ft.d.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !a()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						isPredictionsEnabled: t,
						listingName: n,
						showGovernance: s,
						showLeaderboard: r,
						showPowerups: a,
						showPredictionsLeaderboard: i,
						subredditId: c,
						subredditName: d,
						topPostsVariant: u
					} = this.props;
					let x = 0;
					const f = Object(ue.a)(u),
						C = Object(ue.b)(u),
						A = Object(ue.c)(u),
						w = f || C;
					let S, N;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const _ = this.makeRelatedCommunitiesWidget(f, C),
						P = !f,
						I = C,
						T = o.a.createElement(O.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: x++,
							position: Lt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(zt, {
						className: e
					}, y(n) && o.a.createElement(g.a, {
						listingName: n
					}), o.a.createElement(p.a, {
						cardClassName: Kt.a.card,
						subredditId: c
					}), a && o.a.createElement(E.a, {
						subredditId: c
					}), t && i && o.a.createElement(m.a, {
						subredditId: c
					}), w && o.a.createElement(k.a, null, o.a.createElement(Ye, {
						subredditName: d,
						topPostsVariant: u
					}, o.a.createElement("div", {
						className: Kt.a.inFeedAd
					}, T))), w && _ && o.a.createElement(k.a, null, o.a.createElement(Tt.a, {
						subredditName: d,
						truncateThreshold: Gt,
						widget: _
					})), I && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(k.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: d,
							truncateThreshold: qt,
							widget: e
						}))
					}), o.a.createElement(Ct, {
						subredditId: c,
						subredditName: d
					}), s && o.a.createElement(b.a, {
						className: Kt.a.card,
						subredditId: c
					}), N && o.a.createElement(k.a, null, o.a.createElement(Tt.a, {
						subredditName: d,
						widget: N
					})), r && o.a.createElement(h.a, {
						className: Kt.a.card,
						subredditId: c,
						uniqueId: c
					}), o.a.createElement(v.g, {
						subredditId: c
					}), !w && T, o.a.createElement(It, {
						subredditId: c
					}), P && !I && S.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(k.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: d,
							truncateThreshold: A && n ? Gt : A ? qt : void 0,
							widget: e
						}))
					}), o.a.createElement(re, {
						subredditId: c
					}), o.a.createElement(j.a, {
						adComponent: o.a.createElement(O.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: x++,
							position: Lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = Jt(Zt)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/hooks/useButtons2020.ts"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(d),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const h = m.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = b(e, ["border", "small"]);
					return t ? a.a.createElement(i.i, p({}, s, {
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: n
						})
					})) : a.a.createElement(i.o, p({}, s, {
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", l.a),
				g = e => {
					var {
						border: t,
						small: n
					} = e, s = b(e, ["border", "small"]);
					return Object(o.a)() ? a.a.createElement(i.q, p({}, s, {
						priority: t ? i.b.Primary : i.b.Plain,
						className: Object(u.a)(s.className, l.a.is2020),
						size: n ? i.c.S : i.c.M
					})) : a.a.createElement(h, p({}, s, {
						border: t,
						small: n,
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: n
						})
					}))
				},
				x = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = m.a.wrapped(e => {
					var {
						border: t,
						small: n,
						buttonType: s
					} = e, r = b(e, ["border", "small", "buttonType"]);
					const o = x(s),
						c = Object(u.a)(r.className, {
							[l.a.isSmall]: n
						});
					return t ? a.a.createElement(i.l, p({}, r, {
						className: c
					}), o) : a.a.createElement(i.o, p({}, r, {
						className: c
					}), o)
				}, "UnsubscribeButton", l.a),
				y = e => {
					var {
						buttonType: t,
						border: n,
						small: s
					} = e, r = b(e, ["buttonType", "border", "small"]);
					return Object(o.a)() ? a.a.createElement(i.q, p({}, r, {
						priority: n ? i.b.Secondary : i.b.Plain,
						className: Object(u.a)(r.className, l.a.is2020),
						size: s ? i.c.S : i.c.M,
						text: x(t)
					})) : a.a.createElement(f, p({}, r, {
						border: n,
						small: s,
						buttonType: t,
						className: Object(u.a)(r.className, {
							[l.a.isSmall]: s
						})
					}))
				};
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: s = !1
					} = this.props, r = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(y, p({}, r, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(g, p({}, r, {
						id: n
					}), this.props.children, Object(c.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return a[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.S,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(o.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(o),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const l = a.a.div("WidgetBackground", c.a),
				u = a.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = n.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => a.a.createElement(b.a, {
					className: Object(d.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? a.a.createElement(x.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(S, j({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(g.o, {
					className: k.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(c.c)({
					hideNSFWPref: E.A
				}),
				S = Object(i.b)(w)(e => a.a.createElement("div", {
					className: k.a.communityItemContainer
				}, a.a.createElement(y.a, {
					widthRight: h.t
				}, a.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(f.a, {
					className: k.a.planetIcon,
					"data-redditstyle": !0
				})), a.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, a.a.createElement(o.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), a.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: k.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(l.b, {
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(x.a, {
					className: Object(d.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(g.o, {
					className: Object(d.a)(k.a.communityCta, {
						[k.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : a.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/helpers/trackers/postFlair.ts"),
				v = n("./src/reddit/models/Widgets/index.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = n.n(O);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const A = 129,
				w = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.g],
					url: e => Object(h.X)(e)
				}),
				S = Object(o.c)({
					subredditId: (e, t) => Object(E.G)(e, t.subredditName)
				}),
				N = Object(i.b)(S),
				_ = l.a.div("WidgetContent", C.a),
				P = e => {
					var {
						display: t,
						isFlairFilter: n,
						onMouseDown: s
					} = e, r = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(c.a)(C.a.StyledFlair, t === v.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: n,
							[C.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: s
					}, a.a.createElement(u.b, k({}, r, {
						className: C.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class I extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(y.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(y.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(y.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(y.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > A && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.o, {
						className: C.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(P, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? A : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: C.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(P, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, s = t.order, r = this.getFlairsFromIds(s), i = e && this.getSelectedFlair(r) || void 0, o = t.order.length > s.length || n && !i;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(_, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = w(N(Object(m.c)(I)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(g);
			const f = c.a.div("RuleShortName", x.a),
				y = c.a.div("RuleIndex", x.a),
				v = c.a.div("RuleTitle", x.a),
				E = c.a.div("RuleDescription", x.a),
				O = c.a.wrapped(d.a, "RawHTMLDisplay", x.a),
				C = {};
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === h.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !s(e) && !!r;
					return a.a.createElement(f, {
						className: Object(o.a)({
							[x.a.pointerCursor]: i
						}),
						onClick: s(e) || !r ? void 0 : n
					}, a.a.createElement(b.a, null, a.a.createElement(y, null, "".concat(e.humanIndex, ".")), a.a.createElement(v, null, "".concat(e.rule.shortName)), a.a.createElement("div", null, !s(e) && r && (t.isVisible ? a.a.createElement(p.a, {
						className: x.a.Chevron
					}) : a.a.createElement(m.a, {
						className: x.a.Chevron
					})))), t.isVisible && a.a.createElement(E, null, e.rule.descriptionRichText ? a.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: C
					}) : e.rule.descriptionHtml ? a.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? a.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return a.a.createElement(k, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => a.a.createElement(j, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Le
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				v = n.n(y);
			const E = (e, t, n) => {
					let s = {},
						r = {};
					s = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: r,
							textColor: a
						} = e;
						return t && (s = a = n, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(s),
							"--widget-button-color": "".concat(a || s)
						}
					})(e, t, n);
					const a = e.hoverState || e;
					if (a.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(a.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: i
						} = a;
						t && (e = i = n, s = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(s || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(i || e)
						}
					}
					return Object.assign(Object.assign({}, s), r)
				},
				O = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						n = Object(p.g)(p.e, t);
					return n ? n.url : e.url
				},
				k = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(h.a)(e).button;
					return r.a.createElement(d.l, {
						className: O(t),
						style: E(t, n, s)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => r.a.createElement(l.b, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(k, e)),
				A = m.a.wrapped(o.a, "RawHTMLDisplay", v.a);
			var w = Object(a.b)(() => Object(i.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: f.T
				}))(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(A, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/humanizeDate/index.ts"),
				_ = n("./src/reddit/controls/TextButton/index.tsx"),
				P = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				I = n.n(P);
			const T = 100,
				B = {
					isExpanded: !1
				},
				L = m.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				F = m.a.div("EventContainer", I.a),
				M = m.a.div("EventTitle", I.a),
				R = m.a.div("EventDate", I.a),
				D = m.a.div("EventLocation", I.a),
				U = m.a.div("EventDescription", I.a),
				W = m.a.wrapped(_.a, "ToggleDescription", I.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = B
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > T ? r.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, T), r.a.createElement(W, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(U, null, e.text)
				}
			}
			var V = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => r.a.createElement(F, {
					key: "".concat(n, "-").concat(t.title)
				}, r.a.createElement(M, null, t.titleHtml ? r.a.createElement(L, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(R, null, Object(N.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? "".concat(n, ":0").concat(s) : "".concat(n, ":").concat(s)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(D, null, t.locationHtml ? r.a.createElement(L, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					text: t.description
				})))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var G = Object(K.c)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const z = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(a.b)(z),
				J = (e, t, n) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(n, "</body>");
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Q = Y(Z),
				X = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = n.n(X);
			var ee = m.a.div("ImageFrame", $.a),
				te = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = n.n(te);
			var se = m.a.img("StyledImage", ne.a);
			class re extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						s = r.a.createElement(ee, null, r.a.createElement(se, {
							alt: S.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? r.a.createElement(l.b, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, s) : s
				}
			}
			var ae = re,
				ie = n("./src/config.ts"),
				oe = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = n("./src/lib/opener/index.ts"),
				de = n("./src/reddit/components/Flair/index.tsx"),
				le = n("./src/reddit/controls/InternalLink/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = n("./src/reddit/models/Flair/index.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = n.n(be);
			const ge = m.a.a("ExternalLink", he.a),
				xe = m.a.div("ModeratorListItem", he.a),
				fe = m.a.div("Username", he.a),
				ye = m.a.wrapped(de.b, "FlairComponent", he.a),
				ve = e => e.authorFlairType === me.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Ee = e => r.a.createElement(fe, null, "u/".concat(e)),
				Oe = m.a.wrapped(le.a, "InternalLink", he.a),
				Ce = m.a.div("LinkContainer", he.a),
				ke = Object(i.c)({
					userIsBanned: pe.eb
				});
			var je = Object(a.b)(ke)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: s
					} = e;
					return r.a.createElement(c.a, {
						styles: n.styles,
						title: S.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || s) && r.a.createElement(d.n, {
						className: he.a.MessageModsButton,
						rel: ce.b,
						target: ce.c.BLANK,
						to: "".concat(ie.a.redditUrl, "/message/compose?to=/r/").concat(t)
					}, r.a.createElement(ue.a, null), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !s ? r.a.createElement(r.a.Fragment, null, n.mods.map(e => r.a.createElement(xe, {
						key: e.name
					}, (e => r.a.createElement(oe.a, {
						to: "/user/".concat(e.name, "/")
					}, Ee(e.name)))(e), r.a.createElement(ye, {
						flair: ve(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Ce, null, r.a.createElement(Oe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : s ? r.a.createElement("div", {
						className: he.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(ge, {
						href: "".concat(ie.a.redditHelpUrl, "/hc/en-us/articles/360049499032"),
						rel: ce.b,
						target: ce.c.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: he.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(ge, {
						href: "".concat(ie.a.redditUrl, "/r/redditrequest"),
						rel: ce.b,
						target: ce.c.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ae = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				we = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ne = n.n(Se);
			const _e = m.a.div("WidgetContent", Ne.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Ne.a);
			var Ie = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(_e, null, r.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Te = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Be = e => r.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");

			function Le(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Ie;
						case "button":
							return w;
						case "subreddit-rules":
							return we.b;
						case "community-list":
							return G;
						case "calendar":
							return V;
						case "image":
							return ae;
						case "custom":
							return Q;
						case "post-flair":
							return Ae.a;
						default:
							return Be
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				l = n("./src/reddit/actions/survey/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/survey.ts"),
				f = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const C = O(),
				k = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: f.g,
					postsById: y.Y,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(y.K)(e, n, s, r)
					}),
					subredditsById: v.ab,
					viewportDataLoaded: E.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: x.b
				},
				j = Object(r.c)(k),
				A = (e, t) => {
					let {
						isFrontpage: n
					} = t;
					return {
						onBottomViewed: (t, n) => e(d.c(t, n)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							n && e(Object(o.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, n) => {
							e(c.t(t, n))
						},
						trackOnPostEnteredViewport: (t, n, s) => {
							e(c.F(t, s))
						},
						trackOnPostExitedViewport: (t, n, s, r) => {
							e(c.G(t, s, r))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				w = Object(s.b)(j, A, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					postClickEvent: (e, t, s) => Object(b.f)(e, t, s, n.listingKey, n.hostPostId, n.listingBelowVariant),
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(C(w(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(a.d([n], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				currentUser: b.i,
				flairStyleTemplate: d.R,
				hideNSFWPref: b.A,
				isActive: p.j,
				moderatorPermissions: u.i,
				modModeEnabled: d.P,
				post: p.N,
				showEditFlair: m.a,
				subredditOrProfile: p.ab,
				userIsOp: b.kb
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(i.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === c.a.upvoted ? Object(a.S)(n) : Object(a.q)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(a.Q)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, n), e), t), {
				onFlairChanged: n => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = n;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/controls/ButtonGroup/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_3pla8OO99AYPmtaUgA0RIb",
				option: "C5XHgdcrqGWMcZSRloJgg"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class a extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = n || s;
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
					}), !a && r.a.createElement("input", {
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
		"./src/reddit/controls/ToggleInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2uq1gh0F_Wl3Cb183l1njW"
			}
		},
		"./src/reddit/controls/ToggleInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/ToggleInput/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("input", {
				className: i.a.input,
				name: e.name,
				value: e.selected ? e.onValue : e.offValue,
				onClick: t => e.onChange(e.selected ? e.offValue : e.onValue),
				readOnly: !0
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, a = c(e, ["featureEnabled"]);
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/isFakeSubreddit/index.ts"),
				r = n("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, n, i, o) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: n,
					layout: r.b[t.prefs.layout]
				};
				return i && !Object(s.a)(i.name) && (c.subreddit = i.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = a, o && (c.position = o), c
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(o.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(o.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(o.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(a.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				x = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				i = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => Object.assign(Object.assign({}, r.defaults(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: Object.assign(Object.assign({}, r.subredditPowerups(e)), {
						freeCount: t,
						paidCount: n
					})
				}),
				i = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, a(t)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				o = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, a(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "view",
					noun: "post_upsell"
				}, a(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "click",
					noun: "post_upsell"
				}, a(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = (e, t) => n => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, a(n, e, t))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "z", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "w", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return B
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const o = (e, t) => {
					if (t) {
						const n = i.media(e, t.post.id),
							s = i.post(e, t.post.id),
							r = i.subreddit(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === a.a.LIVE ? n.type = "stream_live" : s === a.a.VOD ? n.type = "stream_vod" : s === a.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || n.chatState === r.f.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === a.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: i ? r.f.None : r.f.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, o(e)),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, o(e)),
				m = (e, t) => n => Object.assign(Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge"
				}, o(n, e)), {
					actionInfo: i.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t)
				}, d(n)), e && Object.assign({}, o(n, e))),
				b = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				h = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				g = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				x = (e, t, n) => s => Object.assign(Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: c(s, e, t)
				}, d(s)), o(s, e)), {
					actionInfo: i.actionInfo(s, {
						referralId: n
					})
				}),
				f = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				y = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				v = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t)
				}, d(n)), o(n, e)),
				E = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t)
				}, o(n, e)),
				O = e => t => {
					const n = Object(a.l)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, o(t, n))
				},
				C = (e, t, n) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n)
				}, o(s, t)),
				k = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t)
				}, d(n)),
				j = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t)
				}, o(t, e)),
				A = e => e => {
					const t = o(e);
					return Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(e),
						screen: i.screen(e)
					}, t)
				},
				w = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t)
				}, o(n, e)),
				S = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t)
				}, o(n, e)),
				N = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t)
				}, o(n, e)),
				_ = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t)
				}, o(n, e)),
				P = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t)
				}, o(n, e)),
				I = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t)
				}, o(n, e)),
				T = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t)
				}, o(n, e)), d(n)),
				B = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t)
				}, o(n, e)), d(n))
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "o", (function() {
				return j
			}));
			var s = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign(Object.assign({}, r.defaults(e)), {
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				o = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				u = c("revert_wiki_page"),
				m = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				f = c("add_wiki_subreddit_contributor"),
				y = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				E = c("unban_wiki_contributor"),
				O = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				k = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: C[e]
					})
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function a() {
				const {
					gqlContext: e
				} = Object(s.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc)), "GiftIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				i = n.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), r.a.createElement("g", null, r.a.createElement("g", {
				className: i.a.cls2
			}, r.a.createElement("path", {
				className: i.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), r.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), r.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), r.a.createElement("path", {
				className: i.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), r.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), r.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), r.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), r.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), r.a.createElement("path", {
				className: i.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), r.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), r.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), r.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), r.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), r.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), r.a.createElement("path", {
				className: i.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), r.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), r.a.createElement("path", {
				className: i.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), r.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), r.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), r.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), r.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), r.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), r.a.createElement("path", {
				className: i.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), r.a.createElement("path", {
				className: i.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), r.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), r.a.createElement("path", {
				className: i.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), r.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), r.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), r.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), r.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), r.a.createElement("path", {
				className: i.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				className: i.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), r.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), r.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), r.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), r.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), r.a.createElement("path", {
				className: i.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), r.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), r.a.createElement("g", {
				className: "cls10"
			}, r.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), r.a.createElement("path", {
				className: i.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), r.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), r.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), r.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			}))))
		},
		"./src/reddit/icons/svgs/GroupChat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, r.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Key/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.27 6.67c-.083-.122-.205-.234-.314-.35l-.325-.327-.445-.44a1.198 1.198 0 00-.912-.362h-.296l-.349.001h-.083l-.001.002a.072.072 0 01-.027.012c-.004-.002-.008-.007-.008-.02l.001-.014c-.013.02.034-.062.062-.112l.093-.166.375-.672.899-1.6c.27-.479.183-1.036-.216-1.383l-.457-.458-.18-.176L11.04.56l-.023-.022-.052-.037C10.9.45 10.868.393 10.816.34c-.067-.057-.144-.1-.204-.169a1.006 1.006 0 00-.232-.113 1.418 1.418 0 00-.522-.056l-.643.014-1.159.03-2.368.076C5.349.116 5.04.166 4.787.36c-.259.188-.4.466-.47.783l-.057.224-.032.138-.065.276-.127.55c-.163.713-.318 1.417-.464 2.107l-1.03 3.631a.728.728 0 00.175.696l.22.222c.555.556.735.737.77.768.134.127.31.197.493.197l1.016.002-1.354 3.55-.032.068-.056.128-.12.276a1.15 1.15 0 00-.1.453.985.985 0 00.222.406l.775.833c.133.145.273.219.403.279.064.024.118.057.211.053.086-.005.134-.03.205-.055a1.16 1.16 0 00.424-.276l.421-.424 1.086-1.061 1.078-1.069c.729-.728 1.476-1.486 2.236-2.269l1.15-1.192.58-.61.82-.868a1.227 1.227 0 00.323-.738 1.163 1.163 0 00-.219-.767z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M11.506 6.236c.056.056.95.933.988.998a.234.234 0 01-.029.289l-7.27 7.819a.093.093 0 01-.12.012c-.03-.024-.91-.914-.966-.969a.088.088 0 00.123-.007l7.27-7.819a.238.238 0 00.004-.323zM10.215.933c.103.101.925.913.964.969.05.072.062.17.012.257L8.873 6.152l-1.525-.003 2.879-4.953a.24.24 0 00-.012-.263zM6.28 8.513l-.366.962L4.2 9.47a.24.24 0 01-.164-.065c-.058-.053-.82-.82-.961-.962a.248.248 0 00.161.063l3.043.007z",
				fill: "#C18D42"
			}), r.a.createElement("path", {
				d: "M12.494 7.234c-.038-.065-.932-.942-.988-.998a.238.238 0 01-.005.323l.428.431c.179.18.185.469.015.656-1.507 1.655-4.446 4.856-6.483 7.09a.51.51 0 01-.695.057c-.202-.16-.396-.317-.55-.404a.086.086 0 01-.107-.004c.056.055.935.944.966.969a.093.093 0 00.12-.012l7.27-7.82a.234.234 0 00.03-.288zM11.178 1.902c-.038-.056-.86-.868-.963-.969a.24.24 0 01.012.263l-.054.092c.12.144.237.273.363.399.22.22.269.56.105.824C9.91 3.689 9.198 5 8.477 6.151h.396L11.19 2.16a.237.237 0 00-.013-.257zM4.434 9.266a.703.703 0 01-.47-.181c-.217-.196-.379-.336-.64-.579h-.087a.248.248 0 01-.161-.063c.142.142.903.909.96.962a.24.24 0 00.165.065l1.713.005.12-.314c-.483.103-1.067.106-1.6.105z",
				fill: "#DDBD37"
			}), r.a.createElement("path", {
				d: "M7.733 5.881c.007-.144.096-.49.195-.731l-.58 1 1.524.002c.287-.22.456-.354.532-.68-.533.1-1.134.264-1.671.41zM5.967 8.638c-.122.187-.374.51-.5.855.111.21.182.187.447-.018l.366-.962-.762-.003c.14.03.316.066.449.128z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M8.873 6.152l2.453.002a.243.243 0 01.178.08l.003.002a.238.238 0 01-.005.323l-7.27 7.819a.088.088 0 01-.122.007l-.003-.002a.083.083 0 01-.026-.102l1.833-4.806.366-.962-3.043-.007a.248.248 0 01-.161-.063L3.06 8.43c-.055-.06-.08-.145-.055-.231l1.99-7.012a.485.485 0 01.465-.352h4.556c.08 0 .145.036.188.09 0 0 .005.002.01.01a.24.24 0 01.012.262L7.347 6.15l1.526.002z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M3.523 7.14c-.075.238-.3.798-.094.938.2-.352 3.135-5.148 3.389-5.45.594-.703 2.217-.82 2.46-1.194.097-.151-.044-.253-.333-.253H5.657c-.444 0-.596.831-.696 1.151-.174.554-1.102 3.739-1.438 4.807zM10.943 6.595c.163-.19-.234-.207-.571-.207H6.475c-.47 0-.99.22-1.475.694H9.004c.987 0 1.711-.222 1.939-.487zM7.684 8.626c.033-.115.057-.247-.009-.35-.074-.116-.231-.145-.364-.128-.331.04-.602.283-.766.57-.164.285-.831 2.06-1.436 3.848.958-1.271 2.383-3.276 2.575-3.94z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.898 7.37a1.232 1.232 0 00-.133-.345c-.062-.125-.183-.22-.28-.325l-.305-.313-.216-.218-.046-.047c-.017-.016-.02-.026-.075-.06-.052-.028-.061-.064-.088-.095a.613.613 0 00-.08-.087 1.094 1.094 0 00-.486-.31c-.178-.063-.386-.058-.587-.057l-.122.001-.097.007c-.003 0-.006-.001-.007-.007a.04.04 0 01-.002-.01c.003-.006-.005.005.005-.013l.064-.113.126-.226 1.096-1.949a1.157 1.157 0 00-.187-1.416L11.562.89a1.126 1.126 0 00-.695-.328c-.132-.012-.269-.003-.403-.003l-.216.004-.43.009-.216.005h-.025L9.57.58 9.555.58 9.54.578 9.533.576s-.004 0-.026-.01L9.302.485l-.41-.163-.41-.163-.126-.052c-.39-.159-.829-.14-1.203.052l-.047.024-.381.2-.345.184-.15.08-.037.026c.027.008-.31.016-.514.024l-.87.03c-.188.02-.356.064-.513.162a1.03 1.03 0 00-.368.388c-.086.151-.133.34-.177.522l-.054.219-.038.163c-.199.855-.386 1.696-.56 2.518l-.996 3.507c-.074.27.001.558.194.752.4.405.892.902.967.964.138.12.317.185.5.185l1.413.004-1.107 3.522-.08.206-.078.197-.02.05-.01.025a.65.65 0 00.089.597l.006.009.046.052c.01.013.022.025.035.04l.23.271.065.074.097.107.199.217c.133.146.276.295.424.384a1.3 1.3 0 00.218.11c.07.029.18.036.26.019.144-.038.3-.1.461-.226.156-.133.307-.29.465-.438l.623-.58c.775-.72 1.578-1.48 2.402-2.273.824-.792 1.669-1.618 2.526-2.469l.645-.643.89-.899c.108-.109.192-.229.246-.346a1.162 1.162 0 00.089-.747z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M10.98 1.82a.27.27 0 00-.037-.323c.053.05.879.872.924.924a.272.272 0 01.03.317L9.728 6.472 8.28 6.47l2.701-4.65zM12.005 6.564s.878.864.917.917a.227.227 0 01-.018.296l-7.369 7.559a.145.145 0 01-.181.023c-.046-.03-.743-.739-.92-.92a.142.142 0 00.184-.02l7.369-7.56a.222.222 0 00.016-.293l.002-.002zM2.848 8.71l3.27.007-.287.915-2.066-.005a.283.283 0 01-.188-.069c-.08-.066-.841-.839-.938-.935V8.62a.28.28 0 00.21.089z",
				fill: "#A1000A"
			}), r.a.createElement("path", {
				d: "M9.728 6.472l2.17-3.734a.272.272 0 00-.03-.317 87.777 87.777 0 00-.925-.924c.078.083.101.211.037.323l-.151.26.496.507a.23.23 0 01.035.276L9.266 6.472h.462zM12.922 7.481a57.664 57.664 0 00-.917-.917l-.002.002a.222.222 0 01-.016.294l-.13.133.455.5a.23.23 0 01-.005.315l-6.543 6.73a.23.23 0 01-.327.002l-.473-.476-.346.354a.142.142 0 01-.183.021c.176.181.873.89.919.92a.145.145 0 00.181-.024l7.369-7.558c.085-.09.08-.211.018-.296zM5.9 9.408H4.236a.458.458 0 01-.323-.133l-.567-.564-.497-.001a.28.28 0 01-.209-.09v.003c.097.096.858.869.938.935.05.044.115.069.188.069l2.066.004.07-.223z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M8.28 6.47l1.449.002c.422-.26.53-.486.533-.826-.709 0-1.645.245-1.81.528l-.172.296zM6.118 8.717h-.097c-.227.264-.451.504-.6.913.137.137.222.12.41.002l.287-.915z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M12.003 6.566a.208.208 0 00-.179-.091L9.73 6.472l-1.45-.002 2.702-4.65a.271.271 0 00-.037-.323l-.002-.002a.268.268 0 00-.195-.083H4.85a.422.422 0 00-.406.305L2.567 8.334a.293.293 0 00.073.287.28.28 0 00.209.089l3.269.007-.287.915-1.458 4.64a.135.135 0 00.02.126v.002s.005.003.01.01l.03.027a.142.142 0 00.186-.018l7.368-7.56a.221.221 0 00.016-.293z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M12.036 6.542c-.05-.08-.157-.118-.237-.11l-.235-.003-.47-.002-.938.006-1.877.013v.048c.313.11.626.183.939.239.156.03.312.055.469.073a12.007 12.007 0 001.408.097c.127.007.255 0 .383-.003a5.377 5.377 0 00-.209.289c-.204.294-.394.6-.552.939l.034.033.745-.751.372-.376c.062-.068.124-.113.187-.2a.263.263 0 00-.019-.292zM5.729 13.054c-.175.133-.355.26-.523.4l-.182.146.164-.49c.082-.235.144-.476.217-.713.071-.238.14-.477.199-.719.127-.48.238-.966.331-1.458.096-.49.169-.987.205-1.496l-.046-.014-.907 2.836-.453 1.418-.219.711-.11.356-.037.123a.187.187 0 01.026-.022l.006-.003-.01.008-.023.02-.016.052c-.008.03-.022.057-.025.1a.176.176 0 00.036.112l-.006-.018.02.032c-.003 0-.005-.002-.006-.004l.005.006.03.027-.011-.027a.04.04 0 00.04.04l-.02-.005a.181.181 0 00.195.002c.057-.043.08-.08.123-.12l.007-.007.008.011c-.003.019-.007.035-.004.027l.007-.02.023.035v-.002l-.017-.05.003-.007.005-.013-.002-.005.006-.006.01-.025.005.01.174-.182.452-.468.904-.938-.034-.034c-.19.12-.371.245-.55.374zM4.656 2.063l.04-.26a.18.18 0 01.046-.11.202.202 0 01.088-.063c.013-.005.042-.007.062-.011.09-.015.18-.027.27-.045.182-.032.363-.07.547-.114v-.048l-.553-.002-.276-.002a.45.45 0 00-.458.299l-.078.267-.154.53-.613 2.119-.591 2.125-.296 1.063-.147.532c-.067.194.098.425.306.415V8.71a.228.228 0 01-.168-.149.186.186 0 01.02-.174c.082-.168.155-.338.234-.507.145-.341.288-.683.414-1.03.137-.342.245-.694.367-1.041.113-.35.215-.704.323-1.055l.28-1.067c.078-.36.172-.715.236-1.08.033-.18.072-.36.101-.544z",
				fill: "#FFB8B8"
			}), r.a.createElement("path", {
				d: "M9.533 7.506L6.789 6.76l2.596-5.347-1.619-.69-1.4.69L4.514 7.37l3.292.67-1.172 2.776 2.899-3.309z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M5.902 6.759l2.7-5.347-.951-.385L5.42 6.87l2.341.63-1.86-.742z",
				fill: "#CDA467"
			}), r.a.createElement("path", {
				d: "M4.514 7.37l1.852-5.958-.622-.208-1.23 6.165zM9.385 1.412L6.79 6.76l3.433-5.555-.837.208z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M6.534 1.593l-1.768 5.57.437-.24 2.178-5.719-.847.389zM9.124 7.6L5.9 6.76l1.195.61 1.163.23h.865zM8.453 7.866L7.144 9.992l.768-1.94.541-.186z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, r.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(o);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/sentry/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/localStorage.ts"),
				l = n("./src/graphql/operations/RecordCommunityAnswer.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = (e, t) => Object(u.a)(e, Object.assign(Object.assign({}, l), {
					variables: t
				}));

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				const n = e.answerOptions.map(e => e.id).filter(e => !t.includes(e)),
					s = t => e.answerOptions.find(e => e.id === t).text;
				return {
					taggingQuestion: e.questionText,
					taggingQuestionId: e.id,
					selectedAnswerIds: t,
					selectedAnswers: t.map(s),
					nonSelectedAnswerIds: n,
					nonSelectedAnswers: n.map(s)
				}
			}
			const b = e => () => ({
					source: "community_tagging",
					action: "view",
					noun: "verify_topics_module",
					raterTag: p(e)
				}),
				h = (e, t) => () => ({
					source: "community_tagging",
					action: "click",
					noun: "select_answer",
					raterTag: p(e, t)
				}),
				g = (e, t) => () => ({
					source: "community_tagging",
					action: "click",
					noun: "submit",
					raterTag: p(e, t)
				}),
				x = e => () => ({
					source: "community_tagging",
					action: "click",
					noun: "close",
					raterTag: p(e)
				});
			var f = n("./src/reddit/hooks/useGqlContext.ts");
			var y = n("./src/reddit/helpers/localStorage/index.ts");
			var v = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/components/StructuredStyles/StyledComponents/index.tsx"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				j = (n("./node_modules/core-js/modules/web.dom.iterable.js"), function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, r) {
							return "number" == typeof s || "string" == typeof s ? r ? "idx-" + r : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				}),
				A = (j(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: j()
					}
				}),
				w = A(),
				S = s.createContext(A()),
				N = function() {
					return s.useState((e = s.useContext(S), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || w) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				_ = function() {
					return N()[0].gen
				},
				P = n("./src/reddit/controls/ButtonGroup/index.m.less"),
				I = n.n(P);

			function T(e) {
				const {
					options: t,
					onChange: n = (() => {})
				} = e, a = _(), [i, o] = Object(s.useState)({});
				return r.a.createElement("div", {
					className: I.a.buttonGroup,
					role: "group"
				}, t.map(e => {
					let {
						text: s,
						id: c
					} = e;
					return r.a.createElement(r.a.Fragment, {
						key: c
					}, r.a.createElement("input", {
						type: "checkbox",
						id: a(c),
						name: a(c),
						className: I.a.checkbox,
						checked: !!i[c],
						onChange: () => (function(e) {
							const s = t.find(t => t.id === e),
								r = t.filter(e => e.isMutuallyExclusive),
								a = i[e];
							let c;
							if (s.isMutuallyExclusive) c = {
								[e]: !a
							};
							else {
								(c = Object.assign({}, i))[e] = !a;
								for (const e of r) c[e.id] = !1
							}
							o(c);
							const d = Object.keys(c).filter(e => c[e]);
							n(d)
						})(c)
					}), r.a.createElement("label", {
						htmlFor: a(c),
						className: I.a.option
					}, s))
				}))
			}
			var B = n("./src/reddit/controls/TextButton/index.tsx"),
				L = n("./src/reddit/components/CommunityTopicSurvey/index.m.less"),
				F = n.n(L);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function R(e) {
				const {
					questionId: t,
					questionText: n,
					answers: a,
					onClose: i
				} = e, [o, c] = Object(s.useState)([]);
				return r.a.createElement("div", {
					className: F.a.survey
				}, r.a.createElement(B.a, {
					className: F.a.closeButton,
					onClick: () => i(t)
				}, r.a.createElement(C.b, null), r.a.createElement("span", {
					className: F.a.closeText
				}, M._("Close", null, {
					hk: "4gbyAA"
				}))), r.a.createElement("h3", {
					className: F.a.title
				}, M._("Reddit Community Survey", null, {
					hk: "lNp7A"
				})), r.a.createElement("p", {
					className: F.a.question
				}, n), r.a.createElement(T, {
					options: a,
					onChange: function(n) {
						var s;
						c(n), null === (s = e.onSelect) || void 0 === s || s.call(e, t, n)
					}
				}), r.a.createElement(k.i, {
					className: F.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, o)
					},
					disabled: 0 === o.length
				}, M._("Submit", null, {
					hk: "7ztww"
				})))
			}
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function U(e) {
				const {
					questionId: t,
					questionText: n,
					answers: a,
					onClose: i,
					noSubmit: o = !1
				} = e, [c, d] = Object(s.useState)([]);
				return r.a.createElement("div", {
					className: F.a.survey
				}, r.a.createElement(B.a, {
					className: F.a.closeButton,
					onClick: () => i(t)
				}, r.a.createElement(C.b, null), r.a.createElement("span", {
					className: F.a.closeText
				}, D._("Close", null, {
					hk: "4gbyAA"
				}))), r.a.createElement("h3", {
					className: F.a.title
				}, D._("Reddit Community Survey", null, {
					hk: "lNp7A"
				})), r.a.createElement("p", {
					className: F.a.question
				}, n), r.a.createElement("div", {
					className: F.a.buttonGroup
				}, r.a.createElement(T, {
					onChange: function(n) {
						var s;
						d(n), null === (s = e.onSelect) || void 0 === s || s.call(e, t, n), o && e.onSubmit(t, n)
					},
					options: a.map(e => Object.assign(Object.assign({}, e), {
						isMutuallyExclusive: !0
					}))
				})), !o && r.a.createElement(k.i, {
					className: F.a.submitButton,
					redditStyle: !0,
					role: "submit",
					onClick: async function() {
						await e.onSubmit(t, c)
					},
					disabled: 0 === c.length
				}, D._("Submit", null, {
					hk: "7ztww"
				})))
			}

			function W(e) {
				var t;
				const {
					subredditId: n
				} = e, l = Object(v.a)(), u = Object(f.a)(), p = null !== (t = Object(a.d)(e => e.subreddits.questions[n])) && void 0 !== t ? t : [], C = Object(a.c)(), [k, j] = function(e, t) {
					let n;
					n = Object(y.o)(e);
					const [r, a] = Object(s.useState)(null != n ? n : t);
					return [r, function(t) {
						Object(y.Z)(e, t), a(t)
					}]
				}(d.f, []), [A, w] = Object(s.useState)(!1), S = function() {
					const [e, t] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						setTimeout(t, 1, !0)
					}, []), e
				}(), N = p.filter(e => {
					let {
						id: t
					} = e;
					return !k.includes(t)
				})[0];
				if (Object(s.useEffect)(() => {
						N && !A && l(b(N))
					}, [l, N, A]), A) return null;
				if (!S) return null;
				if (!N) return null;

				function _(e) {
					w(!0), j([...k, e])
				}
				async function P(e) {
					m(u(), {
						input: {
							questionId: e,
							answerIds: [],
							skip: !0
						}
					}).catch(), l(x(N)), _(e)
				}
				async function I(e, t) {
					await m(u(), {
						input: {
							questionId: e,
							answerIds: t,
							skip: !1
						}
					}), l(g(N, t)), _(e), C(Object(c.e)({
						text: i.fbt._("Thank you for your help!", null, {
							hk: "1asBUQ"
						}),
						kind: O.b.SuccessCommunityGreen
					}))
				}

				function T(e, t) {
					l(h(N, t))
				}
				switch (N.type) {
					case E.c.Multi:
						return r.a.createElement(R, {
							questionId: N.id,
							questionText: N.questionText,
							answers: N.answerOptions,
							onSubmit: I,
							onSelect: T,
							onClose: P
						});
					case E.c.SingleWithSubmit:
						return r.a.createElement(U, {
							questionId: N.id,
							questionText: N.questionText,
							answers: N.answerOptions,
							onSubmit: I,
							onSelect: T,
							onClose: P
						});
					case E.c.SingleNoSubmit:
						return r.a.createElement(U, {
							questionId: N.id,
							questionText: N.questionText,
							answers: N.answerOptions,
							onSubmit: I,
							onSelect: T,
							onClose: P,
							noSubmit: !0
						})
				}
				return o.c.captureException("Unknown SubredditQuestionType: ".concat(N.type)), null
			}
			var H = n("./src/config.ts"),
				V = n("./src/reddit/components/ContentSurvey/index.m.less"),
				K = n.n(V),
				q = n("./src/reddit/helpers/trackers/contentTag.ts"),
				G = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				z = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function J(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [a, i] = Object(s.useState)(!1), o = Object(v.a)();
				return Object(s.useEffect)(() => o(Object(q.h)()), [o]), r.a.createElement("div", {
					className: K.a.feedBanner,
					onClick: function() {
						i(!0), o(Object(q.g)())
					}
				}, r.a.createElement("div", {
					className: K.a.notepadSnoo
				}, r.a.createElement("img", {
					src: "".concat(H.a.assetPath, "/img/snoovatar-notepad.png")
				})), r.a.createElement("div", {
					className: K.a.bannerCopy
				}, r.a.createElement("p", {
					className: K.a.copy
				}, Y._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: K.a.meta
				}, Y._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(G.a, {
					className: K.a.chevron
				}), a && r.a.createElement(z.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => i(!1)
				}))
			}
			var Z = n("./src/reddit/constants/experiments.ts"),
				Q = n("./src/reddit/helpers/chooseVariant/index.ts");

			function X(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(a.d)(e => e.subreddits.survey[t]);
				return !! function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.a;
					return Object(a.d)(n => Object(Q.c)(n, {
						experimentName: e,
						experimentEligibilitySelector: t
					}))
				}(Z.K) && (null == n ? void 0 : n.isEligible) && !(null == n ? void 0 : n.response) ? r.a.createElement(J, {
					subredditId: t,
					survey: n
				}) : r.a.createElement(W, {
					subredditId: t
				})
			}
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = n.n(s),
				a = n("./node_modules/core-js/modules/es6.array.sort.js"),
				i = n.n(a),
				o = n("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = n.n(o),
				d = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./node_modules/lodash/fromPairs.js"),
				u = n.n(l),
				m = n("./node_modules/react/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/config.ts"),
				x = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/extractQueryParams/index.ts"),
				y = n("./src/lib/isAdHocMultireddit/index.ts"),
				v = n("./src/lib/isFakeSubreddit/index.ts"),
				E = n("./src/lib/listingSort/index.ts"),
				O = n("./src/lib/makeListingKey/index.ts"),
				C = n("./src/lib/objectSelector/index.ts"),
				k = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/fastdom/index.ts"),
				A = n("./src/lib/performanceTimings/index.tsx"),
				w = n("./src/reddit/actions/pages/subreddit.ts"),
				S = n("./src/reddit/actions/preferences.ts"),
				N = n("./src/reddit/actions/search.ts"),
				_ = n("./src/reddit/actions/subreddit.ts"),
				P = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				I = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				T = n("./src/reddit/components/ContentGate/index.tsx"),
				B = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				L = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				F = n("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx"),
				M = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				R = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				D = n("./src/reddit/components/EmptySubreddit.tsx"),
				U = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				W = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				H = n("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				V = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				K = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				q = n("./src/reddit/components/HeaderImage/index.tsx"),
				G = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				z = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Y = n("./src/reddit/components/JumpToContent/index.tsx"),
				J = n("./src/reddit/components/LayerEmbed/index.tsx"),
				Z = n("./src/reddit/components/ListingPostList/index.tsx"),
				Q = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				X = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				$ = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ee = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				te = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				ne = n("./src/reddit/components/TabBadger/index.tsx"),
				se = n("./src/reddit/components/TrackingHelper/index.tsx"),
				re = n("./src/reddit/constants/page.ts"),
				ae = n("./src/reddit/constants/parameters.ts"),
				ie = n("./src/reddit/constants/postLayout.ts"),
				oe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = n("./src/reddit/featureFlags/index.ts"),
				de = n("./src/reddit/helpers/correlationIdTracker.ts"),
				le = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ue = n("./src/reddit/helpers/trackers/screenview.ts"),
				me = n("./src/reddit/layout/page/Listing/index.tsx"),
				pe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				be = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				he = n("./src/reddit/selectors/discoveryUnit.ts"),
				ge = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				xe = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				fe = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				ye = n("./src/reddit/selectors/experiments/layer.ts"),
				ve = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ee = n("./src/reddit/selectors/experiments/snoovatar.ts"),
				Oe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Ce = n("./src/reddit/selectors/experiments/trending.ts"),
				ke = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				je = n("./src/reddit/selectors/listings.ts"),
				Ae = n("./src/reddit/selectors/meta.ts"),
				we = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Se = n("./src/reddit/selectors/posts.ts"),
				Ne = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				_e = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./src/reddit/selectors/user.ts"),
				Ie = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx"),
				Te = n("./src/reddit/pages/Subreddit/index.m.less"),
				Be = n.n(Te);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Me = Object(d.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), Re = 5, De = 3, Ue = Object(oe.t)(), We = Object(d.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), He = Object(C.a)(Object(h.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => u()([...Object(f.a)(e)]))), Ve = Object(h.a)((e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.sort
			}, He, Pe.Y, ge.a, (e, t, n, s, r) => {
				let a = t;
				a || (e === re.f && r ? a = k.O.BEST : Object(v.a)(e) && (a = k.O.HOT));
				const i = Object(w.g)(n, s);
				return Object(w.h)(e, a, n, i)
			}), Ke = Object(h.c)({
				isTopContentDismissed: Pe.O
			}), qe = Object(h.c)({
				subreddit: (e, t) => Object(_e.B)(e, {
					subredditName: t.match.params.subredditName
				})
			}), Ge = Object(h.c)({
				countryMeta: Ae.b,
				geopopular: Pe.m
			}), ze = Object(h.c)({
				isLoggedIn: Pe.I
			}), Ye = Object(C.a)((e, t) => {
				const {
					subreddit: n
				} = qe(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					const r = Ve(e, t),
						a = Object(we.a)(be.c.config)(e, {
							subredditId: n.id
						}),
						i = Object(Se.K)(e, r, s, !0),
						o = !Object(je.d)(e, {
							listingKey: r
						});
					if (a && o && i.length <= 1) return !0
				}
				return !1
			}), Je = Object(h.c)({
				inAwardListingExperiment: xe.a,
				inGoldPowerupsExperiment: fe.a,
				isPopular: oe.C,
				isInTrendingEntrypointExperiment: Ce.a
			}), Ze = e => {
				const t = ae.x in e && e[ae.x].toUpperCase();
				if ("string" == typeof t && t in k.Sb) return k.Sb[t]
			}, Qe = Object(C.a)((e, t) => {
				const {
					sort: n,
					subredditName: s
				} = t.match.params, r = He(e, t);
				if (n) return Object(E.b)({
					sort: n,
					timeSort: Ze(r)
				});
				if (Object(v.a)(s)) return s === re.f && Object(ge.a)(e) ? Object(E.b)({
					sort: k.O.BEST
				}) : Object(E.b)({
					sort: k.O.HOT
				});
				const a = Ve(e, t),
					i = e.listings.postOrder.listingSort[a];
				if (i && !i.hasChanged) return Object(E.d)(i.sort);
				const {
					subreddit: o
				} = qe(e, t);
				if (o) {
					const t = Object(_e.E)(e, {
						subredditId: o.id
					});
					return Object(E.d)(t)
				}
				return Object(E.d)(e.user.prefs.sort)
			}), Xe = Object(C.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(_e.X)(e, {
					subredditName: n
				})
			}), $e = Object(h.c)({
				claimablePointsEnabled: ce.d.spClaimablePoints,
				isBlacklistedTopContentPage: he.f,
				listingKey: Ve,
				sortParams: Qe,
				specialMembershipUpsellsEnabled: ce.d.spSpecialMembershipUpsells,
				stellarRegistrationBannerEnabled: ce.d.spStellarWalletRegistration,
				topContent: Xe,
				topContentDiscoveryUnit: e => Object(he.c)(e, {
					unitName: pe.a
				}),
				topPostsVariant: Oe.d,
				walletRegistrationBannerEnabled: ce.d.spWalletRegistrationBanner
			}), et = Object(h.c)({
				showCreatePostBanner: Ye,
				contentGateInfo: (e, t) => Object(Pe.e)(e, t.match.params.subredditName),
				layout: oe.N,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ne.a)(e, {
						listingName: "r/".concat(n.params.subredditName),
						sort: n.params.sort
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ne.b)(e, {
						listingName: "r/".concat(n.params.subredditName)
					})
				},
				isSnoovatarEmbedEnabled: Ee.a,
				isLayerEmbedEnabled: ye.a,
				isUISimplificationAllItemsVariant: ke.b,
				isActionBarAnimationEnabled: ve.b
			}), tt = () => Object(h.a)(Pe.Y, Ge, He, Ke, qe, (e, t) => {
				let {
					match: n
				} = t;
				return Object(_e.y)(e, {
					subredditName: n.params.subredditName
				})
			}, ze, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Je, $e, et, (e, t, n, s, r, a, i, o, c, d, l) => {
				let {
					countryMeta: u,
					geopopular: m
				} = t, {
					isTopContentDismissed: p
				} = s, {
					subreddit: b
				} = r, {
					isLoggedIn: h
				} = i, {
					inAwardListingExperiment: g,
					inGoldPowerupsExperiment: x,
					isInTrendingEntrypointExperiment: f,
					isPopular: y
				} = c, {
					claimablePointsEnabled: v,
					specialMembershipUpsellsEnabled: E,
					listingKey: O,
					sortParams: {
						sort: C,
						timeSort: j
					},
					stellarRegistrationBannerEnabled: A,
					topContent: w,
					topContentDiscoveryUnit: S,
					topPostsVariant: N,
					isBlacklistedTopContentPage: _,
					walletRegistrationBannerEnabled: P
				} = d;
				const I = u || k.w.Everywhere,
					T = m || I,
					B = n && ae.h in n ? n[ae.h].toUpperCase() : T,
					L = !!n.hasOwnProperty("f");
				return Object.assign({
					countrySort: B,
					claimablePointsEnabled: v,
					specialMembershipUpsellsEnabled: E,
					inAwardListingExperiment: g,
					inGoldPowerupsExperiment: x,
					isLoggedIn: h,
					isInTrendingEntrypointExperiment: f,
					isPopular: y,
					listingKey: O,
					renderNSFWContentGate: b && b.isNSFW && !e,
					isTopContentDismissed: p,
					sort: C,
					stellarRegistrationBannerEnabled: A,
					subreddit: b,
					subredditAboutInfo: a,
					subredditName: o,
					timeSort: j,
					topContent: w,
					topContentDiscoveryUnit: S,
					topPostsVariant: N,
					isBlacklistedTopContentPage: _,
					isFlairFilter: L,
					walletRegistrationBannerEnabled: P
				}, l)
			}), nt = (e, t) => ({
				onLoadMorePosts: () => {
					e(_.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(N.g)([k.Nb.Posts])),
				refreshFeed: () => e(_.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(S.F)())
			}), st = Object(b.b)(tt, nt), rt = Object(d.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), at = e => p.a.createElement(rt, Le({}, e, {
				fallback: p.a.createElement($.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), it = Object(d.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Frontpage~FrontpageSidebar"), n.e("FrontpageSidebar")]).then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), ot = Object(d.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function ct(e) {
				const {
					isSnoovatarEmbedEnabled: t,
					subreddit: n
				} = e;
				return !!n && t && !!n.name && "snoovatar" === n.name.toLowerCase()
			}

			function dt(e) {
				const {
					isLayerEmbedEnabled: t,
					subreddit: n
				} = e;
				return "isslayerstest" === (null == n ? void 0 : n.name.toLowerCase()) || !("layer" !== (null == n ? void 0 : n.name.toLowerCase()) || !t)
			}
			class lt extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					j.a.read(() => {
						Object(A.d)(A.c.Subreddit, this.props.isLoggedIn)
					})
				}
				componentDidUpdate(e) {
					e.isFlairFilter && !this.props.isFlairFilter && Object(de.c)(de.a.SearchResults) && Object(de.b)(de.a.SearchResults)
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(de.c)(de.a.SearchResults) && Object(de.b)(de.a.SearchResults)
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						inAwardListingExperiment: s,
						inGoldPowerupsExperiment: r,
						isActionBarAnimationEnabled: a,
						isInTrendingEntrypointExperiment: i,
						isPopular: o,
						isLoggedIn: c,
						layout: d,
						listingKey: l,
						match: u,
						renderNSFWContentGate: m,
						showCreatePostBanner: b,
						sort: h,
						specialMembershipUpsellsEnabled: f,
						isTopContentDismissed: E,
						stellarRegistrationBannerEnabled: C,
						sendEvent: j,
						subreddit: A,
						subredditAboutInfo: w,
						subredditName: S,
						timeSort: N,
						topContent: _,
						topContentDiscoveryUnit: $,
						topPostsVariant: se,
						isBlacklistedTopContentPage: ae,
						isRpanDuVisible: oe,
						rpanInjectionIndex: ce,
						isFlairFilter: de,
						walletRegistrationBannerEnabled: pe,
						isUISimplificationAllItemsVariant: be
					} = this.props, he = Object(v.a)(S), ge = S.toLowerCase(), xe = "/r/".concat(S, "/"), fe = {
						listingKey: l,
						listingName: ge
					}, ye = Object(Oe.a)(se), ve = Object(Oe.b)(se), Ee = Object(Oe.c)(se);
					let Ce;
					he ? Ce = Object(y.a)(S) ? p.a.createElement(Me, fe) : p.a.createElement(it, fe) : A && (Ce = p.a.createElement(te.a, Le({}, fe, {
						className: Be.a.sidebar,
						subredditId: A.id,
						subredditName: S,
						topPostsVariant: se
					})));
					const ke = Object(le.a)(t, m, S);
					if (ke) return p.a.createElement(T.default, ke);
					const je = d === ie.g.Large,
						Ae = o && i && !be,
						we = A ? A.id : void 0,
						Se = !u.params.sort && _ && !_.isSubscribed && _.postIds && _.postIds.length >= Re && !E && !ae && !ye && !ve,
						Ne = {},
						_e = d === ie.g.Classic ? Be.a.classicChild : d === ie.g.Compact ? Be.a.compactChild : Be.a.cardChild;
					if (f && A && (Ne[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(R.a, {
									className: Object(x.a)(t, _e)
								})
							}
						}, Ne[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(M.a, {
									className: Object(x.a)(t, _e),
									subredditId: A.id
								})
							}
						}), A && d === ie.g.Large && (Ne[0] = {
							estHeight: 175,
							id: "community-survey-".concat(d, "-").concat(l),
							render: () => p.a.createElement(Ie.a, {
								subredditId: A.id
							})
						}), s && S === re.f && h === k.O.AWARDED && (Ne[0] = {
							estHeight: 180,
							id: "awardlisting-banner-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(P.a, {
									className: Object(x.a)(t, _e)
								})
							}
						}), pe && A && (Ne[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(V.a, {
									className: Object(x.a)(t, _e),
									subredditId: A.id
								})
							}
						}), C && A && (Ne[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(K.a, {
									className: Object(x.a)(t, _e),
									subredditId: A.id
								})
							}
						}), e && A && (Ne[2] = {
							estHeight: 268,
							id: "claim-points-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(W.a, {
									className: Object(x.a)(t, _e),
									subredditId: A.id
								})
							}
						}), A && d === ie.g.Large && r && (Ne[2] = {
							estHeight: 476,
							id: "powerups-perks-".concat(d, "-").concat(l),
							render(e) {
								let {
									className: t
								} = e;
								return p.a.createElement(F.a, {
									className: Object(x.a)(t, _e),
									subredditId: A.id
								})
							}
						}), !o && Ee && N !== k.Sb.WEEK && d === ie.g.Large) {
						const e = Object(O.a)(S, k.O.TOP, {
							t: k.Sb.WEEK
						});
						Ne[De] = {
							estHeight: 0,
							id: "top-week-posts-".concat(d, "-").concat(l),
							render(t) {
								let {
									className: n
								} = t;
								return p.a.createElement(ot, {
									className: n,
									listingKey: e,
									subredditName: S
								})
							}
						}
					}
					if (oe) {
						const {
							child: e,
							idx: t
						} = Object(Q.a)({
							children: Ne,
							desiredIndex: ce,
							layout: d,
							listingKey: l,
							listingName: "r/".concat(S),
							sendEvent: j
						});
						Ne[t] = e
					}
					const Pe = {
							baseUrl: xe,
							countrySort: n,
							sort: h,
							subredditId: we,
							timeSort: N
						},
						Te = de ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ue = A && A.subscribers;
					let He;
					const Ve = window.URL;
					if (ct(this.props)) {
						const e = new Ve(g.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), He = p.a.createElement("iframe", {
							className: Object(x.a)(Be.a.af),
							src: e.href
						})
					} else dt(this.props) && this.props.subreddit ? He = p.a.createElement(J.a, {
						baseUrl: g.a.layersUrl,
						subredditId: this.props.subreddit.id
					}) : Ae && (He = p.a.createElement(at, {
						showCardView: this.props.layout === ie.g.Large
					}));
					return p.a.createElement(ee.a, {
						subredditId: we
					}, p.a.createElement(me.a, {
						subredditId: we,
						className: Object(x.a)(Be.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !he && p.a.Children.toArray([p.a.createElement(q.a, {
							headerText: A ? A.name : S,
							disableFullscreen: je,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: A,
							url: xe
						}), p.a.createElement(I.a, {
							layout: d,
							key: "idtopbar",
							subreddit: A || void 0,
							subredditId: we,
							subredditName: S,
							subredditUrl: xe
						})]),
						trendingUnit: He,
						content: p.a.createElement(p.a.Fragment, null, A && A.isQuarantined && p.a.createElement(z.a, {
							subredditName: S
						}), A && b && p.a.createElement(B.a, {
							subreddit: A,
							listingKey: l,
							listingName: ge
						}), Ae && p.a.createElement(X.a, {
							className: Be.a.duHeader
						}, Fe._("Popular posts", null, {
							hk: "Gfyj2"
						})), Se && p.a.createElement(We, {
							discoveryUnit: $,
							subredditName: A ? A.name : S,
							topContent: _,
							onCloseClick: this.onTopContentDismissed
						}), !he && c && !(w && w.userIsBanned) && p.a.createElement(G.a, {
							subredditName: S
						}), p.a.createElement(U.a, Pe), A && p.a.createElement(L.a, {
							subreddit: A
						}), p.a.createElement(Y.a, null), p.a.createElement(ne.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: l,
							subredditName: S,
							subscriberCount: Ue
						}), p.a.createElement(Z.a, {
							injectChildren: Ne,
							listingKey: l,
							listingName: ge,
							listingViewed: (e, t) => Object(ue.f)(l, h, t, e, N),
							noPostsComponent: () => p.a.createElement(D.a, {
								listingName: ge,
								sort: h,
								subreddit: A || void 0
							}),
							onLoadMore: Te,
							inSubredditOrProfile: !he,
							disablePlaceholder: S === re.f && h === k.O.AWARDED,
							isActionBarAnimationEnabled: a
						}), p.a.createElement(H.a, null)),
						sidebar: Ce
					}))
				}
			}
			t.default = Ue(st(Object(se.c)(lt)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, c.d, (e, t) => {
					let {
						listingName: n
					} = t;
					const s = Object(o.ob)(e);
					if (!s) return !1;
					let c;
					if (-1 === [a.R, "r/popular"].indexOf(n)) {
						const t = n.replace(/^r\//, ""),
							r = Object(i.G)(e, t),
							a = s.subreddit[r];
						if (!a) return !1;
						c = a
					} else c = s;
					if (!c.rpanDuDismissalTime) return !1;
					return new Date(c.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.k, (e, t) => {
					let {
						sort: n
					} = t;
					return n
				}, (e, t, n, s, i, o, c) => {
					if (c === r.O.AWARDED) return !1;
					if (!e) return !1;
					if (o.isPermanentlyCanceled) return !1;
					if (n) return !1;
					if (t) return !!i && i.show_discovery_unit;
					if (!o.global.viewer_enabled) return !1;
					return [a.R, "r/popular"].indexOf(s) > -1
				}),
				u = Object(s.a)(c.d, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.l, (e, t, n, s) => {
					if (!e) {
						const e = "home" === t ? s.home_feed_discovery_unit_index : "r/popular" === t ? s.popular_feed_discovery_unit_index : a.i;
						return "number" == typeof e ? e : a.i
					}
					return n ? n.discovery_unit_index : a.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "e", (function() {
				return q
			})), n.d(t, "g", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = n("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = n.n(u)()(e => Object(r.a)(Object(s.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				g = e => e.publicAccessNetwork.reports.reported,
				x = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				E = Object(s.a)(v, e => e.ended),
				O = Object(s.a)(v, e => e.removed),
				C = Object(s.a)(h, E, O, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = U(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !0 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, n), {
								stream: Object.assign(Object.assign({}, n.stream), {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = U(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !1 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, n), {
								stream: Object.assign(Object.assign({}, n.stream), {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, s)
				}),
				k = (e, t) => {
					return C(e)[Object(i.h)(t)]
				},
				j = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => p(t.listingName)(e, t), C, g, c.h, d.d, (e, t, n, s, r, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(i.h)(e);
							n[t] && a.push(t)
						}
						const c = a.concat(t),
							d = [...new Set(c)],
							l = new Set([...s, ...r]);
						return d.filter(e => {
							const t = n[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
						})
					}
					const d = new Set([...s, ...r]);
					return Object.keys(n).filter(e => !d.has(e)).map(e => n[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.a.KILLED && e.stream.state !== o.a.PURGED).map(e => e.post.id)
				}),
				A = Object(s.a)((e, t) => {
					let {
						count: n
					} = t;
					return n
				}, C, (e, t) => {
					let {
						listingName: n,
						streamIdFromPath: s
					} = t;
					return j(e, {
						listingName: n,
						streamIdFromPath: s
					})
				}, (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				w = Object(s.a)(C, A, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				S = Object(s.a)(C, A, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				N = Object(s.a)(y, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return A(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				_ = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, C, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return A(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, x, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				P = Object(r.a)(Object(s.a)(_, C, (e, t) => e ? t[e] : void 0)),
				I = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(i.h)(n) : void 0
				}, _, g, c.h, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return A(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				T = Object(s.a)(f, y, N, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				B = Object(s.a)(f, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(r.a)(Object(s.a)(I, C, (e, t) => e ? t[e] : void 0)),
				F = Object(r.a)(Object(s.a)(T, C, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(s.a)(B, C, (e, t) => e ? t[e] : void 0)),
				R = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => Object.assign(Object.assign({}, t[n]), {
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(I, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? k(e, n) : void 0
				}, e => !e || e.chat_disabled);

			function U(e, t) {
				const n = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const W = Object(s.a)(I, x, (e, t) => e && t.timestamps[e] || 0);
			var H;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(H || (H = {}));
			const V = Object(s.a)(I, C, b.b, (e, t, n) => {
					if (n) return H.INTRO;
					const s = e && t[e];
					if (!s) return H.UNAVAILABLE;
					const r = s.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? H.LIVE : r === o.a.ENDED && s.stream.vod_accessible ? H.VOD : H.UNAVAILABLE
				}),
				K = Object(s.a)(L, V, b.b, l.b, l.o, (e, t, n, s, r) => n ? s : e ? t === H.LIVE || t === H.VOD ? e.stream.hls_url : r : void 0),
				q = Object(s.a)(L, V, W, (e, t, n) => e ? t === H.LIVE ? e.broadcast_time : t === H.VOD && n < e.broadcast_time ? n : 0 : 0),
				G = (e, t) => {
					const n = h(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(s.a)(i, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.e[Object(a.N)(e, {})] === r.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: s.G
				}) === s.Q.Treatment
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => s.ab.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: a.I,
				experimentName: s.Y
			})
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: a.I,
						experimentName: s.ib
					});
					return !(!t || Object(s.Sc)(t))
				},
				o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a.I,
						experimentName: s.ib
					}) === s.ob.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.Bc.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.vc
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.91719686299c38e25368.js.map