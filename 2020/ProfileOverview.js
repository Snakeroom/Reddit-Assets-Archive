// https://www.redditstatic.com/desktop2x/ProfileOverview.5e60e782fa88d2d8c482.js
// Retrieved at 2/3/2020, 5:30:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic", "ModListing~Multireddit~ProfilePosts", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder"], {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var r = n.element,
								i = a(r),
								c = this._rootContainsTarget(r),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(r, s),
								m = n.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, o) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, r, i, c, l, m, p, u, h = a(s), b = d(s), x = !1; !x;) {
								var g = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (x = !0, g = o) : b != t.body && b != t.documentElement && "visible" != v.overflow && (g = a(b)), g && (n = g, r = h, i = void 0, c = void 0, l = void 0, m = void 0, p = void 0, u = void 0, i = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), m = Math.min(n.right, r.right), u = c - i, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								b = d(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var s = t.documentElement,
								o = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || o.clientWidth,
								width: s.clientWidth || o.clientWidth,
								bottom: s.clientHeight || o.clientHeight,
								height: s.clientHeight || o.clientHeight
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
							o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== o)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == s || r == o || r < s != r < o) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = o
				}

				function o(e) {
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
						o = this.intersectionRect,
						n = o.width * o.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, o, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), o))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, o) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, o || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, o) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, o || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
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
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), o(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = o(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement(i.a, d({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				P = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./node_modules/react-redux/es/index.js"),
				N = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/chatPost.ts"),
				B = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/monthsToMinutes.ts"),
				W = s("./src/reddit/selectors/postFlair.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts");
			const G = {
					autoplayPref: U.b,
					activeModalId: A.a,
					crosspost: V.c,
					currentUser: U.i,
					isActive: V.g,
					isChatPostExperiment: F.d,
					isCurrentUserProfilePost: V.h,
					isExpanded: V.j,
					isFrontpageHome: H.g,
					isM2MHomeRedirectEnabled: B.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(V.o)(e, s)
					},
					language: U.S,
					moderatorPermissions: D.i,
					modModeEnabled: R.O,
					post: V.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: W.a,
					showMedia: R.r,
					subredditOrProfile: V.U,
					userIsOp: U.jb,
					flairStyleTemplate: R.Q
				},
				z = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === L.a.upvoted ? Object(T.N)(n) : Object(T.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.L)(n)),
						onOpenReportsDropdown: t => e(Object(M.g)({
							tooltipId: t
						}))
					}
				},
				K = Object(_.b)(() => Object(N.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var q = s("./src/lib/LRUCache/index.ts");
			const Q = Object(R.t)({
					searchQuery: R.U
				}),
				J = new q.a(250),
				Z = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = J.get(s);
						if (void 0 === o) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								i = e.title.split(r);
							for (let e = 1; e < i.length; e += 2) i[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							o = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(i)), J.set(s, o)
						}
						return o
					}
				},
				Y = Object(_.b)(() => Object(N.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: Z(s.searchQuery || "")
				}));
			var X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				oe = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(oe);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "renderMedia", (function() {
				return ce
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return me
			}));
			const ie = 16;
			class ae extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: a,
						inSubredditOrProfile: f,
						eventFactory: _,
						first: N,
						flairStyleTemplate: T,
						formatTitle: M,
						isCheckboxSelected: L,
						isCurrentUserProfilePost: k,
						isFrontpage: R,
						isFrontpageHome: A,
						isM2MHomeRedirectEnabled: F,
						isOverlay: B,
						language: D,
						moderatorPermissions: H,
						modModeEnabled: W,
						onClickPost: V,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						poll: z,
						post: K,
						redditStyle: q,
						scrollerItemRef: Q,
						showBulkActionCheckbox: J,
						showEditFlair: Z,
						showMedia: Y,
						subredditOrProfile: te,
						toggleCheckbox: oe,
						userIsOp: ae
					} = this.props, de = q ? void 0 : T, le = this.props.crosspost || void 0, me = Object($.a)(H), pe = Object(X.a)(H), ue = W && $.a, he = !!K.media && K.media.type === S.n.RTJSON, be = ae && he, xe = f && !Y, ge = {
						flairStyleTemplate: de,
						post: K,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: k,
						isOverlay: B,
						shouldShowSubscribeButton: !(R && A),
						subredditOrProfile: te,
						language: D
					}, ve = n.a.createElement(O.a, {
						className: Object(i.a)(se.a.classicPostStyles, ne.a.postContainer, Object(ee.a)(this.props), N ? ne.a.mFirst : void 0, e),
						isOverlay: B,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: K,
						onClick: V,
						eventFactory: _
					}, n.a.createElement(E.a, {
						model: K,
						handleVote: s,
						showBulkActionCheckbox: J,
						isCheckboxSelected: L,
						toggleCheckbox: oe,
						flairStyleTemplate: de,
						redditStyle: q
					}), n.a.createElement(v.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, n.a.createElement(p.a, {
						className: ne.a.eventMeta,
						post: K,
						language: D
					}), n.a.createElement("div", {
						className: ne.a.mainBody
					}, n.a.createElement("div", {
						className: xe ? ne.a.expandoContainer : ne.a.thumbnailContainer
					}, !xe && n.a.createElement(I.a, {
						className: ne.a.classicThumbnail,
						crosspost: le && K,
						isMeta: a,
						post: le || K,
						redditStyle: q,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), n.a.createElement(u.a, {
						crosspost: le,
						className: ne.a.rightExpando,
						isExpanded: !!o,
						post: K,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: ne.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ie, "px")
						}
					}, n.a.createElement(j.c, {
						className: z ? ne.a.titleWithPoll : void 0,
						format: M,
						poll: z,
						post: K,
						redditStyle: q,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: F,
						isOverlay: B
					}, K.source && !le && n.a.createElement(w.a, {
						href: K.source.url,
						isSponsored: K.isSponsored,
						source: K.source
					}, Object(c.a)(K))), n.a.createElement(C.a, re({
						key: "PostMeta"
					}, ge)), W && me && Object(g.c)(K) && n.a.createElement(x.a, {
						language: D,
						onIgnoreReports: U,
						reportable: K
					}), n.a.createElement("div", {
						className: ne.a.spacer
					}), K.source && K.source.url && K.isSponsored && n.a.createElement(d.a, {
						className: ne.a.adLinkWrapper
					}, n.a.createElement(w.a, {
						href: K.source.url.replace(r.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.source.displayText), K.callToAction && n.a.createElement(l.a, {
						href: K.source.url.replace(r.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.callToAction)), n.a.createElement("div", {
						className: ne.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: ne.a.leftExpando,
						crosspost: le,
						isExpanded: !!o,
						post: K,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: K,
						onVoteClick: s
					}), n.a.createElement(h.a, {
						className: ne.a.flatlistSeparator
					}), n.a.createElement(h.c, {
						className: ne.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!B,
						language: D,
						modModeEnabled: W,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						post: K,
						showEditPost: be,
						showEditFlair: Z,
						tooltipType: B ? P.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), n.a.createElement(b.d, {
						postId: K.id
					}))), ce(K, Q, o)));
					return n.a.createElement(n.a.Fragment, null, ve)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: ne.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => n.a.createElement(f.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				le = Object(a.a)(ae),
				me = (e => Q(Y(e)))(le);
			t.default = (e => K(Object(k.b)(e)))(le)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking.tsx");
			const d = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, "Comment ".concat(o.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(g);
			const O = h.a.wrapped(x.a, "Show", v.a);
			var f = e => n.a.createElement(b.d, null, !e.comment.isApproved && n.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, n.a.createElement(b.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, n.a.createElement(b.f, null)), n.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, n.a.createElement(b.g, null)), n.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, n.a.createElement(b.e, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, n.a.createElement(O, null)));
			const C = h.a.wrapped(l.a, "StyledDropdown", v.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				E = Object(r.b)(y, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.H)(s.id)),
						onLockComment: () => e(Object(a.X)(s.id)),
						onRemoveComment: () => e(Object(a.cb)(s.id, !1)),
						onSpamComment: () => e(Object(a.cb)(s.id, !0)),
						onShowComment: () => e(Object(a.Y)(s.id))
					}
				}),
				j = Object(c.a)(C),
				P = E(Object(d.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: o,
						onApproveComment: r,
						onLockComment: i,
						onRemoveComment: a,
						onSpamComment: c,
						onShowComment: d,
						sendEvent: l,
						tooltipId: p
					} = e;
					return n.a.createElement(j, {
						isOpen: s,
						tooltipId: p
					}, n.a.createElement(f, {
						language: o,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							c(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							i(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = P
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				C = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				y = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				E = s.n(y);
			const j = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var P = Object(r.b)(() => Object(i.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (O.d.spTopTippers(e)) return Object(f.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = n.a.cloneElement(n.a.Children.only(e.children), {
								style: j(t)
							});
						return n.a.createElement("div", {
							className: E.a.container
						}, n.a.createElement(C.a, {
							className: E.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				w = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				M = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				k = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				F = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				W = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = s("./src/reddit/icons/fonts/helpers.tsx"),
				U = s("./src/reddit/icons/fonts/Op/index.m.less"),
				G = s.n(U);
			var z = p.a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(V.a, null, e.desc)), "OpIcon", G.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				q = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Q = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				J = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const ie = p.a.wrapped(w.b, "RightPositionedAuthorFlair", oe.a),
				ae = p.a.wrapped(D.a, "AdminIcon", oe.a),
				ce = p.a.wrapped(H.a, "Approve", oe.a),
				de = p.a.wrapped(W.a, "Lock", oe.a),
				le = p.a.div("AdminEmeritus", oe.a),
				me = p.a.wrapped(J.a, "Automoderator", oe.a),
				pe = p.a.wrapped(Z.a, "CakeIcon", oe.a),
				ue = p.a.wrapped(Y.a, "Moderator", oe.a),
				he = p.a.wrapped(K.a, "Remove", oe.a),
				be = p.a.wrapped(q.a, "Report", oe.a),
				xe = p.a.wrapped(Q.a, "Spam", oe.a),
				ge = p.a.wrapped(z, "Op", oe.a),
				ve = p.a.wrapped(D.a, "Contractor", oe.a),
				Oe = p.a.a("MetaLink", oe.a),
				fe = p.a.wrapped(X.a, "EditedText", oe.a),
				Ce = p.a.wrapped(X.a, "StickiedText", oe.a),
				ye = p.a.span("DeletedText", oe.a),
				Ee = p.a.wrapped(X.a, "MetaSeparator", oe.a),
				je = p.a.wrapped(X.a, "CrowdControlText", oe.a),
				Pe = p.a.wrapped(I.b, "AuthorHoverCard", oe.a),
				we = p.a.a("RemovalReason", oe.a),
				Se = p.a.wrapped(x.b, "Component", oe.a),
				Ie = Object(a.d)("comment.children"),
				_e = Object(a.d)("comment.moreThanChildren"),
				Ne = e => (t, s) => {
					let {
						comment: o,
						renderedInOverlay: n
					} = s;
					return "".concat(e).concat(o.id).concat(n ? "inOverlay" : "")
				},
				Te = Object(a.e)("comment.tooltips.admin"),
				Me = Object(a.e)("comment.tooltips.cakeday"),
				Le = Object(a.e)("comment.tooltips.adminEmeritus"),
				ke = Object(a.e)("comment.tooltips.moderator"),
				Re = Object(a.e)("comment.tooltips.op"),
				Ae = Object(a.e)("comment.tooltips.contractor"),
				Fe = Object(r.b)(() => Object(i.c)({
					adminTooltipId: Ne("CommentTopMeta--Admin--"),
					cakedayTooltipId: Ne("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Ne("CommentTopMeta--AdEm--"),
					automodTooltipId: Ne("CommentTopMeta--Automod--"),
					approveTooltipId: Ne("CommentTopMeta--Approve--"),
					createdTooltipId: Ne("CommentTopMeta--Created--"),
					contractorTooltipId: Ne("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ne("CommentTopMeta--Gold--"),
					lockedTooltipId: Ne("CommentTopMeta--Locked--"),
					modTooltipId: Ne("CommentTopMeta--Mod--"),
					opTooltipId: Ne("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Ne("CommentTopMeta--Remove--"),
					reportTooltipId: Ne("CommentTopMeta--Report--"),
					spamTooltipId: Ne("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(f.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: O.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(c.h)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Fe(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: o,
					automodTooltipId: r,
					cakedayTooltipId: i,
					children: a,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: x,
					compact: O,
					flair: f,
					flairPosition: C,
					hasBadges: y,
					isLivestreaming: E,
					ignoreFlairPosition: j,
					ignoreLock: P,
					language: I,
					lockedTooltipId: _,
					modTooltipId: M,
					onHideTooltip: L,
					onShowTooltip: k,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return n.a.createElement(Be, ne({}, e, {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				if (m) return n.a.createElement(De, ne({}, e, {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				const q = !j && C === B.b.Left;
				return n.a.createElement("div", {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m,
						[oe.a.hasBadges]: y,
						[oe.a.liveStreaming]: E
					})
				}, f && q && n.a.createElement(w.b, {
					flair: f,
					forceSmallEmojis: O
				}), !Object(F.d)(u) && n.a.createElement(Se, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), n.a.createElement(Pe, {
					postOrComment: u,
					tooltipType: V ? T.c.Lightbox : void 0
				}, n.a.createElement(g.b, {
					ignore: Object(F.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, n.a.createElement(We, {
					comment: u,
					isLivestreaming: E,
					isStrong: !!O,
					isAuthorDeleted: Object(F.d)(u),
					topTippersEnabled: K
				}, a && a))), p && n.a.createElement(je, null, "Crowd Control"), p && n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), f && !q && n.a.createElement(ie, {
					flair: f,
					forceSmallEmojis: O
				}), !O && n.a.createElement(S.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), n.a.createElement(n.a.Fragment, null, n.a.createElement(N.b, {
					commentId: u.id
				}), n.a.createElement(N.a, {
					commentId: u.id,
					commentsPageKey: h
				}), n.a.createElement(Ge, {
					comment: u,
					compact: O,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					language: I,
					modTooltipId: M,
					onHideTooltip: L,
					onShowTooltip: k,
					opTooltipId: R,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !O && n.a.createElement(n.a.Fragment, null, !u.isDeleted && n.a.createElement(X.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: I,
					score: u.score
				}), n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), n.a.createElement(Ve, ne({
					key: "Created"
				}, e)), u.isStickied && Ke(I), u.editedAt && He(I, u.editedAt)), n.a.createElement(n.a.Fragment, null, n.a.createElement(ze, {
					comment: u,
					approveTooltipId: o,
					automodTooltipId: r,
					ignoreLock: P,
					language: I,
					lockedTooltipId: _,
					onHideTooltip: L,
					onShowTooltip: k,
					openRemovalReasonModal: A,
					removeTooltipId: H,
					reportTooltipId: U,
					spamTooltipId: G
				}), n.a.createElement(v.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), n.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? T.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: o,
						className: r,
						comment: i
					} = e;
					return n.a.createElement("div", {
						className: r
					}, n.a.createElement(ye, null, i.deletedBy === F.a.User ? Object(a.a)(t, "comment.commentDeletedByAuthor") : Object(a.a)(t, "comment.commentDeletedByMod")), n.a.createElement(Ve, ne({
						key: "Created"
					}, e)), o && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: o,
						childrenInfo: r
					} = e;
					return n.a.createElement("div", {
						className: o
					}, n.a.createElement("div", null, n.a.createElement(We, {
						comment: t,
						isAuthorDeleted: Object(F.d)(t),
						topTippersEnabled: !1
					})), n.a.createElement(X.b, {
						className: oe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), n.a.createElement(X.c, {
						className: oe.a.metaText,
						key: "scoreCreatedSeparator"
					}), n.a.createElement(Ve, ne({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: s
					}))
				},
				He = (e, t) => n.a.createElement(o.Fragment, null, n.a.createElement(X.c, {
					className: oe.a.metaText
				}), n.a.createElement(fe, null, Object(a.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				We = e => {
					const t = n.a.createElement(h.a, {
						className: oe.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.B.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? n.a.createElement(P, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: o
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return n.a.createElement(Oe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: o,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, n.a.createElement("span", null, Object(u.d)(s, t.created)), qe(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return n.a.createElement(Ee, {
					className: oe.a.metaText
				}, "(", t ? _e(e.language, s, {
					numChildren: s
				}) : Ie(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ge extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, t.isAuthorCakeday && n.a.createElement(pe, {
						"aria-label": Me(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && qe(s.cakedayTooltipId, Me(s.language)), t.isAdmin && n.a.createElement(ae, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && qe(s.adminTooltipId, Te(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && n.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && qe(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && n.a.createElement(ue, {
						desc: ke(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && qe(s.modTooltipId, ke(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && n.a.createElement(ge, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && qe(s.opTooltipId, Re(s.language)), s.renderContractorBadge && n.a.createElement(ve, {
						desc: Ae(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && qe(s.contractorTooltipId, Ae(s.language)))
				}
			}
			class ze extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && n.a.createElement(ce, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && qe(s.approveTooltipId, Object(L.a)(s.language, t)), Object(M.a)(t) && n.a.createElement(he, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && qe(s.removeTooltipId, Object(L.c)(s.language, t)), Object(M.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && n.a.createElement(we, {
						onClick: s.openRemovalReasonModal
					}, Object(a.a)(s.language, "modTools.addARemovalReason")), Object(M.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && n.a.createElement(we, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(a.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && n.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && n.a.createElement(xe, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && qe(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && n.a.createElement(me, {
						className: Object(d.a)({
							[oe.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && qe(s.automodTooltipId, Object(L.b)(s.language)), Object(k.a)(t) && n.a.createElement(be, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(k.a)(t) && qe(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => n.a.createElement(o.Fragment, null, n.a.createElement(X.c, {
					className: oe.a.metaText
				}), n.a.createElement(Ce, null, Object(a.a)(e, "comment.stickied"))),
				qe = (e, t) => n.a.createElement(_.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(h);
			const x = .75,
				g = 10 * c.F;
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, g), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), n.a.createElement("a", {
						className: b.a.seeMore,
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, n.a.createElement(u.c, null, "see more")))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					if (this.state.expandToggled) return null;
					this.commentElement && !this.commentElement.innerText.trim().includes("\n") && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var O = v,
				f = s("./node_modules/lodash/noop.js"),
				C = s.n(f),
				y = s("./src/lib/makeCommentPermalink/index.ts"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				I = s("./src/reddit/actions/reportFlow.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				L = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				k = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/overlay/index.ts"),
				V = s("./src/reddit/helpers/trackers/lightbox.ts"),
				U = s("./src/reddit/i18n/utils.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/tooltip.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				X = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				oe = s("./src/reddit/layout/row/Inline/index.tsx"),
				ne = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(de);
			var me = e => n.a.createElement("svg", {
					className: Object(a.a)(le.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("path", {
					id: "".concat("save-svg", "a"),
					d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
				})), n.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M0 20h20V0H0z",
					fill: "none"
				}), n.a.createElement("mask", {
					id: "".concat("save-svg", "b"),
					fill: "none"
				}, n.a.createElement("use", {
					xlinkHref: "#".concat("save-svg", "a")
				})), n.a.createElement("use", {
					fill: "inherit",
					xlinkHref: "#".concat("save-svg", "a")
				}), n.a.createElement("g", {
					mask: "url(#".concat("save-svg", "b)"),
					fill: "none"
				}, n.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				pe = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(he),
				xe = s("./src/lib/lessComponent.tsx");
			const ge = xe.a.wrapped(ue.b, "DeleteIcon", be.a),
				ve = xe.a.wrapped(ae.a, "ReportIcon", be.a),
				Oe = xe.a.wrapped(ce.a, "PencilIcon", be.a),
				fe = xe.a.wrapped(me, "SaveIcon", be.a),
				Ce = xe.a.wrapped(pe.a, "SavedIcon", be.a),
				ye = xe.a.wrapped(Y.b, "OverflowMenu", be.a),
				Ee = xe.a.wrapped(T.c, "ModToolsFlatlist", be.a),
				je = xe.a.wrapped(k.a, "ModActionsMenu", be.a),
				Pe = xe.a.wrapped(te.b, "DropdownRow", be.a),
				we = xe.a.wrapped(oe.a, "Flatlist", be.a),
				Se = xe.a.button("Button", be.a),
				Ie = Object(B.t)(),
				_e = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ne = e => "Distinguish--Dropdown--".concat(e),
				Te = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Me = e => "View--Reports--".concat(e),
				Le = Object(i.c)({
					activeTooltipId: J.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === _e(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Z.J,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: B.O,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.H)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: B.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.U)(e, {
							postId: s.postId
						})
					}
				});
			class ke extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(D.d)(D.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(V.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: s,
						moderatorPermissions: o,
						modModeEnabled: r,
						showModTools: i
					} = this.props, a = Object(H.a)(o), c = !!t && t.displayText === e.author;
					if (i && a) return r ? n.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: c,
						language: s
					}) : n.a.createElement(je, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(re.a, null), n.a.createElement(N.a, {
						comment: e,
						language: s,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return n.a.createElement(T.b, {
						text: "".concat(o),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Me(e.id),
						id: Me(e.id)
					}, n.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Me(e.id)
					}), e.ignoreReports ? n.a.createElement(ne.a, null) : n.a.createElement(ie.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (i && c && !e.bannedBy && (d || a && !o)) return n.a.createElement(T.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ne(e.id)
					}, n.a.createElement(T.a, null), n.a.createElement(L.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ne(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ne(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: o,
						deleteComment: r,
						isLoggedIn: i,
						isPendingDeletion: a,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, h = Object(H.a)(c), b = !!o && o.displayText === e.author, x = !d && !e.isLocked || h && i, g = o && e.isGildable;
					return n.a.createElement("div", {
						className: t
					}, n.a.createElement(we, null, x && n.a.createElement(Se, {
						onClick: this.handleReply,
						disabled: a
					}, n.a.createElement(u.c, null, "Reply")), g && n.a.createElement(Se, {
						onClick: this.handleGild
					}, n.a.createElement(u.c, null, "Give Award")), n.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(y.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, n.a.createElement(Se, {
						onClick: this.sendCommentEventWithNameShare
					}, n.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), n.a.createElement(ye, {
						dropdownId: Te(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && n.a.createElement(Pe, {
						displayText: Object(U.c)("report"),
						onClick: this.props.onReportClick
					}, n.a.createElement(ve, null)), n.a.createElement(Pe, {
						displayText: e.isSaved ? Object(U.c)("Unsave") : Object(U.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Ce, null) : n.a.createElement(fe, null)), b && n.a.createElement(Pe, {
						displayText: Object(U.c)("edit"),
						onClick: this.handleEdit
					}, n.a.createElement(Oe, null)), b && n.a.createElement(Pe, {
						displayText: Object(U.c)("delete"),
						onClick: this.handleDelete
					}, n.a.createElement(ge, null))), this.props.isConfirmModalOpen && n.a.createElement(M.a, {
						actionText: Object(U.c)("delete"),
						cancelActionText: Object(U.c)("keep"),
						headerText: Object(U.c)("Delete comment"),
						modalText: Object(U.c)("Are you sure you want to delete your comment?"),
						onConfirm: r,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && n.a.createElement(X.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: X.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = Ie(Object(r.b)(Le, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o,
						language: n
					} = t;
					return {
						deleteComment: () => o && e(Object(P.db)(n, s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(P.S)(s.id, t, o)),
						onIgnoreReports: () => e(Object(P.pb)(s.id)),
						onGildClick: () => e(Object(w.d)(s.id)),
						onReportClick: () => e(Object(I.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(_.g)({
							tooltipId: Ne(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(_.g)({
							tooltipId: Me(s.id)
						})),
						onToggleSave: () => e(Object(P.gb)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(_e(s.id))), e(Object(_.g)({
								tooltipId: Te(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(P.ab)(n))
						},
						handleReply: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(P.bb)(n))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(_e(s.id)))
					}
				})(Object(ee.b)(Object(F.b)(ke)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Fe = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Be = s("./src/reddit/components/GildModal/Loader.tsx"),
				De = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				We = s("./src/reddit/selectors/gild.ts"),
				Ve = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ue = s.n(Ve);
			const Ge = xe.a.wrapped(Ae.a, "TopMeta", Ue.a),
				ze = xe.a.div("ProfileCommentWrapper", Ue.a),
				Ke = xe.a.div("CommentBody", Ue.a),
				qe = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = Object(Fe.b)(s);
						return Object(We.c)(e, o)
					},
					flair: K.e,
					language: Z.S
				})),
				Qe = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = qe(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					gildModalIsOpen: r,
					isExpanded: i,
					language: d,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => n.a.createElement(De.a, {
					className: s,
					content: Object(He.a)(t),
					rtJsonElementProps: Qe(e)
				});
				return n.a.createElement(ze, {
					className: Object(a.a)({
						[Ue.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Ge, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					language: d,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, i ? p() : n.a.createElement(O, {
					height: c.Eb,
					isExpanded: i
				}, p)), !t.isDeleted && l && n.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: d,
					showModTools: m
				})), r && n.a.createElement(Be.a, null))
			})
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts");
			const i = new Set(["t2_ktrtg"]),
				a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => n.a.createElement("img", {
				className: e.className,
				src: a(e.rank, e.creatorId && i.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const h = d.a.div("PrimaryText", u.a),
				b = d.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				x = d.a.div("Wrapper", u.a);
			var g = e => {
					let {
						children: t,
						className: s
					} = e;
					return n.a.createElement(x, {
						className: s
					}, n.a.createElement(b, {
						isLoading: !1,
						layout: m.g.Classic
					}), n.a.createElement(h, null, t))
				},
				v = s("./src/reddit/selectors/user.ts");
			const O = Object(i.c)({
				language: v.S
			});
			var f = Object(r.b)(O)(e => {
				let {
					className: t,
					language: s,
					profileName: o,
					timeSort: r = a.Pb.ALL
				} = e;
				return n.a.createElement(g, {
					className: t
				}, r === a.Pb.ALL ? Object(c.a)(s, "listings.noComments", {
					profileName: o
				}) : Object(c.a)(s, "listings.noRecentComments", {
					profileName: o
				}))
			});
			const C = Object(i.c)({
				language: v.S
			});
			var y = Object(r.b)(C)(e => {
					let {
						className: t,
						language: s,
						profileName: o,
						timeSort: r = a.Pb.ALL
					} = e;
					return n.a.createElement(g, {
						className: t
					}, r === a.Pb.ALL ? Object(c.a)(s, "listings.noPosts", {
						profileName: o
					}) : Object(c.a)(s, "listings.noRecentPosts", {
						profileName: o
					}))
				}),
				E = s("./src/reddit/components/Translated/index.tsx");
			var j = e => {
					let {
						className: t,
						verb: s
					} = e;
					return n.a.createElement(g, {
						className: t
					}, n.a.createElement(E.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: s
						}
					}))
				},
				P = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				w = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				S = s.n(w),
				I = () => n.a.createElement("div", {
					className: S.a.container
				}, n.a.createElement(P.a, {
					className: S.a.hideIcon
				}), n.a.createElement("h3", {
					className: S.a.title
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.title"
				})), n.a.createElement("p", {
					className: S.a.subtitle
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "a", (function() {
				return I
			}))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: o,
					post: a
				} = e;
				if (!Object(m.a)(a)) return null;
				const p = a && a.eventInfo,
					b = Object(l.a)(a),
					x = p && Object(i.c)(p.eventStart, p.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					language: o,
					post: a
				}), !b && x && n.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: a,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				a = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				x = h.a.span("PostEventPastText", u.a),
				g = h.a.span("PostEventNowText", u.a),
				v = h.a.span("Container", u.a),
				O = h.a.wrapped(l.a, "CalendarIcon", u.a),
				f = h.a.wrapped(m.a, "LiveIcon", u.a),
				C = h.a.div("LoadingState", u.a);
			class y extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: o
					} = s;
					if (!o) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = o, u = Object(r.e)(p, l);
					let h, y;
					if (this.state.mounted || u === r.a.Live) h = function(e, t, s, o) {
						const n = Object(r.e)(e, t),
							d = new Date(e * a.Cb);
						let l;
						if (n === r.a.Live || o) return Object(i.a)(s, "posts.event.inProgress");
						n === r.a.Future ? l = Object(r.d)(e) ? Object(i.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : n === r.a.Past && (l = Object(r.d)(e) ? Object(i.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						h = n.a.createElement(C, {
							className: e
						})
					}
					if (m) y = n.a.createElement(g, null, n.a.createElement(f, null), h);
					else if (u === r.a.Future) y = n.a.createElement(b, null, n.a.createElement(O, null), h);
					else {
						if (u !== r.a.Past) return null;
						y = n.a.createElement(x, null, n.a.createElement(O, null), h)
					}
					return n.a.createElement(v, {
						className: e
					}, y)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(g);
			var O = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				C = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				P = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ExpandoButton/index.m.less"),
				I = s.n(S);
			const _ = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.p)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(a.a)(I.a.icon, I.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case w.n.GIFVIDEO:
							return n.a.createElement(C.a, {
								className: s
							});
						case w.n.IMAGE:
							return n.a.createElement(j.a, {
								className: s
							});
						case w.n.TEXT:
						case w.n.RTJSON:
							return n.a.createElement(P.a, {
								className: s
							});
						case w.n.VIDEO:
							return n.a.createElement(f.a, {
								className: s
							});
						case w.n.EMBED:
						default:
							return n.a.createElement(y.a, {
								className: s
							})
					}
				};
			t.a = _(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, g = s || l, v = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) ? n.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(a.a)(t, I.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(h.a, {
					className: I.a.icon
				}) : x ? n.a.createElement(n.a.Fragment, null, N(g.media && g.media.type, v), n.a.createElement(b.a, {
					className: Object(a.a)(I.a.icon, I.a.showOnHover)
				})) : n.a.createElement(b.a, {
					className: I.a.icon
				})) : g.source && g.source.url ? n.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(a.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(E.a, {
					className: Object(a.a)(I.a.icon, I.a.outboundLinkIcon)
				})) : n.a.createElement(i.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(a.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(g.permalink),
					rel: "nofollow"
				}, n.a.createElement(O, {
					className: I.a.icon
				}))
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				f = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				P = s.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				_ = Object(a.a)(x.a),
				N = {
					[u.d.Card]: C.a,
					[u.d.Classic]: O.a,
					[u.d.Compact]: f.a
				},
				T = {
					[u.d.Card]: Object(v.c)("card"),
					[u.d.Classic]: Object(v.c)("classic"),
					[u.d.Compact]: Object(v.c)("compact")
				},
				M = Object(h.t)(),
				L = Object(i.c)({
					dropdownIsOpen: Object(E.b)(I),
					postLayout: h.M,
					redditStyle: h.B
				}),
				k = Object(r.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.g)({
						tooltipId: I
					}))
				}));
			class R extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: o,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), o(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.screen)(t),
							subreddit: Object(y.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: o,
							postLayout: r
						} = this.props, i = s || u.e[r], a = e === i, d = N[e];
						return n.a.createElement(g.b, w({}, t, {
							className: Object(c.a)(P.a.LayoutItem, {
								[P.a.selected]: a
							}),
							"data-layout": e,
							displayText: T[e],
							iconWrapperClassName: P.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: P.a.LayoutItemTextClassName
						}), n.a.createElement(d, {
							className: P.a.LayoutIcon,
							onClick: a ? void 0 : o
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(_, w({}, e, {
							className: P.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: P.a.DropdownRow,
							rowIconClassName: P.a.DropdownRowIcon,
							rowSelectedClassName: P.a.DropdownRowSelected,
							tooltipId: I
						}), this.renderItem(u.d.Card), this.renderItem(u.d.Classic), this.renderItem(u.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: o
					} = this.props, r = t || u.e[o];
					return n.a.createElement("div", {
						className: Object(c.a)(P.a.Container, e),
						id: S
					}, n.a.createElement("div", {
						className: P.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: I,
						showDropdownTriangle: !0
					}), n.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = M(k(Object(p.b)(Object(d.a)(R))))
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
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/components/ListingSort/index.tsx"),
				g = s("./src/reddit/components/TimeSort/index.tsx"),
				v = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				P = s.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = new Set([b.N.CONTROVERSIAL, b.N.TOP]),
				I = new Set([b.N.CONTROVERSIAL, b.N.RISING]),
				_ = "ListingSort--Overflow",
				N = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				T = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.i, (e, t, s) => {
					if (e) return e;
					const o = [b.N.HOT, b.N.NEW, b.N.TOP, b.N.RISING];
					return t && s && o.unshift(b.N.BEST), o
				}),
				M = Object(u.c)({
					sortOptions: T
				});
			class L extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(f.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(O.a, {
							className: Object(i.a)(P.a.SortLink, e === t && P.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(x.a, {
							className: P.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: P.a.SortLabel
						}, v.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: o,
						sortOptions: r,
						timeSort: a
					} = this.props, c = !t && S.has(o), d = I.has(o), l = r.filter(e => !I.has(e)), m = r.filter(e => I.has(e) && e !== o);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(x.d, w({}, this.props, {
						buttonClassName: P.a.DropdownButton,
						className: Object(i.a)(P.a.SortDropdown, e),
						rowClassName: P.a.DropdownRow,
						rowIconClassName: P.a.DropdownRowIcon,
						rowSelectedClassName: P.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(i.a)(P.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(o), c && n.a.createElement(g.a, {
						baseUrl: this.getSortUrl(o),
						buttonClassName: P.a.DropdownButton,
						className: P.a.TimeSort,
						listingSort: o,
						onChange: s,
						rowClassName: P.a.DropdownRow,
						rowSelectedClassName: P.a.DropdownRowSelected,
						timeSort: a || b.Qb,
						wrapperClassName: P.a.TimeSortWrapper
					}), m.length > 0 && n.a.createElement(x.d, w({}, this.props, {
						className: Object(i.a)(P.a.SortOverflow, e),
						dropdownId: _,
						rowClassName: P.a.DropdownRow,
						rowIconClassName: P.a.DropdownRowIcon,
						rowSelectedClassName: P.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: P.a.SortOverflowButton,
						id: _
					}, n.a.createElement(y.a, null))))
				}
			}
			var k = N(Object(r.b)(M)(Object(d.b)(L))),
				R = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				A = s.n(R);
			const F = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				B = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, o) => {
							if (s) {
								const n = Object(a.c)({
									sort: t,
									timeSort: o
								});
								e(Object(c.G)(s, n))
							}
						}
					}
				});
			class D extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
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
						disabled: o = !1,
						isProfilePage: r,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(A.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(k, {
						baseUrl: e,
						disabled: o,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !r && n.a.createElement(p.a, {
						className: A.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = F(B(Object(d.b)(D)))
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(a);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(i.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				f = s("./src/reddit/selectors/inFeedChaining.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/monthsToMinutes.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/CallToActionButton/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				M = s("./src/reddit/components/Governance/Proposal/async.ts"),
				L = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				D = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/i18n/components.tsx"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				G = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(G);
			var K = () => n.a.createElement("div", {
					className: z.a.container
				}, n.a.createElement(U.a, {
					className: z.a.pinnedIcon
				}), n.a.createElement("span", {
					className: z.a.metaText
				}, n.a.createElement(V.c, null, "pinned by moderators"))),
				q = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				Z = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(i.a)(E.O, e => e.some(ne.c)),
				ie = Object(i.a)(re, e => e),
				ae = (e, t) => Object(oe.c)(e, {
					experimentName: se.D,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ie(e, {
							listingKey: s
						})
					}
				});
			var ce = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = s.n(de),
				me = s("./src/reddit/components/LargePost/index.m.less"),
				pe = s.n(me);
			const ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.O)(e, {
						listingKey: s
					}) : void 0
				},
				he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.C)(e, {
						listingKey: s
					}) : void 0
				},
				be = Object(r.b)(() => Object(i.c)({
					autoplayPref: j.b,
					activeModalId: v.a,
					currentUser: j.i,
					hideNSFWPref: j.z,
					flairStyleTemplate: X.Q,
					isCurrentUserProfilePost: E.h,
					isFrontpageHome: y.g,
					isM2MHomeRedirectEnabled: O.c,
					language: j.S,
					isActive: E.g,
					isPostChainDismissed: f.c,
					isPostChained: f.d,
					moderatorPermissions: C.i,
					modModeEnabled: X.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: E.I,
					posts: ue,
					postHeightVariant: ae,
					postIds: he,
					showEditFlair: ce.a,
					subredditOrProfile: E.U,
					userIsOp: j.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === g.a.upvoted ? Object(p.N)(n) : Object(p.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.L)(n)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}),
				xe = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: r,
						currentUser: i,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: g,
						inSubredditOrProfile: v = !1,
						isCommentsPage: O,
						isCurrentUserProfilePost: f,
						isFrontpage: C,
						isFrontpageHome: y,
						isM2MHomeRedirectEnabled: E,
						isOverlay: j,
						isPostChainDismissed: V,
						isPostChained: U,
						language: G,
						listingKey: z,
						listingName: Y,
						moderatorPermissions: X,
						modModeEnabled: oe,
						onClickPost: ne,
						onIgnoreReports: re,
						onOpenReportsDropdown: ie,
						poll: ae,
						pollResult: ce,
						post: de,
						postHeightVariant: me,
						scrollerItemRef: ue,
						showEditFlair: he,
						subredditOrProfile: be,
						userIsOp: xe
					} = e, ge = !!e.redditStyle || !!e["data-redditstyle"], ve = ge ? void 0 : p, Oe = Object(d.a)(X), fe = oe && Oe, Ce = Object(c.a)(X), ye = Object(A.c)(de), Ee = !!de.media && de.media.type === h.n.RTJSON, je = xe && Ee, Pe = s ? s - D.a : void 0, we = !!ce && !!Object.keys(ce.options).filter(e => ce.options[e].userSelected).length, Se = !(C && y), Ie = (e => e === se.qb.OnlyTitles)(me) && !Object(ee.a)(de), _e = (e => e === se.qb.MediumHeight)(me) && !Object(ee.a)(de), Ne = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(x.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(x.k)(o[1]);
						return {
							hasTopCompactPostStyles: n && i,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), Te = n.a.createElement(B.a, {
						className: Object(P.a)(pe.a.container, r, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: ge,
							promotedvideolink: de.isSponsored && !(de.media && h.a.has(de.media.type)),
							[pe.a.topCompactPost]: Ne && Ne.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: Ne && Ne.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(l.b)(e.flairStyleTemplate),
						post: de,
						onClick: ne,
						onPostContentClick: o,
						eventFactory: m
					}, n.a.createElement(q.a, {
						model: de,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ve,
						redditStyle: ge
					}), n.a.createElement(F.a, {
						className: Object(P.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(te.a)(de)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ve,
						post: de,
						redditStyle: ge
					}, n.a.createElement(N.a, {
						post: de,
						language: G
					}), Ne && Ne.showPinnnedHeader && n.a.createElement(K, null), n.a.createElement(J.a, {
						className: pe.a.postTopLine,
						hideNSFWPref: g,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: v,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!Ne,
						isCurrentUserProfilePost: f,
						isOverlay: !!j,
						language: G,
						post: de,
						shouldShowSubscribeButton: Se,
						showSubreddit: !v && !de.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: be
					}), n.a.createElement(Q.c, {
						className: pe.a.postTitle,
						post: de,
						redditStyle: ge,
						size: Q.b.Large,
						titleColor: ve && ve.postTitleColor,
						isM2MHomeRedirectEnabled: E,
						isOverlay: j
					}), de.source && !de.isSponsored && n.a.createElement(Z.a, {
						className: pe.a.sourceLink,
						post: de
					}), n.a.createElement("div", {
						className: Object(P.a)(pe.a.postMediaWrapper, {
							[pe.a.votedContent]: we
						})
					}, !Ne && n.a.createElement(H.a, {
						isListing: !0,
						isMediumHeight: _e,
						isNotCardView: !!j,
						isTitleOnly: Ie,
						showCentered: !0,
						flairStyleTemplate: ve,
						post: de,
						availableWidth: Pe,
						shouldLoad: u,
						scrollerItemRef: ue,
						autoplayPref: t
					})), ae && n.a.createElement(M.a, {
						className: Object(P.a)(pe.a.proposal, {
							[pe.a.mHasNotVoted]: !ce,
							[pe.a.mPollIsClosed]: !!ce && Object(b.e)(ae, ce),
							[pe.a.mGAPoll]: ae.type === b.a.GA
						}),
						pollId: ae.id,
						subredditId: de.belongsTo.id
					}), de.isMeta && !ae && n.a.createElement(L.a, {
						className: pe.a.noProposal
					}), de.source && de.source.url && de.isSponsored && n.a.createElement(w.a, {
						className: pe.a.adLinkWrapper
					}, n.a.createElement($.a, {
						href: de.source.url.replace(a.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.source.displayText), de.callToAction && n.a.createElement(S.a, {
						href: de.source.url.replace(a.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.callToAction)), oe && Oe && ye && n.a.createElement(R.a, {
						language: G,
						onIgnoreReports: re,
						reportable: de
					}), n.a.createElement(k.d, {
						postId: de.id
					}), n.a.createElement("div", {
						className: pe.a.flatListContainer
					}, n.a.createElement(I.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ve,
						model: de,
						onVoteClick: e.handleVote
					}), n.a.createElement(T.c, {
						currentUser: i,
						hasModFlairPerms: Ce,
						hasModPostPerms: Oe,
						isLargePost: !0,
						isOverlay: !!j,
						language: G,
						modModeEnabled: oe,
						onIgnoreReports: re,
						onOpenReportsDropdown: ie,
						post: de,
						showEditPost: je,
						showEditFlair: he,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !fe,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, Te, U && !V && n.a.createElement(_.a, {
						className: pe.a.chain,
						listingKey: z,
						listingName: Y,
						postId: de.id
					}))
				});
			t.default = be(Object(Y.b)(xe))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.t)(),
				x = Object(i.c)({
					layout: m.M
				}),
				g = Object(r.b)(x);
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						o = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(o, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return n.a.createElement("div", {
						className: u.a.Container
					}, n.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(g(h.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				h = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const x = b.a.div("BodyContainer", h.a),
				g = b.a.div("SidebarPlaceholder", h.a),
				v = b.a.div("InnerContainer", h.a),
				O = Object(i.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				f = Object(r.b)(O);
			class C extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: o,
						considerSidebar: r = !0,
						onFocus: i,
						onBlur: c
					} = this.props;
					let l = 0;
					return o && !e && t && (l += a.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(x, {
						onFocus: i,
						onBlur: c
					}, n.a.createElement(d.a, {
						fitPageToContent: !0
					}, n.a.createElement(v, {
						className: s
					}, n.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: r,
						offsetLeft: l,
						render: this.props.render
					}))), r && n.a.createElement(g, null)))
				}
			}
			t.a = b.a.wrapped(f(C), "Component", h.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				x = s("./src/lib/lessComponent.tsx"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/app/strings/index.ts");
			const O = {
				[a.Mb.AllStates]: Object(v.e)("stateSorts.allStates"),
				[a.Mb.Alaska]: Object(v.e)("stateSorts.alaska"),
				[a.Mb.Alabama]: Object(v.e)("stateSorts.alabama"),
				[a.Mb.Arkansas]: Object(v.e)("stateSorts.arkansas"),
				[a.Mb.Arizona]: Object(v.e)("stateSorts.arizona"),
				[a.Mb.California]: Object(v.e)("stateSorts.california"),
				[a.Mb.Colorado]: Object(v.e)("stateSorts.colorado"),
				[a.Mb.Connecticut]: Object(v.e)("stateSorts.connecticut"),
				[a.Mb.DistrictOfColumbia]: Object(v.e)("stateSorts.districtOfColumbia"),
				[a.Mb.Delaware]: Object(v.e)("stateSorts.delaware"),
				[a.Mb.Florida]: Object(v.e)("stateSorts.florida"),
				[a.Mb.Georgia]: Object(v.e)("stateSorts.georgia"),
				[a.Mb.Hawaii]: Object(v.e)("stateSorts.hawaii"),
				[a.Mb.Iowa]: Object(v.e)("stateSorts.iowa"),
				[a.Mb.Idaho]: Object(v.e)("stateSorts.idaho"),
				[a.Mb.Illinois]: Object(v.e)("stateSorts.illinois"),
				[a.Mb.Indiana]: Object(v.e)("stateSorts.indiana"),
				[a.Mb.Kansas]: Object(v.e)("stateSorts.kansas"),
				[a.Mb.Kentucky]: Object(v.e)("stateSorts.kentucky"),
				[a.Mb.Louisiana]: Object(v.e)("stateSorts.louisiana"),
				[a.Mb.Massachusetts]: Object(v.e)("stateSorts.massachusetts"),
				[a.Mb.Maryland]: Object(v.e)("stateSorts.maryland"),
				[a.Mb.Maine]: Object(v.e)("stateSorts.maine"),
				[a.Mb.Michigan]: Object(v.e)("stateSorts.michigan"),
				[a.Mb.Minnesota]: Object(v.e)("stateSorts.minnesota"),
				[a.Mb.Missouri]: Object(v.e)("stateSorts.missouri"),
				[a.Mb.Mississippi]: Object(v.e)("stateSorts.mississippi"),
				[a.Mb.Montana]: Object(v.e)("stateSorts.montana"),
				[a.Mb.NorthCarolina]: Object(v.e)("stateSorts.northCarolina"),
				[a.Mb.NorthDakota]: Object(v.e)("stateSorts.northDakota"),
				[a.Mb.Nebraska]: Object(v.e)("stateSorts.nebraska"),
				[a.Mb.NewHampshire]: Object(v.e)("stateSorts.newHampshire"),
				[a.Mb.NewJersey]: Object(v.e)("stateSorts.newJersey"),
				[a.Mb.NewMexico]: Object(v.e)("stateSorts.newMexico"),
				[a.Mb.Nevada]: Object(v.e)("stateSorts.nevada"),
				[a.Mb.NewYork]: Object(v.e)("stateSorts.newYork"),
				[a.Mb.Ohio]: Object(v.e)("stateSorts.ohio"),
				[a.Mb.Oklahoma]: Object(v.e)("stateSorts.oklahoma"),
				[a.Mb.Oregon]: Object(v.e)("stateSorts.oregon"),
				[a.Mb.Pennsylvania]: Object(v.e)("stateSorts.pennsylvania"),
				[a.Mb.RhodeIsland]: Object(v.e)("stateSorts.rhodeIsland"),
				[a.Mb.SouthCarolina]: Object(v.e)("stateSorts.southCarolina"),
				[a.Mb.SouthDakota]: Object(v.e)("stateSorts.southDakota"),
				[a.Mb.Tennessee]: Object(v.e)("stateSorts.tennessee"),
				[a.Mb.Texas]: Object(v.e)("stateSorts.texas"),
				[a.Mb.Utah]: Object(v.e)("stateSorts.utah"),
				[a.Mb.Virginia]: Object(v.e)("stateSorts.virginia"),
				[a.Mb.Vermont]: Object(v.e)("stateSorts.vermont"),
				[a.Mb.Washington]: Object(v.e)("stateSorts.washington"),
				[a.Mb.Wisconsin]: Object(v.e)("stateSorts.wisconsin"),
				[a.Mb.WestVirginia]: Object(v.e)("stateSorts.westVirginia"),
				[a.Mb.Wyoming]: Object(v.e)("stateSorts.wyoming")
			};
			var f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/StateSort/index.m.less"),
				S = s.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = x.a.wrapped(y.a, "_Dropdown", S.a),
				N = Object(b.a)(_),
				T = e => {
					return e.indexOf("_") > 0 && L(e) === a.v.UnitedStates
				},
				M = e => {
					if (T(e)) {
						return e.split("_")[1]
					}
					return a.Mb.AllStates
				},
				L = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				k = e => {
					const t = L(e),
						s = M(e);
					return T(e) ? "".concat(t, "_").concat(s) : t
				},
				R = Object(f.t)(),
				A = Object(i.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: P.S
				}),
				F = Object(r.b)(A, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(a.v.UnitedStates + "_" + s))
					}
				}));
			var B = x.a.wrapped(R(F(e => {
					const t = "".concat(e.baseUrl, "?").concat(g.g, "=").concat(a.v.UnitedStates);
					return n.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, n.a.createElement(h.c, {
						disabled: e.disabled
					}, n.a.createElement(h.b, {
						displayText: O[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(N, I({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(a.Mb).map(s => n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === a.Mb.AllStates ? t : "".concat(t, "_").concat(e))(a.Mb[s]), k(a.Mb[s]))
					}, n.a.createElement(E.b, {
						displayText: O[a.Mb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", S.a),
				D = s("./src/reddit/constants/countrySorts.ts"),
				H = s("./src/reddit/components/CountrySort/index.m.less"),
				W = s.n(H);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(f.t)(),
				G = Object(i.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: P.S
				});
			var z = U(Object(r.b)(G, e => ({
					onOpenDropdown: t => e(Object(p.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = L(e.sort),
						s = M(e.sort),
						o = "".concat(e.baseUrl, "?").concat(g.g, "=");
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(u.a)(W.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, n.a.createElement(h.c, {
						disabled: e.disabled
					}, n.a.createElement(h.b, {
						displayText: (() => t in D.a ? D.a[t] : D.a[a.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(N, V({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(a.v).map(s => n.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(o).concat(k(a.v[s])), a.v[s])
					}, n.a.createElement(E.b, {
						displayText: D.a[a.v[s]],
						isSelected: t === s
					})))))), t === a.v.UnitedStates && n.a.createElement(B, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				K = s("./src/reddit/components/TimeSort/index.tsx"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/page.ts"),
				J = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Z = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Y);
			const $ = Object(f.t)({
					isProfilePage: f.H,
					pageLayer: e => e
				}),
				ee = Object(i.c)({
					currentUser: P.i,
					language: P.S,
					isPopularListing: f.D,
					redditStyle: f.B
				}),
				te = Object(r.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, o) => {
							if (s) {
								const n = Object(c.c)({
									sort: t,
									timeSort: o
								});
								e(Object(l.G)(s, n))
							}
						}
					}
				});
			t.a = $(te(Object(q.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: o
				} = e, r = e.sort === a.N.TOP || e.sort === a.N.CONTROVERSIAL, i = s && e.countrySort && e.sort === a.N.HOT, c = e => {
					Z.a.setState({
						isListingFocused: e
					})
				};
				return n.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => n.a.Children.toArray([o ? null : n.a.createElement(J.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), o ? null : n.a.createElement("div", {
						className: X.a.separator
					}), n.a.createElement(h.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && r && [n.a.createElement(K.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || a.Qb
					})], i && n.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(Q.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(a);
			var d = e => n.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), n.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => n.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				h = s.n(u);
			var b = e => n.a.createElement("svg", {
					className: Object(r.a)(h.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("title", null, "Hot"), n.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				x = s("./src/reddit/icons/svgs/New/index.m.less"),
				g = s.n(x);
			var v = e => n.a.createElement("svg", {
					className: Object(r.a)(g.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				O = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				f = s.n(O);
			var C = e => n.a.createElement("svg", {
					className: Object(r.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(E);
			const P = {
				[i.N.BEST]: d,
				[i.N.HOT]: b,
				[i.N.NEW]: v,
				[i.N.CONTROVERSIAL]: p,
				[i.N.TOP]: y.a,
				[i.N.RISING]: C
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const o = P[s];
				return o ? n.a.createElement(o, {
					className: Object(r.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/listingSorts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				P = s("./src/reddit/components/ListingSort/index.m.less"),
				w = s.n(P),
				S = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const N = "ListingSort--SortPicker",
				T = Object(a.a)(S.a.wrapped(x.a, "Dropdown", w.a)),
				M = S.a.wrapped(j.a, "ListingSortIcon", w.a),
				L = (S.a.wrapped(C.b, "DropdownTriangle", w.a), S.a.div("Title", w.a)),
				k = S.a.wrapped(e => n.a.createElement(g.b, I({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", w.a),
				R = e => {
					var {
						disabled: t
					} = e, s = _(e, ["disabled"]);
					return n.a.createElement("div", I({}, s, {
						className: Object(d.a)(w.a.SortWrapper, s.className, {
							[w.a.isDisabled]: t
						})
					}))
				},
				A = S.a.div("DropdownRowDisabled", w.a),
				F = Object(h.t)({
					isFrontpage: h.z,
					isProfilePage: h.H,
					pageLayer: e => e
				}),
				B = Object(i.c)({
					user: E.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || N)(e),
					language: E.S
				}),
				D = Object(r.b)(B, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: o
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || N
						}))
					}
				});
			t.d = S.a.wrapped(F(D(Object(p.b)(e => n.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && n.a.createElement(L, null, n.a.createElement(f.c, null, "Sort")), n.a.createElement(R, {
				disabled: e.disabled
			}, e.children || n.a.createElement(k, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || N,
				showDropdownTriangle: !0
			}, n.a.createElement(M, {
				sort: e.sort
			}))), n.a.createElement(b.a.Consumer, null, t => n.a.createElement(T, I({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || N
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? n.a.createElement(A, null, n.a.createElement(f.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => n.a.createElement(g.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, n.a.createElement(M, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", w.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					language: m,
					post: p,
					subredditOrProfile: b
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, n.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: b
				}), n.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return n.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, n.a.createElement(h, null))
				})(m, p.author, s), b && b.isQuarantined && n.a.createElement(a.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(i.a, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				x = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				k = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/icons/fonts/Share/index.tsx"),
				V = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(U),
				z = s("./src/lib/lessComponent.tsx");
			const K = "-MiniCardModMenu",
				q = "-MiniCardOverflowMenu",
				Q = "-MiniCardShareMenu",
				J = z.a.wrapped(T.a, "HorizontalVotes", G.a),
				Z = z.a.button("ShareButton", G.a),
				Y = Object(O.t)({
					currentProfileName: O.h,
					isCommentPermalink: O.v,
					isCommentsPage: O.w,
					isProfilePostListing: O.I,
					pageLayer: e => e
				}),
				X = Object(i.c)({
					layout: O.M,
					subreddit: O.q
				});
			var $ = Y(Object(r.b)(X, {})(Object(F.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: h,
						layout: b,
						modModeEnabled: x,
						onCommentsClick: g,
						post: v,
						sendEvent: O,
						showEditFlair: f,
						showEditPost: C,
						subreddit: y
					} = e, E = e => O(Object(D.f)(v.id, e)), j = v.postId, P = Object(M.d)(K, v.id, m, u), w = !!o && Object(V.f)(o) === v.author;
					return n.a.createElement("div", {
						className: Object(a.a)(G.a.flatlistContainer, s)
					}, n.a.createElement(J, {
						compact: !1,
						model: v,
						onVoteClick: r,
						scoreClassName: G.a.score
					}), n.a.createElement(N.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: v.id,
						modModeEnabled: x,
						numComments: v.numComments,
						type: B.g.Compact,
						onClick: g
					}), n.a.createElement(A.a, {
						className: G.a.shareMenu,
						dropdownId: Object(M.d)(Q, v.id, m, u),
						permalink: v.permalink,
						post: v,
						sendEventWithName: E,
						subreddit: y
					}, n.a.createElement(Z, null, n.a.createElement(W.a, {
						className: G.a.shareIcon
					}), n.a.createElement("span", {
						className: G.a.shareText
					}, n.a.createElement(H.c, null, "share")))), c && n.a.createElement(L.a, {
						dropdownId: P,
						onClick: () => E("post_mod_action_menu")
					}, n.a.createElement(M.b, {
						className: G.a.modActionsIcon
					}), n.a.createElement(k.a, {
						canEditFlair: i && !!f,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: w,
						language: h,
						modModeEnabled: x,
						post: v,
						tooltipId: P
					})), n.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: v.permalink,
						postId: j,
						dropdownId: Object(M.d)(q, v.id, m, u),
						isFixed: u,
						sendEvent: O,
						showEditPost: !!C,
						showEditFlair: !!f,
						useFlatlistBreakpoints: Object(R.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				oe = s.n(se),
				ne = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(ne);
			s.d(t, "a", (function() {
				return ae
			}));
			const ie = Object(O.t)(),
				ae = Object(r.b)(() => Object(i.c)({
					activeModalId: P.a,
					autoplayPref: _.b,
					crosspostRoot: I.c,
					crosspostSubredditOrProfile: I.d,
					currentUser: _.i,
					flairStyleTemplate: O.Q,
					hideNSFWPref: _.z,
					isActive: I.g,
					language: _.S,
					moderatorPermissions: w.i,
					modModeEnabled: O.O,
					post: I.I,
					showEditFlair: S.a,
					subredditOrProfile: I.U,
					userIsOp: _.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const o = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: n
						})
					}
				}));
			t.b = ie(ae(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: o,
					crosspostRoot: r,
					crosspostSubredditOrProfile: i,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: O,
					language: j,
					moderatorPermissions: P,
					modModeEnabled: w,
					onClickPost: S,
					post: I,
					scrollerItemRef: _,
					shouldPause: N,
					showMetaLine: T = !0,
					showEditFlair: M,
					subredditOrProfile: L,
					userIsOp: k
				} = e, {
					media: R
				} = r || I, A = R && R.type, F = Object(g.b)(I.id), B = A === E.n.RTJSON, D = k && B, H = Object(C.a)(P), W = Object(f.a)(P), V = R && A !== E.n.RTJSON && A !== E.n.TEXT, U = !R && !!I.source && Object(d.a)(I.source.url), G = R && n.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: E.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || I,
					scrollerItemRef: _,
					shouldPause: N,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return n.a.createElement(x.a, {
					className: Object(a.a)(re.a.postContainer, oe.a.largeAndMediumActiveStyles, oe.a.largeAndMediumPostStyles, Object(y.a)(e), o),
					style: Object.assign({}, Object(y.b)(e.flairStyleTemplate), Object(y.d)(e)),
					post: I,
					onClick: S,
					eventFactory: l
				}, n.a.createElement(b.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && G, n.a.createElement("div", {
					className: re.a.innerContainer
				}, U && n.a.createElement(te.a, {
					post: I,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), n.a.createElement(v.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: I,
					size: v.b.Large,
					titleColor: m && m.postTitleColor
				}), T && L && n.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: i,
					hideNSFWPref: O,
					language: j,
					post: I,
					subredditOrProfile: L
				}), !V && n.a.createElement("div", {
					className: re.a.mediaWrapper
				}, G), n.a.createElement("div", {
					className: re.a.flexSpacer
				}), n.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: W,
					hasModPostPerms: H,
					language: j,
					modModeEnabled: w,
					post: I,
					showEditFlair: M,
					showEditPost: D
				}))), e.activeModalId === F && n.a.createElement(g.a, {
					flairs: I.flair,
					subredditId: I.belongsTo.id,
					modalId: F,
					onFlairChanged: e.onFlairChanged
				}), n.a.createElement(u.d, {
					postId: I.id
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = i.a.div("Text", l.a),
				p = i.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						}, n.a.createElement(m, null, n.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => n.a.createElement(u, e)
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(f);
			const y = Object(i.b)(() => Object(a.c)({
				comment: x.n,
				isCommentHighlightExperiment: (e, t) => {
					if (!Object(v.a)(e)) return !1;
					const s = Object(x.n)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= c.g
					})
				},
				isNightmodeOn: O.U
			}), e => ({
				openPost: t => e(Object(m.x)(t))
			}));
			var E = Object(l.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isCommentHighlightExperiment: r,
						isNightmodeOn: i,
						last: a,
						openPost: c,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(d.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: a,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(d.a)(C.a.commentWrapper, {
							[C.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: C.a.commentSeparator
					}), n.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				S = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(S),
				_ = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var T = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const M = Object(P.t)({
					currentProfileName: P.h,
					isCommentsPage: P.w,
					isCommentPermalink: P.v,
					isProfilePostListing: P.I,
					pageLayer: e => e
				}),
				L = _.a.wrapped(j.a, "OverviewCommentPost", I.a),
				k = _.a.wrapped(r.default, "ClassicPost", I.a);
			t.a = M(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a
				} = e, c = T(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(w.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(L, N({}, c, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(k, N({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				y = s.n(C),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(E);
			const P = l.a.wrapped(p.a, "InternalLink", j.a),
				w = l.a.div("Wrapper", j.a),
				S = l.a.div("Row", j.a),
				I = l.a.wrapped(f.a, "CommentIcon", j.a),
				_ = l.a.div("TitleContainer", j.a),
				N = l.a.div("PostTitleContainer", j.a),
				T = l.a.wrapped(v.c, "PostTitle", j.a),
				M = l.a.wrapped(O.d, "PostTopMeta", j.a),
				L = l.a.wrapped(O.a, "MetaSeparator", j.a),
				k = Object(r.b)(() => Object(a.c)({
					comment: h.n,
					language: x.S,
					post: b.I,
					subredditOrProfile: b.U
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return n.a.createElement(o.Fragment, null, n.a.createElement(L, null), n.a.createElement(M, {
						language: t,
						metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
						post: s,
						showSub: !0,
						showTimestamp: !1,
						subredditOrProfile: r
					}))
				},
				A = e => {
					const {
						comment: t,
						profileName: s
					} = e;
					if (!t) return null;
					const o = s || t.author;
					return n.a.createElement(P, {
						"data-click-id": "user",
						to: "/user/".concat(o, "/")
					}, o)
				};
			t.a = Object(d.a)(k(Object(m.b)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(g.a, {
					className: Object(c.a)(y.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(u.e)(e)
					}
				}, n.a.createElement(S, null, n.a.createElement(I, null), n.a.createElement(_, null, A(e), n.a.createElement(i.c, null, " commented on "), n.a.createElement(N, null, n.a.createElement(T, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: v.b.Small,
					titleClassName: j.a.postTitleTitle
				})), R(e)))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					isFirst: t,
					isLast: s
				} = e, o = d(e, ["isFirst", "isLast"]);
				return n.a.createElement("div", c({
					className: Object(r.a)(a.a.border, {
						[a.a.isFirst]: t,
						[a.a.isLast]: s
					})
				}, o))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				C = s.n(f);
			const y = m.a.div("ProfileOwnerCommentWrapper", C.a),
				E = m.a.div("CommentContentWrapper", C.a),
				j = m.a.div("Wrapper", C.a),
				P = m.a.div("CommentSeparator", C.a),
				w = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.n)(e, t),
					isCommentHighlightExperiment: (e, t) => {
						if (!Object(v.a)(e)) return !1;
						const s = Object(x.n)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(g.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: O.U
				}), e => ({
					openPost: t => e(Object(h.x)(t))
				}));
			class S extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isCommentHighlightExperiment: r,
						isFirst: a,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, h = m === e.author ? I : _;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(j, {
						className: Object(l.a)({
							[C.a.isFirst]: a,
							[C.a.isLast]: c,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: d
						})
					}, n()(s + 1, e => i.a.createElement(P, {
						key: e
					})), i.a.createElement(E, null, h(t, m, u))))
				}
			}
			const I = (e, t, s) => i.a.createElement(y, null, _(e, t, s, !0, !0)),
				_ = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = w(S)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: c,
					redditStyle: p,
					theme: u
				} = e, h = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, h), t)
			})
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends n.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, r = s.isFollowed;
					let i = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && o && (i = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(a.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(l.a, {
						msgId: i
					}))
				}
			}
			const b = Object(r.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(h))
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				i = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", i.a)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(i.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: n
				} = e;
				let i = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (i = Object(c.a)({
					apiError: n,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, i), s && r.a.createElement(a.f, {
					onClick: s
				}, o.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/components/Translated/index.tsx"),
				y = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/getClickInfo.ts"),
				S = s("./src/reddit/helpers/pixels.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				L = s("./src/telemetry/index.ts"),
				k = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R),
				F = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const B = 500,
				D = new M.a(B),
				H = new M.a(B),
				W = new M.a(B),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = b.a.div("SeeMore", A.a),
				G = b.a.wrapped(_.a, "ArrowRight", A.a),
				z = (e, t, s, o, n, r, i, a) => {
					const c = s ? "last-".concat(o, "-").concat(n) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = D.get(d);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
					}, D.set(d, l)), l
				},
				K = (e, t, s, o) => {
					const n = "left-".concat(e, "-").concat(t);
					let r = H.get(n);
					return void 0 === r && (r = n => {
						s.trackOnPostExitedViewport(e, t, n, o)
					}, H.set(n, r)), r
				},
				q = (e, t) => {
					const s = "click-".concat(e);
					let o = W.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(S.a)(s.events, y.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(x.d)(s.source.outboundUrl, x.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(w.a)(e)
						})
					}, W.set(s, o)), o
				},
				Q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(B), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: o
						} = this.props, n = t(), r = [];
						n.forEach(e => r.push(e.id));
						const i = r.map(e => s[e]).filter(Boolean),
							a = i.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(i, a))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && L.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = L.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = L.c.end(this.timerId);
						setTimeout(() => Object(L.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && L.c.cancel(this.timerId), e.postIds.length && (this.timerId = L.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && L.c.has(this.timerId)) {
						const e = L.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(L.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && L.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return L.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = L.c.end(e);
					setTimeout(() => {
						s(t(o, k.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						o = F(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = F(e, ["postsById"]),
						i = Object.keys(o),
						a = Object.keys(r);
					if (a.length !== i.length) return !0;
					if (a.some(e => o[e] !== r[e])) return !0;
					if (s === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						isCommentPermalink: r,
						isCommentsPage: i,
						isFrontpage: a,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: x
					} = this.props, v = 0 === t, O = s ? "last-index" : "", f = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(m, "-").concat(l, "-").concat(h);
					let C;
					if (void 0 === (C = this.scrollChildCache.get(f))) {
						const {
							inSubredditOrProfile: O,
							postsById: y
						} = this.props, E = y[e], P = E.crosspostRootId && y[E.crosspostRootId] ? y[E.crosspostRootId] : E;
						E.crosspostRootId && !y[E.crosspostRootId] && g.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(E.id, " is crosspost of ").concat(E.crosspostRootId, ", but ") + "".concat(E.crosspostRootId, " details are missing in the state")), g.c.captureMessage("Crosspost parent details are missing")
						});
						const w = this.props.postComponentForLayout({
								isCrosspost: !!E.crosspostRootId,
								isFirstPost: v,
								layout: o,
								post: P
							}),
							S = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							_ = z(e, o, s, l, m, h, this.props, t),
							T = K(e, o, this.props, t),
							M = q(e, this.props),
							L = P.media && P.media.type === N.n.EMBED ? P.media.provider : null;
						C = {
							estHeight: Object(I.c)(E, o),
							id: e,
							isFocusable: !(!P.media || o !== j.g.Large) && (N.d.has(P.media.type) && (!L || !N.q.has(L)) && !P.isSpoiler && !P.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: T,
							render: t => {
								let {
									className: o,
									height: u,
									width: h,
									remeasure: g,
									setScrollerChildRef: f,
									shouldLoadInitially: C
								} = t;
								return d.a.createElement(w, {
									className: o,
									currentProfileName: n,
									key: S,
									availableWidth: h,
									eventFactory: b,
									first: v,
									forceLoadMedia: C,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: M,
									onSizeChanged: g,
									postId: e,
									redditStyle: x,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: f
								})
							}
						}, this.scrollChildCache.set(f, C)
					}
					return C
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return d.a.createElement("div", {
						className: A.a.placeholder
					}, d.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: A.a.placeholder
					}, d.a.createElement(v.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: V[o]
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let x = h.map((e, t, s) => {
						const o = t === h.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (x = Q(x, n));
					const g = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						v = a ? Object(o.e)(a) : null,
						O = v || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(f.b, {
						innerRef: this.updateScrollerRef,
						className: O ? A.a.truncatedPostList : Object(p.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: E.g
					}, x), v && d.a.createElement(U, {
						className: A.a.seeMoreButton
					}, d.a.createElement(P.a, {
						className: A.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Kb.Posts
						})
					}, d.a.createElement(C.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				i = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				d = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = o.a.wrapped(i.a, "Icon", p.a),
				h = o.a.wrapped(a.a, "Icon", p.a),
				b = o.a.wrapped(c.a, "Icon", p.a),
				x = o.a.wrapped(d.a, "Icon", p.a),
				g = o.a.wrapped(l.a, "Icon", p.a),
				v = o.a.wrapped(n.b, "CheckboxMenuItem", p.a),
				O = o.a.wrapped(r.b, "DropdownRow", p.a),
				f = o.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, h = "upvote-button-".concat(t.id);
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: u
				}, o && n.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), n.a.createElement(i.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: h
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(f);
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: f,
					inSubredditOrProfile: E,
					isCurrentUserProfilePost: j,
					isCommentsPage: P,
					isCompactPinnedPost: w,
					isOverlay: S,
					language: I,
					post: _,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: M,
					showSubreddit: L,
					showSubredditIcon: k,
					subredditOrProfile: R
				} = e, A = P && N;
				return n.a.createElement(y, {
					className: t
				}, L && R && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, k && n.a.createElement(m.b, {
					className: Object(r.a)(C.a.subredditIcon, f),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, L && n.a.createElement(c.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), n.a.createElement(l.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: S ? l.c.Lightbox : void 0,
					language: I,
					post: _,
					showSub: L,
					subredditOrProfile: R
				}), n.a.createElement(d.a, {
					className: C.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: E,
					language: I,
					isCompactPinnedPost: w,
					post: _,
					tooltipType: S ? l.c.Lightbox : void 0
				}), R && n.a.createElement(a.a, {
					className: C.a.donationAmount,
					contentId: _.id,
					subredditId: R.id
				}), n.a.createElement(i.a, {
					forceShowAllAwards: P,
					isOverlay: S,
					showAwarders: A,
					tooltipType: S ? l.c.Lightbox : void 0,
					thing: _
				})), R && L && T && !j && n.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(O.e)(R) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: _.id
				}, "Subscribe"), M && n.a.createElement(b.a, {
					className: C.a.OutboundLink,
					isSponsored: _.isSponsored,
					href: Object(v.A)(e.post),
					source: _.source
				}, n.a.createElement(g.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-dom/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/components/PostList/LoadMore.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				h = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/pixels.ts"),
				v = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(y);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const w = 500,
				S = new O.a(w),
				I = new O.a(w),
				_ = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				N = (e, t, s, o, n, r) => {
					const i = s ? "last-".concat(o, "-").concat(n) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(i);
					let c = S.get(a);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, S.set(a, c)), c
				},
				T = (e, t) => {
					const s = "click-".concat(e);
					let o = I.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(g.a)(s.events, l.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.d)(s.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(x.a)(e)
						})
					}, I.set(s, o)), o
				};
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new O.a(w), this.updateScrollerRef = e => {
						const t = e && Object(a.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(c.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(c.l.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && f.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = f.c.end(e);
					setTimeout(() => s(t(o, C.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							itemIds: s
						} = t,
						o = P(t, ["itemIds"]),
						{
							itemIds: n
						} = e,
						r = P(e, ["itemIds"]),
						i = Object.keys(o),
						a = Object.keys(r);
					return a.length !== i.length || !!a.some(e => o[e] !== r[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: a,
						listingName: c,
						postClickEvent: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(a);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], h = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), b = N(u, r, s, a, c, this.props), x = {
							key: h,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: T(e, this.props),
							postId: u
						}, g = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(g, j({}, x, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(u.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(m.a, {
						isLoading: !!t,
						layout: s,
						countOverride: _[s]
					}), !!e && i.a.createElement(u.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, r = o.map((s, n, r) => {
						const i = n === o.length - 1,
							a = n && o[n - 1],
							c = !i && o[n + 1],
							d = !!Object(v.a)(s) && (!a || !Object(v.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(v.a)(s) && (!c || !Object(v.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, d, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(h.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n,
						viewportTopPadding: b.g + b.t
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = M
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				isGildedExperiment: "_2NuuIeE2x84nNR2055YSCj",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				_ = s.n(I);
			const N = Object(g.t)({
					routeName: g.T,
					privateListingType: g.i
				}),
				T = Object(c.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === L,
					isOwnProfile: (e, t) => Object(P.M)(e, t.profileName),
					language: P.S,
					isInGoldProfileGildedExperiment: E.a,
					isSnoovatar30Enabled: y.d.snoovatar30,
					isSubscriptionsPinned: w.b
				}),
				M = Object(m.a)(v.a),
				L = "profile-nav-menu-tooltip";
			t.a = N(Object(i.b)(T, e => ({
				toggleTooltip: t => e(Object(h.g)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: o,
					privateListingType: n,
					profileName: i,
					routeName: a,
					toggleTooltip: c,
					isInGoldProfileGildedExperiment: d,
					isSnoovatar30Enabled: l,
					isSubscriptionsPinned: m
				} = e;
				return r.a.createElement("div", {
					className: Object(p.a)(_.a.container, {
						[_.a.isGildedExperiment]: d
					})
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: m ? x.v : 0,
					render: () => r.a.createElement(r.a.Fragment, null, A({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isSnoovatar30Enabled: l,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(k, e)), r.a.createElement("button", {
						className: Object(p.a)(_.a.mainLink, _.a.overflowMenuButton),
						id: L,
						onClick: () => c(L)
					}, r.a.createElement(f.a, null)), r.a.createElement(M, {
						className: Object(p.a)(_.a.dropdown, {
							[_.a.isGildedExperiment]: d
						}),
						isOpen: t,
						tooltipId: L
					}, F({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(R, e))))
				}))
			}));
			const k = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: o,
						url: n,
						internal: i
					} = e;
					return i ? r.a.createElement(O.a, {
						className: Object(p.a)(_.a.mainLink, {
							[_.a.hideOnNarrow]: !!t,
							[_.a.isActive]: s
						}),
						to: n
					}, o) : r.a.createElement("a", {
						className: Object(p.a)(_.a.mainLink, {
							[_.a.hideOnNarrow]: !!t,
							[_.a.isActive]: s
						}),
						href: n
					}, o)
				},
				R = e => {
					let {
						isActive: t,
						internal: s,
						key: o,
						url: n,
						showOnNarrow: i,
						text: c
					} = e;
					return s ? r.a.createElement(a.a, {
						className: Object(p.a)(_.a.dropdownLink, {
							[_.a.isActive]: t,
							[_.a.showOnNarrow]: !!i
						}),
						to: n,
						key: o,
						rel: "nofollow",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(p.a)(_.a.dropdownLink, {
							[_.a.showOnNarrow]: !!i
						}),
						href: n,
						key: o,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				A = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: a,
						isInGoldProfileGildedExperiment: c
					} = e;
					const l = n ? [{
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Saved,
						key: "profile.saved",
						text: Object(d.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					n && c && (l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}));
					const m = a ? [{
						internal: !0,
						isActive: r === u.yb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(S.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.yb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(d.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(d.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(d.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...l]
				},
				F = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isInGoldProfileGildedExperiment: a
					} = e;
					const c = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return n && a ? (c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), c) : [...c, {
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: Object(d.a)(t, "profile.sections.gilded"),
						url: "".concat(l.a.redditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				u = s("./src/reddit/constants/posts.ts");
			const h = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				b = e => r.a.createElement(i.a, {
					className: e.className
				}, r.a.createElement(h, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(p.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: u.a.PROFILE
					}
				}), r.a.createElement(a.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			b.defaultProps = {
				isOverlay: !1
			}, t.a = b
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/take.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				v = s.n(g),
				O = s("./src/lib/lessComponent.tsx");
			const f = 10,
				C = O.a.wrapped(p.n, "TertiaryButton", v.a);
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: o,
							pending: n
						} = this.props, r = !e || t && o ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return i.a.createElement(C, {
							onClick: this.onButtonClick
						}, n ? i.a.createElement(u.a, {
							sizePx: f
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: o,
						minimizedLength: r,
						renderItem: a,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = o.length > r || t, p = (!l || d ? o : n()(o, r)).map(e => a({
						item: e
					}));
					return i.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, p, i.a.createElement(h.a, null, i.a.createElement(b.a, null, l && this.renderToggleButton())))
				}
			}
			y.defaultProps = {
				minimizedLength: l.Db
			};
			const E = Object(c.c)({
				language: x.S
			});
			t.a = Object(a.b)(E)(y)
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(b);
			const g = Object(i.c)({
					currentUser: h.i,
					language: h.S,
					moderated: p.n,
					subscriptions: u.h,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(r.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				O = e => {
					let {
						item: t
					} = e;
					return n.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					language: s,
					moderated: o,
					profileName: r,
					subscriptions: i,
					hasMoreModerated: c,
					onLoadMore: l,
					loadMorePending: p
				} = e;
				if (0 === o.length) return null;
				const u = t && Object(m.f)(t).toLowerCase() === r.toLowerCase() ? Object(a.a)(s, "profile.moderatedSubredditsYours") : Object(a.a)(s, "profile.moderatedSubreddits"),
					h = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(o, new Set(i), s);
				return n.a.createElement(d.a, {
					className: x.a.container,
					title: u,
					items: h,
					renderItem: O,
					hasMoreItems: c,
					onLoadMore: l,
					pending: p
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(h);
			const x = Object(a.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				g = Object(r.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return n.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, n.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), n.a.createElement("div", {
						className: b.a.description
					}, n.a.createElement(i.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), n.a.createElement("div", {
						className: b.a.meta
					}, n.a.createElement(m.c, null, n.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", n.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: r,
					profileName: i
				} = e;
				return o && o.length ? n.a.createElement(l.a, null, n.a.createElement(d.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: r,
					pending: s,
					renderItem: v,
					title: Object(p.c)("Public custom feeds by u/".concat(Object(p.b)("username", i)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./src/reddit/selectors/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				b = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const g = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(u.r)(e, Object(u.m)(e, s))
				}
			}, p.a);
			t.a = Object(r.b)(g)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(a.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: E
				})
			});
			const v = x.a.wrapped(m.a, "TrophyItem", b.a),
				O = x.a.div("TrophyIcon", b.a),
				f = x.a.h5("TrophyName", b.a),
				C = x.a.div("TrophyContent", b.a),
				y = x.a.wrapped(d.f, "Description", b.a);

			function E(e) {
				let {
					item: t
				} = e;
				const s = n.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return n.a.createElement(v, {
					key: t.id
				}, n.a.createElement(O, null, t.url ? n.a.createElement(c.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), n.a.createElement(C, null, n.a.createElement(f, null, t.name), n.a.createElement(y, null, t.description)))
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/path-browserify/index.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/listingSorts.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/TimeSort/index.m.less"),
				w = s.n(P),
				S = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "TimeSort--SortPicker",
				N = Object(l.a)(f.a),
				T = (e, t, s) => {
					let o = e.url;
					return e.urlParams.sort || Object(v.H)(e) || (o = n.a.join(o, t)), Object(m.a)(o, {
						[g.t]: s
					})
				},
				M = S.a.div("ListingSortContainer", w.a),
				L = Object(v.t)(),
				k = Object(c.c)({
					dropdownIsOpen: Object(E.b)(_),
					language: j.S
				}),
				R = Object(a.b)(k, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: _
					}))
				}));
			t.a = L(R(Object(b.b)(e => i.a.createElement(M, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, i.a.createElement(h.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, i.a.createElement(h.b, {
				className: e.buttonClassName,
				displayText: x.b[e.timeSort],
				id: _,
				showDropdownTriangle: !0
			})), i.a.createElement(O.a.Consumer, null, t => i.a.createElement(N, I({
				isOpen: e.dropdownIsOpen,
				tooltipId: _
			}, t), [p.Pb.HOUR, p.Pb.DAY, p.Pb.WEEK, p.Pb.MONTH, p.Pb.YEAR, p.Pb.ALL].map(t => i.a.createElement(C.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: x.b[t],
				href: T(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(a),
				d = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				h = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				O = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(C);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: o
					} = e;
					let r, i = t.username,
						a = "";
					return o !== u.a.Twitter ? null : (r = n.a.createElement(O.a, {
						className: y.a.twitterLogo
					}), a = Object(g.c)("View on Twitter"), i = "@".concat(t.username), n.a.createElement(f.a, null, n.a.createElement("span", {
						className: y.a.icon
					}, r), n.a.createElement(x.a, {
						className: y.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, n.a.createElement("div", {
						className: y.a.linkTitle
					}, n.a.createElement("span", {
						className: y.a.name
					}, i), n.a.createElement(v.a, {
						className: y.a.linkIcon
					})), n.a.createElement("div", {
						className: y.a.linkDescription
					}, a))))
				},
				j = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				P = s.n(j);
			const w = Object(i.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(h.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(b.hb)(e, {
							userName: s.name
						}) : null
					}
				}),
				S = Object(r.b)(w, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(c.b)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(a.a, null, n.a.createElement(d.b, null, n.a.createElement(d.a, null, n.a.createElement(p.c, null, "Connected accounts")), s && n.a.createElement("div", {
					className: P.a.account
				}, n.a.createElement(E, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postList.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/helpers/isComment.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/tracking.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, s) => Object(d.a)(e) ? 120 : 47,
				g = Object(c.t)(),
				v = {
					apiError: p.a,
					apiPending: p.b,
					currentUser: b.i,
					layout: c.M,
					loadMore: p.d,
					subredditsById: u.Y,
					viewportDataLoaded: h.a,
					commentsById: p.g,
					itemIds: p.f,
					itemIdToPostId: p.e,
					postsById: p.h,
					estimateItemHeight: x
				},
				O = Object(n.c)(v),
				f = Object(o.b)(O, (e, t) => ({
					onBottomViewed: (t, s) => e(i.c(t, s)),
					openPost: t => {
						e(r.x(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(l.a)(t) && e(r.A(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(l.a)(t) && e(r.B(t, o))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: m.f
				}));
			t.a = e => Object(a.b)(g(f(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/monthsToMinutes.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const C = f(),
				y = {
					apiError: b.c,
					apiPending: b.d,
					m2mIsEnabled: x.w,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: g.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(g.F)(e, s, o, n)
					}),
					subredditsById: v.Y,
					viewportDataLoaded: O.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				E = Object(n.c)(y),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(a.x(t))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(a.A(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, n) => {
						e(a.B(t, o, n))
					}
				}),
				P = Object(o.b)(E, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(C(P(e)))
		},
		"./src/reddit/constants/countrySorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const r = {
				[o.v.Everywhere]: Object(n.c)("everywhere"),
				[o.v.UnitedStates]: Object(n.c)("united states"),
				[o.v.Argentina]: Object(n.c)("argentina"),
				[o.v.Australia]: Object(n.c)("australia"),
				[o.v.Bulgaria]: Object(n.c)("bulgaria"),
				[o.v.Canada]: Object(n.c)("canada"),
				[o.v.Chile]: Object(n.c)("chile"),
				[o.v.Colombia]: Object(n.c)("colombia"),
				[o.v.Croatia]: Object(n.c)("croatia"),
				[o.v.CzechRepublic]: Object(n.c)("czech republic"),
				[o.v.Finland]: Object(n.c)("finland"),
				[o.v.Greece]: Object(n.c)("greece"),
				[o.v.Hungary]: Object(n.c)("hungary"),
				[o.v.Iceland]: Object(n.c)("iceland"),
				[o.v.India]: Object(n.c)("india"),
				[o.v.Ireland]: Object(n.c)("ireland"),
				[o.v.Japan]: Object(n.c)("japan"),
				[o.v.Malaysia]: Object(n.c)("malaysia"),
				[o.v.Mexico]: Object(n.c)("mexico"),
				[o.v.NewZealand]: Object(n.c)("new zealand"),
				[o.v.Philippines]: Object(n.c)("philippines"),
				[o.v.Poland]: Object(n.c)("poland"),
				[o.v.Portugal]: Object(n.c)("portugal"),
				[o.v.PuertoRico]: Object(n.c)("puerto rico"),
				[o.v.Romania]: Object(n.c)("romania"),
				[o.v.Serbia]: Object(n.c)("serbia"),
				[o.v.Singapore]: Object(n.c)("singapore"),
				[o.v.Sweden]: Object(n.c)("sweden"),
				[o.v.Taiwan]: Object(n.c)("taiwan"),
				[o.v.Thailand]: Object(n.c)("thailand"),
				[o.v.Turkey]: Object(n.c)("turkey"),
				[o.v.UnitedKingdom]: Object(n.c)("united kingdom")
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const r = {
					[o.N.BEST]: Object(n.c)("best"),
					[o.N.HOT]: Object(n.c)("hot"),
					[o.N.NEW]: Object(n.c)("new"),
					[o.N.CONTROVERSIAL]: Object(n.c)("controversial"),
					[o.N.RISING]: Object(n.c)("rising"),
					[o.N.TOP]: Object(n.c)("top")
				},
				i = {
					[o.Pb.HOUR]: Object(n.c)("Now"),
					[o.Pb.DAY]: Object(n.c)("Today"),
					[o.Pb.WEEK]: Object(n.c)("This week"),
					[o.Pb.MONTH]: Object(n.c)("This month"),
					[o.Pb.YEAR]: Object(n.c)("This year"),
					[o.Pb.ALL]: Object(n.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => n.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, n.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, n.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const h = e => t => {
					const {
						className: s,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const o = !(!t && !s);
						let n = "";
						return n = e ? o ? m.a.mDisabledRedditStyle : m.a.mDisabled : o ? m.a.mActiveRedditStyle : m.a.mActive
					})(o, i, a);
					return n.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, d, s)
					}, c))
				},
				b = h(d.a),
				x = h(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? b : i.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				C = s.n(f);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const j = e => Object(c.a)(C.a.iconStyles, e.className, {
					[C.a.mDisabled]: e.disabled,
					[C.a.mRedditStyle]: e.redditStyle
				}),
				P = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return n.a.createElement("button", y({
						className: Object(c.a)(C.a.layoutButton, {
							[C.a.mIsActive]: t
						})
					}, s))
				},
				w = Object(a.e)("listings.layoutSwitcher.label"),
				S = Object(a.e)("listings.layoutSwitcher.card"),
				I = Object(a.e)("listings.layoutSwitcher.classic"),
				_ = Object(a.e)("listings.layoutSwitcher.compact"),
				N = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(b.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: S
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(u.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: I
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(h.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: _
				}],
				T = Object(g.t)(),
				M = Object(i.c)({
					language: O.S,
					postLayout: g.M,
					redditStyle: g.B
				}),
				L = Object(r.b)(M, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(L(Object(x.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || p.e[e.postLayout];
				return n.a.createElement("div", {
					className: Object(c.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, n.a.createElement("div", {
					className: C.a.title
				}, w(e.language)), n.a.createElement("div", {
					className: C.a.iconContainer
				}, N.map(r => {
					const i = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(v.screen)(e),
								subreddit: Object(v.subreddit)(e)
							})))
						})(r.layout),
						a = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + r.layout,
						l = r.layout === o;
					return n.a.createElement(P, {
						"aria-label": r.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: r.layout,
						onClick: i,
						onMouseEnter: a,
						onMouseLeave: a,
						onTouchStart: i
					}, n.a.createElement(r.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), n.a.createElement(d.c, {
						className: C.a.tooltip,
						tooltipId: c,
						text: r.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const p = i.a.span("metaText", l.a),
				u = e => n.a.createElement(p, e, " · "),
				h = Object(r.d)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: r
					} = e, i = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(a.b)(o),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : r ? l : h(s, o, {
							count: d
						});
					return n.a.createElement(p, i, u)
				},
				x = (e, t) => {
					const s = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(a.b)(e)
					});
					return n.a.createElement(p, null, s)
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === o.a.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case n.D.AUTHORIZATION_ERROR:
						return s ? Object(o.a)(r, "error.type.notLoggedIn") : Object(o.a)(r, "error.type.notAuthorized");
					case n.D.VALIDATION_ERROR:
						return Object(o.a)(r, "error.type.validation");
					case n.D.NOT_FOUND_ERROR:
						return Object(o.a)(r, "error.type.notFound");
					case n.D.SERVER_ERROR:
						return Object(o.a)(r, "error.type.server");
					case n.D.LIKELY_UBLOCK_ERROR:
						return Object(o.a)(r, "error.type.blocked");
					default:
						return Object(o.a)(r, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const l = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[c.g.Large]: u,
					[c.g.Medium]: h,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				x = e => r.a.createElement(l, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				v = e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)),
				O = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || v(e)),
				f = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function C(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: o,
					post: n
				} = e;
				if (n.isBlank) return x;
				const r = !n.media && !!n.source && Object(i.a)(n.source.url),
					d = t && r;
				o === c.g.Large && O(n) && !d && (o = c.g.Medium);
				const l = b[o];
				return void 0 === l ? (Object(a.a)(void 0, "Could not find component for layout ".concat(o, ".")), x) : s && n.isSponsored && o === c.g.Large ? h : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				h = e => Object(o.o)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Top/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: d.a.container
					}, n.a.createElement("h3", {
						className: d.a.title
					}, t || Object(a.c)("Sorry, there doesn't seem to be anything here.")), n.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.a.createElement(i.c, null, "Go Home")))
				},
				m = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: d.a.container
					}, n.a.createElement("h3", {
						className: d.a.title
					}, t || Object(a.c)("Sorry, You do not have permission to view this page.")), n.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.a.createElement(i.c, null, "Go Home")))
				}
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/pages/profileOverview.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				x = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./src/reddit/actions/profileOverviewChrono.ts"),
				v = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				f = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				y = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				P = s("./src/reddit/components/ProfileItemList/index.tsx"),
				w = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				S = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				I = s.n(S),
				_ = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(w.a)(_.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return i.a.createElement(P.a, N({
					className: Object(E.a)(t, {
						[I.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", I.a));
			var M = e => i.a.createElement(T, N({}, e, {
					itemComponent: j.a
				})),
				L = s("./src/reddit/components/PostList/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				A = s("./src/lib/isPinnedAdminPost/index.ts"),
				F = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				B = s("./node_modules/lodash/last.js"),
				D = s.n(B);
			var H = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/components/ClassicPost/index.tsx"),
				U = s("./src/reddit/components/LargePost/index.tsx"),
				G = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				z = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				K = s("./src/reddit/i18n/components.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Q = s("./src/reddit/selectors/profile.ts"),
				J = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				Z = s.n(J);
			const Y = _.a.div("ExtraCommentsItemWrapper", Z.a),
				X = _.a.p("ExtraComments", Z.a),
				$ = _.a.wrapped(X, "ExtraCommentsInteractive", Z.a);
			var ee = Object(a.b)(() => Object(c.c)({
					extraCommentsItem: Q.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: o
						} = e.profileOverviewPage.conversations;
						return !!o.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(x.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: o
					} = e;
					return i.a.createElement(Y, null, o ? i.a.createElement(X, null, i.a.createElement(K.c, null, "Loading...")) : i.a.createElement(q.a.Consumer, null, e => i.a.createElement($, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(K.c, null, "Load more comments"))))
				}),
				te = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				se = s("./src/reddit/constants/postLayout.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ie = s.n(re);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = _.a.div("BackgroundWrapper", ie.a),
				de = _.a.wrapped(V.default, "ClassicPost", ie.a),
				le = _.a.wrapped(G.a, "OverviewCommentPost", ie.a),
				me = Object(p.t)({
					currentProfileName: p.h,
					isFrontpage: p.z,
					pageLayer: e => e
				}),
				pe = Object(a.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(F.a)(s, n);
						return e.profileOverviewPage.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(F.a)(s, n);
						return e.profileOverviewPage.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(W.n)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(W.s)(e, s, o)
					},
					post: W.I,
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, s)
					},
					layout: p.M
				})),
				ue = _.a.wrapped(U.default, "OverviewLargePost", ie.a);
			var he = Object(R.a)(me(pe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
						forceLoadMedia: r,
						headComment: a,
						isFrontpage: c,
						isInitiallyPinned: d,
						isPinned: l,
						isScrolling: m,
						last: p,
						layout: u,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: x,
						post: g,
						postId: v,
						profileName: O,
						scrollerItemRef: f
					} = e, C = {
						last: p,
						onClickPost: h,
						postId: v
					};
					if (!O) return null;
					const y = O === g.author,
						j = Object(A.a)(l, g.distinguishType);
					if (!y && !a && !j) return null;
					const P = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), D()(t).push(e[o])
							}
							return t
						}(function(e, t) {
							const s = [];
							let o = t,
								n = "comment";
							for (; o;) {
								const t = e[o];
								s.push({
									id: o,
									depth: t.depth,
									type: n
								}), t.next ? (o = t.next.id, n = t.next.type) : o = void 0
							}
							return s
						}(o, a)) : [],
						w = P.length - 1;
					return i.a.createElement("div", {
						className: Object(E.a)(ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, ie.a.OverviewConversationsPost, s),
						style: Object.assign({}, Object(H.b)(), Object(H.d)(e))
					}, i.a.createElement(z.a, {
						isFirst: !0,
						isLast: w < 0,
						key: g.id
					}, !y && !!a && i.a.createElement(le, ae({}, C, {
						commentId: a,
						key: g.id,
						profileName: O
					})), (y || j) && (u === se.g.Classic ? i.a.createElement(de, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: r,
						last: p,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: x,
						postId: v,
						scrollerItemRef: f
					}) : i.a.createElement(ue, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: m,
						isFrontpage: c,
						forceLoadMedia: r,
						last: p,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: x,
						postId: v,
						scrollerItemRef: f
					}))), i.a.createElement(ce, {
						style: {
							background: Object(H.e)(e)
						}
					}, !d && P.map((e, t) => i.a.createElement(z.a, {
						isLast: t === w,
						key: "".concat(t, "-isLast[").concat(t === w, "]")
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(te.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: O,
							showModTools: !0
						}) : i.a.createElement(ee, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: O
						})
					})))))
				}))),
				be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				xe = s("./src/reddit/helpers/trackers/post.ts"),
				ge = s("./src/reddit/selectors/tracking.ts"),
				ve = s("./src/reddit/connectors/PostList/index.ts");
			const Oe = Object(c.c)(Object.assign({}, ve.d, {
					postIds: W.P,
					viewportDataLoaded: ge.a
				})),
				fe = Object(ve.c)(),
				Ce = Object(a.b)(Oe, ve.b, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: xe.f,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? be.a : he
					}
				}));
			var ye = (e => Object(k.b)(fe(Ce(e))))(L.a),
				Ee = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				je = s("./node_modules/lodash/debounce.js"),
				Pe = s.n(je),
				we = s("./src/reddit/actions/post.ts"),
				Se = s("./src/reddit/components/MiniCardPost/index.tsx"),
				Ie = s("./src/reddit/helpers/getClickInfo.ts"),
				_e = s("./src/reddit/helpers/localStorage/index.ts"),
				Ne = s("./src/reddit/models/User/index.ts"),
				Te = s("./src/reddit/selectors/user.ts"),
				Me = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					fill: "inherit"
				}, i.a.createElement("path", {
					d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
				}))),
				Le = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				ke = s.n(Le);
			var Re = e => i.a.createElement("div", {
					className: Object(E.a)(ke.a.container, e.className)
				}, i.a.createElement(Me, {
					className: ke.a.pin
				}), i.a.createElement("div", {
					className: ke.a.title
				}, i.a.createElement(K.c, null, "Show off that karma!")), e.children),
				Ae = s("./src/reddit/controls/TextButton/index.tsx"),
				Fe = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Be = s.n(Fe);
			var De = e => i.a.createElement(Re, {
					className: Object(E.a)(Be.a.container, e.className)
				}, i.a.createElement("div", {
					className: Be.a.description
				}, i.a.createElement(K.c, null, 'Pin a post from your feed using the "..." at the bottom of each post')), i.a.createElement(Ae.a, {
					className: Be.a.gotIt,
					onClick: e.onGotItClick
				}, i.a.createElement(K.c, null, "OK, I got it"))),
				He = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				We = s.n(He);
			const Ve = 320,
				Ue = 300,
				Ge = Object(c.c)({
					arePinnedPostsLoaded: W.a,
					currentUser: Te.i,
					pinnedPostIds: W.Q
				}),
				ze = Object(a.b)(Ge, e => ({
					openPost: t => e(Object(we.x)(t))
				}));
			class Ke extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Pe()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ue ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(_e.X)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ie.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(Se.b, {
						availableWidth: Ve,
						className: Object(E.a)(We.a.item, We.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						key: e,
						onClickPost: this.onClickPost,
						postId: e,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(_e.v)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const o = !!this.props.currentUser && this.props.profileName === Object(Ne.f)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: We.a.title
					}, i.a.createElement(K.c, null, "Pinned posts")), r ? i.a.createElement(De, {
						className: Object(E.a)(We.a.item, We.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: We.a.container
					}, t.map(this.renderPost), a && i.a.createElement(Re, {
						className: We.a.item
					})), s)
				}
			}
			var qe = Object(p.t)()(ze(Ke)),
				Qe = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Je = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ze = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ye = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Xe = s("./src/reddit/selectors/experiments/generalCleanup.ts");

			function $e() {
				return ($e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const et = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(d.a)(s.search)])
				},
				tt = Object(p.t)(),
				st = Object(c.a)(p.C, Te.X, et, p.M, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Q.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(b.a)(e, et(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(W.k)(e, {
						profileName: s.params.profileName
					})
				}, Xe.a, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Te.f)(e, u.Rb + s.params.profileName)
				}, (e, t, s, o, n, r, i, a, c, d, l) => {
					let {
						sort: p,
						t: h
					} = a;
					const b = o === se.g.Compact ? u.ib : u.jb,
						x = Object(m.a)(n, b, p, s);
					return {
						contentGateInfo: l,
						generalCleanupVariant: d,
						over18Prefs: t,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: o,
						listingKey: x,
						profileName: n,
						shouldShowPinnedPostsSection: c,
						sort: p,
						timeSort: h
					}
				}),
				ot = Object(a.b)(st, (e, t) => ({
					onLoadMoreChronoItems: () => e(g.d({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLoadMoreConversationsItems: () => e(x.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.g)(Object.assign({}, t.match, {
						queryParams: n()([...Object(d.a)(t.location.search)])
					})))
				}));
			class nt extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(O.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						generalCleanupVariant: t,
						layout: s,
						over18Prefs: o,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: a,
						onLayoutChange: c,
						pageLayer: d,
						profileName: m,
						sort: p,
						shouldShowPinnedPostsSection: h,
						timeSort: b
					} = this.props;
					if (!d) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return i.a.createElement(v.b, {
						contentGateType: e.profileDeleted ? v.a.ProfileDeleted : v.a.ProfileSuspended,
						profileName: m
					});
					if (403 === d.status) return i.a.createElement(Ye.a, null);
					if (404 === d.status) return i.a.createElement(v.b, {
						contentGateType: v.a.ProfileDoesNotExist,
						profileName: m
					});
					if (!m) return null;
					const x = m.toLowerCase(),
						g = "/user/".concat(m, "/"),
						O = {
							listingKey: a,
							listingName: x
						};
					if (!o && r && !n) return i.a.createElement(v.b, {
						subredditName: m,
						contentGateType: v.a.Nsfw
					});
					const E = {
							inSubredditOrProfile: !Object(l.a)(m),
							listingKey: a,
							listingName: x,
							listingViewed: (e, t) => Object(Je.k)(a, p, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: c
						},
						j = Object(Xe.b)(t),
						P = {
							sort: p,
							baseUrl: g,
							sortOptions: u.nb,
							timeSort: b
						};
					let w;
					return w = s === se.g.Compact ? i.a.createElement(M, $e({}, E, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: c
					})) : i.a.createElement(i.a.Fragment, null, h && i.a.createElement(qe, {
						profileName: m
					}), j && i.a.createElement(f.a, P), i.a.createElement(ye, $e({}, E, {
						excludePinnedPosts: h,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(Ze.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
							profileName: m
						}), !j && i.a.createElement(y.a, P)),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), w),
						sidebar: i.a.createElement(Qe.a, $e({}, O, {
							profileName: m
						}))
					})
				}
			}
			t.default = tt(ot(nt))
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: o.J
				});
				return Object(o.Yb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: o.N
				});
				return Object(o.Yb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.ob
				});
				return Object(o.Yb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=ProfileOverview.5e60e782fa88d2d8c482.js.map