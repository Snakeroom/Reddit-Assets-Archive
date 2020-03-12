// https://www.redditstatic.com/desktop2x/Frontpage.c28608d01891e80a70ad.js
// Retrieved at 3/12/2020, 5:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var s = [];
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, n.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, n.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var o = n.element,
								i = a(o),
								c = this._rootContainsTarget(o),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, s),
								u = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, o, i, c, l, u, m, p, b = a(s), h = d(s), g = !1; !g;) {
								var v = null,
									f = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == f.display) return;
								if (h == this.root || h == t ? (g = !0, v = r) : h != t.body && h != t.documentElement && "visible" != f.overflow && (v = a(h)), v && (n = v, o = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(n.top, o.top), c = Math.min(n.bottom, o.bottom), l = Math.max(n.left, o.left), u = Math.min(n.right, o.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								h = d(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var s = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || r.clientWidth,
								width: s.clientWidth || r.clientWidth,
								bottom: s.clientHeight || r.clientHeight,
								height: s.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, s) {
								return "px" == t.unit ? t.value : t.value * (s % 2 ? e.width : e.height) / 100
							})),
							s = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return s.width = s.right - s.left, s.height = s.bottom - s.top, s
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== r)
							for (var n = 0; n < this.thresholds.length; n++) {
								var o = this.thresholds[n];
								if (o == s || o == r || o < s != o < r) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = r
				}

				function r(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						s = t.width * t.height,
						r = this.intersectionRect,
						n = r.width * r.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, r, n, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (s) {}
					return t ? (t.width && t.height || (t = {
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						width: t.right - t.left,
						height: t.bottom - t.top
					}), t) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function c(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = d(s)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseRandom.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = r(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = s.n(i);
			class c extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
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
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/upperFirst.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(h),
				v = s("./src/lib/lessComponent.tsx");
			const f = v.a.div("PrimaryText", g.a),
				x = v.a.div("SecondaryText", g.a),
				y = v.a.div("MainContentWrapper", g.a),
				_ = v.a.div("MainContent", g.a),
				O = v.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				w = v.a.wrapped(p.h, "SubmitLink", g.a),
				j = v.a.img("SnooImg", g.a),
				E = v.a.div("EmptyHomepage", g.a),
				C = e => {
					switch (e) {
						case c.O.RISING:
							return Object(u.c)("Create a new post and take all the glory");
						case c.O.TOP:
						case c.O.CONTROVERSIAL:
							return null;
						default:
							return Object(u.c)("Be the first to till this fertile land.")
					}
				},
				N = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = C(s);
					return i.a.createElement(_, null, i.a.createElement(f, null, (e => {
						switch (e) {
							case c.O.RISING:
								return Object(u.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.O.TOP:
							case c.O.CONTROVERSIAL:
								return Object(u.c)("No posts were found using the ".concat(n()(e), " sort. Try changing the sort."));
							default:
								return Object(u.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement(x, null, C(s)), i.a.createElement(w, {
						to: "/r/".concat(t, "/submit")
					}, i.a.createElement(l.c, null, "Add a post"))))
				},
				S = () => i.a.createElement(_, null, i.a.createElement(j, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), i.a.createElement(f, null, i.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), i.a.createElement(w, {
					to: "/r/popular"
				}, i.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = v.a.wrapped(e => i.a.createElement(E, null, i.a.createElement(O, {
				isLoading: !1,
				layout: m.g.Classic
			}), i.a.createElement(y, null, e.subreddit ? i.a.createElement(N, e) : i.a.createElement(S, null))), "Component", g.a)
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1VJk0sTYGQyG0P4nqFVu9v",
				container: "_1VJk0sTYGQyG0P4nqFVu9v",
				Circle: "HpLkUWI5bwugRHhQqw2dy",
				circle: "HpLkUWI5bwugRHhQqw2dy",
				LiveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				liveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				ViewCount: "_3bktW9VjGiBE1xME2TqZB7",
				viewCount: "_3bktW9VjGiBE1xME2TqZB7",
				Title: "_3p01VQUbuFFSnavk8xkFh7",
				title: "_3p01VQUbuFFSnavk8xkFh7",
				OutboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				outboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				Description: "_3ddCMJofyzb6-UWHgIC9Sd",
				description: "_3ddCMJofyzb6-UWHgIC9Sd",
				AnnouncementContainer: "PSG6gLueWddB1kqvaOxoT",
				announcementContainer: "PSG6gLueWddB1kqvaOxoT",
				AnnouncementTitle: "_3d6jHnvibW6_495D6WkUop",
				announcementTitle: "_3d6jHnvibW6_495D6WkUop",
				AnnouncementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				announcementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				Button: "j5ti73p7EAjBJvJlSjppe",
				button: "j5ti73p7EAjBJvJlSjppe",
				CloseButton: "_29ji6lMZpwWMBLRk4eMGw-",
				closeButton: "_29ji6lMZpwWMBLRk4eMGw-",
				iconStyles: "_2E0bnlMJwNjmvW3Qsu8PlF"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/banners.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				f = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				x = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = s("./src/reddit/icons/svgs/Snoo/index.tsx");
			var _ = e => o.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("polygon", {
					points: "0,40 14.3,29.2 10.8,25.7"
				}), o.a.createElement("path", {
					d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
				})))),
				O = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				w = s("./src/reddit/layout/row/Inline/index.tsx"),
				j = s("./src/reddit/models/Live/index.ts");
			var E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				N = s.n(C);
			const S = "".concat(r.a.redditUrl, "/live/"),
				I = c.a.a("Container", N.a),
				k = c.a.wrapped(h.a, "Circle", N.a),
				P = c.a.div("LiveLabel", N.a),
				L = c.a.div("ViewCount", N.a),
				T = c.a.div("Title", N.a),
				D = c.a.wrapped(x.a, "OutboundLink", N.a),
				B = c.a.div("Description", N.a),
				A = c.a.div("AnnouncementContainer", N.a),
				R = c.a.wrapped(T, "AnnouncementTitle", N.a),
				U = c.a.wrapped(B, "AnnouncementDescription", N.a),
				H = c.a.wrapped(u.g, "Button", N.a),
				F = c.a.wrapped(g.a, "CloseButton", N.a),
				V = Object(a.c)({
					featuredLiveThread: e => e.live.featured,
					language: E.O
				}),
				M = Object(i.b)(V);
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						announcementBannerHidden: !0
					}, this.dismissModal = () => {
						this.setState({
							announcementBannerHidden: !0
						});
						const {
							id: e,
							numTimesDismissable: t
						} = this.props.featuredLiveThread;
						Object(m.D)(e, t), this.props.sendEvent(Object(p.d)(e))
					}, this.clickedButtonCta = () => {
						this.props.sendEvent(Object(p.c)(this.props.featuredLiveThread.id))
					}
				}
				componentDidMount() {
					const {
						featuredLiveThread: e,
						sendEvent: t
					} = this.props;
					if (e && e.isAnnouncement) {
						const s = Object(m.d)(e.id);
						s < e.numTimesDismissable && (this.setState({
							announcementBannerHidden: !1
						}), t(Object(p.e)(e.id)), Object(m.D)(e.id, s + 1))
					}
				}
				render() {
					const {
						featuredLiveThread: e,
						language: t
					} = this.props;
					if (!e) return null;
					if (e.isAnnouncement) {
						if (this.state.announcementBannerHidden) return null; {
							const t = {
								[j.b.Announcement]: o.a.createElement(_, {
									className: N.a.iconStyles
								}),
								[j.b.Document]: o.a.createElement(O.a, {
									className: N.a.iconStyles
								}),
								[j.b.Snoo]: o.a.createElement(y.a, {
									className: N.a.iconStyles
								}),
								[j.b.Ama]: o.a.createElement(v.a, {
									className: N.a.iconStyles
								}),
								[j.b.Moderation]: o.a.createElement(f.a, {
									className: N.a.iconStyles
								})
							};
							return o.a.createElement(A, null, o.a.createElement(w.a, null, t[e.icon], o.a.createElement(R, null, e.title), o.a.createElement(F, {
								onClick: this.dismissModal
							})), o.a.createElement(U, null, e.description), o.a.createElement(H, {
								target: "_blank",
								href: e.announcementUrl,
								onClick: this.clickedButtonCta
							}, e.buttonCta))
						}
					}
					return o.a.createElement(I, {
						href: "".concat(S).concat(e.id)
					}, o.a.createElement(w.a, null, o.a.createElement(k, null), o.a.createElement(P, null, o.a.createElement(b.c, null, "live")), o.a.createElement(B, null, "·"), o.a.createElement(L, null, Object(d.b)(t, "live.viewers", e.viewerCount))), o.a.createElement(T, null, e.title, o.a.createElement(D, null)), o.a.createElement(B, null, e.description))
				}
			}
			t.a = M(Object(l.b)(W))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = s.n(j);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				I = Object(a.a)(g.a),
				k = {
					[p.d.Card]: _.a,
					[p.d.Classic]: x.a,
					[p.d.Compact]: y.a
				},
				P = {
					[p.d.Card]: Object(f.c)("card"),
					[p.d.Classic]: Object(f.c)("classic"),
					[p.d.Compact]: Object(f.c)("compact")
				},
				L = Object(b.t)(),
				T = Object(i.c)({
					dropdownIsOpen: Object(w.b)(S),
					postLayout: b.L,
					redditStyle: b.A
				}),
				D = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: S
					}))
				}));
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.screen)(t),
							subreddit: Object(O.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: o
						} = this.props, i = s || p.e[o], a = e === i, d = k[e];
						return n.a.createElement(v.b, C({}, t, {
							className: Object(c.a)(E.a.LayoutItem, {
								[E.a.selected]: a
							}),
							"data-layout": e,
							displayText: P[e],
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), n.a.createElement(d, {
							className: E.a.LayoutIcon,
							onClick: a ? void 0 : r
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(I, C({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: S
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, o = t || p.e[r];
					return n.a.createElement("div", {
						className: Object(c.a)(E.a.Container, e),
						id: N
					}, n.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: S,
						showDropdownTriangle: !0
					}), n.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(D(Object(m.b)(Object(d.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/CountrySort/index.tsx"),
				v = s("./src/reddit/components/ListingSort/index.tsx"),
				f = s("./src/reddit/components/TimeSort/index.tsx"),
				x = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/navigation.ts"),
				j = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				N = s.n(C);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = new Set([h.O.CONTROVERSIAL, h.O.TOP]),
				k = new Set([h.O.CONTROVERSIAL, h.O.RISING]),
				P = "ListingSort--Overflow",
				L = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				T = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.i, (e, t, s) => {
					if (e) return e;
					const r = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return t && s && r.unshift(h.O.BEST), r
				}),
				D = Object(p.c)({
					isPopularPage: l.C,
					sortOptions: T
				});
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(w.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(O.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!s && e === h.O.HOT && o === h.O.HOT;
						return n.a.createElement(n.a.Fragment, null, n.a.createElement(_.a, {
							className: Object(i.a)(N.a.SortLink, e === o && N.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(v.a, {
							className: N.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: N.a.SortLabel
						}, Object(y.a)(e))), a && n.a.createElement(g.a, {
							baseUrl: x.c[x.b.Popular],
							buttonClassName: N.a.DropdownButton,
							className: N.a.CountrySort,
							disabled: t,
							dropdownClassName: N.a.Dropdown,
							rowClassName: N.a.DropdownRow,
							rowSelectedClassName: N.a.DropdownRowSelected,
							wrapperClassName: N.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: N.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: r,
						sortOptions: o,
						timeSort: a
					} = this.props, c = !t && I.has(r), d = k.has(r), l = o.filter(e => !k.has(e)), u = o.filter(e => k.has(e) && e !== r);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(v.d, S({}, this.props, {
						buttonClassName: N.a.DropdownButton,
						className: Object(i.a)(N.a.SortDropdown, e),
						rowClassName: N.a.DropdownRow,
						rowIconClassName: N.a.DropdownRowIcon,
						rowSelectedClassName: N.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(i.a)(N.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && n.a.createElement(f.a, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: N.a.DropdownButton,
						className: N.a.TimeSort,
						dropdownClassName: N.a.Dropdown,
						listingSort: r,
						onChange: s,
						rowClassName: N.a.DropdownRow,
						rowSelectedClassName: N.a.DropdownRowSelected,
						timeSort: a || h.Rb,
						wrapperClassName: N.a.DropdownSortWrapper
					}), u.length > 0 && n.a.createElement(v.d, S({}, this.props, {
						className: Object(i.a)(N.a.SortOverflow, e),
						dropdownClassName: N.a.Dropdown,
						dropdownId: P,
						rowClassName: N.a.DropdownRow,
						rowIconClassName: N.a.DropdownRowIcon,
						rowSelectedClassName: N.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), n.a.createElement("button", {
						className: N.a.SortOverflowButton,
						id: P
					}, n.a.createElement(j.a, null))))
				}
			}
			var A = L(Object(o.b)(D)(Object(d.b)(B))),
				R = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				U = s.n(R);
			const H = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				F = Object(o.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (s) {
								const n = Object(a.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.G)(s, n))
							}
						}
					}
				});
			class V extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: r = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(U.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(A, {
						baseUrl: e,
						disabled: r,
						geopopularSort: s,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !o && n.a.createElement(m.a, {
						className: U.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = H(F(Object(d.b)(V)))
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(r, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/LRUCache/index.ts"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(m),
				b = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, n.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, n.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, n.a.createElement("h3", {
					className: h.a.title
				}, g._("Top broadcast right now", null, {
					hk: "2hS1kb"
				}))), n.a.createElement("div", {
					className: h.a.body
				}, n.a.createElement("div", {
					className: h.a.previewContainer
				}, n.a.createElement("div", {
					className: Object(a.a)(h.a.thumbnail, h.a.noise)
				})))))
			};
			var f = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === u.g.Classic ? n.a.createElement(c.b, {
					className: Object(a.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === u.g.Compact ? n.a.createElement(d.a, {
					className: Object(a.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : n.a.createElement(v, {
					className: t
				})
			};
			const x = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return n.a.createElement(f, {
						className: t,
						layout: s
					})
				},
				getComponent: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("Poll~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~reddit-components-Co~d2dc8995"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var y = e => n.a.createElement(x, e),
				_ = s("./src/reddit/helpers/trackers/rpan.ts");
			const O = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return j
			}));
			const w = new o.a(20),
				j = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = w.get(t);
					if (s) return s;
					const r = E(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: O(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.m)()),
								render: t => {
									let {
										className: s
									} = t;
									return n.a.createElement(y, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return w.set(t, o), o
				},
				E = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
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
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
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
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: s,
					showCardView: r
				} = e, a = {
					[c.a["m-card"]]: r
				};
				return n.a.createElement("div", {
					className: Object(o.a)(c.a.container, a, t)
				}, n.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, a, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, a)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				u = s.n(l);
			const m = n.a.createElement(i.a, {
					className: u.a.duHeader
				}, n.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(d.a)({
					isLoading: !0
				});
			t.a = e => n.a.createElement(a.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: u.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => n.a.createElement("div", {
				className: u.a.post,
				key: "placeholder-post-".concat(t)
			}, n.a.createElement("div", {
				className: Object(o.a)(u.a.desc, u.a.one, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(u.a.desc, u.a.two, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(u.a.icon, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(u.a.name, p)
			}))))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
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
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const v = b.a.button("IconButton", m.a),
				f = b.a.wrapped(d.a, "SubscribeIcon", m.a),
				x = b.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return o.a.createElement(v, r, o.a.createElement(f, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", m.a),
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return t ? o.a.createElement(a.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: s
						})
					})) : o.a.createElement(a.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", m.a),
				O = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(y, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : o.a.createElement(_, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				},
				w = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: n
					} = e, a = g(e, ["border", "language", "small", "type"]);
					return o.a.createElement(v, a, o.a.createElement(x, {
						className: Object(p.a)(i.n, a.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: i
					} = e, c = g(e, ["border", "language", "small", "type"]);
					const d = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === i ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === i ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(p.a)(c.className, {
							[m.a.isSmall]: n
						});
					return t ? o.a.createElement(a.i, h({}, c, {
						className: l,
						children: d
					})) : o.a.createElement(a.n, h({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", m.a),
				E = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(w, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : o.a.createElement(j, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				};
			class C extends o.a.Component {
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
						icon: s = !1,
						id: r,
						language: n,
						small: i = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? o.a.createElement(E, h({}, a, {
						language: n,
						type: this.props.identifier.type
					})) : o.a.createElement(O, h({}, a, {
						id: r
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return o[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.b)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/experiments/badging.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				u = s("./src/reddit/selectors/posts.ts");
			const m = Object(i.c)({
					postCount: u.R,
					previousPageIsOverlay: l.o,
					tabBadged: e => e.tabBadged,
					variant: e => Object(d.d)(e)
				}),
				p = Object(o.b)(m);
			t.a = p(Object(c.b)(e => 0 !== e.postCount && e.variant ? n.a.createElement(a.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged,
				variant: e.variant
			}) : null))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				language: a.O,
				userIsSubscriber: i.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
				}
			})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(r.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(o.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => {
					if (t) {
						const s = n.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id;
							const n = Object(r.h)(e, {
								streamIdFromPath: t.post.id
							});
							n === r.a.LIVE ? s.type = "stream_live" : n === r.a.VOD ? s.type = "stream_vod" : n === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n.post(e, t.post.id),
							media: s,
							subreddit: n.subreddit(e)
						}
					}
					return {
						subreddit: n.subreddit(e)
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				a = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, o(e)),
				c = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, o(e)),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, o(t, e))),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), o(t, e)),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), o(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), o(t, e)),
				v = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				f = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				x = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, o(s, t))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(a.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, n.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, n.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), n.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				n = s.n(r),
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				i = s.n(o),
				a = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(a),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				u = s.n(l),
				m = s("./node_modules/react/index.js"),
				p = s.n(m),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/makeListingKey/index.ts"),
				y = s("./src/lib/performanceTimings/index.tsx"),
				_ = s("./src/reddit/actions/frontpage.ts"),
				O = s("./src/reddit/components/EmptySubreddit.tsx"),
				w = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				j = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				S = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				I = s("./src/reddit/components/ListingPostList/index.tsx"),
				k = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				P = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				L = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				T = s("./src/reddit/components/TabBadger/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/parameters.ts"),
				A = s("./src/reddit/constants/postLayout.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/trackers/screenview.ts"),
				H = s("./src/reddit/layout/page/Listing/index.tsx"),
				F = s("./src/reddit/selectors/experiments/trending.ts"),
				V = s("./src/reddit/selectors/frontpage.ts"),
				M = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				J = s("./src/lib/constants/index.ts"),
				K = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				Q = s("./src/lib/objectSelector/index.ts"),
				z = s("./src/reddit/constants/page.ts"),
				Y = s("./src/reddit/pages/Frontpage/index.m.less"),
				q = s.n(Y);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(R.t)(), ee = Object(h.c)({
				queryParams: Object(Q.a)((e, t) => {
					let {
						location: s
					} = t;
					return u()([...Object(v.a)(s.search)])
				}),
				sort: (e, t) => {
					let {
						match: s
					} = t;
					const r = Object(V.a)(e);
					return s.params.sort || r
				}
			}), te = Object(h.c)({
				countryMeta: M.b,
				geopopular: G.m
			}), se = Object(h.c)({
				isInTrendingEntrypointExperiment: F.a,
				isLoggedIn: G.G,
				isPopular: R.C,
				isRpanDuVisible: e => Object(W.a)(e, {
					listingName: K.O
				}),
				rpanInjectionIndex: e => Object(W.b)(e, {
					listingName: K.O
				}),
				layout: R.L
			}), re = () => Object(h.a)(te, ee, se, e => Object(W.a)(e, {
				listingName: K.O
			}), e => Object(W.b)(e, {
				listingName: K.O
			}), e => e, (e, t, s, r, n, o) => {
				let {
					countryMeta: i,
					geopopular: a
				} = e, {
					queryParams: c,
					sort: d
				} = t;
				const l = B.t in c && c[B.t].toUpperCase(),
					u = "string" == typeof l && l in J.Qb ? J.Qb[l] : J.Rb,
					m = Object(x.a)(z.a, d, c),
					p = i || J.w.Everywhere,
					b = a || p,
					h = B.g in c ? c[B.g].toUpperCase() : b;
				return r && [].push(n), Object.assign({
					countrySort: h,
					listingKey: m,
					sort: d,
					timeSort: u
				}, s)
			}), ne = (e, t) => ({
				onLoadMorePosts: () => e(_.d({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(_.e({
					sort: t.match.params.sort
				}))
			}), oe = Object(b.b)(re, ne), ie = Object(d.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), ae = e => p.a.createElement(ie, Z({}, e, {
				fallback: p.a.createElement(L.a, {
					showCardView: !!e.showCardView
				})
			}));
			class ce extends p.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						f.a.read(() => {
							const s = "".concat(y.c.FrontPage, "-").concat(t);
							Object(y.d)(s, e)
						})
					}
				}
				render() {
					const {
						isInTrendingEntrypointExperiment: e,
						isLoggedIn: t,
						isPopular: s,
						isRpanDuVisible: r,
						layout: n,
						listingKey: o,
						rpanInjectionIndex: i,
						sendEvent: a
					} = this.props, c = s && !t && e, d = !t, l = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, u = {};
					if (r) {
						const {
							child: e,
							idx: t
						} = Object(k.a)({
							children: u,
							desiredIndex: i,
							layout: n,
							listingKey: o,
							listingName: K.O,
							sendEvent: a
						});
						u[t] = e
					}
					const b = p.a.createElement(j.default, {
						className: q.a.sidebar,
						listingKey: o,
						listingName: z.b
					});
					return p.a.createElement(H.a, {
						className: Object(g.a)(q.a.Container, this.props.className),
						fitPageToContent: !0,
						contentNavBar: p.a.createElement(p.a.Fragment, null, !d && p.a.createElement(S.a, l)),
						trendingUnit: c && p.a.createElement(ae, {
							showCardView: n === A.g.Large
						}),
						content: p.a.createElement(m.Fragment, null, c && p.a.createElement(P.a, {
							className: q.a.duHeader
						}, X._("Popular posts", null, {
							hk: "36DJb4"
						})), p.a.createElement(w.a, null), t && p.a.createElement(C.a, null), d && p.a.createElement(E.a, l), p.a.createElement(N.a, null), p.a.createElement(T.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), p.a.createElement(I.a, {
							injectChildren: u,
							noPostsComponent: () => p.a.createElement(O.a, {
								listingName: z.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: o,
							listingName: z.b,
							listingViewed: (e, t) => Object(U.d)(o, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: b
					})
				}
			}
			t.default = $(oe(Object(D.b)(ce)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(c.a, c.b, (e, t) => {
					let {
						listingName: s
					} = t;
					const r = Object(a.gb)(e);
					if (!r) return !1;
					let c;
					if (-1 === [o.O, "r/popular"].indexOf(s)) {
						const t = s.replace(/^r\//, ""),
							n = Object(i.D)(e, t),
							o = r.subreddit[n];
						if (!o) return !1;
						c = o
					} else c = r;
					if (!c.rpanDuDismissalTime) return !1;
					return new Date(c.rpanDuDismissalTime).getTime() > Date.now() - 30 * n.x
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.n)(e, {
						subreddit: s
					})
				}, d.l, (e, t, s, r, n, i) => {
					if (!e) return !1;
					if (i.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!n && n.show_discovery_unit;
					if (!i.global.viewer_enabled) return !1;
					return [o.O, "r/popular"].indexOf(r) > -1
				}),
				u = Object(r.a)(c.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.n)(e, {
						subreddit: s
					})
				}, d.m, (e, t, s, r) => {
					if (!e) {
						const e = "home" === t ? r.home_feed_discovery_unit_index : "r/popular" === t ? r.popular_feed_discovery_unit_index : o.h;
						return "number" == typeof e ? e : o.h
					}
					return s ? s.discovery_unit_index : o.h
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = s.n(u)()(e => Object(n.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "k", (function() {
				return w
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "e", (function() {
				return U
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "d", (function() {
				return G
			}));
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				y = Object(r.a)(x, e => e.ended),
				_ = Object(r.a)(x, e => e.removed),
				O = Object(r.a)(e => e.publicAccessNetwork.models, y, _, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = H(r, a.b.ENDED) ? a.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !0 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = H(r, a.b.ENDED) ? a.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !1 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				w = (e, t) => {
					return O(e)[Object(i.f)(t)]
				},
				j = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), O, h, c.g, d.b, (e, t, s, r, n, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(i.f)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== a.b.KILLED && t.stream.state !== a.b.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.l).filter(e => !e.post.isHidden).filter(e => e.stream.state !== a.b.KILLED && e.stream.state !== a.b.PURGED).map(e => e.post.id)
				}),
				E = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				C = Object(r.a)(O, E, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === a.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				N = Object(r.a)(O, E, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === a.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				S = Object(r.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				I = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, g, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = n.find(e => e.stream.state === a.b.IS_LIVE);
					if (o) return o.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(n.a)(Object(r.a)(I, O, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.f)(s) : void 0
				}, I, h, c.g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				L = Object(r.a)(v, f, S, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(r.a)(v, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				D = Object(n.a)(Object(r.a)(P, O, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(r.a)(L, O, (e, t) => e ? t[e] : void 0)),
				A = Object(n.a)(Object(r.a)(T, O, (e, t) => e ? t[e] : void 0)),
				R = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, O, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				U = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? w(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function H(e, t) {
				const s = {
					[a.b.NOT_STARTED]: 0,
					[a.b.PUBLISHED]: 1,
					[a.b.IS_LIVE]: 2,
					[a.b.DISCONNECTED]: 2,
					[a.b.ENDED]: 3,
					[a.b.KILLED]: 4,
					[a.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(r.a)(P, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const M = Object(r.a)(P, O, b.b, (e, t, s) => {
					if (s) return V.INTRO;
					const r = e && t[e];
					if (!r) return V.UNAVAILABLE;
					const n = r.stream.state;
					return n === a.b.IS_LIVE || n === a.b.DISCONNECTED ? V.LIVE : n === a.b.ENDED && r.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				W = Object(r.a)(D, M, b.b, l.c, l.p, (e, t, s, r, n) => s ? r : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(D, M, F, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(r.a)(i, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=Frontpage.c28608d01891e80a70ad.js.map