// https://www.redditstatic.com/desktop2x/Topic.61cb6c694d61ebc3fc48.js
// Retrieved at 7/7/2020, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var i = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, i) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== i[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							i = t ? this._getRootRect() : {
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
								l = t && c && this._computeTargetAndRootIntersection(r, i),
								u = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: o,
									rootBounds: i,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(i, s) {
						if ("none" != e.getComputedStyle(i).display) {
							for (var n, r, o, c, l, u, m, p, h = a(i), b = d(i), g = !1; !g;) {
								var _ = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (g = !0, _ = s) : b != t.body && b != t.documentElement && "visible" != v.overflow && (_ = a(b)), _ && (n = _, r = h, o = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), u = Math.min(n.right, r.right), p = c - o, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = d(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var i = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: i.clientWidth || s.clientWidth,
								width: i.clientWidth || s.clientWidth,
								bottom: i.clientHeight || s.clientHeight,
								height: i.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, i) {
								return "px" == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100
							})),
							i = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return i.width = i.right - i.left, i.height = i.bottom - i.top, i
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (i !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == i || r == s || r < i != r < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						i.indexOf(this) < 0 && i.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = i.indexOf(this); - 1 != e && i.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = s
				}

				function s(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						i = t.width * t.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = i ? n / i : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var i, s, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (i = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							i(), n = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, i, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, i, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i)
				}

				function o(e, t, i, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, i, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (i) {}
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
					for (var i = t; i;) {
						if (i == e) return !0;
						i = d(i)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseTimes.js"),
				n = i("./node_modules/lodash/_castFunction.js"),
				r = i("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > o) return [];
				var i = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = s(d, t); ++i < e;) t(i);
				return l
			}
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => i.e("GovernanceVotingBanner").then(i.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/TopicSidebar/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, i) {
			e.exports = {
				Container: "NLtYnse6JKZ21nE9ToWsy",
				container: "NLtYnse6JKZ21nE9ToWsy",
				Link: "x3hziI2UssjSYZ-NTfIWa",
				link: "x3hziI2UssjSYZ-NTfIWa",
				Name: "_3mahZvuQBidNshKjuZLtNA",
				name: "_3mahZvuQBidNshKjuZLtNA",
				IconContainer: "_3MAQJrRF4XWnjHmhZ2e2N2",
				iconContainer: "_3MAQJrRF4XWnjHmhZ2e2N2"
			}
		},
		"./src/reddit/components/TopicSidebar/RelatedTopicList/index.m.less": function(e, t, i) {
			e.exports = {
				RelatedTopicList: "C6-K8A8N0F6L1I7R5XrU_",
				relatedTopicList: "C6-K8A8N0F6L1I7R5XrU_",
				Title: "_1bO0ds1Mq-LJei4tETXsMW",
				title: "_1bO0ds1Mq-LJei4tETXsMW"
			}
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, i) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./src/reddit/controls/Button/index.tsx"),
				a = i("./src/reddit/pages/ErrorPages/index.m.less"),
				c = i.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(o.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(o.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(e, t, i) {
			e.exports = {
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
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(e, t, i) {
			e.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(e, t, i) {
			e.exports = {
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
				focus: "_25AQL5oJuA5PKbvrdQ4SPp",
				link: "_28pKATphngn0NYq1jxqIW2",
				"parent-related-topics": "_1b2AsSM880_ExPtu4kLbtn",
				parentRelatedTopics: "_1b2AsSM880_ExPtu4kLbtn"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(e, t, i) {
			e.exports = {
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
				tabTitle: "XrV8c7ORQWcvL04ZOGcvh",
				WidgetsContainer: "_XJz3g54OuK0zp0Pm8QcB",
				widgetsContainer: "_XJz3g54OuK0zp0Pm8QcB"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/es6.array.sort.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/makeListingKey/index.ts"),
				l = i("./src/reddit/actions/pages/topic.ts"),
				u = i("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = i("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				p = i("./src/reddit/components/ListingPostList/index.tsx"),
				h = i("./src/reddit/components/SEOTitle/index.tsx"),
				b = i("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				g = i("./src/reddit/components/TopicSidebar/index.tsx"),
				_ = i("./src/reddit/controls/InternalLink/index.tsx"),
				v = i("./src/reddit/icons/svgs/Search/index.tsx"),
				f = i("./src/reddit/components/TopicSidebar/RelatedTopicList/RelatedTopic/index.m.less"),
				T = i.n(f);
			var E = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("div", {
						className: T.a.Container
					}, n.a.createElement(_.a, {
						className: T.a.Link,
						to: t.url
					}, n.a.createElement("div", {
						className: T.a.IconContainer
					}, n.a.createElement(v.a, null)), n.a.createElement("div", {
						className: T.a.Name
					}, t.namePlural)))
				},
				x = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = i("./src/reddit/components/TopicSidebar/RelatedTopicList/index.m.less"),
				L = i.n(y);

			function N(e) {
				const {
					title: t,
					topics: i
				} = e;
				return i.length ? n.a.createElement(x.a, {
					className: L.a.Container
				}, n.a.createElement("div", {
					className: L.a.Title
				}, n.a.createElement(h.b, {
					type: h.a.Widget
				}, t)), n.a.createElement("div", {
					className: L.a.RelatedTopicList
				}, i.map(e => n.a.createElement(E, {
					key: e.id,
					topic: e
				})))) : null
			}
			var S = i("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				I = i("./src/reddit/constants/listings.ts"),
				R = i("./src/reddit/constants/postLayout.ts"),
				C = i("./src/reddit/contexts/PageLayer/index.tsx"),
				O = i("./src/reddit/helpers/trackers/screenview.ts"),
				k = i("./src/reddit/layout/page/Listing/index.tsx"),
				P = i("./src/reddit/pages/ErrorPages/index.tsx"),
				w = i("./src/lib/prettyPrintNumber/index.ts"),
				j = i("./src/reddit/components/Flair/index.tsx"),
				W = i("./src/reddit/components/SubredditIcon/index.tsx"),
				M = i("./src/reddit/components/SubscribeButton/index.tsx"),
				H = i("./src/reddit/constants/posts.ts"),
				A = i("./src/reddit/helpers/name/index.ts"),
				J = i("./src/reddit/models/Flair/index.ts"),
				Z = i("./src/reddit/selectors/subreddit.ts"),
				F = i("./src/reddit/selectors/user.ts"),
				G = i("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				V = i.n(G);
			const {
				fbt: q
			} = i("./node_modules/fbt/lib/FbtPublic.js"), B = Object(o.c)({
				isLoggedIn: F.H,
				subreddit: Z.R,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.about[i]
				}
			}), U = Object(r.b)(B), z = {
				text: "nsfw",
				type: J.f.Nsfw
			};
			var D = U(e => {
					const {
						className: t,
						isLoggedIn: i,
						subreddit: s,
						subredditAboutInfo: r
					} = e, o = Object(A.b)(s.displayText || s.name);
					return n.a.createElement("div", {
						className: Object(a.a)(V.a.Container, t)
					}, n.a.createElement(W.b, {
						className: V.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: V.a.Text
					}, n.a.createElement(_.a, {
						className: V.a.Link,
						to: s.url
					}, n.a.createElement("div", {
						className: V.a.Name
					}, o), n.a.createElement("div", {
						className: V.a.Meta
					}, n.a.createElement("div", {
						className: V.a.Members
					}, q._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [q._plural(s.subscribers, "subscribers count", Object(w.b)(s.subscribers))], {
						hk: "48BXj1"
					})), s.isNSFW && n.a.createElement(j.b, {
						flair: z
					}))), n.a.createElement("div", {
						className: V.a.About
					}, r.publicDescription || q._("Welcome to {subreddit name}", [q._param("subreddit name", o)], {
						hk: "vZ7VH"
					})), n.a.createElement(_.a, {
						className: V.a.VisitLink,
						to: s.url
					}, q._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement(M.a, {
						className: Object(a.a)(V.a.SubscribeButton, {
							[V.a.hidden]: !i
						}),
						identifier: {
							name: s.name,
							type: H.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				K = i("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				Q = i.n(K);

			function X(e) {
				const {
					subredditIds: t = []
				} = e;
				return n.a.createElement("div", {
					className: Q.a.SubredditList
				}, t.map(e => n.a.createElement(D, {
					className: Q.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var Y = i("./src/reddit/selectors/platform.ts"),
				$ = i("./src/reddit/selectors/topic.ts"),
				ee = i("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				te = i.n(ee);
			const {
				fbt: ie
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var se;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts"
			}(se || (se = {}));
			class ne extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: te.a.parentRelatedTopics
					}, e.map((e, t) => {
						let {
							namePlural: i,
							url: s
						} = e;
						return n.a.createElement("li", {
							key: t
						}, n.a.createElement(_.a, {
							className: te.a.link,
							to: s
						}, i))
					})) : ie._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: i,
						onTabClick: s,
						tabs: r,
						topicName: o
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(te.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(a.a)(te.a.Content, i === R.g.Large ? te.a.cardWidth : te.a.fullWidth)
					}, n.a.createElement("div", {
						className: te.a.Header
					}, n.a.createElement("div", {
						className: te.a.Title
					}, n.a.createElement(h.b, {
						type: h.a.TopicHeader
					}, o)), n.a.createElement("div", {
						className: te.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: te.a.Tabs
					}, r.includes(se.Posts) && n.a.createElement("div", {
						className: Object(a.a)(te.a.Tab, {
							[te.a.active]: e === se.Posts
						}),
						onClick: () => s(se.Posts)
					}, ie._("Posts", null, {
						hk: "3RLrle"
					})), r.includes(se.Communities) && n.a.createElement("div", {
						className: Object(a.a)(te.a.Tab, {
							[te.a.active]: e === se.Communities
						}),
						onClick: () => s(se.Communities)
					}, ie._("Communities", null, {
						hk: "KIwd1"
					})))))
				}
			}
			var re = ne,
				oe = i("./src/reddit/pages/Topic/index.m.less"),
				ae = i.n(oe);
			const {
				fbt: ce
			} = i("./node_modules/fbt/lib/FbtPublic.js"), de = Object(C.t)(), le = (e, t) => t.match.params.sort || c.P, ue = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(se.Posts), e.hasSubreddits && t.push(se.Communities), t) : t
			}, me = Object(r.b)(() => Object(o.a)((e, t) => Object($.e)(e, t.match.params.topicSlug, !0), (e, t) => Object($.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object($.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object($.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), C.N, le, Y.c, (e, t, i, s, n, r, o) => ({
				layout: n,
				parentRelatedTopics: i,
				siblingRelatedTopics: s,
				sort: r,
				status: o || 200,
				tabs: ue(t),
				timeSort: void 0,
				topic: t,
				topicName: e
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.h)(t.match.params))
			})), pe = (e, t) => e === se.Communities ? R.g.Large : t;
			class he extends n.a.Component {
				constructor(e) {
					super(e), this.openTab = e => {
						this.setState({
							activeTab: e,
							activeLayout: pe(e, this.props.layout)
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(se.Communities)
					}, this.onViewed = (e, t) => Object(O.e)(Object(d.a)(I.b.Topic, null, {
						topicSlug: this.props.topic.slug
					}), this.props.sort, t, e, this.props.timeSort), this.renderNoPosts = () => null, this.renderHeader = () => {
						const {
							topicName: e
						} = this.props, {
							activeLayout: t,
							activeTab: i
						} = this.state;
						let s, r = !1;
						return i === se.Posts ? (s = ce._("Posts about {topic name}", [ce._param("topic name", e)], {
							hk: "3AGfU"
						}), r = !0) : i === se.Communities && (s = ce._("Communities related to {topic name}", [ce._param("topic name", e)], {
							hk: "jKM0V"
						})), n.a.createElement("div", {
							className: ae.a.TabHeader
						}, n.a.createElement("div", {
							className: ae.a.TabTitle
						}, n.a.createElement(h.b, {
							type: h.a.Widget
						}, s)), r && n.a.createElement(u.a, {
							className: ae.a.PostsLayoutSwitch,
							layout: R.e[t]
						}))
					}, this.state = {
						activeTab: void 0,
						activeLayout: R.g.Large
					}
				}
				static getDerivedStateFromProps(e, t) {
					const i = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						s = e.pageLayer && e.pageLayer.queryParams.activeTab,
						n = s && e.tabs.includes(s) && s,
						r = e.tabs[0],
						o = i || n || r;
					return {
						activeLayout: pe(o, e.layout),
						activeTab: o
					}
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: i,
						siblingRelatedTopics: s,
						status: r,
						tabs: o,
						topic: c,
						topicName: l
					} = this.props, u = t.params.topicSlug, h = Object(d.a)(I.b.Topic, null, {
						topicSlug: u
					}), {
						activeLayout: _,
						activeTab: v
					} = this.state, f = I.b.Topic;
					if (404 === r) return n.a.createElement(P.b, null);
					if (!c) return null;
					const T = n.a.createElement(n.a.Fragment, null, this.renderHeader(), n.a.createElement("div", {
							className: Object(a.a)(ae.a.TopicTab, {
								[ae.a.active]: v === se.Communities
							})
						}, n.a.createElement(X, {
							subredditIds: c.subredditIds
						})), n.a.createElement("div", {
							className: Object(a.a)(ae.a.TopicTab, {
								[ae.a.active]: v === se.Posts
							})
						}, v === se.Posts && n.a.createElement(p.a, {
							forcedLayout: _,
							listingKey: h,
							listingName: f,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						}), n.a.createElement(m.a, null))),
						E = v === se.Posts && o.includes(se.Communities),
						x = n.a.createElement("div", {
							className: ae.a.WidgetsContainer
						}, E && n.a.createElement(S.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: c.subredditIds,
							topicUrl: c.url
						}), c.childRelationships.map(e => {
							let {
								slug: t,
								namePlural: i,
								relatedTopics: s
							} = e;
							return n.a.createElement(N, {
								key: t,
								title: i,
								topics: s
							})
						}), n.a.createElement(N, {
							title: ce._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: s
						}));
					return n.a.createElement(b.a, null, n.a.createElement(k.a, {
						className: Object(a.a)(ae.a.Container, e),
						content: T,
						fitPageToContent: !0,
						forcedLayout: _,
						sidebars: [null, n.a.createElement(g.a, {
							key: "right",
							className: ae.a.SidebarRight,
							listingName: f
						}, x)],
						navBar: n.a.createElement(re, {
							activeTab: v,
							layout: _,
							onTabClick: this.openTab,
							parentRelatedTopics: i,
							tabs: o,
							topicName: l
						})
					}))
				}
			}
			t.default = de(me(he))
		}
	}
]);
//# sourceMappingURL=Topic.61cb6c694d61ebc3fc48.js.map