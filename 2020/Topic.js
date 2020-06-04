// https://www.redditstatic.com/desktop2x/Topic.ea965c7168d31bdabf6d.js
// Retrieved at 6/4/2020, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(t, e) {
			! function(t, e) {
				"use strict";
				if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var s = [];
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, n.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, s) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== s[e - 1]
						}))
					}, n.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var e = this._rootIsInDom(),
							s = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var r = n.element,
								o = a(r),
								c = this._rootContainsTarget(r),
								d = n.entry,
								l = e && c && this._computeTargetAndRootIntersection(r, s),
								u = n.entry = new i({
									time: t.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? e && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, i) {
						if ("none" != t.getComputedStyle(s).display) {
							for (var n, r, o, c, l, u, m, h, p = a(s), b = d(s), g = !1; !g;) {
								var _ = null,
									f = 1 == b.nodeType ? t.getComputedStyle(b) : {};
								if ("none" == f.display) return;
								if (b == this.root || b == e ? (g = !0, _ = i) : b != e.body && b != e.documentElement && "visible" != f.overflow && (_ = a(b)), _ && (n = _, r = p, o = void 0, c = void 0, l = void 0, u = void 0, m = void 0, h = void 0, o = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), u = Math.min(n.right, r.right), h = c - o, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: h
									}))) break;
								b = d(b)
							}
							return p
						}
					}, n.prototype._getRootRect = function() {
						var t;
						if (this.root) t = a(this.root);
						else {
							var s = e.documentElement,
								i = e.body;
							t = {
								top: 0,
								left: 0,
								right: s.clientWidth || i.clientWidth,
								width: s.clientWidth || i.clientWidth,
								bottom: s.clientHeight || i.clientHeight,
								height: s.clientHeight || i.clientHeight
							}
						}
						return this._expandRectByRootMargin(t)
					}, n.prototype._expandRectByRootMargin = function(t) {
						var e = this._rootMarginValues.map((function(e, s) {
								return "px" == e.unit ? e.value : e.value * (s % 2 ? t.width : t.height) / 100
							})),
							s = {
								top: t.top - e[0],
								right: t.right + e[1],
								bottom: t.bottom + e[2],
								left: t.left - e[3]
							};
						return s.width = s.right - s.left, s.height = s.bottom - s.top, s
					}, n.prototype._hasCrossedThreshold = function(t, e) {
						var s = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (s !== i)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == s || r == i || r < s != r < i) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(e, this.root)
					}, n.prototype._rootContainsTarget = function(t) {
						return c(this.root || e, t)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var t = s.indexOf(this); - 1 != t && s.splice(t, 1)
					}, t.IntersectionObserver = n, t.IntersectionObserverEntry = i
				}

				function i(t) {
					this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!t.intersectionRect;
					var e = this.boundingClientRect,
						s = e.width * e.height,
						i = this.intersectionRect,
						n = i.width * i.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(t, e) {
					var s, i, n, r = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), i))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function r(t, e, s, i) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, s, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, s)
				}

				function o(t, e, s, i) {
					"function" == typeof t.removeEventListener ? t.removeEventListener(e, s, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, s)
				}

				function a(t) {
					var e;
					try {
						e = t.getBoundingClientRect()
					} catch (s) {}
					return e ? (e.width && e.height || (e = {
						top: e.top,
						right: e.right,
						bottom: e.bottom,
						left: e.left,
						width: e.right - e.left,
						height: e.bottom - e.top
					}), e) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function c(t, e) {
					for (var s = e; s;) {
						if (s == t) return !0;
						s = d(s)
					}
					return !1
				}

				function d(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(t, e, s) {
			var i = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			t.exports = function(t, e) {
				if ((t = r(t)) < 1 || t > o) return [];
				var s = a,
					d = c(t, a);
				e = n(e), t -= a;
				for (var l = i(d, e); ++s < t;) e(s);
				return l
			}
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(t, e, s) {
			"use strict";
			var i = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(t => t.default)
			});
			e.a = n
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(t, e, s) {
			t.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return d
			})), s.d(e, "a", (function() {
				return l
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = t => {
					let {
						message: e
					} = t;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, e || i.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(o.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, i.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = t => {
					let {
						message: e
					} = t;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, e || i.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(o.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, i.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(t, e, s) {
			t.exports = {
				Container: "_3oYTbP0ZV-MANTieSFQJh4",
				container: "_3oYTbP0ZV-MANTieSFQJh4",
				Icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				Text: "_2Q3cQEpLSLir19P36HjMsM",
				text: "_2Q3cQEpLSLir19P36HjMsM",
				Link: "_2WjUac0CWJTaeqSTapZxRS",
				link: "_2WjUac0CWJTaeqSTapZxRS",
				Name: "_2wytGTWEsoZfbD_7szYe7p",
				name: "_2wytGTWEsoZfbD_7szYe7p",
				Meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				Members: "wipHspsmXyJJfAajdJPON",
				members: "wipHspsmXyJJfAajdJPON",
				About: "_3qHKAeck1ZFLJpNms-2TDT",
				about: "_3qHKAeck1ZFLJpNms-2TDT",
				VisitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				visitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				SubscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				subscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				hidden: "_2s4ITweJE8SSEgLGNY1LCw"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(t, e, s) {
			t.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(t, e, s) {
			t.exports = {
				Container: "_ZTq8EBsRouOv-sGGDFEG",
				container: "_ZTq8EBsRouOv-sGGDFEG",
				Content: "_1gOnjMfh6AZJPpWVWm4hdl",
				content: "_1gOnjMfh6AZJPpWVWm4hdl",
				cardWidth: "kt6mctm16gX4BAz4UkP7F",
				fullWidth: "_13SEe8eTugXMSewCNKUSur",
				Header: "_6HVKzUwnWtxEz7ZXIZ52z",
				header: "_6HVKzUwnWtxEz7ZXIZ52z",
				Title: "_3xUDHcNgeNVz7fD8H1kUy7",
				title: "_3xUDHcNgeNVz7fD8H1kUy7",
				Subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				Tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				Tab: "_2uHXZPL50rkqc9W6hfkMqh",
				tab: "_2uHXZPL50rkqc9W6hfkMqh",
				active: "_6HS8TG3gGfQ0riebWteWQ",
				focus: "_25AQL5oJuA5PKbvrdQ4SPp"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(t, e, s) {
			t.exports = {
				Container: "_34DPWmU2xtTM5k6LzxRyBK",
				container: "_34DPWmU2xtTM5k6LzxRyBK",
				SidebarRight: "xN-Lax46afWDvxNsgO_qV",
				sidebarRight: "xN-Lax46afWDvxNsgO_qV",
				TopicTab: "_1w8swivzpCaiRZVhoHJCf2",
				topicTab: "_1w8swivzpCaiRZVhoHJCf2",
				active: "ADUh7gkavNOAWKFsG3XAh",
				TabHeader: "_1muyR0TUeh2SYSizmqyfRP",
				tabHeader: "_1muyR0TUeh2SYSizmqyfRP",
				TabTitle: "XrV8c7ORQWcvL04ZOGcvh",
				tabTitle: "XrV8c7ORQWcvL04ZOGcvh"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				p = s("./src/reddit/components/SEOTitle/index.tsx"),
				b = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				g = s("./src/reddit/components/TopicSidebar/index.tsx"),
				_ = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				f = s("./src/reddit/constants/listings.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/trackers/screenview.ts"),
				y = s("./src/reddit/layout/page/Listing/index.tsx"),
				x = s("./src/reddit/pages/ErrorPages/index.tsx"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/SubredditIcon/index.tsx"),
				N = s("./src/reddit/components/SubscribeButton/index.tsx"),
				O = s("./src/reddit/constants/posts.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				P = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				M = s.n(j);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = Object(o.c)({
				isLoggedIn: R.H,
				subreddit: k.Q,
				subredditAboutInfo: (t, e) => {
					let {
						subredditId: s
					} = e;
					return t.subreddits.about[s]
				}
			}), F = Object(r.b)(W), G = {
				text: "nsfw",
				type: P.f.Nsfw
			};
			var V = F(t => {
					const {
						className: e,
						isLoggedIn: s,
						subreddit: i,
						subredditAboutInfo: r
					} = t, o = Object(C.b)(i.displayText || i.name);
					return n.a.createElement("div", {
						className: Object(a.a)(M.a.Container, e)
					}, n.a.createElement(S.b, {
						className: M.a.Icon,
						subredditOrProfile: i
					}), n.a.createElement("div", {
						className: M.a.Text
					}, n.a.createElement(w.a, {
						className: M.a.Link,
						to: i.url
					}, n.a.createElement("div", {
						className: M.a.Name
					}, o), n.a.createElement("div", {
						className: M.a.Meta
					}, n.a.createElement("div", {
						className: M.a.Members
					}, H._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [H._plural(i.subscribers, "subscribers count", Object(L.b)(i.subscribers))], {
						hk: "48BXj1"
					})), i.isNSFW && n.a.createElement(I.b, {
						flair: G
					}))), n.a.createElement("div", {
						className: M.a.About
					}, r.publicDescription || H._("Welcome to {subreddit name}", [H._param("subreddit name", o)], {
						hk: "vZ7VH"
					})), n.a.createElement(w.a, {
						className: M.a.VisitLink,
						to: i.url
					}, H._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement(N.a, {
						className: Object(a.a)(M.a.SubscribeButton, {
							[M.a.hidden]: !s
						}),
						identifier: {
							name: i.name,
							type: O.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				A = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				J = s.n(A);

			function Z(t) {
				const {
					subredditIds: e = []
				} = t;
				return n.a.createElement("div", {
					className: J.a.SubredditList
				}, e.map(t => n.a.createElement(V, {
					className: J.a.Subreddit,
					key: t,
					subredditId: t
				})))
			}
			var q = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/topic.ts"),
				B = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				U = s.n(B);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Q;
			! function(t) {
				t.Communities = "communities", t.Posts = "posts"
			}(Q || (Q = {}));
			class K extends n.a.Component {
				render() {
					const {
						activeTab: t,
						className: e,
						layout: s,
						onTabClick: i,
						tabs: r,
						topicName: o
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(U.a.Container, e)
					}, n.a.createElement("div", {
						className: Object(a.a)(U.a.Content, s === v.g.Large ? U.a.cardWidth : U.a.fullWidth)
					}, n.a.createElement("div", {
						className: U.a.Header
					}, n.a.createElement("div", {
						className: U.a.Title
					}, n.a.createElement(p.b, {
						type: p.a.TopicHeader
					}, o)), n.a.createElement("div", {
						className: U.a.Subtitle
					}, z._("Topic on Reddit", null, {
						hk: "1HEhmv"
					}))), n.a.createElement("div", {
						className: U.a.Tabs
					}, r.includes(Q.Posts) && n.a.createElement("div", {
						className: Object(a.a)(U.a.Tab, {
							[U.a.active]: t === Q.Posts
						}),
						onClick: () => i(Q.Posts)
					}, z._("Posts", null, {
						hk: "3RLrle"
					})), r.includes(Q.Communities) && n.a.createElement("div", {
						className: Object(a.a)(U.a.Tab, {
							[U.a.active]: t === Q.Communities
						}),
						onClick: () => i(Q.Communities)
					}, z._("Communities", null, {
						hk: "KIwd1"
					})))))
				}
			}
			var X = K,
				Y = s("./src/reddit/pages/Topic/index.m.less"),
				$ = s.n(Y);
			const {
				fbt: tt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), et = Object(T.t)(), st = (t, e) => e.match.params.sort || c.O, it = t => {
				const e = [];
				return t ? (t.hasPosts && e.push(Q.Posts), t.hasSubreddits && e.push(Q.Communities), e) : e
			}, nt = Object(r.b)(() => Object(o.a)((t, e) => Object(D.c)(t, e.match.params.topicSlug, !0), (t, e) => Object(D.a)(t, {
				topicSlug: e.match.params.topicSlug
			}), T.N, st, q.c, (t, e, s, i, n) => ({
				layout: s,
				sort: i,
				status: n || 200,
				tabs: it(e),
				timeSort: void 0,
				topic: e,
				topicName: t
			})), (t, e) => ({
				onLoadMorePosts: () => t(Object(l.h)(e.match.params))
			})), rt = (t, e) => t === Q.Communities ? v.g.Large : e;
			class ot extends n.a.Component {
				constructor(t) {
					super(t), this.openTab = t => {
						this.setState({
							activeTab: t,
							activeLayout: rt(t, this.props.layout)
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(Q.Communities)
					}, this.onViewed = (t, e) => Object(E.e)(Object(d.a)(f.b.Topic, null, {
						topicSlug: this.props.topic.slug
					}), this.props.sort, e, t, this.props.timeSort), this.renderNoPosts = () => null, this.renderHeader = () => {
						const {
							topicName: t
						} = this.props, {
							activeLayout: e,
							activeTab: s
						} = this.state;
						let i, r = !1;
						return s === Q.Posts ? (i = tt._("Posts about {topic name}", [tt._param("topic name", t)], {
							hk: "3AGfU"
						}), r = !0) : s === Q.Communities && (i = tt._("Communities related to {topic name}", [tt._param("topic name", t)], {
							hk: "jKM0V"
						})), n.a.createElement("div", {
							className: $.a.TabHeader
						}, n.a.createElement("div", {
							className: $.a.TabTitle
						}, n.a.createElement(p.b, {
							type: p.a.Widget
						}, i)), r && n.a.createElement(u.a, {
							className: $.a.PostsLayoutSwitch,
							layout: v.e[e]
						}))
					}, this.state = {
						activeTab: void 0,
						activeLayout: v.g.Large
					}
				}
				static getDerivedStateFromProps(t, e) {
					const s = e.activeTab && t.tabs.includes(e.activeTab) && e.activeTab,
						i = t.pageLayer && t.pageLayer.queryParams.activeTab,
						n = i && t.tabs.includes(i) && i,
						r = t.tabs[0],
						o = s || n || r;
					return {
						activeLayout: rt(o, t.layout),
						activeTab: o
					}
				}
				render() {
					const {
						className: t,
						match: e,
						status: s,
						tabs: i,
						topic: r,
						topicName: o
					} = this.props, c = e.params.topicSlug, l = Object(d.a)(f.b.Topic, null, {
						topicSlug: c
					}), {
						activeLayout: u,
						activeTab: p
					} = this.state, v = f.b.Topic;
					if (404 === s) return n.a.createElement(x.b, null);
					const T = n.a.createElement(n.a.Fragment, null, this.renderHeader(), n.a.createElement("div", {
						className: Object(a.a)($.a.TopicTab, {
							[$.a.active]: p === Q.Communities
						})
					}, n.a.createElement(Z, {
						subredditIds: r.subredditIds,
						topicSlug: c
					})), n.a.createElement("div", {
						className: Object(a.a)($.a.TopicTab, {
							[$.a.active]: p === Q.Posts
						})
					}, p === Q.Posts && n.a.createElement(h.a, {
						forcedLayout: u,
						listingKey: l,
						listingName: v,
						listingViewed: this.onViewed,
						noPostsComponent: this.renderNoPosts,
						onLoadMore: this.props.onLoadMorePosts
					}), n.a.createElement(m.a, null)));
					let E;
					return p === Q.Posts && i.includes(Q.Communities) && (E = n.a.createElement(_.a, {
						subredditIds: r.subredditIds,
						onSeeMoreCommunities: this.openCommunitiesTab,
						topicSlug: r.slug
					})), n.a.createElement(b.a, null, n.a.createElement(y.a, {
						className: Object(a.a)($.a.Container, t),
						content: T,
						fitPageToContent: !0,
						forcedLayout: u,
						sidebars: [null, n.a.createElement(g.a, {
							key: "right",
							className: $.a.SidebarRight,
							listingName: v
						}, E)],
						navBar: n.a.createElement(X, {
							activeTab: p,
							layout: u,
							onTabClick: this.openTab,
							tabs: i,
							topicName: o
						})
					}))
				}
			}
			e.default = et(nt(ot))
		}
	}
]);
//# sourceMappingURL=Topic.ea965c7168d31bdabf6d.js.map