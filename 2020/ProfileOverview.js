// https://www.redditstatic.com/desktop2x/ProfileOverview.bc61fbc7b12463a06a3d.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "Frontpage~ModListing~Multireddit~ProfilePosts", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder"], {
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
								d = this._rootContainsTarget(r),
								c = n.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, s),
								m = n.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, o) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, r, i, d, l, m, p, u, h = a(s), b = c(s), x = !1; !x;) {
								var g = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (x = !0, g = o) : b != t.body && b != t.documentElement && "visible" != v.overflow && (g = a(b)), g && (n = g, r = h, i = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, i = Math.max(n.top, r.top), d = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), m = Math.min(n.right, r.right), u = d - i, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								b = c(b)
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
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
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

				function d(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = c(s)
					}
					return !1
				}

				function c(e) {
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
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					c = d(e, a);
				t = n(t), e -= a;
				for (var l = o(c, t); ++s < e;) t(s);
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
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
				return n.a.createElement(i.a, c({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
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
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
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
				w = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/experiments/chatPost.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const V = {
					autoplayPref: W.b,
					activeModalId: A.a,
					crosspost: H.c,
					currentUser: W.i,
					isActive: H.g,
					isChatPostExperiment: D.d,
					isCurrentUserProfilePost: H.h,
					isExpanded: H.j,
					isLoggedIn: W.G,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(H.o)(e, s)
					},
					language: W.P,
					moderatorPermissions: B.i,
					modModeEnabled: R.N,
					post: H.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: F.a,
					showMedia: R.r,
					subredditOrProfile: H.U,
					userIsOp: W.fb,
					flairStyleTemplate: R.P
				},
				U = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === k.a.upvoted ? Object(T.Q)(n) : Object(T.r)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.O)(n)),
						onOpenReportsDropdown: t => e(Object(L.h)({
							tooltipId: t
						}))
					}
				},
				G = Object(N.b)(() => Object(_.c)(V), U, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var z = s("./src/lib/LRUCache/index.ts");
			const K = Object(R.t)({
					searchQuery: R.T
				}),
				q = new z.a(250),
				Q = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = q.get(s);
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
							}, n.a.Children.toArray(i)), q.set(s, o)
						}
						return o
					}
				},
				J = Object(N.b)(() => Object(_.c)(V), U, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: Q(s.searchQuery || "")
				}));
			var Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ee = s.n($),
				te = s("./src/reddit/components/ClassicPost/index.m.less"),
				se = s.n(te);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "renderMedia", (function() {
				return ie
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return ce
			}));
			const ne = 16;
			class re extends n.a.Component {
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
						eventFactory: N,
						first: _,
						flairStyleTemplate: T,
						formatTitle: L,
						isCheckboxSelected: k,
						isCurrentUserProfilePost: M,
						isFrontpage: R,
						isLoggedIn: A,
						isOverlay: D,
						language: B,
						moderatorPermissions: F,
						modModeEnabled: H,
						onClickPost: W,
						onIgnoreReports: V,
						onOpenReportsDropdown: U,
						poll: G,
						post: z,
						redditStyle: K,
						scrollerItemRef: q,
						showBulkActionCheckbox: Q,
						showEditFlair: J,
						showMedia: $,
						subredditOrProfile: te,
						toggleCheckbox: re,
						userIsOp: ae
					} = this.props, de = K ? void 0 : T, ce = this.props.crosspost || void 0, le = Object(Y.a)(F), me = Object(Z.a)(F), pe = H && Y.a, ue = !!z.media && z.media.type === I.n.RTJSON, he = ae && ue, be = f && !$, xe = {
						flairStyleTemplate: de,
						post: z,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: M,
						isOverlay: D,
						shouldShowSubscribeButton: !(R && A),
						subredditOrProfile: te,
						language: B
					}, ge = n.a.createElement(O.a, {
						className: Object(i.a)(ee.a.classicPostStyles, se.a.postContainer, Object(X.a)(this.props), _ ? se.a.mFirst : void 0, e),
						isOverlay: D,
						style: Object.assign({}, Object(X.d)(this.props), Object(X.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: W,
						eventFactory: N
					}, n.a.createElement(E.a, {
						model: z,
						handleVote: s,
						showBulkActionCheckbox: Q,
						isCheckboxSelected: k,
						toggleCheckbox: re,
						flairStyleTemplate: de,
						redditStyle: K
					}), n.a.createElement(v.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, n.a.createElement(p.a, {
						className: se.a.eventMeta,
						post: z,
						language: B
					}), n.a.createElement("div", {
						className: se.a.mainBody
					}, n.a.createElement("div", {
						className: be ? se.a.expandoContainer : se.a.thumbnailContainer
					}, !be && n.a.createElement(S.a, {
						className: se.a.classicThumbnail,
						crosspost: ce && z,
						isMeta: a,
						post: ce || z,
						redditStyle: K,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), n.a.createElement(u.a, {
						crosspost: ce,
						className: se.a.rightExpando,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: se.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ne, "px")
						}
					}, n.a.createElement(w.c, {
						className: G ? se.a.titleWithPoll : void 0,
						format: L,
						poll: G,
						post: z,
						redditStyle: K,
						size: w.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: D
					}, z.source && !ce && n.a.createElement(P.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						source: z.source
					}, Object(d.a)(z))), n.a.createElement(C.a, oe({
						key: "PostMeta"
					}, xe)), H && le && Object(g.c)(z) && n.a.createElement(x.a, {
						language: B,
						onIgnoreReports: V,
						reportable: z
					}), n.a.createElement("div", {
						className: se.a.spacer
					}), z.source && z.source.url && z.isSponsored && n.a.createElement(c.a, {
						className: se.a.adLinkWrapper
					}, n.a.createElement(P.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.source.displayText), z.callToAction && n.a.createElement(l.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.callToAction)), n.a.createElement("div", {
						className: se.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: se.a.leftExpando,
						crosspost: ce,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: se.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: z,
						onVoteClick: s
					}), n.a.createElement(h.a, {
						className: se.a.flatlistSeparator
					}), n.a.createElement(h.c, {
						className: se.a.flatlist,
						currentUser: t,
						hasModFlairPerms: me,
						hasModPostPerms: le,
						isOverlay: !!D,
						language: B,
						modModeEnabled: H,
						onIgnoreReports: V,
						onOpenReportsDropdown: U,
						post: z,
						showEditPost: he,
						showEditFlair: J,
						tooltipType: D ? j.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.h)({
							editPost: !pe,
							save: !pe,
							hide: !pe,
							report: !pe
						})
					})), n.a.createElement(b.d, {
						postId: z.id
					}))), ie(z, q, o)));
					return n.a.createElement(n.a.Fragment, null, ge)
				}
			}
			const ie = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: se.a.crosspostMediaWrapper
				}, ae(e, t)) : ae(e, t) : null,
				ae = (e, t) => n.a.createElement(f.a, {
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
				de = Object(a.a)(re),
				ce = (e => K(J(e)))(de);
			t.default = (e => G(Object(M.b)(e)))(de)
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
				d = s("./src/higherOrderComponents/withClickTracking.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
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
			t.a = l(Object(d.c)(m))
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
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				w = Object(d.a)(C),
				j = E(Object(c.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: o,
						onApproveComment: r,
						onLockComment: i,
						onRemoveComment: a,
						onSpamComment: d,
						onShowComment: c,
						sendEvent: l,
						tooltipId: p
					} = e;
					return n.a.createElement(w, {
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
							d(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							i(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
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
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/lib/classNames/index.ts"),
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
			const w = e => {
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
			var j = Object(r.b)(() => Object(i.c)({
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
								style: w(t)
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
				P = s("./src/reddit/components/Flair/index.tsx"),
				I = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				S = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/helpers/isRemoved.ts"),
				k = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				D = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Flair/index.ts"),
				F = s("./src/reddit/icons/fonts/Admin/index.tsx"),
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
			const ie = p.a.wrapped(P.b, "RightPositionedAuthorFlair", oe.a),
				ae = p.a.wrapped(F.a, "AdminIcon", oe.a),
				de = p.a.wrapped(H.a, "Approve", oe.a),
				ce = p.a.wrapped(W.a, "Lock", oe.a),
				le = p.a.div("AdminEmeritus", oe.a),
				me = p.a.wrapped(J.a, "Automoderator", oe.a),
				pe = p.a.wrapped(Z.a, "CakeIcon", oe.a),
				ue = p.a.wrapped(Y.a, "Moderator", oe.a),
				he = p.a.wrapped(K.a, "Remove", oe.a),
				be = p.a.wrapped(q.a, "Report", oe.a),
				xe = p.a.wrapped(Q.a, "Spam", oe.a),
				ge = p.a.wrapped(z, "Op", oe.a),
				ve = p.a.wrapped(F.a, "Contractor", oe.a),
				Oe = p.a.a("MetaLink", oe.a),
				fe = p.a.wrapped(X.a, "EditedText", oe.a),
				Ce = p.a.wrapped(X.a, "StickiedText", oe.a),
				ye = p.a.span("DeletedText", oe.a),
				Ee = p.a.wrapped(X.a, "MetaSeparator", oe.a),
				we = p.a.wrapped(X.a, "CrowdControlText", oe.a),
				je = p.a.wrapped(S.b, "AuthorHoverCard", oe.a),
				Pe = p.a.a("RemovalReason", oe.a),
				Ie = p.a.wrapped(x.b, "Component", oe.a),
				Se = Object(a.d)("comment.children"),
				Ne = Object(a.d)("comment.moreThanChildren"),
				_e = e => (t, s) => {
					let {
						comment: o,
						renderedInOverlay: n
					} = s;
					return "".concat(e).concat(o.id).concat(n ? "inOverlay" : "")
				},
				Te = Object(a.e)("comment.tooltips.admin"),
				Le = Object(a.e)("comment.tooltips.cakeday"),
				ke = Object(a.e)("comment.tooltips.adminEmeritus"),
				Me = Object(a.e)("comment.tooltips.moderator"),
				Re = Object(a.e)("comment.tooltips.op"),
				Ae = Object(a.e)("comment.tooltips.contractor"),
				De = Object(r.b)(() => Object(i.c)({
					adminTooltipId: _e("CommentTopMeta--Admin--"),
					cakedayTooltipId: _e("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: _e("CommentTopMeta--AdEm--"),
					automodTooltipId: _e("CommentTopMeta--Automod--"),
					approveTooltipId: _e("CommentTopMeta--Approve--"),
					createdTooltipId: _e("CommentTopMeta--Created--"),
					contractorTooltipId: _e("CommentTopMeta--Contractor--"),
					gildedTooltipId: _e("CommentTopMeta--Gold--"),
					lockedTooltipId: _e("CommentTopMeta--Locked--"),
					modTooltipId: _e("CommentTopMeta--Mod--"),
					opTooltipId: _e("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: _e("CommentTopMeta--Remove--"),
					reportTooltipId: _e("CommentTopMeta--Report--"),
					spamTooltipId: _e("CommentTopMeta--Spam--"),
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
					onHideTooltip: () => e(Object(d.i)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = De(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: o,
					automodTooltipId: r,
					cakedayTooltipId: i,
					children: a,
					className: d,
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
					ignoreFlairPosition: w,
					ignoreLock: j,
					language: S,
					lockedTooltipId: N,
					modTooltipId: L,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: F,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return n.a.createElement(Be, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				if (m) return n.a.createElement(Fe, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				const q = !w && C === B.b.Left;
				return n.a.createElement("div", {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m,
						[oe.a.hasBadges]: y,
						[oe.a.liveStreaming]: E
					})
				}, f && q && n.a.createElement(P.b, {
					flair: f,
					forceSmallEmojis: O
				}), !Object(D.d)(u) && n.a.createElement(Ie, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), n.a.createElement(je, {
					postOrComment: u,
					tooltipType: V ? T.c.Lightbox : void 0
				}, n.a.createElement(g.b, {
					ignore: Object(D.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, n.a.createElement(We, {
					comment: u,
					isLivestreaming: E,
					isStrong: !!O,
					isAuthorDeleted: Object(D.d)(u),
					topTippersEnabled: K
				}, a && a))), p && n.a.createElement(we, null, "Crowd Control"), p && n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), f && !q && n.a.createElement(ie, {
					flair: f,
					forceSmallEmojis: O
				}), !O && n.a.createElement(I.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), n.a.createElement(n.a.Fragment, null, n.a.createElement(_.b, {
					commentId: u.id
				}), n.a.createElement(_.a, {
					commentId: u.id,
					commentsPageKey: h
				}), n.a.createElement(Ge, {
					comment: u,
					compact: O,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					language: S,
					modTooltipId: L,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !O && n.a.createElement(n.a.Fragment, null, !u.isDeleted && n.a.createElement(X.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: S,
					score: u.score
				}), n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), n.a.createElement(Ve, ne({
					key: "Created"
				}, e)), u.isStickied && Ke(S), u.editedAt && He(S, u.editedAt)), n.a.createElement(n.a.Fragment, null, n.a.createElement(ze, {
					comment: u,
					approveTooltipId: o,
					automodTooltipId: r,
					ignoreLock: j,
					language: S,
					lockedTooltipId: N,
					onHideTooltip: k,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: H,
					reportTooltipId: U,
					spamTooltipId: G
				}), n.a.createElement(v.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), n.a.createElement(b.a, {
					showAwarders: F,
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
					}, n.a.createElement(ye, null, i.deletedBy === D.a.User ? Object(a.a)(t, "comment.commentDeletedByAuthor") : Object(a.a)(t, "comment.commentDeletedByMod")), n.a.createElement(Ve, ne({
						key: "Created"
					}, e)), o && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				Fe = e => {
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
						isAuthorDeleted: Object(D.d)(t),
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
					return e.topTippersEnabled ? n.a.createElement(j, {
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
				}, "(", t ? Ne(e.language, s, {
					numChildren: s
				}) : Se(e.language, s, {
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
						"aria-label": Le(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && qe(s.cakedayTooltipId, Le(s.language)), t.isAdmin && n.a.createElement(ae, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && qe(s.adminTooltipId, Te(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && n.a.createElement(le, {
						"aria-label": ke(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && qe(s.adminEmeritusTooltipId, ke(s.language)), t.isMod && n.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && qe(s.modTooltipId, Me(s.language, {
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
					return n.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && n.a.createElement(de, {
						desc: Object(k.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && qe(s.approveTooltipId, Object(k.a)(s.language, t)), Object(L.a)(t) && n.a.createElement(he, {
						desc: Object(k.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && qe(s.removeTooltipId, Object(k.c)(s.language, t)), Object(L.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && n.a.createElement(Pe, {
						onClick: s.openRemovalReasonModal
					}, Object(a.a)(s.language, "modTools.addARemovalReason")), Object(L.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && n.a.createElement(Pe, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(a.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && n.a.createElement(ce, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && n.a.createElement(xe, {
						desc: Object(k.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && qe(s.spamTooltipId, Object(k.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && n.a.createElement(me, {
						className: Object(c.a)({
							[oe.a.removed]: !!t.bannedBy
						}),
						desc: Object(k.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && qe(s.automodTooltipId, Object(k.b)(s.language)), Object(M.a)(t) && n.a.createElement(be, {
						desc: Object(k.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && qe(s.reportTooltipId, Object(k.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => n.a.createElement(o.Fragment, null, n.a.createElement(X.c, {
					className: oe.a.metaText
				}), n.a.createElement(Ce, null, Object(a.a)(e, "comment.stickied"))),
				qe = (e, t) => n.a.createElement(N.c, {
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
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(h);
			const x = .75,
				g = 10 * d.F;
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
				w = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				k = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				M = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				D = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
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
				de = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(ce);
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
				Oe = xe.a.wrapped(de.a, "PencilIcon", be.a),
				fe = xe.a.wrapped(me, "SaveIcon", be.a),
				Ce = xe.a.wrapped(pe.a, "SavedIcon", be.a),
				ye = xe.a.wrapped(Y.b, "OverflowMenu", be.a),
				Ee = xe.a.wrapped(T.c, "ModToolsFlatlist", be.a),
				we = xe.a.wrapped(M.a, "ModActionsMenu", be.a),
				je = xe.a.wrapped(te.b, "DropdownRow", be.a),
				Pe = xe.a.wrapped(oe.a, "Flatlist", be.a),
				Ie = xe.a.button("Button", be.a),
				Se = Object(B.t)(),
				Ne = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				_e = e => "Distinguish--Dropdown--".concat(e),
				Te = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Le = e => "View--Reports--".concat(e),
				ke = Object(i.c)({
					activeTooltipId: J.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === Ne(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Z.G,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: B.N,
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
			class Me extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(F.d)(F.a.GildingFlow), this.props.onGildClick();
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
					} = this.props, a = Object(H.a)(o), d = !!t && t.displayText === e.author;
					if (i && a) return r ? n.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: d,
						language: s
					}) : n.a.createElement(we, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(re.a, null), n.a.createElement(_.a, {
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
						selected: this.props.activeTooltipId === Le(e.id),
						id: Le(e.id)
					}, n.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Le(e.id)
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
					} = this.props, a = Object(H.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(T.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === _e(e.id)
					}, n.a.createElement(T.a, null), n.a.createElement(k.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === _e(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: _e(e.id)
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
						moderatorPermissions: d,
						postIsLocked: c,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, h = Object(H.a)(d), b = !!o && o.displayText === e.author, x = !c && !e.isLocked || h && i, g = o && e.isGildable;
					return n.a.createElement("div", {
						className: t
					}, n.a.createElement(Pe, null, x && n.a.createElement(Ie, {
						onClick: this.handleReply,
						disabled: a
					}, n.a.createElement(u.c, null, "Reply")), g && n.a.createElement(Ie, {
						onClick: this.handleGild
					}, n.a.createElement(u.c, null, "Give Award")), n.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(y.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, n.a.createElement(Ie, {
						onClick: this.sendCommentEventWithNameShare
					}, n.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), n.a.createElement(ye, {
						dropdownId: Te(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && n.a.createElement(je, {
						displayText: Object(U.c)("report"),
						onClick: this.props.onReportClick
					}, n.a.createElement(ve, null)), n.a.createElement(je, {
						displayText: e.isSaved ? Object(U.c)("Unsave") : Object(U.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Ce, null) : n.a.createElement(fe, null)), b && n.a.createElement(je, {
						displayText: Object(U.c)("edit"),
						onClick: this.handleEdit
					}, n.a.createElement(Oe, null)), b && n.a.createElement(je, {
						displayText: Object(U.c)("delete"),
						onClick: this.handleDelete
					}, n.a.createElement(ge, null))), this.props.isConfirmModalOpen && n.a.createElement(L.a, {
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
			var Re = Se(Object(r.b)(ke, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o,
						language: n
					} = t;
					return {
						deleteComment: () => o && e(Object(j.db)(n, s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(j.S)(s.id, t, o)),
						onIgnoreReports: () => e(Object(j.pb)(s.id)),
						onGildClick: () => e(Object(P.d)(s.id)),
						onReportClick: () => e(Object(S.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: _e(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: Le(s.id)
						})),
						onToggleSave: () => e(Object(j.gb)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(Ne(s.id))), e(Object(N.h)({
								tooltipId: Te(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(w.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(j.ab)(n))
						},
						handleReply: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(j.bb)(n))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(Ne(s.id)))
					}
				})(Object(ee.b)(Object(D.b)(Me)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				De = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Be = s("./src/reddit/components/GildModal/Loader.tsx"),
				Fe = s("./src/reddit/components/RichTextJson/index.tsx"),
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
						const o = Object(De.b)(s);
						return Object(We.c)(e, o)
					},
					flair: K.e,
					language: Z.P
				})),
				Qe = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = qe(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					gildModalIsOpen: r,
					isExpanded: i,
					language: c,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => n.a.createElement(Fe.a, {
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
					language: c,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, i ? p() : n.a.createElement(O, {
					height: d.Eb,
					isExpanded: i
				}, p)), !t.isDeleted && l && n.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: c,
					showModTools: m
				})), r && n.a.createElement(Be.a, null))
			})
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CountrySort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/ListingSort/index.tsx"),
				u = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/app/strings/index.ts");
			const g = {
				[l.Mb.AllStates]: Object(x.e)("stateSorts.allStates"),
				[l.Mb.Alaska]: Object(x.e)("stateSorts.alaska"),
				[l.Mb.Alabama]: Object(x.e)("stateSorts.alabama"),
				[l.Mb.Arkansas]: Object(x.e)("stateSorts.arkansas"),
				[l.Mb.Arizona]: Object(x.e)("stateSorts.arizona"),
				[l.Mb.California]: Object(x.e)("stateSorts.california"),
				[l.Mb.Colorado]: Object(x.e)("stateSorts.colorado"),
				[l.Mb.Connecticut]: Object(x.e)("stateSorts.connecticut"),
				[l.Mb.DistrictOfColumbia]: Object(x.e)("stateSorts.districtOfColumbia"),
				[l.Mb.Delaware]: Object(x.e)("stateSorts.delaware"),
				[l.Mb.Florida]: Object(x.e)("stateSorts.florida"),
				[l.Mb.Georgia]: Object(x.e)("stateSorts.georgia"),
				[l.Mb.Hawaii]: Object(x.e)("stateSorts.hawaii"),
				[l.Mb.Iowa]: Object(x.e)("stateSorts.iowa"),
				[l.Mb.Idaho]: Object(x.e)("stateSorts.idaho"),
				[l.Mb.Illinois]: Object(x.e)("stateSorts.illinois"),
				[l.Mb.Indiana]: Object(x.e)("stateSorts.indiana"),
				[l.Mb.Kansas]: Object(x.e)("stateSorts.kansas"),
				[l.Mb.Kentucky]: Object(x.e)("stateSorts.kentucky"),
				[l.Mb.Louisiana]: Object(x.e)("stateSorts.louisiana"),
				[l.Mb.Massachusetts]: Object(x.e)("stateSorts.massachusetts"),
				[l.Mb.Maryland]: Object(x.e)("stateSorts.maryland"),
				[l.Mb.Maine]: Object(x.e)("stateSorts.maine"),
				[l.Mb.Michigan]: Object(x.e)("stateSorts.michigan"),
				[l.Mb.Minnesota]: Object(x.e)("stateSorts.minnesota"),
				[l.Mb.Missouri]: Object(x.e)("stateSorts.missouri"),
				[l.Mb.Mississippi]: Object(x.e)("stateSorts.mississippi"),
				[l.Mb.Montana]: Object(x.e)("stateSorts.montana"),
				[l.Mb.NorthCarolina]: Object(x.e)("stateSorts.northCarolina"),
				[l.Mb.NorthDakota]: Object(x.e)("stateSorts.northDakota"),
				[l.Mb.Nebraska]: Object(x.e)("stateSorts.nebraska"),
				[l.Mb.NewHampshire]: Object(x.e)("stateSorts.newHampshire"),
				[l.Mb.NewJersey]: Object(x.e)("stateSorts.newJersey"),
				[l.Mb.NewMexico]: Object(x.e)("stateSorts.newMexico"),
				[l.Mb.Nevada]: Object(x.e)("stateSorts.nevada"),
				[l.Mb.NewYork]: Object(x.e)("stateSorts.newYork"),
				[l.Mb.Ohio]: Object(x.e)("stateSorts.ohio"),
				[l.Mb.Oklahoma]: Object(x.e)("stateSorts.oklahoma"),
				[l.Mb.Oregon]: Object(x.e)("stateSorts.oregon"),
				[l.Mb.Pennsylvania]: Object(x.e)("stateSorts.pennsylvania"),
				[l.Mb.RhodeIsland]: Object(x.e)("stateSorts.rhodeIsland"),
				[l.Mb.SouthCarolina]: Object(x.e)("stateSorts.southCarolina"),
				[l.Mb.SouthDakota]: Object(x.e)("stateSorts.southDakota"),
				[l.Mb.Tennessee]: Object(x.e)("stateSorts.tennessee"),
				[l.Mb.Texas]: Object(x.e)("stateSorts.texas"),
				[l.Mb.Utah]: Object(x.e)("stateSorts.utah"),
				[l.Mb.Virginia]: Object(x.e)("stateSorts.virginia"),
				[l.Mb.Vermont]: Object(x.e)("stateSorts.vermont"),
				[l.Mb.Washington]: Object(x.e)("stateSorts.washington"),
				[l.Mb.Wisconsin]: Object(x.e)("stateSorts.wisconsin"),
				[l.Mb.WestVirginia]: Object(x.e)("stateSorts.westVirginia"),
				[l.Mb.Wyoming]: Object(x.e)("stateSorts.wyoming")
			};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/StateSort/index.m.less"),
				j = s.n(w);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = h.a.wrapped(f.a, "_Dropdown", j.a),
				S = Object(u.a)(I),
				N = e => {
					return e.indexOf("_") > 0 && T(e) === l.v.UnitedStates
				},
				_ = e => {
					if (N(e)) {
						return e.split("_")[1]
					}
					return l.Mb.AllStates
				},
				T = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				L = e => {
					const t = T(e),
						s = _(e);
					return N(e) ? "".concat(t, "_").concat(s) : t
				},
				k = Object(v.t)(),
				M = Object(a.c)({
					dropdownIsOpen: Object(y.b)("StateSort--StateSortPicker"),
					language: E.P
				}),
				R = Object(r.b)(M, e => ({
					onOpenDropdown: () => e(Object(d.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(i.b)(t)), e(Object(m.t)(l.v.UnitedStates + "_" + s))
					}
				}));
			var A = h.a.wrapped(k(R(e => {
					const t = "".concat(e.baseUrl, "?").concat(b.g, "=").concat(l.v.UnitedStates);
					return n.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, n.a.createElement(p.c, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, n.a.createElement(p.b, {
						className: e.buttonClassName,
						displayText: e.showStateAbbreviations && e.sort ? e.sort : g[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(O.a.Consumer, null, s => n.a.createElement(S, P({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(l.Mb).map(s => {
						const o = l.Mb[s];
						return n.a.createElement("div", {
							onClick: () => e.onClickLink((e => e === l.Mb.AllStates ? t : "".concat(t, "_").concat(e))(o), L(o))
						}, n.a.createElement(C.b, {
							className: Object(c.a)(e.rowClassName, e.sort === o ? e.rowSelectedClassName : void 0),
							displayText: g[o](e.language),
							isSelected: e.sort === o
						}))
					}))))
				})), "Component", j.a),
				D = s("./src/reddit/constants/countrySorts.ts"),
				B = s("./src/reddit/components/CountrySort/index.m.less"),
				F = s.n(B);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = "CountrySort--CountrySortPicker",
				V = Object(v.t)(),
				U = Object(a.c)({
					dropdownIsOpen: Object(y.b)(W),
					language: E.P
				}),
				G = Object(r.b)(U, e => ({
					onCloseDropdown: t => e(Object(d.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(d.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(i.b)(t)), e(Object(m.t)(s))
					}
				}));
			t.a = V(G(e => {
				const t = T(e.sort),
					s = _(e.sort),
					o = "".concat(e.baseUrl, "?").concat(b.g, "=");
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(c.a)(F.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(W) : e.onOpenDropdown(W)
				}, n.a.createElement(p.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, n.a.createElement(p.b, {
					className: e.buttonClassName,
					displayText: (() => t in D.a ? D.a[t] : D.a[l.v.Everywhere])(),
					id: W,
					showDropdownTriangle: !0
				})), n.a.createElement(O.a.Consumer, null, s => n.a.createElement(S, H({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: W
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(l.v).map(s => {
					const r = l.v[s];
					return n.a.createElement("div", {
						key: r,
						onClick: () => e.onClickLink("".concat(o).concat(L(r)), r)
					}, n.a.createElement(C.b, {
						className: Object(c.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
						displayText: D.a[r],
						isSelected: t === r
					}))
				})))), t === l.v.UnitedStates && n.a.createElement(A, {
					baseUrl: e.baseUrl,
					buttonClassName: e.buttonClassName,
					className: e.stateSortClassName,
					disabled: e.disabled,
					dropdownClassName: e.dropdownClassName,
					rowClassName: e.rowClassName,
					rowSelectedClassName: e.rowSelectedClassName,
					showStateAbbreviations: e.showStateAbbreviations,
					sort: s,
					wrapperClassName: e.wrapperClassName
				}))
			}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), s.e("InFeedChaining~SearchResults~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
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
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const h = c.a.div("PrimaryText", u.a),
				b = c.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				x = c.a.div("Wrapper", u.a);
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
				language: v.P
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
				}, r === a.Pb.ALL ? Object(d.a)(s, "listings.noComments", {
					profileName: o
				}) : Object(d.a)(s, "listings.noRecentComments", {
					profileName: o
				}))
			});
			const C = Object(i.c)({
				language: v.P
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
					}, r === a.Pb.ALL ? Object(d.a)(s, "listings.noPosts", {
						profileName: o
					}) : Object(d.a)(s, "listings.noRecentPosts", {
						profileName: o
					}))
				}),
				E = s("./src/reddit/components/Translated/index.tsx");
			var w = e => {
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
				j = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				P = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				I = s.n(P),
				S = () => n.a.createElement("div", {
					className: I.a.container
				}, n.a.createElement(j.a, {
					className: I.a.hideIcon
				}), n.a.createElement("h3", {
					className: I.a.title
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.title"
				})), n.a.createElement("p", {
					className: I.a.subtitle
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "a", (function() {
				return S
			}))
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
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
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
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(I);
			const N = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(a.a)(S.a.icon, S.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return n.a.createElement(C.a, {
								className: s
							});
						case P.n.IMAGE:
							return n.a.createElement(w.a, {
								className: s
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return n.a.createElement(j.a, {
								className: s
							});
						case P.n.VIDEO:
							return n.a.createElement(f.a, {
								className: s
							});
						case P.n.EMBED:
						default:
							return n.a.createElement(y.a, {
								className: s
							})
					}
				};
			t.a = N(e => {
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
					"aria-label": Object(c.c)("Expand content"),
					className: Object(a.a)(t, S.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(h.a, {
					className: S.a.icon
				}) : x ? n.a.createElement(n.a.Fragment, null, _(g.media && g.media.type, v), n.a.createElement(b.a, {
					className: Object(a.a)(S.a.icon, S.a.showOnHover)
				})) : n.a.createElement(b.a, {
					className: S.a.icon
				})) : g.source && g.source.url ? n.a.createElement(m.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(a.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(E.a, {
					className: Object(a.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : n.a.createElement(i.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(a.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, n.a.createElement(O, {
					className: S.a.icon
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(w);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				N = Object(a.a)(x.a),
				_ = {
					[u.d.Card]: C.a,
					[u.d.Classic]: O.a,
					[u.d.Compact]: f.a
				},
				T = {
					[u.d.Card]: Object(v.c)("card"),
					[u.d.Classic]: Object(v.c)("classic"),
					[u.d.Compact]: Object(v.c)("compact")
				},
				L = Object(h.t)(),
				k = Object(i.c)({
					dropdownIsOpen: Object(E.b)(S),
					postLayout: h.L,
					redditStyle: h.A
				}),
				M = Object(r.b)(k, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: S
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
						} = this.props, i = s || u.e[r], a = e === i, c = _[e];
						return n.a.createElement(g.b, P({}, t, {
							className: Object(d.a)(j.a.LayoutItem, {
								[j.a.selected]: a
							}),
							"data-layout": e,
							displayText: T[e],
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), n.a.createElement(c, {
							className: j.a.LayoutIcon,
							onClick: a ? void 0 : o
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(N, P({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: S
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
						className: Object(d.a)(j.a.Container, e),
						id: I
					}, n.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: S,
						showDropdownTriangle: !0
					}), n.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(M(Object(p.b)(Object(c.a)(R))))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/components/CountrySort/index.tsx"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				v = s("./src/reddit/components/TimeSort/index.tsx"),
				O = s("./src/reddit/constants/listings.ts"),
				f = s("./src/reddit/constants/listingSorts.ts"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				I = s.n(P);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = new Set([b.N.CONTROVERSIAL, b.N.TOP]),
				_ = new Set([b.N.CONTROVERSIAL, b.N.RISING]),
				T = "ListingSort--Overflow",
				L = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				k = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.i, (e, t, s) => {
					if (e) return e;
					const o = [b.N.HOT, b.N.NEW, b.N.TOP, b.N.RISING];
					return t && s && o.unshift(b.N.BEST), o
				}),
				M = Object(u.c)({
					isPopularPage: l.C,
					sortOptions: k
				});
			class R extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.c)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(y.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: o,
							sort: r
						} = this.props, a = o && !!s && e === b.N.HOT && r === b.N.HOT;
						return n.a.createElement(n.a.Fragment, null, n.a.createElement(C.a, {
							className: Object(i.a)(I.a.SortLink, e === r && I.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(g.a, {
							className: I.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: I.a.SortLabel
						}, f.a[e])), a && n.a.createElement(x.a, {
							baseUrl: O.c[O.b.Popular],
							buttonClassName: I.a.DropdownButton,
							className: I.a.CountrySort,
							disabled: t,
							dropdownClassName: I.a.Dropdown,
							rowClassName: I.a.DropdownRow,
							rowSelectedClassName: I.a.DropdownRowSelected,
							wrapperClassName: I.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: I.a.StateSort
						}))
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
					} = this.props, d = !t && N.has(o), c = _.has(o), l = r.filter(e => !_.has(e)), m = r.filter(e => _.has(e) && e !== o);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(g.d, S({}, this.props, {
						buttonClassName: I.a.DropdownButton,
						className: Object(i.a)(I.a.SortDropdown, e),
						rowClassName: I.a.DropdownRow,
						rowIconClassName: I.a.DropdownRowIcon,
						rowSelectedClassName: I.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(i.a)(I.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(o), d && n.a.createElement(v.a, {
						baseUrl: this.getSortUrl(o),
						buttonClassName: I.a.DropdownButton,
						className: I.a.TimeSort,
						dropdownClassName: I.a.Dropdown,
						listingSort: o,
						onChange: s,
						rowClassName: I.a.DropdownRow,
						rowSelectedClassName: I.a.DropdownRowSelected,
						timeSort: a || b.Qb,
						wrapperClassName: I.a.DropdownSortWrapper
					}), m.length > 0 && n.a.createElement(g.d, S({}, this.props, {
						className: Object(i.a)(I.a.SortOverflow, e),
						dropdownClassName: I.a.Dropdown,
						dropdownId: T,
						rowClassName: I.a.DropdownRow,
						rowIconClassName: I.a.DropdownRowIcon,
						rowSelectedClassName: I.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: I.a.SortOverflowButton,
						id: T
					}, n.a.createElement(w.a, null))))
				}
			}
			var A = L(Object(r.b)(M)(Object(c.b)(R))),
				D = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				B = s.n(D);
			const F = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				H = Object(r.b)(null, (e, t) => {
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
								e(Object(d.G)(s, n))
							}
						}
					}
				});
			class W extends n.a.Component {
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
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(B.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(A, {
						baseUrl: e,
						disabled: o,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: d,
						timeSort: l
					}), !r && n.a.createElement(p.a, {
						className: B.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = F(H(Object(c.b)(W)))
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
				d = s.n(a);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
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
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/inFeedChaining.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = s("./src/reddit/components/CallToActionButton/index.tsx"),
				P = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				S = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				N = s("./src/reddit/components/Flatlist/index.tsx"),
				_ = s("./src/reddit/components/Governance/Proposal/async.ts"),
				T = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = s("./src/reddit/components/ModModeReports/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				A = s("./src/reddit/components/PostContainer/index.tsx"),
				D = s("./src/reddit/components/PostLeftRail/index.tsx"),
				B = s("./src/reddit/components/PostMedia/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				U = s.n(V);
			var G = () => n.a.createElement("div", {
					className: U.a.container
				}, n.a.createElement(W.a, {
					className: U.a.pinnedIcon
				}), n.a.createElement("span", {
					className: U.a.metaText
				}, n.a.createElement(H.c, null, "pinned by moderators"))),
				z = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				K = s("./src/reddit/components/PostTitle/index.tsx"),
				q = s("./src/reddit/components/PostTopLine/index.tsx"),
				Q = s("./src/reddit/components/SourceLink/index.tsx"),
				J = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				X = s("./src/reddit/helpers/isCrosspost.ts"),
				$ = s("./src/reddit/helpers/postEvent.ts"),
				ee = s("./src/reddit/constants/experiments.ts"),
				te = s("./src/reddit/helpers/chooseVariant/index.ts"),
				se = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const oe = Object(i.a)(C.O, e => e.some(se.c)),
				ne = Object(i.a)(oe, e => e),
				re = (e, t) => Object(te.c)(e, {
					experimentName: ee.C,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ne(e, {
							listingKey: s
						})
					}
				});
			var ie = s("./src/reddit/selectors/postFlair.ts"),
				ae = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				de = s.n(ae),
				ce = s("./src/reddit/components/LargePost/index.m.less"),
				le = s.n(ce);
			const me = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.O)(e, {
						listingKey: s
					}) : void 0
				},
				pe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.C)(e, {
						listingKey: s
					}) : void 0
				},
				ue = Object(r.b)(() => Object(i.c)({
					autoplayPref: y.b,
					activeModalId: v.a,
					currentUser: y.i,
					hideNSFWPref: y.y,
					flairStyleTemplate: Z.P,
					isCurrentUserProfilePost: C.h,
					isLoggedIn: y.G,
					language: y.P,
					isActive: C.g,
					isPostChainDismissed: O.c,
					isPostChained: O.d,
					moderatorPermissions: f.i,
					modModeEnabled: Z.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: C.I,
					posts: me,
					postHeightVariant: re,
					postIds: pe,
					showEditFlair: ie.a,
					subredditOrProfile: C.U,
					userIsOp: y.fb
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
							const s = t === g.a.upvoted ? Object(p.Q)(n) : Object(p.r)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.O)(n)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				he = n.a.memo(e => {
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
						isLoggedIn: y,
						isOverlay: H,
						isPostChainDismissed: W,
						isPostChained: V,
						language: U,
						listingKey: J,
						listingName: Z,
						moderatorPermissions: te,
						modModeEnabled: se,
						onClickPost: oe,
						onIgnoreReports: ne,
						onOpenReportsDropdown: re,
						poll: ie,
						pollResult: ae,
						post: ce,
						postHeightVariant: me,
						scrollerItemRef: pe,
						showEditFlair: ue,
						subredditOrProfile: he,
						userIsOp: be
					} = e, xe = !!e.redditStyle || !!e["data-redditstyle"], ge = xe ? void 0 : p, ve = Object(c.a)(te), Oe = se && ve, fe = Object(d.a)(te), Ce = Object(M.c)(ce), ye = !!ce.media && ce.media.type === h.n.RTJSON, Ee = be && ye, we = s ? s - D.a : void 0, je = !!ae && !!Object.keys(ae.options).filter(e => ae.options[e].userSelected).length, Pe = !(C && y), Ie = (e => e === ee.mb.OnlyTitles)(me) && !Object(X.a)(ce), Se = (e => e === ee.mb.MediumHeight)(me) && !Object(X.a)(ce), Ne = (e => {
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
					})(e), _e = n.a.createElement(A.a, {
						className: Object(E.a)(le.a.container, r, de.a.largeAndMediumPostStyles, de.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[de.a.mUseRedditTheme]: xe,
							promotedvideolink: ce.isSponsored && !(ce.media && h.a.has(ce.media.type)),
							[le.a.topCompactPost]: Ne && Ne.hasTopCompactPostStyles,
							[le.a.bottomCompactPost]: Ne && Ne.hasBottomCompactPostStyles
						}),
						isOverlay: H,
						style: Object(l.b)(e.flairStyleTemplate),
						post: ce,
						onClick: oe,
						onPostContentClick: o,
						eventFactory: m
					}, n.a.createElement(z.a, {
						model: ce,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ge,
						redditStyle: xe
					}), n.a.createElement(R.a, {
						className: Object(E.a)(le.a.backgroundWrapper, {
							[le.a.isEvent]: Object($.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ge,
						post: ce,
						redditStyle: xe
					}, n.a.createElement(S.a, {
						post: ce,
						language: U
					}), Ne && Ne.showPinnnedHeader && n.a.createElement(G, null), n.a.createElement(q.a, {
						className: le.a.postTopLine,
						hideNSFWPref: g,
						iconClassName: le.a.postTopLineIcon,
						inSubredditOrProfile: v,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!Ne,
						isCurrentUserProfilePost: f,
						isOverlay: !!H,
						language: U,
						post: ce,
						shouldShowSubscribeButton: Pe,
						showSubreddit: !v && !ce.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: he
					}), n.a.createElement(K.c, {
						className: le.a.postTitle,
						post: ce,
						redditStyle: xe,
						size: K.b.Large,
						titleColor: ge && ge.postTitleColor,
						isOverlay: H
					}), ce.source && !ce.isSponsored && n.a.createElement(Q.a, {
						className: le.a.sourceLink,
						post: ce
					}), n.a.createElement("div", {
						className: Object(E.a)(le.a.postMediaWrapper, {
							[le.a.votedContent]: je
						})
					}, !Ne && n.a.createElement(B.a, {
						isListing: !0,
						isMediumHeight: Se,
						isNotCardView: !!H,
						isTitleOnly: Ie,
						showCentered: !0,
						flairStyleTemplate: ge,
						post: ce,
						availableWidth: we,
						shouldLoad: u,
						scrollerItemRef: pe,
						autoplayPref: t
					})), ie && n.a.createElement(_.a, {
						className: Object(E.a)(le.a.proposal, {
							[le.a.mHasNotVoted]: !ae,
							[le.a.mPollIsClosed]: !!ae && Object(b.e)(ie, ae),
							[le.a.mGAPoll]: ie.type === b.a.GA
						}),
						pollId: ie.id,
						subredditId: ce.belongsTo.id
					}), ce.isMeta && !ie && n.a.createElement(T.a, {
						className: le.a.noProposal
					}), ce.source && ce.source.url && ce.isSponsored && n.a.createElement(w.a, {
						className: le.a.adLinkWrapper
					}, n.a.createElement(Y.a, {
						href: ce.source.url.replace(a.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && n.a.createElement(j.a, {
						href: ce.source.url.replace(a.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.callToAction)), se && ve && Ce && n.a.createElement(k.a, {
						language: U,
						onIgnoreReports: ne,
						reportable: ce
					}), n.a.createElement(L.d, {
						postId: ce.id
					}), n.a.createElement("div", {
						className: le.a.flatListContainer
					}, n.a.createElement(P.a, {
						className: le.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ge,
						model: ce,
						onVoteClick: e.handleVote
					}), n.a.createElement(N.c, {
						currentUser: i,
						hasModFlairPerms: fe,
						hasModPostPerms: ve,
						isLargePost: !0,
						isOverlay: !!H,
						language: U,
						modModeEnabled: se,
						onIgnoreReports: ne,
						onOpenReportsDropdown: re,
						post: ce,
						showEditPost: Ee,
						showEditFlair: ue,
						useFlatlistBreakpoints: Object(F.h)({
							editPost: !1,
							save: !Oe,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, _e, V && !W && n.a.createElement(I.a, {
						className: le.a.chain,
						listingKey: J,
						listingName: Z,
						postId: ce.id
					}))
				});
			t.default = ue(Object(J.b)(he))
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
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.t)(),
				x = Object(i.c)({
					layout: m.L
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
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						s = d.g - t,
						o = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(o, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(d.g + d.q + d.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.g + d.q + d.r, "px) / 2);\n              }\n            }\n          ")
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
				d = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				c = s("./src/reddit/layout/page/Listing/Content.tsx"),
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
							bodyScrollOffset: Object(d.c)(document.body)
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
						onBlur: d
					} = this.props;
					let l = 0;
					return o && !e && t && (l += a.u), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(x, {
						onFocus: i,
						onBlur: d
					}, n.a.createElement(c.a, {
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
				d = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/components/CountrySort/index.tsx"),
				p = s("./src/reddit/components/ListingSort/index.tsx"),
				u = s("./src/reddit/components/TimeSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				v = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				C = s.n(f);
			const y = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				E = Object(i.c)({
					currentUser: O.i,
					language: O.P,
					isPopularListing: x.C,
					redditStyle: x.A
				}),
				w = Object(r.b)(E, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, o) => {
							if (s) {
								const n = Object(d.c)({
									sort: t,
									timeSort: o
								});
								e(Object(l.G)(s, n))
							}
						}
					}
				});
			t.a = y(w(Object(h.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: o
				} = e, r = e.sort === a.N.TOP || e.sort === a.N.CONTROVERSIAL, i = s && e.countrySort && e.sort === a.N.HOT, d = e => {
					v.a.setState({
						isListingFocused: e
					})
				};
				return n.a.createElement(c.a, {
					className: e.className,
					onFocus: () => d(!0),
					onBlur: () => d(!1),
					render: s => n.a.Children.toArray([o ? null : n.a.createElement(g.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), o ? null : n.a.createElement("div", {
						className: C.a.separator
					}), n.a.createElement(p.d, {
						className: C.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && r && [n.a.createElement(u.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || a.Qb
					})], i && n.a.createElement(m.a, {
						baseUrl: e.isPopularListing ? "/r/".concat(b.f, "/") : "",
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
				d = s.n(a);
			var c = e => n.a.createElement("svg", {
					className: Object(r.a)(d.a.best, e.className),
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
				w = s.n(E);
			const j = {
				[i.N.BEST]: c,
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
				const o = j[s];
				return o ? n.a.createElement(o, {
					className: Object(r.a)(t, w.a.iconStyles)
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
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
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
				w = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				j = s("./src/reddit/components/ListingSort/index.m.less"),
				P = s.n(j),
				I = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const _ = "ListingSort--SortPicker",
				T = Object(a.a)(I.a.wrapped(x.a, "Dropdown", P.a)),
				L = I.a.wrapped(w.a, "ListingSortIcon", P.a),
				k = (I.a.wrapped(C.b, "DropdownTriangle", P.a), I.a.div("Title", P.a)),
				M = I.a.wrapped(e => n.a.createElement(g.b, S({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", P.a),
				R = e => {
					var {
						disabled: t
					} = e, s = N(e, ["disabled"]);
					return n.a.createElement("div", S({}, s, {
						className: Object(c.a)(P.a.SortWrapper, s.className, {
							[P.a.isDisabled]: t
						})
					}))
				},
				A = I.a.div("DropdownRowDisabled", P.a),
				D = Object(h.t)({
					isFrontpage: h.y,
					isProfilePage: h.G,
					pageLayer: e => e
				}),
				B = Object(i.c)({
					user: E.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || _)(e),
					language: E.P
				}),
				F = Object(r.b)(B, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: o
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.h)({
							tooltipId: s || _
						}))
					}
				});
			t.d = I.a.wrapped(D(F(Object(p.b)(e => n.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && n.a.createElement(k, null, n.a.createElement(f.c, null, "Sort")), n.a.createElement(R, {
				disabled: e.disabled
			}, e.children || n.a.createElement(M, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || _,
				showDropdownTriangle: !0
			}, n.a.createElement(L, {
				sort: e.sort
			}))), n.a.createElement(b.a.Consumer, null, t => n.a.createElement(T, S({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || _
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? n.a.createElement(A, null, n.a.createElement(f.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => n.a.createElement(g.b, {
				className: Object(c.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.c)(t))
				},
				href: e.isProfilePage ? Object(d.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, n.a.createElement(L, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", P.a)
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
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
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
				}, n.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(d.b, {
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
				d = s.n(a);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, n.a.createElement(i.a, {
					className: Object(r.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: d.a.thumbnailLinkText,
					outboundLinkIconClassName: d.a.thumbnailOutboundLinkIcon,
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
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/isUrl/index.ts"),
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
				w = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/ShareMenu/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/helpers/trackers/post.ts"),
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
					isProfilePostListing: O.H,
					pageLayer: e => e
				}),
				X = Object(i.c)({
					layout: O.L,
					subreddit: O.q
				});
			var $ = Y(Object(r.b)(X, {})(Object(D.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: i,
						hasModPostPerms: d,
						isCommentsPage: c,
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
					} = e, E = e => O(Object(F.f)(v.id, e)), w = v.postId, j = Object(L.d)(K, v.id, m, u), P = !!o && Object(V.f)(o) === v.author;
					return n.a.createElement("div", {
						className: Object(a.a)(G.a.flatlistContainer, s)
					}, n.a.createElement(J, {
						compact: !1,
						model: v,
						onVoteClick: r,
						scoreClassName: G.a.score
					}), n.a.createElement(_.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: v.id,
						modModeEnabled: x,
						numComments: v.numComments,
						type: B.g.Compact,
						onClick: g
					}), n.a.createElement(A.a, {
						className: G.a.shareMenu,
						dropdownId: Object(L.d)(Q, v.id, m, u),
						permalink: v.permalink,
						post: v,
						sendEventWithName: E,
						subreddit: y
					}, n.a.createElement(Z, null, n.a.createElement(W.a, {
						className: G.a.shareIcon
					}), n.a.createElement("span", {
						className: G.a.shareText
					}, n.a.createElement(H.c, null, "share")))), d && n.a.createElement(k.a, {
						dropdownId: j,
						onClick: () => E("post_mod_action_menu")
					}, n.a.createElement(L.b, {
						className: G.a.modActionsIcon
					}), n.a.createElement(M.a, {
						canEditFlair: i && !!f,
						hasModPostPerms: d,
						isOverlay: !!m,
						isPostAuthor: P,
						language: h,
						modModeEnabled: x,
						post: v,
						tooltipId: j
					})), n.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: v.permalink,
						postId: w,
						dropdownId: Object(L.d)(q, v.id, m, u),
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
					activeModalId: j.a,
					autoplayPref: N.b,
					crosspostRoot: S.c,
					crosspostSubredditOrProfile: S.d,
					currentUser: N.i,
					flairStyleTemplate: O.P,
					hideNSFWPref: N.y,
					isActive: S.g,
					language: N.P,
					moderatorPermissions: P.i,
					modModeEnabled: O.N,
					post: S.I,
					showEditFlair: I.a,
					subredditOrProfile: S.U,
					userIsOp: N.fb
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
							const o = t === w.a.upvoted ? Object(l.Q)(s) : Object(l.r)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(l.O)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
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
			t.b = ie(ae(Object(d.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: o,
					crosspostRoot: r,
					crosspostSubredditOrProfile: i,
					currentUser: d,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: O,
					language: w,
					moderatorPermissions: j,
					modModeEnabled: P,
					onClickPost: I,
					post: S,
					scrollerItemRef: N,
					shouldPause: _,
					showMetaLine: T = !0,
					showEditFlair: L,
					subredditOrProfile: k,
					userIsOp: M
				} = e, {
					media: R
				} = r || S, A = R && R.type, D = Object(g.b)(S.id), B = A === E.n.RTJSON, F = M && B, H = Object(C.a)(j), W = Object(f.a)(j), V = R && A !== E.n.RTJSON && A !== E.n.TEXT, U = !R && !!S.source && Object(c.a)(S.source.url), G = R && n.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: E.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || S,
					scrollerItemRef: N,
					shouldPause: _,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return n.a.createElement(x.a, {
					className: Object(a.a)(re.a.postContainer, oe.a.largeAndMediumActiveStyles, oe.a.largeAndMediumPostStyles, Object(y.a)(e), o),
					style: Object.assign({}, Object(y.b)(e.flairStyleTemplate), Object(y.d)(e)),
					post: S,
					onClick: I,
					eventFactory: l
				}, n.a.createElement(b.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && G, n.a.createElement("div", {
					className: re.a.innerContainer
				}, U && n.a.createElement(te.a, {
					post: S,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), n.a.createElement(v.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: S,
					size: v.b.Large,
					titleColor: m && m.postTitleColor
				}), T && k && n.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: i,
					hideNSFWPref: O,
					language: w,
					post: S,
					subredditOrProfile: k
				}), !V && n.a.createElement("div", {
					className: re.a.mediaWrapper
				}, G), n.a.createElement("div", {
					className: re.a.flexSpacer
				}), n.a.createElement($, {
					currentUser: d,
					handleVote: e.handleVote,
					hasModFlairPerms: W,
					hasModPostPerms: H,
					language: w,
					modModeEnabled: P,
					post: S,
					showEditFlair: L,
					showEditPost: F
				}))), e.activeModalId === D && n.a.createElement(g.a, {
					flairs: S.flair,
					subredditId: S.belongsTo.id,
					modalId: D,
					onFlairChanged: e.onFlairChanged
				}), n.a.createElement(u.d, {
					postId: S.id
				}))
			})))
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
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
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
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: O.R
			}), e => ({
				openPost: t => e(Object(m.A)(t))
			}));
			var E = Object(l.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isCommentHighlightExperiment: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
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
						className: Object(c.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: a,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(C.a.commentWrapper, {
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
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				S = s.n(I),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
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
			const L = Object(j.t)({
					currentProfileName: j.h,
					isCommentsPage: j.w,
					isCommentPermalink: j.v,
					isProfilePostListing: j.H,
					pageLayer: e => e
				}),
				k = N.a.wrapped(w.a, "OverviewCommentPost", S.a),
				M = N.a.wrapped(r.default, "ClassicPost", S.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a
				} = e, d = T(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(P.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(k, _({}, d, {
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
				}) : n.a.createElement(M, _({}, d, {
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				w = s.n(E);
			const j = l.a.wrapped(p.a, "InternalLink", w.a),
				P = l.a.div("Wrapper", w.a),
				I = l.a.div("Row", w.a),
				S = l.a.wrapped(f.a, "CommentIcon", w.a),
				N = l.a.div("TitleContainer", w.a),
				_ = l.a.div("PostTitleContainer", w.a),
				T = l.a.wrapped(v.c, "PostTitle", w.a),
				L = l.a.wrapped(O.d, "PostTopMeta", w.a),
				k = l.a.wrapped(O.a, "MetaSeparator", w.a),
				M = Object(r.b)(() => Object(a.c)({
					comment: h.n,
					language: x.P,
					post: b.I,
					subredditOrProfile: b.U
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return n.a.createElement(o.Fragment, null, n.a.createElement(k, null), n.a.createElement(L, {
						language: t,
						metaSeparatorClassName: w.a.postTopMetaMetaSeparator,
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
					return n.a.createElement(j, {
						"data-click-id": "user",
						to: "/user/".concat(o, "/")
					}, o)
				};
			t.a = Object(c.a)(M(Object(m.b)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(g.a, {
					className: Object(d.a)(y.a.compactPostStyles, w.a.overviewCommentPost, {
						[w.a.banned]: !!e.post.bannedBy,
						[w.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(P, {
					style: {
						background: Object(u.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(S, null), n.a.createElement(N, null, A(e), n.a.createElement(i.c, null, " commented on "), n.a.createElement(_, null, n.a.createElement(T, {
					outboundLinkClassName: w.a.postTitleOutboundLink,
					post: r,
					size: v.b.Small,
					titleClassName: w.a.postTitleTitle
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
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
				} = e, o = c(e, ["isFirst", "isLast"]);
				return n.a.createElement("div", d({
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
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
				w = m.a.div("Wrapper", C.a),
				j = m.a.div("CommentSeparator", C.a),
				P = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.n)(e, t),
					isCommentHighlightExperiment: (e, t) => {
						if (!Object(v.a)(e)) return !1;
						const s = Object(x.n)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(g.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: O.R
				}), e => ({
					openPost: t => e(Object(h.A)(t))
				}));
			class I extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isCommentHighlightExperiment: r,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: u
					} = this.props, h = m === e.author ? S : N;
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
					}, i.a.createElement(w, {
						className: Object(l.a)({
							[C.a.isFirst]: a,
							[C.a.isLast]: d,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(j, {
						key: e
					})), i.a.createElement(E, null, h(t, m, u))))
				}
			}
			const S = (e, t, s) => i.a.createElement(y, null, N(e, t, s, !0, !0)),
				N = function(e, t, s) {
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
			t.a = P(I)
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
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

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
					post: d,
					redditStyle: p,
					theme: u
				} = e, h = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, h), t)
			})
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
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
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
				w = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				k = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R),
				D = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const B = 500,
				F = new L.a(B),
				H = new L.a(B),
				W = new L.a(B),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = b.a.div("SeeMore", A.a),
				G = b.a.wrapped(N.a, "ArrowRight", A.a),
				z = (e, t, s, o, n, r, i, a) => {
					const d = s ? "last-".concat(o, "-").concat(n) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = F.get(c);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
					}, F.set(c, l)), l
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
						s.isSponsored && Object(I.a)(s.events, y.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(x.d)(s.source.outboundUrl, x.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(P.a)(e)
						})
					}, W.set(s, o)), o
				},
				Q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(B), this.updateScrollerRef = e => {
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
					this.timerId && k.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = k.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = k.c.end(this.timerId);
						setTimeout(() => Object(k.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && k.c.cancel(this.timerId), e.postIds.length && (this.timerId = k.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && k.c.has(this.timerId)) {
						const e = k.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(k.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && k.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return k.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = k.c.end(e);
					setTimeout(() => {
						s(t(o, M.TimerType.InApp))
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
						o = D(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = D(e, ["postsById"]),
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
						isProfilePostListing: d,
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
						} = this.props, E = y[e], j = E.crosspostRootId && y[E.crosspostRootId] ? y[E.crosspostRootId] : E;
						E.crosspostRootId && !y[E.crosspostRootId] && g.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(E.id, " is crosspost of ").concat(E.crosspostRootId, ", but ") + "".concat(E.crosspostRootId, " details are missing in the state")), g.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!E.crosspostRootId,
								isFirstPost: v,
								layout: o,
								post: j
							}),
							I = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							N = z(e, o, s, l, m, h, this.props, t),
							T = K(e, o, this.props, t),
							L = q(e, this.props),
							k = j.media && j.media.type === _.n.EMBED ? j.media.provider : null;
						C = {
							estHeight: Object(S.c)(E, o),
							id: e,
							isFocusable: !(!j.media || o !== w.g.Large) && (_.d.has(j.media.type) && (!k || !_.q.has(k)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: N,
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
								return c.a.createElement(P, {
									className: o,
									currentProfileName: n,
									key: I,
									availableWidth: h,
									eventFactory: b,
									first: v,
									forceLoadMedia: C,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: d,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: L,
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
					return c.a.createElement(e, null)
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
					return c.a.createElement("div", {
						className: A.a.placeholder
					}, c.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && c.a.createElement(O.a, {
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
					if (!s) return c.a.createElement("div", {
						className: A.a.placeholder
					}, c.a.createElement(v.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: V[o]
					}), !!e && c.a.createElement(O.a, {
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
					return c.a.createElement(d.Fragment, null, c.a.createElement(f.b, {
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
						viewportTopPadding: E.f
					}, x), v && c.a.createElement(U, {
						className: A.a.seeMoreButton
					}, c.a.createElement(j.a, {
						className: A.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Kb.Posts
						})
					}, c.a.createElement(C.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
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
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				c = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = o.a.wrapped(i.a, "Icon", p.a),
				h = o.a.wrapped(a.a, "Icon", p.a),
				b = o.a.wrapped(d.a, "Icon", p.a),
				x = o.a.wrapped(c.a, "Icon", p.a),
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
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts");
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
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
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
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
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
					isCurrentUserProfilePost: w,
					isCommentsPage: j,
					isCompactPinnedPost: P,
					isOverlay: I,
					language: S,
					post: N,
					publicAwardersEnabled: _,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: L,
					showSubreddit: k,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, A = j && _;
				return n.a.createElement(y, {
					className: t
				}, k && R && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && n.a.createElement(m.b, {
					className: Object(r.a)(C.a.subredditIcon, f),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, k && n.a.createElement(d.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), n.a.createElement(l.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? l.c.Lightbox : void 0,
					language: S,
					post: N,
					showSub: k,
					subredditOrProfile: R
				}), n.a.createElement(c.a, {
					className: C.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: E,
					language: S,
					isCompactPinnedPost: P,
					post: N,
					tooltipType: I ? l.c.Lightbox : void 0
				}), R && n.a.createElement(a.a, {
					className: C.a.donationAmount,
					contentId: N.id,
					subredditId: R.id
				}), n.a.createElement(i.a, {
					forceShowAllAwards: j,
					isOverlay: I,
					showAwarders: A,
					tooltipType: I ? l.c.Lightbox : void 0,
					thing: N
				})), R && k && T && !w && n.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(N.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(O.e)(R) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: N.id
				}, "Subscribe"), L && n.a.createElement(b.a, {
					className: C.a.OutboundLink,
					isSponsored: N.isSponsored,
					href: Object(v.A)(e.post),
					source: N.source
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
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/opener/index.ts"),
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

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const P = 500,
				I = new O.a(P),
				S = new O.a(P),
				N = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				_ = (e, t, s, o, n, r) => {
					const i = s ? "last-".concat(o, "-").concat(n) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(i);
					let d = I.get(a);
					return void 0 === d && (d = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, I.set(a, d)), d
				},
				T = (e, t) => {
					const s = "click-".concat(e);
					let o = S.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(g.a)(s.events, l.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(c.d)(s.source.outboundUrl, c.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(x.a)(e)
						})
					}, S.set(s, o)), o
				};
			class L extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new O.a(P), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(f.b)(d.l.Redesign, {
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
						setTimeout(() => Object(f.b)(d.l.Redesign, {
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
						o = j(t, ["itemIds"]),
						{
							itemIds: n
						} = e,
						r = j(e, ["itemIds"]),
						i = Object.keys(o),
						a = Object.keys(r);
					return a.length !== i.length || !!a.some(e => o[e] !== r[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEvent: c
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(d, "-").concat(a);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], h = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), b = _(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
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
							render: e => i.a.createElement(g, w({}, x, e))
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
						countOverride: N[s]
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
							d = !i && o[n + 1],
							c = !!Object(v.a)(s) && (!a || !Object(v.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(v.a)(s) && (!d || !Object(v.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, c, l, t)
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
						viewportTopPadding: b.f + b.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
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
				w = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				N = s.n(S);
			const _ = Object(g.t)({
					routeName: g.S,
					privateListingType: g.i
				}),
				T = Object(d.c)({
					isDropdownMenuOpen: e => Object(w.a)(e) === k,
					isOwnProfile: (e, t) => Object(j.J)(e, t.profileName),
					language: j.P,
					isInGoldProfileGildedExperiment: E.a,
					isSnoovatar30Enabled: y.d.snoovatar30,
					isSubscriptionsPinned: P.b
				}),
				L = Object(m.a)(v.a),
				k = "profile-nav-menu-tooltip";
			t.a = _(Object(i.b)(T, e => ({
				toggleTooltip: t => e(Object(h.h)({
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
					toggleTooltip: d,
					isInGoldProfileGildedExperiment: c,
					isSnoovatar30Enabled: l,
					isSubscriptionsPinned: m
				} = e;
				return r.a.createElement("div", {
					className: Object(p.a)(N.a.container, {
						[N.a.isGildedExperiment]: c
					})
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: m ? x.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, A({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isSnoovatar30Enabled: l,
						isInGoldProfileGildedExperiment: c
					}).map(e => r.a.createElement(M, e)), r.a.createElement("button", {
						className: Object(p.a)(N.a.mainLink, N.a.overflowMenuButton),
						id: k,
						onClick: () => d(k)
					}, r.a.createElement(f.a, null)), r.a.createElement(L, {
						className: Object(p.a)(N.a.dropdown, {
							[N.a.isGildedExperiment]: c
						}),
						isOpen: t,
						tooltipId: k
					}, D({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isInGoldProfileGildedExperiment: c
					}).map(e => r.a.createElement(R, e))))
				}))
			}));
			const M = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: o,
						url: n,
						internal: i
					} = e;
					return i ? r.a.createElement(O.a, {
						className: Object(p.a)(N.a.mainLink, {
							[N.a.hideOnNarrow]: !!t,
							[N.a.isActive]: s
						}),
						to: n
					}, o) : r.a.createElement("a", {
						className: Object(p.a)(N.a.mainLink, {
							[N.a.hideOnNarrow]: !!t,
							[N.a.isActive]: s
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
						text: d
					} = e;
					return s ? r.a.createElement(a.a, {
						className: Object(p.a)(N.a.dropdownLink, {
							[N.a.isActive]: t,
							[N.a.showOnNarrow]: !!i
						}),
						to: n,
						key: o,
						rel: "nofollow",
						role: "listitem"
					}, d) : r.a.createElement("a", {
						className: Object(p.a)(N.a.dropdownLink, {
							[N.a.showOnNarrow]: !!i
						}),
						href: n,
						key: o,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, d)
				},
				A = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: a,
						isInGoldProfileGildedExperiment: d
					} = e;
					const l = n ? [{
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Saved,
						key: "profile.saved",
						text: Object(c.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					n && d && (l.push({
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
						text: Object(I.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.yb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(c.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(c.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(c.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...l]
				},
				D = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isInGoldProfileGildedExperiment: a
					} = e;
					const d = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return n && a ? (d.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), d.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && i === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), d) : [...d, {
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: Object(c.a)(t, "profile.sections.gilded"),
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
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarSpacer/index.tsx"),
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
				}), r.a.createElement(d.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, null, r.a.createElement(m.a, {
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
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
						} = this.props, r = !e || t && o ? Object(c.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(c.a)(s, "sidebar.widgets.expandableList.viewLess");
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
						title: d
					} = this.props, {
						expanded: c
					} = this.state, l = o.length > r || t, p = (!l || c ? o : n()(o, r)).map(e => a({
						item: e
					}));
					return i.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: d
					}, p, i.a.createElement(h.a, null, i.a.createElement(b.a, null, l && this.renderToggleButton())))
				}
			}
			y.defaultProps = {
				minimizedLength: l.Db
			};
			const E = Object(d.c)({
				language: x.P
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
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(b);
			const g = Object(i.c)({
					currentUser: h.i,
					language: h.P,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(r.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
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
					hasMoreModerated: d,
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
				return n.a.createElement(c.a, {
					className: x.a.container,
					title: u,
					items: h,
					renderItem: O,
					hasMoreItems: d,
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
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
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
					onLoadMoreMultireddits: () => e(Object(d.e)(t.profileName, !0))
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
				return o && o.length ? n.a.createElement(l.a, null, n.a.createElement(c.a, {
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
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				u = s.n(p);
			const h = Object(i.b)(i.d, u.a);
			var b = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const O = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(b.r)(e, Object(b.m)(e, s))
				}
			}, h);
			t.a = Object(r.b)(O)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(a.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: j
				})
			});
			const f = v.a.wrapped(m.a, "TrophyItem", g.a),
				C = v.a.div("TrophyIcon", g.a),
				y = v.a.h5("TrophyName", g.a),
				E = v.a.div("TrophyContent", g.a),
				w = v.a.wrapped(c.f, "Description", g.a);

			function j(e) {
				let {
					item: t
				} = e;
				const s = n.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return n.a.createElement(f, {
					key: t.id
				}, n.a.createElement(C, null, t.url ? n.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), n.a.createElement(E, null, n.a.createElement(y, null, t.name), n.a.createElement(w, null, t.description)))
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
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
				w = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/TimeSort/index.m.less"),
				P = s.n(j),
				I = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "TimeSort--SortPicker",
				_ = Object(l.a)(f.a),
				T = (e, t, s) => {
					let o = e.url;
					return e.urlParams.sort || Object(v.G)(e) || (o = n.a.join(o, t)), Object(m.a)(o, {
						[g.t]: s
					})
				},
				L = I.a.div("ListingSortContainer", P.a),
				k = Object(v.t)(),
				M = Object(d.c)({
					dropdownIsOpen: Object(E.b)(N),
					language: w.P
				}),
				R = Object(a.b)(M, e => ({
					onOpenDropdown: () => e(Object(u.h)({
						tooltipId: N
					}))
				}));
			t.a = k(R(Object(b.b)(e => i.a.createElement(L, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, i.a.createElement(h.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, i.a.createElement(h.b, {
				className: e.buttonClassName,
				displayText: x.b[e.timeSort],
				id: N,
				showDropdownTriangle: !0
			})), i.a.createElement(O.a.Consumer, null, t => i.a.createElement(_, S({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: N
			}, t), [p.Pb.HOUR, p.Pb.DAY, p.Pb.WEEK, p.Pb.MONTH, p.Pb.YEAR, p.Pb.ALL].map(t => i.a.createElement(C.b, {
				className: Object(c.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: x.b[t],
				href: T(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.e)(t))
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
				d = s.n(a),
				c = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
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
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
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
				w = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				j = s.n(w);
			const P = Object(i.c)({
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
						return s.type === l.a.PROFILE ? Object(b.db)(e, {
							userName: s.name
						}) : null
					}
				}),
				I = Object(r.b)(P, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(d.b)(I(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(a.a, null, n.a.createElement(c.b, null, n.a.createElement(c.a, null, n.a.createElement(p.c, null, "Connected accounts")), s && n.a.createElement("div", {
					className: j.a.account
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
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/helpers/isComment.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/tracking.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, s) => Object(c.a)(e) ? 120 : 47,
				g = Object(d.t)(),
				v = {
					apiError: p.a,
					apiPending: p.b,
					currentUser: b.i,
					layout: d.L,
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
						e(r.A(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(l.a)(t) && e(r.D(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(l.a)(t) && e(r.E(t, o))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: m.f
				}));
			t.a = e => Object(a.b)(g(f(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return E
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const f = O(),
				C = {
					apiError: b.c,
					apiPending: b.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.L)(e, t),
					loadMore: b.g,
					postsById: x.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(x.F)(e, s, o, n)
					}),
					subredditsById: g.Y,
					viewportDataLoaded: v.a,
					pageReferrer: l.O,
					postListPlaceholderComponent: () => u.a
				},
				y = Object(n.c)(C),
				E = (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(a.A(t))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(a.D(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, n) => {
						e(a.E(t, o, n))
					}
				}),
				w = Object(o.b)(y, E, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(c.b)(f(w(e)))
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
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
			const w = e => Object(d.a)(C.a.iconStyles, e.className, {
					[C.a.mDisabled]: e.disabled,
					[C.a.mRedditStyle]: e.redditStyle
				}),
				j = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return n.a.createElement("button", y({
						className: Object(d.a)(C.a.layoutButton, {
							[C.a.mIsActive]: t
						})
					}, s))
				},
				P = Object(a.e)("listings.layoutSwitcher.label"),
				I = Object(a.e)("listings.layoutSwitcher.card"),
				S = Object(a.e)("listings.layoutSwitcher.classic"),
				N = Object(a.e)("listings.layoutSwitcher.compact"),
				_ = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(b.a, y({
							className: w({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: I
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(u.a, y({
							className: w({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: S
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(h.a, y({
							className: w({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: N
				}],
				T = Object(g.t)(),
				L = Object(i.c)({
					language: O.P,
					postLayout: g.L,
					redditStyle: g.A
				}),
				k = Object(r.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(k(Object(x.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || p.e[e.postLayout];
				return n.a.createElement("div", {
					className: Object(d.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, n.a.createElement("div", {
					className: C.a.title
				}, P(e.language)), n.a.createElement("div", {
					className: C.a.iconContainer
				}, _.map(r => {
					const i = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(v.screen)(e),
								subreddit: Object(v.subreddit)(e)
							})))
						})(r.layout),
						a = () => e.toggleTooltip(d),
						d = "layoutSwitch--" + r.layout,
						l = r.layout === o;
					return n.a.createElement(j, {
						"aria-label": r.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: d,
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
					}), n.a.createElement(c.c, {
						className: C.a.tooltip,
						tooltipId: d,
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
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				c = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(c),
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
					const c = Object(a.b)(o),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : r ? l : h(s, o, {
							count: c
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
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = d
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
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
				d = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(d);
			const l = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: c.a.container
					}, n.a.createElement("h3", {
						className: c.a.title
					}, t || Object(a.c)("Sorry, there doesn't seem to be anything here.")), n.a.createElement(r.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.a.createElement(i.c, null, "Go Home")))
				},
				m = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: c.a.container
					}, n.a.createElement("h3", {
						className: c.a.title
					}, t || Object(a.c)("Sorry, You do not have permission to view this page.")), n.a.createElement(r.h, {
						className: c.a.primaryRouterLink,
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
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
				w = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				j = s("./src/reddit/components/ProfileItemList/index.tsx"),
				P = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				I = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				S = s.n(I),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(P.a)(N.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return i.a.createElement(j.a, _({
					className: Object(E.a)(t, {
						[S.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", S.a));
			var L = e => i.a.createElement(T, _({}, e, {
					itemComponent: w.a
				})),
				k = s("./src/reddit/components/PostList/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				A = s("./src/lib/isPinnedAdminPost/index.ts"),
				D = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				B = s("./node_modules/lodash/last.js"),
				F = s.n(B);
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
			const Y = N.a.div("ExtraCommentsItemWrapper", Z.a),
				X = N.a.p("ExtraComments", Z.a),
				$ = N.a.wrapped(X, "ExtraCommentsInteractive", Z.a);
			var ee = Object(a.b)(() => Object(d.c)({
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
			const de = N.a.div("BackgroundWrapper", ie.a),
				ce = N.a.wrapped(V.default, "ClassicPost", ie.a),
				le = N.a.wrapped(G.a, "OverviewCommentPost", ie.a),
				me = Object(p.t)({
					currentProfileName: p.h,
					isFrontpage: p.y,
					pageLayer: e => e
				}),
				pe = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(D.a)(s, n);
						return e.profileOverviewPage.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(D.a)(s, n);
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
					layout: p.L
				})),
				ue = N.a.wrapped(U.default, "OverviewLargePost", ie.a);
			var he = Object(R.a)(me(pe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
						forceLoadMedia: r,
						headComment: a,
						isFrontpage: d,
						isInitiallyPinned: c,
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
						w = Object(A.a)(l, g.distinguishType);
					if (!y && !a && !w) return null;
					const j = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), F()(t).push(e[o])
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
						P = j.length - 1;
					return i.a.createElement("div", {
						className: Object(E.a)(ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, ie.a.OverviewConversationsPost, s),
						style: Object.assign({}, Object(H.b)(), Object(H.d)(e))
					}, i.a.createElement(z.a, {
						isFirst: !0,
						isLast: P < 0,
						key: g.id
					}, !y && !!a && i.a.createElement(le, ae({}, C, {
						commentId: a,
						key: g.id,
						profileName: O
					})), (y || w) && (u === se.g.Classic ? i.a.createElement(ce, {
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
						isFrontpage: d,
						forceLoadMedia: r,
						last: p,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: x,
						postId: v,
						scrollerItemRef: f
					}))), i.a.createElement(de, {
						style: {
							background: Object(H.e)(e)
						}
					}, !c && j.map((e, t) => i.a.createElement(z.a, {
						isLast: t === P,
						key: "".concat(t, "-isLast[").concat(t === P, "]")
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
			const Oe = Object(d.c)(Object.assign({}, ve.d, {
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
			var ye = (e => Object(M.b)(fe(Ce(e))))(k.a),
				Ee = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				we = s("./node_modules/lodash/debounce.js"),
				je = s.n(we),
				Pe = s("./src/reddit/actions/post.ts"),
				Ie = s("./src/reddit/components/MiniCardPost/index.tsx"),
				Se = s("./src/reddit/helpers/getClickInfo.ts"),
				Ne = s("./src/reddit/helpers/localStorage/index.ts"),
				_e = s("./src/reddit/models/User/index.ts"),
				Te = s("./src/reddit/selectors/user.ts"),
				Le = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					fill: "inherit"
				}, i.a.createElement("path", {
					d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
				}))),
				ke = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Me = s.n(ke);
			var Re = e => i.a.createElement("div", {
					className: Object(E.a)(Me.a.container, e.className)
				}, i.a.createElement(Le, {
					className: Me.a.pin
				}), i.a.createElement("div", {
					className: Me.a.title
				}, i.a.createElement(K.c, null, "Show off that karma!")), e.children),
				Ae = s("./src/reddit/controls/TextButton/index.tsx"),
				De = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Be = s.n(De);
			var Fe = e => i.a.createElement(Re, {
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
				Ge = Object(d.c)({
					arePinnedPostsLoaded: W.a,
					currentUser: Te.i,
					pinnedPostIds: W.Q
				}),
				ze = Object(a.b)(Ge, e => ({
					openPost: t => e(Object(Pe.A)(t))
				}));
			class Ke extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = je()(() => {
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
						Object(Ne.X)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Se.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(Ie.b, {
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
						showEducation: !Object(Ne.v)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(_e.f)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: We.a.title
					}, i.a.createElement(K.c, null, "Pinned posts")), r ? i.a.createElement(Fe, {
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
				Ye = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				et = Object(p.t)(),
				tt = Object(d.a)(p.B, Te.U, $e, p.L, (e, t) => {
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
				}, (e, t) => Object(b.a)(e, $e(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(W.k)(e, {
						profileName: s.params.profileName
					})
				}, Te.G, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Te.f)(e, u.Rb + s.params.profileName)
				}, (e, t, s, o, n, r, i, a, d, c, l) => {
					let {
						sort: p,
						t: h
					} = a;
					const b = o === se.g.Compact ? u.ib : u.jb,
						x = Object(m.a)(n, b, p, s);
					return {
						contentGateInfo: l,
						over18Prefs: t,
						isLoggedIn: c,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: o,
						listingKey: x,
						profileName: n,
						shouldShowPinnedPostsSection: d,
						sort: p,
						timeSort: h
					}
				}),
				st = Object(a.b)(tt, (e, t) => ({
					onLoadMoreChronoItems: () => e(g.d({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLoadMoreConversationsItems: () => e(x.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.g)(Object.assign({}, t.match, {
						queryParams: n()([...Object(c.a)(t.location.search)])
					})))
				}));
			class ot extends i.a.Component {
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
						layout: t,
						over18Prefs: s,
						isLoggedIn: o,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: a,
						onLayoutChange: d,
						pageLayer: c,
						profileName: m,
						sort: p,
						shouldShowPinnedPostsSection: h,
						timeSort: b
					} = this.props;
					if (!c) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return i.a.createElement(v.b, {
						contentGateType: e.profileDeleted ? v.a.ProfileDeleted : v.a.ProfileSuspended,
						profileName: m
					});
					if (403 === c.status) return i.a.createElement(Ye.a, null);
					if (404 === c.status) return i.a.createElement(v.b, {
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
					if (!s && r && !n) return i.a.createElement(v.b, {
						subredditName: m,
						contentGateType: v.a.Nsfw
					});
					const E = {
							inSubredditOrProfile: !Object(l.a)(m),
							listingKey: a,
							listingName: x,
							listingViewed: (e, t) => Object(Je.k)(a, p, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: d
						},
						w = !o,
						j = {
							sort: p,
							baseUrl: g,
							sortOptions: u.nb,
							timeSort: b
						};
					let P;
					return P = t === se.g.Compact ? i.a.createElement(L, Xe({}, E, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: d
					})) : i.a.createElement(i.a.Fragment, null, h && i.a.createElement(qe, {
						profileName: m
					}), w && i.a.createElement(f.a, j), i.a.createElement(ye, Xe({}, E, {
						excludePinnedPosts: h,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(Ze.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
							profileName: m
						}), !w && i.a.createElement(y.a, j)),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), P),
						sidebar: i.a.createElement(Qe.a, Xe({}, O, {
							profileName: m
						}))
					})
				}
			}
			t.default = et(st(ot))
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
					experimentEligibilitySelector: e => Object(r.G)(e),
					experimentName: o.H
				});
				return Object(o.Sb)(t) ? void 0 : t
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
					experimentEligibilitySelector: e => Object(r.G)(e),
					experimentName: o.L
				});
				return Object(o.Sb)(t) ? void 0 : t
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
					experimentName: o.kb
				});
				return Object(o.Sb)(t) ? void 0 : t
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
//# sourceMappingURL=ProfileOverview.bc61fbc7b12463a06a3d.js.map