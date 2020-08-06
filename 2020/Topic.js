// https://www.redditstatic.com/desktop2x/Topic.188dd961c4b0914d2fa5.js
// Retrieved at 8/6/2020, 5:00:07 PM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
								a = o(r),
								c = this._rootContainsTarget(r),
								l = n.entry,
								d = t && c && this._computeTargetAndRootIntersection(r, i),
								p = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: a,
									rootBounds: i,
									intersectionRect: d
								});
							l ? t && c ? this._hasCrossedThreshold(l, p) && this._queuedEntries.push(p) : l && l.isIntersecting && this._queuedEntries.push(p) : this._queuedEntries.push(p)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(i, s) {
						if ("none" != e.getComputedStyle(i).display) {
							for (var n, r, a, c, d, p, u, m, h = o(i), b = l(i), T = !1; !T;) {
								var g = null,
									_ = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == _.display) return;
								if (b == this.root || b == t ? (T = !0, g = s) : b != t.body && b != t.documentElement && "visible" != _.overflow && (g = o(b)), g && (n = g, r = h, a = void 0, c = void 0, d = void 0, p = void 0, u = void 0, m = void 0, a = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), d = Math.max(n.left, r.left), p = Math.min(n.right, r.right), m = c - a, !(h = (u = p - d) >= 0 && m >= 0 && {
										top: a,
										bottom: c,
										left: d,
										right: p,
										width: u,
										height: m
									}))) break;
								b = l(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = o(this.root);
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

				function a(e, t, i, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, i, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
				}

				function o(e) {
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
						i = l(i)
					}
					return !1
				}

				function l(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseTimes.js"),
				n = i("./node_modules/lodash/_castFunction.js"),
				r = i("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var i = o,
					l = c(e, o);
				t = n(t), e -= o;
				for (var d = s(l, t); ++i < e;) t(i);
				return d
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
		"./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, i) {
			e.exports = {
				Container: "_3tJhQnCiKKw7zk005rnKPi",
				container: "_3tJhQnCiKKw7zk005rnKPi",
				Link: "_1UplSBT2HFX_QHDhVZMx8r",
				link: "_1UplSBT2HFX_QHDhVZMx8r",
				Name: "_36r6mQVhaj58SDTd9Wt-eY",
				name: "_36r6mQVhaj58SDTd9Wt-eY",
				IconContainer: "_1OzhHh5MZVj92UtAsjBwp5",
				iconContainer: "_1OzhHh5MZVj92UtAsjBwp5"
			}
		},
		"./src/reddit/components/RelatedTopicList/index.m.less": function(e, t, i) {
			e.exports = {
				RelatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				relatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				Title: "_5MwovlatIWVRLVWJt1vCL",
				title: "_5MwovlatIWVRLVWJt1vCL"
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
				return l
			})), i.d(t, "a", (function() {
				return d
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./src/reddit/controls/Button/index.tsx"),
				o = i("./src/reddit/pages/ErrorPages/index.m.less"),
				c = i.n(o);
			const l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(a.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/Topic/Relationship/index.m.less": function(e, t, i) {
			e.exports = {
				SeeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				seeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				TopicName: "dJ3xe2Nf-vhZ6EYI5mouf",
				topicName: "dJ3xe2Nf-vhZ6EYI5mouf"
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
		"./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less": function(e, t, i) {
			e.exports = {
				RelationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				relationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				"m-active": "_1SmckvvCqb57y8BYkTM8ew",
				mActive: "_1SmckvvCqb57y8BYkTM8ew"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/index.m.less": function(e, t, i) {
			e.exports = {
				TabHeader: "a44uJVg_2f6Tls24pgm7O",
				tabHeader: "a44uJVg_2f6Tls24pgm7O",
				TabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q",
				tabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less": function(e, t, i) {
			e.exports = {
				Tab: "zB167v8VzkVM9pUFETGba",
				tab: "zB167v8VzkVM9pUFETGba",
				ActiveTab: "_1jUOuw0_aUnqYgs8j-VWYa",
				activeTab: "_1jUOuw0_aUnqYgs8j-VWYa"
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
				r = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/lib/constants/index.ts"),
				c = i("./src/lib/makeListingKey/index.ts"),
				l = i("./node_modules/react-redux/es/index.js"),
				d = i("./src/reddit/actions/pages/topic.ts"),
				p = i("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				u = i("./src/reddit/components/ListingPostList/index.tsx"),
				m = i("./src/reddit/controls/InternalLink/index.tsx"),
				h = i("./src/reddit/icons/svgs/Search/index.tsx"),
				b = i("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				T = i.n(b);
			var g = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("span", {
						className: T.a.Container
					}, n.a.createElement(m.a, {
						className: T.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: T.a.IconContainer
					}, n.a.createElement(h.a, null)), n.a.createElement("span", {
						className: T.a.Name
					}, t.namePlural)))
				},
				_ = i("./src/reddit/components/SEOTitle/index.tsx"),
				v = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = i("./src/reddit/components/RelatedTopicList/index.m.less"),
				x = i.n(f);

			function E(e) {
				const {
					children: t,
					limit: i,
					title: s,
					topics: r
				} = e;
				return r.length ? n.a.createElement(v.a, {
					className: x.a.Container
				}, s && n.a.createElement("div", {
					className: x.a.Title
				}, n.a.createElement(_.b, {
					type: _.a.Widget
				}, s)), n.a.createElement("div", {
					className: x.a.RelatedTopicList
				}, r.slice(0, i).map(e => n.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var y = i("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				R = i("./src/reddit/components/TopicSidebar/index.tsx"),
				C = i("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				N = i("./src/reddit/constants/listings.ts"),
				I = i("./src/reddit/constants/postLayout.ts"),
				L = i("./src/reddit/contexts/PageLayer/index.tsx"),
				k = i("./src/reddit/helpers/trackers/screenview.ts"),
				S = i("./src/reddit/layout/page/Listing/index.tsx"),
				O = i("./src/reddit/pages/ErrorPages/index.tsx"),
				w = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = i("./src/reddit/controls/Button/index.tsx"),
				P = i("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				H = i.n(P);
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							onTabClick: e,
							tab: t
						} = this.props;
						e(t)
					}
				}
				render() {
					const {
						activeTab: e,
						children: t,
						tab: i,
						tabs: s
					} = this.props;
					return s.includes(i) ? n.a.createElement("div", {
						className: Object(a.a)(H.a.Tab, {
							[H.a.ActiveTab]: i === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var W = M,
				V = i("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				J = i.n(V);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: F
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var U;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(U || (U = {}));
			class z extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: J.a.parentRelatedTopics
					}, e.map((e, t) => {
						let {
							namePlural: i,
							url: s
						} = e;
						return n.a.createElement("li", {
							key: t
						}, n.a.createElement(m.a, {
							className: J.a.link,
							to: s
						}, i))
					})) : F._("Topic on Reddit", null, {
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
					} = this.props, c = {
						activeTab: e,
						onTabClick: s,
						tabs: r
					};
					return n.a.createElement("div", {
						className: Object(a.a)(J.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(a.a)(J.a.Content, i === I.g.Large ? J.a.cardWidth : J.a.fullWidth)
					}, n.a.createElement("div", {
						className: J.a.Header
					}, n.a.createElement("div", {
						className: J.a.Title
					}, n.a.createElement(_.b, {
						type: _.a.TopicHeader
					}, o)), n.a.createElement("div", {
						className: J.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: J.a.Tabs
					}, n.a.createElement(W, A({
						tab: U.Posts
					}, c), F._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(W, A({
						tab: U.Communities
					}, c), F._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(W, A({
						tab: U.RelatedTopics
					}, c), F._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var B = z,
				D = i("./src/reddit/pages/Topic/Relationship/index.m.less"),
				Z = i.n(D);
			const {
				fbt: G
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			class q extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(U.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return n.a.createElement(E, {
						limit: 5,
						title: e,
						topics: t
					}, n.a.createElement(w.a, {
						onClick: this.onClick,
						to: "#"
					}, n.a.createElement(j.n, {
						className: Z.a.SeeAllRelatedTopics
					}, G._("See all {=[Topic name plural]}", [G._param("=[Topic name plural]", n.a.createElement("span", {
						className: Z.a.TopicName
					}, G._("{Topic name plural}", [G._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					}))))
				}
			}
			var Y = q,
				K = i("./src/lib/prettyPrintNumber/index.ts"),
				Q = i("./src/reddit/components/Flair/index.tsx"),
				X = i("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = i("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = i("./src/reddit/constants/posts.ts"),
				te = i("./src/reddit/helpers/name/index.ts"),
				ie = i("./src/reddit/models/Flair/index.ts"),
				se = i("./src/reddit/selectors/subreddit.ts"),
				ne = i("./src/reddit/selectors/user.ts"),
				re = i("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				ae = i.n(re);
			const {
				fbt: oe
			} = i("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(r.c)({
				isLoggedIn: ne.H,
				subreddit: se.Q,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.about[i]
				}
			}), le = Object(l.b)(ce), de = {
				text: "nsfw",
				type: ie.f.Nsfw
			};
			var pe = le(e => {
					const {
						className: t,
						isLoggedIn: i,
						subreddit: s,
						subredditAboutInfo: r
					} = e, o = Object(te.b)(s.displayText || s.name);
					return n.a.createElement("div", {
						className: Object(a.a)(ae.a.Container, t)
					}, n.a.createElement(X.b, {
						className: ae.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: ae.a.Text
					}, n.a.createElement(m.a, {
						className: ae.a.Link,
						to: s.url
					}, n.a.createElement("div", {
						className: ae.a.Name
					}, o), n.a.createElement("div", {
						className: ae.a.Meta
					}, n.a.createElement("div", {
						className: ae.a.Members
					}, oe._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [oe._plural(s.subscribers, "subscribers count", Object(K.b)(s.subscribers))], {
						hk: "48BXj1"
					})), s.isNSFW && n.a.createElement(Q.b, {
						flair: de
					}))), n.a.createElement("div", {
						className: ae.a.About
					}, r.publicDescription || oe._("Welcome to {subreddit name}", [oe._param("subreddit name", o)], {
						hk: "vZ7VH"
					})), n.a.createElement(m.a, {
						className: ae.a.VisitLink,
						to: s.url
					}, oe._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement($.a, {
						className: Object(a.a)(ae.a.SubscribeButton, {
							[ae.a.hidden]: !i
						}),
						identifier: {
							name: s.name,
							type: ee.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				ue = i("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				me = i.n(ue);

			function he(e) {
				const {
					subredditIds: t = []
				} = e;
				return n.a.createElement("div", {
					className: me.a.SubredditList
				}, t.map(e => n.a.createElement(pe, {
					className: me.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var be = i("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				Te = i("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				ge = i.n(Te);
			class _e extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(U.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: i
					} = this.props, s = i === e;
					return n.a.createElement("div", {
						className: Object(a.a)(ge.a.RelationshipTab, {
							[ge.a.mActive]: s
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var ve = _e,
				fe = i("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				xe = i.n(fe);
			const {
				fbt: Ee
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			class ye extends n.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: i,
							onTabClick: s
						} = this.props;
						return n.a.createElement(ve, {
							activeIndex: i,
							index: t,
							key: e.slug,
							onTabClick: s,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => n.a.createElement("div", {
						className: xe.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicName: t
						} = this.props;
						return e === U.Posts ? Ee._("Posts about {topic name}", [Ee._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === U.Communities ? Ee._("Communities related to {topic name}", [Ee._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, i = t === U.Posts;
					return t === U.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: xe.a.TabHeader
					}, n.a.createElement("div", {
						className: xe.a.TabTitle
					}, n.a.createElement(_.b, {
						type: _.a.Widget
					}, this.renderTitle())), i && n.a.createElement(be.a, {
						className: xe.a.PostsLayoutSwitch,
						layout: I.e[e]
					}))
				}
			}
			var Re = ye,
				Ce = i("./src/reddit/selectors/platform.ts"),
				Ne = i("./src/reddit/selectors/topic.ts"),
				Ie = i("./src/reddit/pages/Topic/index.m.less"),
				Le = i.n(Ie);
			const {
				fbt: ke
			} = i("./node_modules/fbt/lib/FbtPublic.js"), Se = Object(L.t)(), Oe = (e, t) => t.match.params.sort || o.P, we = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(U.Posts), e.hasSubreddits && t.push(U.Communities), e.childRelationships.length && t.push(U.RelatedTopics), t) : t
			}, je = Object(l.b)(() => Object(r.a)((e, t) => Object(Ne.e)(e, t.match.params.topicSlug, !0), (e, t) => Object(Ne.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ne.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ne.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), L.N, Oe, Ce.c, (e, t, i, s, n, r, a) => ({
				layout: n,
				parentRelatedTopics: i,
				siblingRelatedTopics: s,
				sort: r,
				status: a || 200,
				tabs: we(t),
				timeSort: void 0,
				topic: t,
				topicName: e
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(d.h)(t.match.params))
			})), Pe = (e, t) => e === U.Communities ? I.g.Large : t;
			class He extends n.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.openTab = function(e) {
						let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						t.setState({
							activeLayout: Pe(e, t.props.layout),
							activeRelationshipIndex: i,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(U.Communities)
					}, this.onViewed = (e, t) => Object(k.e)(Object(c.a)(N.b.Topic, null, {
						topicSlug: this.props.topic.slug
					}), this.props.sort, t, e, this.props.timeSort), this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(Y, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: I.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const i = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						s = e.pageLayer && e.pageLayer.queryParams.activeTab,
						n = s && e.tabs.includes(s) && s,
						r = e.tabs[0],
						a = i || n || r;
					return {
						activeLayout: Pe(a, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: a
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
						topic: l,
						topicName: d
					} = this.props, m = t.params.topicSlug, h = Object(c.a)(N.b.Topic, null, {
						topicSlug: m
					}), {
						activeLayout: b,
						activeRelationshipIndex: T,
						activeTab: g
					} = this.state, _ = N.b.Topic;
					if (404 === r) return n.a.createElement(O.b, null);
					if (!l) return null;
					const v = l.childRelationships[T],
						f = v && v.relatedTopics || [],
						x = n.a.createElement(n.a.Fragment, null, n.a.createElement(Re, {
							activeLayout: b,
							activeRelationshipIndex: T,
							activeTab: g,
							onTabClick: this.openTab,
							topic: l,
							topicName: d
						}), n.a.createElement("div", {
							className: Object(a.a)(Le.a.TopicTab, {
								[Le.a.active]: g === U.Communities
							})
						}, n.a.createElement(he, {
							subredditIds: l.subredditIds
						})), n.a.createElement("div", {
							className: Object(a.a)(Le.a.TopicTab, {
								[Le.a.active]: g === U.Posts
							})
						}, g === U.Posts && n.a.createElement(u.a, {
							forcedLayout: b,
							listingKey: h,
							listingName: _,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						}), n.a.createElement(p.a, null)), n.a.createElement("div", {
							className: Object(a.a)(Le.a.TopicTab, {
								[Le.a.active]: g === U.RelatedTopics
							})
						}, n.a.createElement(E, {
							topics: f
						}))),
						I = g !== U.RelatedTopics,
						L = g !== U.Communities && o.includes(U.Communities),
						k = n.a.createElement("div", {
							className: Le.a.WidgetsContainer
						}, L && n.a.createElement(C.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: l.subredditIds,
							topicUrl: l.url
						}), I && l.childRelationships.map(this.renderRelationship), n.a.createElement(E, {
							limit: 5,
							title: ke._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: s
						}));
					return n.a.createElement(y.a, null, n.a.createElement(S.a, {
						className: Object(a.a)(Le.a.Container, e),
						content: x,
						fitPageToContent: !0,
						forcedLayout: b,
						sidebars: [null, n.a.createElement(R.a, {
							key: "right",
							className: Le.a.SidebarRight,
							listingName: _
						}, k)],
						navBar: n.a.createElement(B, {
							activeTab: g,
							layout: b,
							onTabClick: this.openTab,
							parentRelatedTopics: i,
							tabs: o,
							topicName: d
						})
					}))
				}
			}
			t.default = Se(je(He))
		}
	}
]);
//# sourceMappingURL=Topic.188dd961c4b0914d2fa5.js.map