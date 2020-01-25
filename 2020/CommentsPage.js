// https://www.redditstatic.com/desktop2x/CommentsPage.aa65967c936870487e1a.js
// Retrieved at 1/24/2020, 8:20:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~Sear~eb23b26b", "Explore~ProfileSnoobuilder~SubredditWiki", "PostDraft~ProfileSnoobuilder"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? r : o;
					return Object(n.c)(i[a])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const o = new Date(1e3 * e),
					r = i(o, s, n),
					d = t ? a(o, s) + ", " : "";
				return "".concat(r, " ").concat(d).concat(c(o, s))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				C = s("./src/lib/lessComponent.tsx");
			const O = C.a.div("Container", x.a),
				v = C.a.div("LoadingHitbox", x.a),
				y = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					y(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (o) {
						y(o)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						y(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						y(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? o.a.createElement(O, {
						"data-slot": t
					}, o.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), o.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : o.a.createElement("div", {
						className: s
					})
				}
			}
			E.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(u.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(E))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/chat/toggle.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: s,
					className: n
				} = e;
				return o.a.createElement(c.f, {
					onClick: t,
					className: n
				}, s)
			};
			l.displayName = "ChatButton";
			const m = Object(r.b)(null, (e, t) => ({
				onStartChat: () => {
					const {
						contextId: s,
						userId: n,
						sendEvent: o
					} = t;
					e(Object(a.a)(n, s)), o(Object(d.b)(s))
				}
			}));
			t.a = m(Object(i.b)(l))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(u),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(l.t)(),
				O = Object(a.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(r.b)(O),
				y = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, o.a.createElement(d.d, x({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				E = () => o.a.createElement(y, null, o.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = C(v(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(E, null)), o.a.createElement("div", {
				className: g.a.mainBody
			}, o.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: g.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/LargePost/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/helpers.ts"),
				O = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostMedia/index.tsx"),
				E = s("./src/reddit/components/PostMeta/index.tsx"),
				f = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/chatPost.ts"),
				F = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/monthsToMinutes.ts"),
				H = s("./src/reddit/selectors/postFlair.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts");
			const K = {
					autoplayPref: U.b,
					activeModalId: B.a,
					crosspost: V.c,
					currentUser: U.i,
					isActive: V.g,
					isChatPostExperiment: A.d,
					isCurrentUserProfilePost: V.h,
					isExpanded: V.j,
					isFrontpageHome: W.g,
					isM2MHomeRedirectEnabled: F.c,
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
					showEditFlair: H.a,
					showMedia: R.r,
					subredditOrProfile: V.T,
					userIsOp: U.jb,
					flairStyleTemplate: R.Q
				},
				G = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === L.a.upvoted ? Object(T.N)(o) : Object(T.o)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.L)(o)),
						onOpenReportsDropdown: t => e(Object(N.g)({
							tooltipId: t
						}))
					}
				},
				z = Object(S.b)(() => Object(_.c)(K), G, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var J = s("./src/lib/LRUCache/index.ts");
			const Y = Object(R.t)({
					searchQuery: R.U
				}),
				Q = new J.a(250),
				q = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = Q.get(s);
						if (void 0 === n) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(a)), Q.set(s, n)
						}
						return n
					}
				},
				X = Object(S.b)(() => Object(_.c)(K), G, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: q(s.searchQuery || "")
				}));
			var Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				ne = s("./src/reddit/components/ClassicPost/index.m.less"),
				oe = s.n(ne);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return me
			}));
			const ae = 16;
			class ie extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: i,
						inSubredditOrProfile: y,
						eventFactory: S,
						first: _,
						flairStyleTemplate: T,
						formatTitle: N,
						isCheckboxSelected: L,
						isCurrentUserProfilePost: M,
						isFrontpage: R,
						isFrontpageHome: B,
						isM2MHomeRedirectEnabled: A,
						isOverlay: F,
						language: D,
						moderatorPermissions: W,
						modModeEnabled: H,
						onClickPost: V,
						onIgnoreReports: U,
						onOpenReportsDropdown: K,
						poll: G,
						post: z,
						redditStyle: J,
						scrollerItemRef: Y,
						showBulkActionCheckbox: Q,
						showEditFlair: q,
						showMedia: X,
						subredditOrProfile: te,
						toggleCheckbox: ne,
						userIsOp: ie
					} = this.props, de = J ? void 0 : T, le = this.props.crosspost || void 0, me = Object($.a)(W), pe = Object(Z.a)(W), ue = H && $.a, he = !!z.media && z.media.type === k.n.RTJSON, be = ie && he, ge = y && !X, xe = {
						flairStyleTemplate: de,
						post: z,
						inSubredditOrProfile: y,
						isCurrentUserProfilePost: M,
						isOverlay: F,
						shouldShowSubscribeButton: !(R && B),
						subredditOrProfile: te,
						language: D
					}, Ce = o.a.createElement(v.a, {
						className: Object(a.a)(se.a.classicPostStyles, oe.a.postContainer, Object(ee.a)(this.props), _ ? oe.a.mFirst : void 0, e),
						isOverlay: F,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: V,
						eventFactory: S
					}, Object(g.b)(z, s, Q, L, ne, de, J), o.a.createElement(O.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, o.a.createElement(p.a, {
						className: oe.a.eventMeta,
						post: z,
						language: D
					}), o.a.createElement("div", {
						className: oe.a.mainBody
					}, o.a.createElement("div", {
						className: ge ? oe.a.expandoContainer : oe.a.thumbnailContainer
					}, !ge && o.a.createElement(I.a, {
						className: oe.a.classicThumbnail,
						crosspost: le && z,
						isMeta: i,
						post: le || z,
						redditStyle: J,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), o.a.createElement(u.a, {
						crosspost: le,
						className: oe.a.rightExpando,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: oe.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ae, "px")
						}
					}, o.a.createElement(j.c, {
						className: G ? oe.a.titleWithPoll : void 0,
						format: N,
						poll: G,
						post: z,
						redditStyle: J,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: A,
						isOverlay: F
					}, z.source && !le && o.a.createElement(P.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						source: z.source
					}, Object(c.a)(z))), o.a.createElement(E.a, re({
						key: "PostMeta"
					}, xe)), H && me && Object(C.c)(z) && o.a.createElement(x.a, {
						language: D,
						onIgnoreReports: U,
						reportable: z
					}), o.a.createElement("div", {
						className: oe.a.spacer
					}), z.source && z.source.url && z.isSponsored && o.a.createElement(d.a, {
						className: oe.a.adLinkWrapper
					}, o.a.createElement(P.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.source.displayText), z.callToAction && o.a.createElement(l.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.callToAction)), o.a.createElement("div", {
						className: oe.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: oe.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: z,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: z,
						onVoteClick: s
					}), o.a.createElement(h.a, {
						className: oe.a.flatlistSeparator
					}), o.a.createElement(h.c, {
						className: oe.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!F,
						language: D,
						modModeEnabled: H,
						onIgnoreReports: U,
						onOpenReportsDropdown: K,
						post: z,
						showEditPost: be,
						showEditFlair: q,
						tooltipType: F ? w.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(f.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), o.a.createElement(b.d, {
						postId: z.id
					}))), ce(z, Y, n)));
					return o.a.createElement(o.a.Fragment, null, Ce)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: oe.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => o.a.createElement(y.a, {
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
				le = Object(i.a)(ie),
				me = (e => Y(X(e)))(le);
			t.b = (e => z(Object(M.b)(e)))(le)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				postEventMeta: "UORiCb6Mik-agLw97Owil",
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/app/strings/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/helpers/postEvent.ts"),
				l = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				m = s.n(l);
			const p = i.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "Metadata", m.a),
				u = e => {
					let {
						post: t,
						language: s
					} = e;
					return Object(d.a)(t) ? o.a.createElement(c.a, {
						className: m.a.postEventMeta,
						language: s,
						post: t
					}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
						"data-click-id": "score"
					}, Object(a.c)(s, "posts.points.noun", t.score, {
						count: Object(r.b)(t.score)
					})), o.a.createElement(p, null, "·")), o.a.createElement(p, {
						"data-click-id": "comments"
					}, Object(a.c)(s, "posts.comments.noun", t.numComments, {
						count: Object(r.b)(t.numComments)
					})))
				}
		},
		"./src/reddit/components/Collection/PostItem/index.m.less": function(e, t, s) {
			e.exports = {
				postTitle: "_1bvyZ0jB0C8Lx6TlraZXE3",
				postContent: "_3giZKNlG6qJzee7UY1xsIJ",
				active: "_12zSt_pMIevRkRY1y7z0ZD",
				isProfilePage: "_3yF2XCFhSO-O3pN8ebYN1G",
				postBody: "_2L4qX-0aH7jj8yNe2FGxg-",
				bottomline: "NlMXOVW9HTmozMDSBJduL",
				postContainer: "rF1mJN5TPvOeX-Rs9PA04",
				postBodyWrapper: "_3LxyuVXMtCzPGToR6G4aUP",
				galleryPostContainer: "LbSOjrpQSZxNlzkqgp8IK",
				galleryPostOverlay: "_32s7Ik6Mvi_xJ6Q7PXN7cS",
				galleryPostImage: "_71EQniEmTXC8cbuXDlo2y",
				gallerySelectedBorder: "_3TY5O5VX0o1EJLeXO2CBIz",
				isNightmodeOn: "_3ToKa6hKRy0knGHXUZW0tI",
				isSelectedPost: "dKiTp-99N-ixy1MUgoxzt",
				galleryBottomLine: "_3juAZ5nip3xhlLYoa0eJHl",
				isScoreHidden: "_1gE7DLti39Ow23AU39DRyi",
				gallerySeparator: "_1REIFRRcgS4gb1OzCUiDdF",
				scrollToContainer: "R4W5__5pno6HuOR6cXIcW",
				blurBackground: "_1EmOtGLOIj5jVny00MsYDq",
				timelineThumbnail: "N7ZDF05PM85cnjxy8A9Kj",
				timelineThumbnailOverride: "_2qHZln2Y6YL5GXxpgP4Qf4",
				galleryThumbnailPlaceholder: "_3HsMbUHP3qlXSnSNv10i__",
				thumbnailContainerClassName: "_22Rd8vdnxySvffllxDpbGs",
				galleryPostPlaceholderThumbnailOverride: "_2XLoayiHEZSUCfwO0UAbso",
				commonThumbnailOverride: "_2tS9NgDPCzFiHnYMa3o1SV"
			}
		},
		"./src/reddit/components/Collection/index.m.less": function(e, t, s) {
			e.exports = {
				collectionTitleWrapper: "_10IcBRrmressbhblq2bqiU",
				isProfilePage: "_40cmCHyGWf1SgOpyoChQS",
				collectionTitle: "tFfYP5FF1o5CEXQ15uH7d",
				collectionMetaData: "_1-c9t8ecl06D08Su9pk4ni",
				collectionBy: "_17sTscKExP8XIU91kNOF2U",
				collectionTitleOptions: "_1IA_VhTzcdVBgjp_pZllHj",
				postListWrapper: "_2T_gfh-4AolUQ4rcgj8LV3",
				collectionDescription: "_1qekGnwXQb9ZXUYpC2vI3o",
				collectionList: "_3DA4B_0rR_osY0zjBQbJ8d",
				author: "_3fYAYBseZm3AMr8S-Q5ZoJ",
				overflowMenu: "_3LbMCmvXBCx5DLWUsYvKdV",
				postCount: "_1LY03RHQAwDBI6w3IOLqwg",
				galleryContainer: "_3sH08_Dk83Y6-vyvIc9ttc"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = i.a.div("Wrapper", h.a), x = i.a.span("Copy", h.a), C = i.a.wrapped(l.g, "SignupLink", h.a), O = i.a.wrapped(l.j, "LoginLink", h.a);
			t.a = Object(d.b)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: i,
					openRegisterModal: d,
					origin: l,
					sendEvent: u
				} = e;
				return o.a.createElement(g, {
					className: Object(r.a)(t, {
						[h.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[h.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(O, {
					href: Object(c.a)(n, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "log in")), o.a.createElement(C, {
					className: Object(r.a)({
						[h.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(n, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "sign up")))
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				C = s.n(x);
			const O = h.a.wrapped(g.a, "Show", C.a);
			var v = e => o.a.createElement(b.d, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.f, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, o.a.createElement(b.e, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, o.a.createElement(O, null)));
			const y = h.a.wrapped(l.a, "StyledDropdown", C.a),
				E = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				f = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(s.id)),
						onLockComment: () => e(Object(i.X)(s.id)),
						onRemoveComment: () => e(Object(i.cb)(s.id, !1)),
						onSpamComment: () => e(Object(i.cb)(s.id, !0)),
						onShowComment: () => e(Object(i.Y)(s.id))
					}
				}),
				j = Object(c.a)(y),
				w = f(Object(d.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: n,
						onApproveComment: r,
						onLockComment: a,
						onRemoveComment: i,
						onSpamComment: c,
						onShowComment: d,
						sendEvent: l,
						tooltipId: p
					} = e;
					return o.a.createElement(j, {
						isOpen: s,
						tooltipId: p
					}, o.a.createElement(v, {
						language: n,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							c(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = w
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				supportButton: "_2YUu8EV4OahSxJwgb9xLbr",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				C = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				f = s.n(E);
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
			var w = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (O.d.spTopTippers(e)) return Object(v.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: j(t)
							});
						return o.a.createElement("div", {
							className: f.a.container
						}, o.a.createElement(y.a, {
							className: f.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				P = s("./src/reddit/components/Flair/index.tsx"),
				k = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				B = s("./src/reddit/actions/comment/index.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				W = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = s("./src/reddit/icons/fonts/helpers.tsx"),
				U = s("./src/reddit/icons/fonts/Op/index.m.less"),
				K = s.n(U);
			var G = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(V.a, null, e.desc)), "OpIcon", K.a),
				z = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				q = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ae = p.a.wrapped(P.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(W.a, "Approve", ne.a),
				de = p.a.wrapped(H.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(Q.a, "Automoderator", ne.a),
				pe = p.a.wrapped(q.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(X.a, "Moderator", ne.a),
				he = p.a.wrapped(z.a, "Remove", ne.a),
				be = p.a.wrapped(J.a, "Report", ne.a),
				ge = p.a.wrapped(Y.a, "Spam", ne.a),
				xe = p.a.wrapped(G, "Op", ne.a),
				Ce = p.a.wrapped(D.a, "Contractor", ne.a),
				Oe = p.a.a("MetaLink", ne.a),
				ve = p.a.wrapped(Z.a, "EditedText", ne.a),
				ye = p.a.wrapped(Z.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				fe = p.a.wrapped(Z.a, "MetaSeparator", ne.a),
				je = p.a.wrapped(Z.a, "CrowdControlText", ne.a),
				we = p.a.wrapped(I.b, "AuthorHoverCard", ne.a),
				Pe = p.a.a("RemovalReason", ne.a),
				ke = p.a.wrapped(g.b, "Component", ne.a),
				Ie = Object(i.d)("comment.children"),
				Se = Object(i.d)("comment.moreThanChildren"),
				_e = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Te = Object(i.e)("comment.tooltips.admin"),
				Ne = Object(i.e)("comment.tooltips.cakeday"),
				Le = Object(i.e)("comment.tooltips.adminEmeritus"),
				Me = Object(i.e)("comment.tooltips.moderator"),
				Re = Object(i.e)("comment.tooltips.op"),
				Be = Object(i.e)("comment.tooltips.contractor"),
				Ae = Object(r.b)(() => Object(a.c)({
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
						return !!Object(v.q)(e, s.subredditId, s.authorId).length
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
								window.removeEventListener("focus", s), e(Object(B.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(B.N)({
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
			t.a = Ae(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: g,
					compact: O,
					flair: v,
					flairPosition: y,
					hasBadges: E,
					isLivestreaming: f,
					ignoreFlairPosition: j,
					ignoreLock: w,
					language: I,
					lockedTooltipId: S,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: B,
					publicAwardersEnabled: D,
					removeTooltipId: W,
					renderContractorBadge: H,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: K,
					subredditDisplayText: G,
					topTippersEnabled: z
				} = e;
				if (u.isDeleted) return o.a.createElement(Fe, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const J = !j && y === F.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: f
					})
				}, v && J && o.a.createElement(P.b, {
					flair: v,
					forceSmallEmojis: O
				}), !Object(A.d)(u) && o.a.createElement(ke, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(we, {
					postOrComment: u,
					tooltipType: V ? T.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: f,
					isStrong: !!O,
					isAuthorDeleted: Object(A.d)(u),
					topTippersEnabled: z
				}, i && i))), p && o.a.createElement(je, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), v && !J && o.a.createElement(ae, {
					flair: v,
					forceSmallEmojis: O
				}), !O && o.a.createElement(k.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(_.b, {
					commentId: u.id
				}), o.a.createElement(_.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ke, {
					comment: u,
					compact: O,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: I,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: G
				})), !O && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: I,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && ze(I), u.editedAt && We(I, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ge, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: w,
					language: I,
					lockedTooltipId: S,
					onHideTooltip: L,
					onShowTooltip: M,
					openRemovalReasonModal: B,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: K
				}), o.a.createElement(C.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? T.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Fe = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(Ee, null, a.deletedBy === A.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), n && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(He, {
						comment: t,
						isAuthorDeleted: Object(A.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Z.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(Z.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: s
					}))
				},
				We = (e, t) => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(ve, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				He = e => {
					const t = o.a.createElement(h.a, {
						className: ne.a.CommentAuthorLink,
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
					return e.topTippersEnabled ? o.a.createElement(w, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(Oe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(s, t.created)), Je(r.createdTooltipId, Object(m.a)(t.created)))
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
				return o.a.createElement(fe, {
					className: ne.a.metaText
				}, "(", t ? Se(e.language, s, {
					numChildren: s
				}) : Ie(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Ne(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Je(s.cakedayTooltipId, Ne(s.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Je(s.adminTooltipId, Te(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && Je(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Je(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Je(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(Ce, {
						desc: Be(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Je(s.contractorTooltipId, Be(s.language)))
				}
			}
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(ce, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Je(s.approveTooltipId, Object(L.a)(s.language, t)), Object(N.a)(t) && o.a.createElement(he, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && Je(s.removeTooltipId, Object(L.c)(s.language, t)), Object(N.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(Pe, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(N.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(Pe, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && o.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(ge, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Je(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Je(s.automodTooltipId, Object(L.b)(s.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && Je(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const ze = e => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(ye, null, Object(i.a)(e, "comment.stickied"))),
				Je = (e, t) => o.a.createElement(S.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				isAwarded: "_3x1wnLNRJ5UQU9fODNc2V4",
				isNightmodeOn: "_1XNv4WhzL_uEQ36cwbjMOe"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return S
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				O = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				E = s("./src/reddit/components/Comments/States/index.m.less"),
				f = s.n(E);
			const j = l.a.wrapped(v.a, "CommentsIcon", f.a),
				w = l.a.wrapped(y.a, "SnooFacepalm", f.a),
				P = l.a.p("EmptyTitle", f.a),
				k = l.a.p("ErrorTitle", f.a),
				I = l.a.p("EmptyText", f.a),
				S = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(f.a.StateContainer, t)
					}, a.a.createElement(j, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "no ", s ? "messages" : "comments", " yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to share what you think!")))
				},
				_ = () => a.a.createElement("div", {
					className: f.a.StateContainer
				}, a.a.createElement(j, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "no other discussions yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to post the same link or crosspost in another community!"))),
				T = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: f.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "That comment is missing")), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, a.a.createElement(x.c, null, "View all comments")))
				},
				N = Object(i.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.r)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						language: s,
						onClick: n
					} = e;
					return a.a.createElement("div", {
						className: f.a.StateContainer
					}, a.a.createElement(w, null), a.a.createElement(k, null, t ? Object(h.a)({
						apiError: t,
						language: s,
						isLoggedOut: !1
					}) : Object(c.a)(s, "comment.error")), a.a.createElement(u.f, {
						onClick: n
					}, a.a.createElement(x.c, null, "retry")))
				}),
				L = () => a.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", f.a),
				R = l.a.div("CommentsPlaceholderContainer", f.a),
				B = l.a.div("CommentPlaceholder", f.a),
				A = l.a.div("VoteColumn", f.a),
				F = l.a.div("TextColumn", f.a),
				D = l.a.wrapped(O.a, "Upvote", f.a),
				W = l.a.wrapped(C.a, "Downvote", f.a),
				H = () => a.a.createElement("div", {
					className: Object(d.a)(f.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(d.a)(f.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement(R, null, o()(10, e => a.a.createElement(B, {
					key: e
				}, a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(F, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui"
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = a.a.div("LoaderWrapper", d.a),
				m = a.a.div("Icon", d.a),
				p = a.a.div("Byline", d.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageAd/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				commentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				BannerAd: "_3-iuIC1F_FWNnxkCPyySXD",
				bannerAd: "_3-iuIC1F_FWNnxkCPyySXD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				communityTipJar: "_3Rb_UoC2j8wE4ckG7Yqy2K",
				communityTokens: "LRXVBnaKV0QUa_v8PZe5Q",
				leaderboard: "_2Bw_-Pd7_PSh46KT8HivGh",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(u),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(l.t)(),
				O = Object(a.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(r.b)(O),
				y = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: g.a.emptyVotes
					}, o.a.createElement(d.d, x({
						key: "u"
					}, t)), o.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), o.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				E = e => o.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				f = e => o.a.createElement("div", {
					className: g.a.flatList
				}, o.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), o.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = C(v(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.compactPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement("div", {
				className: g.a.wrapper
			}, o.a.createElement(y, x({
				key: "c"
			}, e)), o.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(g.a.expando, Object(m.a)(e))
			})), o.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, o.a.createElement(E, {
				isLoading: !1
			})), o.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, o.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), o.a.createElement(f, x({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				_ = s("./src/reddit/components/CallToActionButton/index.tsx"),
				T = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				R = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/ExpandoButton/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				F = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostBadges/index.tsx"),
				z = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Q = s("./src/reddit/components/PostMedia/index.tsx"),
				q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				X = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Z = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				ne = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				oe = s("./src/reddit/contexts/InsideOverlay.tsx"),
				re = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/controls/Checkbox/index.tsx"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				de = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(ue),
				be = s("./src/reddit/components/CompactPost/index.m.less"),
				ge = s.n(be);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ce = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Oe = e => {
					var {
						isCompact: t
					} = e, s = Ce(e, ["isCompact"]);
					return o.a.createElement(B.a, xe({
						className: Object(c.a)(ge.a.responsiveExpandoButton, {
							[ge.a.mHideAboveSmallTablets]: !!t,
							[ge.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				ve = Object(r.b)(() => Object(a.c)({
					activeModalId: E.a,
					crosspost: P.c,
					currentUser: k.i,
					flairStyleTemplate: re.Q,
					isActive: P.g,
					isExpanded: P.j,
					language: k.S,
					layout: re.M,
					moderatorPermissions: j.i,
					modModeEnabled: re.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: P.I,
					showEditFlair: w.a,
					subredditOrProfile: P.T,
					userIsOp: k.jb,
					isInAdLeftSidebarExperiment: f.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							} = t;
							return e(Object(v.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							}))
						},
						handleVote: t => {
							const s = t === C.a.upvoted ? Object(O.N)(o) : Object(O.o)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(O.L)(o)),
						onOpenReportsDropdown: t => e(Object(y.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: o
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: o
						})
					}
				}));
			class ye extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: r,
						eventFactory: a,
						flairStyleTemplate: d,
						handleVote: l,
						isCheckboxSelected: C = !1,
						isCommentsPage: O,
						isCommentPermalink: v,
						isExpanded: y,
						isInAdLeftSidebarExperiment: E,
						isOverlay: f,
						isProfilePostListing: j,
						inSubredditOrProfile: w = !1,
						language: P,
						layout: k,
						moderatorPermissions: B,
						modModeEnabled: Q,
						onClickPost: te,
						onFlairChanged: oe,
						onIgnoreReports: re,
						poll: ie,
						post: ue,
						subredditOrProfile: be,
						userIsOp: xe,
						hideModTools: Ce,
						scrollerItemRef: Oe,
						showBulkActionCheckbox: ve,
						showEditFlair: ye,
						toggleCheckbox: fe,
						tooltipType: Pe,
						sendEvent: ke
					} = this.props, Ie = !!ue.media && ue.media.type === g.n.RTJSON, Se = xe && Ie, _e = Object(J.b)(ue.id, f), Te = Object(p.a)(B), Ne = Object(de.a)(B), Le = "-mod-actions-menu-".concat(ue.id), Me = !!r && Object(x.f)(r) === ue.author, Re = Object(V.c)(ue), Be = Object(F.a)("View--Reports", ue.id, Pe), Ae = Object(V.a)(ue), Fe = !(f || O || v), De = e => ke(Object(b.f)(ue.id, e)), We = o.a.createElement(z.a, {
						className: Object(c.a)(he.a.compactPostStyles, ge.a.postContainer, Object(h.a)(this.props), t),
						isOverlay: f,
						style: Object.assign({}, Object(h.d)(this.props), Object(h.b)(this.props.flairStyleTemplate)),
						post: ue,
						onClick: te,
						eventFactory: a
					}, o.a.createElement("div", {
						className: ge.a.compactWrapper
					}, o.a.createElement("div", {
						className: ge.a.leftRailWrapper
					}, o.a.createElement("div", {
						className: ge.a.leftRail,
						style: {
							borderColor: Object(Y.c)({
								isRemoved: !!ue.bannedBy,
								isReported: Object(u.a)(ue),
								isSponsored: ue.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: E
							})
						}
					}, ve && o.a.createElement(ae.a, {
						className: ge.a.bulkActionCheckbox,
						isCheckboxSelected: C,
						toggleCheckbox: fe
					}), o.a.createElement(se.a, {
						className: ge.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}), o.a.createElement(L.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}))), o.a.createElement(K.a, {
						className: Object(c.a)(ge.a.content, {
							[ge.a.isEvent]: Object(le.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: d
					}, o.a.createElement(R.a, {
						isCompactMode: !0,
						language: P,
						post: ue
					}), o.a.createElement("div", {
						className: ge.a.compactPostRow
					}, !Ce && je(ue, n, y, !1), !w && !ue.isSponsored && o.a.createElement(D.h, {
						type: ue.belongsTo.type,
						id: ue.belongsTo.id
					}), o.a.createElement("div", {
						className: ge.a.topLine,
						"data-click-id": "body"
					}, o.a.createElement(Z.c, {
						post: ue,
						poll: ie,
						size: Z.b.Small,
						titleColor: d && d.postTitleColor,
						isOverlay: !1
					}), we(ue, be, P), o.a.createElement($.d, {
						className: ge.a.postTopMeta,
						flairStyleTemplate: d,
						language: P,
						post: ue,
						showSub: !!be && !w && !ue.isSponsored,
						subredditOrProfile: be
					}), o.a.createElement(G.a, {
						className: ge.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: w,
						language: P,
						post: ue
					}), be && o.a.createElement(M.a, {
						className: ge.a.donationAmount,
						contentId: ue.id,
						subredditId: be.id
					}), o.a.createElement(S.a, {
						isOverlay: f,
						tooltipType: Pe,
						thing: ue
					})), Fe && o.a.createElement("div", null, o.a.createElement(T.a, {
						className: ge.a.liveDiscussionIcon,
						isMod: Te,
						postId: ue.postId
					})), o.a.createElement("div", {
						className: ge.a.flatList
					}, o.a.createElement(N.a, {
						className: ge.a.commentsLink,
						hasModPostPerms: Te,
						isCommentsPage: O,
						isCommentPermalink: v,
						isOverlay: f,
						postId: ue.id,
						modModeEnabled: Q,
						numComments: ue.numComments,
						type: m.g.Compact
					}), o.a.createElement(U.a, {
						className: ge.a.modToolsFlatlist,
						isOverlay: !1,
						layout: k,
						modModeEnabled: Q,
						post: ue,
						sendEvent: ke,
						showIconsOnly: !0
					}), Te && o.a.createElement(W.a, {
						dropdownId: Le,
						onClick: () => De("post_mod_action_menu")
					}, o.a.createElement(A.b, null), o.a.createElement(q.a, {
						canEditFlair: Ne && ye,
						hasModPostPerms: Te,
						isOverlay: !1,
						isPostAuthor: Me,
						language: P,
						modModeEnabled: Q,
						post: ue,
						tooltipId: Le
					})), Te && Re && !Q && o.a.createElement(ee.c, {
						text: "".concat(Ae),
						onClick: () => {
							this.props.onOpenReportsDropdown(Be), De("post_report_menu")
						},
						id: Be
					}, o.a.createElement(ne.a, {
						model: ue,
						onIgnoreReports: () => {
							re(), De(ue.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Be
					}), ue.ignoreReports ? o.a.createElement(me.a, null) : o.a.createElement(pe.a, null)), o.a.createElement(X.g, {
						currentProfileName: s,
						isCommentsPage: O,
						isOverlay: !1,
						isProfilePostListing: j,
						layout: k,
						permalink: ue.permalink,
						postId: ue.postId,
						sendEvent: ke,
						showEditPost: Se,
						showEditFlair: ye,
						dropdownId: "".concat(ue.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(X.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !Ce && je(ue, n, y, !0))), ue.source && ue.source.url && ue.isSponsored && o.a.createElement(I.a, {
						className: ge.a.adLinkWrapper
					}, o.a.createElement(ce.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source
					}, ue.source.displayText), ue.callToAction && o.a.createElement(_.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source,
						isNotCardView: !0
					}, ue.callToAction)), Q && Te && Re && o.a.createElement("div", {
						className: ge.a.compactPostRow
					}, o.a.createElement(H.a, {
						language: P,
						onIgnoreReports: re,
						reportable: ue
					})), o.a.createElement(D.d, {
						postId: ue.id
					}))), y && o.a.createElement(Ee, {
						post: ue,
						scrollerItemRef: Oe,
						flairStyleTemplate: d
					}), e === _e && o.a.createElement(J.a, {
						flairs: ue.flair,
						subredditId: ue.belongsTo.id,
						modalId: _e,
						onFlairChanged: oe
					}));
					return o.a.createElement(o.a.Fragment, null, We)
				}
			}
			const Ee = e => o.a.createElement(K.a, {
					className: Object(c.a)(e.className, ge.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? o.a.createElement("div", {
					className: ge.a.crosspostMediaWrapper
				}, fe(e.post, e.scrollerItemRef)) : fe(e.post, e.scrollerItemRef)),
				fe = (e, t) => o.a.createElement(Q.a, {
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
				je = (e, t, s, n) => o.a.createElement(Oe, {
					crosspost: t,
					isCompact: n,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				we = (e, t, s) => o.a.createElement("div", {
					className: ge.a.responsiveMeta
				}, o.a.createElement(ie.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), o.a.createElement(ie.c, null), Object(ie.d)(e.numComments, s), o.a.createElement(ie.c, null), t && o.a.createElement("a", {
					href: t.url
				}, o.a.createElement(ie.a, null, t.displayText)), e.isSponsored && [o.a.createElement(te.a, {
					key: "label"
				}), o.a.createElement(ie.c, {
					key: "separator"
				})], !e.isSponsored && o.a.createElement(ie.a, null, " Posted by "), o.a.createElement($.b, {
					post: e
				}));
			t.a = ve(Object(l.b)(Object(oe.b)(Object(d.a)(ye))))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				c = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				d = s.n(c);
			const l = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, d.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, s) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, s) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, s) {
			"use strict";
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/app/strings/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/actions/governance/index.ts"),
				b = s("./src/reddit/actions/login.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/endpoints/governance/crypto.ts"),
				y = s("./src/reddit/helpers/governance/tokens.ts"),
				E = s("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(n || (n = {}));
			var f = s("./src/reddit/selectors/user.ts"),
				j = s("./src/higherOrderComponents/asTooltip.tsx"),
				w = s("./src/lib/copyToClipboard/index.ts"),
				P = s("./src/reddit/actions/governance/errorToast.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				I = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/contexts/ApiContext.tsx"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				T = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/helpers/governance/ethereum.ts"),
				L = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/models/Toast/index.ts"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				B = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				A = s.n(B);
			const F = Object(j.a)(_.a),
				D = "BlockchainWalletInfo--SettingsMenu";
			class W extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(w.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(v.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: s,
						publicAddress: n,
						token: o,
						tokenName: a
					} = this.props;
					if (!n) return null;
					const i = s === v.a.Ethereum || s === v.a.Rinkeby,
						c = s === v.a.Stellar;
					return r.a.createElement("div", {
						className: A.a.publicAddressSection
					}, r.a.createElement("div", {
						className: A.a.publicAddress,
						title: n
					}, function(e, t) {
						switch (t) {
							case v.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(n, s)), r.a.createElement("div", {
						className: A.a.yourWalletAddress
					}, r.a.createElement(E.c, null, "Your Wallet Address"), (i || c) && r.a.createElement("button", {
						className: A.a.settingsButton,
						title: Object(d.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: D
					}, r.a.createElement(L.a, {
						className: A.a.settingsIcon
					})), i && r.a.createElement(F, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(T.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), s && r.a.createElement(T.b, {
						displayText: Object(d.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), o && r.a.createElement(T.b, {
						displayText: Object(d.c)("Track ".concat(Object(d.b)("tokenName", a), " in MetaMask")),
						onClick: () => Object(N.i)(o)
					})), c && r.a.createElement(F, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(T.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(R.b)(D),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				V = Object(a.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(P.a)(e, t)
					},
					onOpenDropdown: () => e(Object(I.g)({
						tooltipId: D
					})),
					onWalletRemoved: () => {
						e(Object(h.j)({
							subredditId: t.subredditId
						})), e(Object(k.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(d.c)("Wallet removed successfully!")
						}))
					}
				}));
			var U = Object(S.b)(V(W)),
				K = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				G = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				z = s.n(G);

			function J(e) {
				return r.a.createElement("div", {
					className: z.a.risk
				}, r.a.createElement("div", {
					className: z.a.riskTitle
				}, r.a.createElement(K.a, {
					className: z.a.alertIcon
				}), e.title), r.a.createElement("div", {
					className: z.a.riskBody
				}, e.body))
			}
			var Y = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				Q = s.n(Y);
			class q extends r.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: s
					} = this.props, n = s && s.publicAddress;
					Object(x.b)(e) && t && !n && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: s,
						language: o,
						onOpenLoginModal: a,
						onOpenRegistrationModal: i,
						onOpenTransferModal: c,
						provider: d,
						subredditId: l,
						tokenDisplayConversion: h,
						tokenName: b,
						useCrypto: x,
						wallet: C
					} = this.props, f = C && C.inactive && function(e, t, s) {
						const o = e.actionScheduledAt - Date.now(),
							r = Math.max(1, Math.floor(o / p.w)),
							a = 1 !== r ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, a, {
								numDays: r
							});
						switch (e.reason) {
							case n.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: s
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: s
									})
								};
							case n.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: s
									})
								}
						}
					}(C.inactive, o, b), j = C && C.publicAddress, w = d === v.a.Ethereum || d === v.a.Rinkeby;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: Q.a.title
					}, b), r.a.createElement("div", {
						className: Q.a.cellContainer
					}, C && X(r.a.createElement("div", {
						className: Q.a.tokenCell
					}, r.a.createElement(g.a, {
						className: Q.a.token,
						subredditId: l
					}), Object(u.a)(Object(y.b)(C.amount, h))), Object(m.a)(o, "sidebar.gov.yourTokens", {
						tokenName: b
					})), t && X(Object(u.a)(Object(y.b)(t.totalAvailable, h)), Object(m.a)(o, "sidebar.gov.tokensIssued"))), f && r.a.createElement(J, {
						body: f.body,
						title: f.title
					}), r.a.createElement("div", {
						className: Q.a.explanation
					}, Object(m.a)(o, "sidebar.gov.tokenExplanation", {
						tokenName: b
					})), d && r.a.createElement(U, {
						publicAddress: j,
						subredditId: l
					}), d && !j && w && r.a.createElement(O.f, {
						className: Q.a.button,
						onClick: s ? i : a
					}, r.a.createElement(E.c, null, "register")), C && !x && r.a.createElement(O.i, {
						className: Q.a.button,
						onClick: c
					}, r.a.createElement(E.c, null, "send")))
				}
			}

			function X(e, t) {
				return r.a.createElement("div", {
					className: Q.a.cell
				}, r.a.createElement("div", {
					className: Q.a.cellTopLine
				}, e), r.a.createElement("div", {
					className: Q.a.cellBottomLine
				}, t))
			}
			const Z = Object(i.c)({
				isLoggedIn: f.J,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(a.b)(Z, e => ({
					onOpenLoginModal: () => e(Object(b.e)()),
					onOpenRegistrationModal: () => e(Object(h.i)()),
					onOpenTransferModal: () => e(Object(h.h)())
				}))(Object(C.t)()(q)),
				ee = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = s("./src/lib/classNames/index.ts"),
				se = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				ne = s("./src/reddit/actions/subreddit.ts"),
				oe = s("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				re = s.n(oe);
			const ae = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(C.t)()(Object(a.b)(ae, (e, t) => ({
					onFilterProposals: () => e(Object(ne.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(C.F)(e.pageLayer) && e.proposals.length ? r.a.createElement("div", {
						className: Object(te.a)(e.className, re.a.container)
					}, r.a.createElement("div", {
						className: re.a.title
					}, r.a.createElement(E.c, null, "Latest Polls")), e.proposals.map(e => r.a.createElement(ee.a, {
						className: re.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(se.a)(e.permalink)
					}, e.title)), r.a.createElement("a", {
						className: re.a.showAll,
						onClick: e.onFilterProposals
					}, r.a.createElement(E.c, null, "show all"))) : null
				}))),
				ce = s("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				de = s.n(ce);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(a.b)(le)((function(e) {
				return r.a.createElement(c.a, {
					className: e.className,
					title: Object(d.c)("Subreddit Points")
				}, e.distribution ? r.a.createElement(o.Fragment, null, r.a.createElement($, {
					className: de.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && r.a.createElement(ie, {
					className: de.a.section,
					subredditId: e.subreddit.id
				})) : r.a.createElement("div", {
					className: de.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/lib/addQueryParams/index.ts");
			const o = "metamaskInstalled";

			function r() {
				window.location.replace(Object(n.a)(window.location.href, {
					[o]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[o])
			}
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = c.a.wrapped(m.a, "Planet", b.a),
				x = c.a.div("SubredditIcon", b.a),
				C = c.a.div("PositionedImage", b.a),
				O = c.a.div("HeaderContent", b.a),
				v = c.a.div("HeaderContainer", b.a),
				y = c.a.span("HeaderText", b.a),
				E = c.a.wrapped(r.a, "HeaderUrl", b.a),
				f = c.a.span("Container", b.a),
				j = Object(i.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
						i = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
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
					const m = !!r && !!i && "left" === n,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						w = "".concat(4 + j, "px");
					return o.a.createElement(f, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(E, {
						className: e.className,
						to: e.url
					}, o.a.createElement(v, {
						className: Object(a.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(O, {
						className: Object(a.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					}) : o.a.createElement(g, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					})), o.a.createElement(y, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), o.a.createElement(C, {
						className: Object(a.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				a = s.n(r);
			const i = n.a.wrapped(o.a, "UserActionItem", a.a),
				c = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let a = o;
					return s && (a = "".concat(a, "--").concat(s)), r && (a = "".concat(a, "--").concat(r)), t && (a = "".concat(a, "--").concat(t)), n && (a = "".concat(a, "--").concat(n)), a
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: a,
					title: c
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(d, null, n) : o.a.createElement(d, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: i.a.title
				}, c), a && o.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				C = s.n(x);
			const O = o.a.createElement(u.a, {
					className: C.a.icon
				}),
				v = Object(a.c)({
					language: b.S,
					subreddit: h.B,
					subredditAboutInfo: h.y
				}),
				y = Object(r.b)(v);
			t.a = y(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return o.a.createElement(g.a, {
					className: C.a.container,
					color: d.a.quarantine,
					icon: O,
					subtitle: o.a.createElement("span", null, o.a.createElement(m.c, null, "This community is"), " ", o.a.createElement("a", {
						className: C.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.a.createElement(m.c, null, "quarantined")), ": ", r ? o.a.createElement(c.a, {
						className: C.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.a, {
						className: C.a.link,
						to: "/"
					}, o.a.createElement(m.c, null, "Click to return home."))),
					title: Object(p.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = s("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				},
				l = e => {
					const {
						children: t,
						className: s,
						to: n
					} = e, r = d(e, ["children", "className", "to"]), l = Object(i.b)(n);
					return o.a.createElement(a.a, c({
						className: s,
						to: l
					}, r), t)
				};

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, s = p(e, ["isOverlay"]), n = t ? l : r.a;
				return o.a.createElement(n, m({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/M2M/HomeUpsellBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2G5of74buLKKF1dS4x6IoA",
				border: "_2YO0TITW9xRlNDao69MsiU",
				line: "_4bOmNzC1_4BRrPDxBbnAN",
				layout: "_3UIdLVrftJ71FXSaPhJyVS",
				image: "_3M1pfamWS8Lw2VXrgbavha",
				snoo: "_2sb-teu23AhOMfNAKC3qoa",
				text: "_2roBErbdJWIJXvS6s4p-yP",
				homeTitle: "_1IEpq4IWE2e9TLSs2mnm5V",
				homeDescription: "_2uW5PN5bw5INtwsywZCpVb",
				seeMore: "_9HPppEn9FG4g69hhXI0-U"
			}
		},
		"./src/reddit/components/M2M/SidebarPostFeed/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "SyzlGcMiQQXEyjzU1jbX0",
				subredditLink: "_2e7tdHMEHAQEPE6vBnwScn",
				footer: "_1UmEMTtjhg9-uGRTGr_4Vt"
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
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
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, o.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return o.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, o.a.createElement(h, null))
				})(m, p.author, s), b && b.isQuarantined && o.a.createElement(i.a, null))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, o.a.createElement(a.a, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				B = s("./src/reddit/components/ShareMenu/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				V = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(U),
				G = s("./src/lib/lessComponent.tsx");
			const z = "-MiniCardModMenu",
				J = "-MiniCardOverflowMenu",
				Y = "-MiniCardShareMenu",
				Q = G.a.wrapped(T.a, "HorizontalVotes", K.a),
				q = G.a.button("ShareButton", K.a),
				X = Object(O.t)({
					currentProfileName: O.h,
					isCommentPermalink: O.v,
					isCommentsPage: O.w,
					isProfilePostListing: O.I,
					pageLayer: e => e
				}),
				Z = Object(a.c)({
					layout: O.M,
					subreddit: O.q
				});
			var $ = X(Object(r.b)(Z, {})(Object(A.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: h,
						layout: b,
						modModeEnabled: g,
						onCommentsClick: x,
						post: C,
						sendEvent: O,
						showEditFlair: v,
						showEditPost: y,
						subreddit: E
					} = e, f = e => O(Object(D.f)(C.id, e)), j = C.postId, w = Object(N.d)(z, C.id, m, u), P = !!n && Object(V.f)(n) === C.author;
					return o.a.createElement("div", {
						className: Object(i.a)(K.a.flatlistContainer, s)
					}, o.a.createElement(Q, {
						compact: !1,
						model: C,
						onVoteClick: r,
						scoreClassName: K.a.score
					}), o.a.createElement(_.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: C.id,
						modModeEnabled: g,
						numComments: C.numComments,
						type: F.g.Compact,
						onClick: x
					}), o.a.createElement(B.a, {
						className: K.a.shareMenu,
						dropdownId: Object(N.d)(Y, C.id, m, u),
						permalink: C.permalink,
						post: C,
						sendEventWithName: f,
						subreddit: E
					}, o.a.createElement(q, null, o.a.createElement(H.a, {
						className: K.a.shareIcon
					}), o.a.createElement("span", {
						className: K.a.shareText
					}, o.a.createElement(W.c, null, "share")))), c && o.a.createElement(L.a, {
						dropdownId: w,
						onClick: () => f("post_mod_action_menu")
					}, o.a.createElement(N.b, {
						className: K.a.modActionsIcon
					}), o.a.createElement(M.a, {
						canEditFlair: a && !!v,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: P,
						language: h,
						modModeEnabled: g,
						post: C,
						tooltipId: w
					})), o.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: C.permalink,
						postId: j,
						dropdownId: Object(N.d)(J, C.id, m, u),
						isFixed: u,
						sendEvent: O,
						showEditPost: !!y,
						showEditFlair: !!v,
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
				ne = s.n(se),
				oe = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(oe);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(O.t)(),
				ie = Object(r.b)(() => Object(a.c)({
					activeModalId: w.a,
					autoplayPref: S.b,
					crosspostRoot: I.c,
					crosspostSubredditOrProfile: I.d,
					currentUser: S.i,
					flairStyleTemplate: O.Q,
					hideNSFWPref: S.z,
					isActive: I.g,
					language: S.S,
					moderatorPermissions: P.i,
					modModeEnabled: O.O,
					post: I.I,
					showEditFlair: k.a,
					subredditOrProfile: I.T,
					userIsOp: S.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							}))
						},
						handleVote: t => {
							const n = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: o
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: o
						})
					}
				}));
			t.b = ae(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: r,
					crosspostSubredditOrProfile: a,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: O,
					language: j,
					moderatorPermissions: w,
					modModeEnabled: P,
					onClickPost: k,
					post: I,
					scrollerItemRef: S,
					shouldPause: _,
					showMetaLine: T = !0,
					showEditFlair: N,
					subredditOrProfile: L,
					userIsOp: M
				} = e, {
					media: R
				} = r || I, B = R && R.type, A = Object(x.b)(I.id), F = B === f.n.RTJSON, D = M && F, W = Object(y.a)(w), H = Object(v.a)(w), V = R && B !== f.n.RTJSON && B !== f.n.TEXT, U = !R && !!I.source && Object(d.a)(I.source.url), K = R && o.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: f.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || I,
					scrollerItemRef: S,
					shouldPause: _,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return o.a.createElement(g.a, {
					className: Object(i.a)(re.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(E.a)(e), n),
					style: Object.assign({}, Object(E.b)(e.flairStyleTemplate), Object(E.d)(e)),
					post: I,
					onClick: k,
					eventFactory: l
				}, o.a.createElement(b.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && K, o.a.createElement("div", {
					className: re.a.innerContainer
				}, U && o.a.createElement(te.a, {
					post: I,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), o.a.createElement(C.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: I,
					size: C.b.Large,
					titleColor: m && m.postTitleColor
				}), T && L && o.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: O,
					language: j,
					post: I,
					subredditOrProfile: L
				}), !V && o.a.createElement("div", {
					className: re.a.mediaWrapper
				}, K), o.a.createElement("div", {
					className: re.a.flexSpacer
				}), o.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: W,
					language: j,
					modModeEnabled: P,
					post: I,
					showEditFlair: N,
					showEditPost: D
				}))), e.activeModalId === A && o.a.createElement(x.a, {
					flairs: I.flair,
					subredditId: I.belongsTo.id,
					modalId: A,
					onFlairChanged: e.onFlairChanged
				}), o.a.createElement(u.d, {
					postId: I.id
				}))
			})))
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				noProposal: "_13LHQz0igp-olmn_mDhJ7B",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				ProposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				proposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				isEditing: "_1_-TcT_H2BAsf4uFtfvDf9",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				p = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				h = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/tooltip.ts"),
				v = s("./node_modules/lodash/find.js"),
				y = s.n(v),
				E = s("./node_modules/react-motion/lib/react-motion.js");
			const f = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				j = "expando_content",
				w = {},
				P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = y()(e, {
							key: j
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: j,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: j,
						style: {
							opacity: Object(E.spring)(1, f)
						}
					}] : [{
						key: j,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: j,
						style: {
							opacity: Object(E.spring)(0, f)
						}
					}]
				};
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), w), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return o.a.createElement(E.TransitionMotion, {
						styles: e => P(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => o.a.createElement("div", {
						className: s
					}, e.map(e => o.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				T = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/experiments/categories.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/postCreations.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				F = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				D = s("./src/reddit/components/ExpandoButton/index.tsx"),
				W = s("./src/reddit/components/FlairWrapper/index.tsx"),
				H = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				U = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/LargePost/index.tsx"),
				z = s("./src/reddit/components/MediumPost/index.tsx"),
				J = s("./src/reddit/components/ModModeReports/index.tsx"),
				Y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Q = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/higherOrderComponents/makeAsync.tsx"),
				X = s("./src/lib/loadWithRetries/index.ts"),
				Z = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const $ = Object(q.a)({
				ErrorComponent: () => o.a.createElement(Z.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(X.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => o.a.createElement(Z.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ee = e => o.a.createElement($, e),
				te = s("./src/reddit/components/PostMedia/index.tsx"),
				se = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/PostTitle/index.tsx"),
				oe = s("./src/reddit/components/PostTopLine/index.tsx"),
				re = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ae = s("./src/reddit/components/SourceLink/index.tsx"),
				ie = s("./src/reddit/constants/componentTestIds.ts"),
				ce = s("./src/reddit/constants/postLayout.ts"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				pe = s("./src/reddit/selectors/postFlair.ts"),
				ue = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				he = s("./src/reddit/constants/colors.ts"),
				be = s("./src/config.ts"),
				ge = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				xe = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				Ce = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Oe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				ve = s.n(Oe);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => ye._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy}.", [ye._param("=User Agreement", o.a.createElement("a", {
				className: ve.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, ye._("User Agreement", null, {
				hk: "2cojEr"
			}))), ye._param("=Content Policy", o.a.createElement("a", {
				className: ve.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, ye._("Content Policy", null, {
				hk: "1owvRc"
			})))], {
				hk: "3LJ7At"
			}), fe = () => ye._("This content was removed for a violation of Reddit's {=Content Policy}.", [ye._param("=Content Policy", o.a.createElement("a", {
				className: ve.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, ye._("Content Policy", null, {
				hk: "1fd4W1"
			})))], {
				hk: "3KOOQU"
			});
			var je = e => {
					const {
						hasPerms: t,
						removedBy: s,
						removedByCategory: n,
						subredditName: r
					} = e, a = t ? ((e, t, s) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return ye._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case S.g.Author:
								return ye._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case S.g.AuthorDeleted:
								return ye._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case S.g.AutomodFiltered:
								return ye._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case S.g.CommunityOps:
								return ye._("This post was removed by Reddit admin, u/{username}.", [ye._param("username", t)], {
									hk: "34nHWu"
								});
							case S.g.ContentTakedown:
								return ye._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case S.g.CopyrightTakedown:
								return ye._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case S.g.Moderator:
								return ye._("This post was removed by r/{subredditName} moderator, u/{username}.", [ye._param("subredditName", s), ye._param("username", t)], {
									hk: "270bcn"
								});
							case S.g.Reddit:
								return ye._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return ye._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(n, s, r) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return ye._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case S.g.Author:
								return ye._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case S.g.AuthorDeleted:
								return ye._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case S.g.AutomodFiltered:
								return ye._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case S.g.CommunityOps:
								return ye._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case S.g.ContentTakedown:
								return ye._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case S.g.CopyrightTakedown:
								return ye._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case S.g.Moderator:
								return ye._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [ye._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case S.g.Reddit:
								return ye._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return ye._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(n, r), i = t ? (e => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(Ee, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return ye._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case S.g.AutomodFiltered:
								return ye._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case S.g.CommunityOps:
								return ye._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask}.", [ye._param("=just ask", o.a.createElement("a", {
									className: ve.a.link,
									href: "".concat(be.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, ye._("just ask", null, {
									hk: "2tChW8"
								})))], {
									hk: "1gNycd"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(fe, null);
							case S.g.CopyrightTakedown:
								return ye._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case S.g.Moderator:
								return ye._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case S.g.Reddit:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(n) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(Ee, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return ye._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case S.g.AutomodFiltered:
								return ye._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [ye._param("=[subreddit name]", o.a.createElement("a", {
									className: ve.a.link,
									href: "".concat(be.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, ye._("{subreddit name}", [ye._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case S.g.CommunityOps:
								return ye._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(fe, null);
							case S.g.CopyrightTakedown:
								return ye._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case S.g.Moderator:
								return ye._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case S.g.Reddit:
							default:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(n, r), c = t ? he.a.warning : he.a.dayModeActionIcon, d = (e => {
						let t;
						switch (e) {
							case S.g.AntiEvilOps:
							case S.g.AutomodFiltered:
							case S.g.CommunityOps:
							case S.g.ContentTakedown:
							case S.g.CopyrightTakedown:
							case S.g.Reddit:
								t = ge.a;
								break;
							case S.g.AuthorDeleted:
							case S.g.Author:
								t = Ce.b;
								break;
							case S.g.Moderator:
								t = xe;
								break;
							default:
								t = ge.a
						}
						return o.a.createElement(t, {
							className: ve.a.icon
						})
					})(n);
					return o.a.createElement(ue.a, {
						className: ve.a.BannerBase,
						color: c,
						icon: d,
						subtitle: i,
						title: a
					})
				},
				we = e => {
					const {
						isAdminOrMod: t,
						post: s,
						subredditOrProfile: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, n && s.removedByCategory && o.a.createElement(je, {
						hasPerms: t,
						removedBy: s.removedBy,
						removedByCategory: s.removedByCategory,
						subredditName: n.name
					}))
				},
				Pe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				ke = s("./src/lib/prettyPrintNumber/index.ts"),
				Ie = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Se = s.n(Ie);
			var _e = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(ke.b)(e.viewCount);
						return {
							upvotePercentString: Pe.fbt._("{percent upvoted}% Upvoted", [Pe.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Pe.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Pe.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), a = s && !!t.viewCount;
					return o.a.createElement("div", {
						className: Se.a.viewCounts
					}, a && o.a.createElement("span", null, r), a && !!t.upvoteRatio && o.a.createElement("span", {
						className: Se.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, n))
				},
				Te = s("./src/reddit/components/PostContent/index.m.less"),
				Ne = s.n(Te);
			const Le = d.a.wrapped(ne.c, "PostTitle", Ne.a),
				Me = d.a.wrapped(D.a, "ExpandoButton", Ne.a),
				Re = d.a.wrapped(k, "ClassicExpandoMotion", Ne.a),
				Be = d.a.wrapped(H.c, "FullWidthFlatlist", Ne.a),
				Ae = d.a.wrapped(A.a, "ClassicThumbnail", Ne.a),
				Fe = Object(de.t)({
					isCommentsPage: de.w,
					pageLayer: e => e
				}),
				De = Object(r.b)(() => Object(i.c)({
					activeModalId: T.a,
					flairStyleTemplate: de.Q,
					currentUser: B.i,
					crosspost: R.c,
					hideNSFWPref: B.z,
					isAdminOrMod: (e, t) => {
						const s = Object(R.T)(e, {
							postId: t.postId
						});
						return !!s && Object(L.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: R.h,
					isExpanded: R.j,
					post: R.I,
					language: B.S,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: L.i,
					publicAwardersEnabled: e => !!Object(me.a)(e),
					modModeEnabled: de.O,
					isInCategoriesExperiment: N.a,
					showEditFlair: pe.a,
					subredditOrProfile: R.T,
					isEditing: M.C,
					userIsOp: B.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(C.L)(s)),
						onOpenReportsDropdown: t => e(Object(O.g)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === _.a.upvoted ? Object(C.N)(s) : Object(C.o)(s);
							e(n)
						}
					}
				}),
				We = d.a.wrapped(a.a, "ThumbLink", Ne.a),
				He = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? o.a.createElement(Ae, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : o.a.createElement(We, {
						to: Object(b.b)(t.permalink)
					}, o.a.createElement(Ae, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ve = (e, t, s) => o.a.createElement(Re, {
					content: o.a.createElement(te.a, {
						className: Ne.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: e,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: s
					}),
					shouldExpand: !!t
				});
			t.a = Fe(De(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					flairStyleTemplate: r,
					hideNSFWPref: a,
					isAdminOrMod: i,
					isCommentsPage: d,
					isCurrentUserProfilePost: b,
					isEditing: C,
					isExpanded: O,
					isOverlay: v,
					language: y,
					metaId: E,
					moderatorPermissions: f,
					modModeEnabled: j,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					onVoteClick: k,
					post: _,
					publicAwardersEnabled: T,
					scrollerItemRef: N,
					sendEvent: L,
					showEditFlair: M,
					subredditOrProfile: R,
					userIsOp: B
				} = e, A = Object(h.a)(f), D = Object(u.a)(f), q = A || D, X = ((e, t, s) => {
					const [n, o] = e ? [Object(p.f)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, q, _), Z = !!_.media && (_.media.type === I.n.RTJSON || _.media.type === I.n.TEXT), $ = B && Z, de = Object(Y.c)(_);
				let me;
				const pe = !(j && h.a),
					ue = Object(se.h)({
						hide: pe,
						editPost: pe,
						save: pe,
						report: pe
					}),
					he = _.removedByCategory === S.g.AuthorDeleted,
					be = n && (n.displayText === _.author || n.username === _.author),
					ge = !he && (be || i || !(_.removedByCategory && _.media && (Object(I.D)(_.media) || Object(I.C)(_.media)))),
					xe = _.removedByCategory === S.g.Reddit && Object(l.e)(_.created) > 24,
					Ce = _.removedByCategory && _.removedByCategory !== S.g.Reddit || xe,
					Oe = o.a.createElement(Le, {
						post: _,
						size: ne.b.ExtraLarge,
						showCategoryTag: v,
						isOverlay: v,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					ve = o.a.createElement(_e, {
						post: _,
						showViewCount: X
					}),
					ye = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? ce.g.Classic : t ? ce.g.Large : n.media ? ce.g.Large : ce.g.Medium
					})(e);
				if (ye === ce.g.Classic) me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, Object(G.b)(_, k), o.a.createElement("div", {
					className: Ne.a.mainBody
				}, o.a.createElement("div", {
					className: Ne.a.content
				}, o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: d,
					isCurrentUserProfilePost: b,
					isOverlay: !!v,
					language: y,
					post: _,
					publicAwardersEnabled: T,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!v && !_.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Oe, o.a.createElement(W.a, {
					className: d ? Ne.a.leftPadding : null,
					post: _,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: L
				}), j && A && de && o.a.createElement(J.a, {
					language: y,
					onIgnoreReports: w,
					reportable: _
				}), o.a.createElement(K.d, {
					postId: _.id
				}), o.a.createElement("div", {
					className: Ne.a.FlatlistContainer
				}, o.a.createElement(Me, {
					crosspost: s || void 0,
					isExpanded: !!O,
					post: _,
					useMediaIcons: !1
				}), Ve(_, O, N), o.a.createElement(Be, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: A,
					isOverlay: v,
					language: y,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					modModeEnabled: j,
					post: _,
					showUpvotePercent: !0,
					showViewCount: X,
					useFlatlistBreakpoints: ue
				}))), Object(m.a)(_) && o.a.createElement(He, {
					post: _,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (ye === ce.g.Medium) {
					const t = Object(m.a)(_);
					me = o.a.createElement("div", {
						"data-test-id": ie.e
					}, Object(G.b)(_, k), o.a.createElement("div", {
						className: Ne.a.mainBody
					}, o.a.createElement("div", {
						className: Ne.a.content
					}, o.a.createElement(oe.a, {
						hideNSFWPref: a,
						inSubredditOrProfile: !0,
						isCommentsPage: d,
						isCurrentUserProfilePost: b,
						isOverlay: !!v,
						language: y,
						post: _,
						publicAwardersEnabled: T,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!v && !_.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: R
					}), Oe, _.source && o.a.createElement(ae.a, {
						post: _,
						isCommentsPage: d
					}), o.a.createElement(W.a, {
						className: d ? Ne.a.leftPadding : null,
						post: _,
						showCategoryTag: e.isInCategoriesExperiment && d,
						sendEvent: L
					}), R && Ce && o.a.createElement(we, {
						isAdminOrMod: i,
						post: _,
						subredditOrProfile: R
					}), j && A && de && o.a.createElement(J.a, {
						language: y,
						onIgnoreReports: w,
						reportable: _
					})), t && o.a.createElement(z.a, {
						post: _,
						forceShowNSFW: !0,
						hasModPostPerms: q,
						isCommentsPage: d,
						isOverlay: !0,
						modModeEnabled: j,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: _.id
					}), o.a.createElement("div", {
						className: Ne.a.controlsContainer
					}, o.a.createElement(H.c, {
						currentUser: n,
						hasModFlairPerms: D,
						hasModPostPerms: A,
						isOverlay: v,
						language: y,
						modModeEnabled: j,
						onIgnoreReports: w,
						onOpenReportsDropdown: P,
						post: _,
						showEditPost: $,
						showEditFlair: M,
						tooltipType: v ? re.c.Lightbox : void 0,
						useFlatlistBreakpoints: ue
					}), ve))
				} else ye === ce.g.Large && (me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, Object(G.b)(_, k), o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: d,
					isCurrentUserProfilePost: b,
					isOverlay: !!v,
					language: y,
					post: _,
					publicAwardersEnabled: T,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!v && !_.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Oe, ((e, t, s, n) => e.source && !t && (s || n))(_, s, v, d) && o.a.createElement(ae.a, {
					post: _,
					isCommentsPage: d
				}), o.a.createElement(W.a, {
					className: d ? Ne.a.leftPadding : null,
					post: _,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: L
				}), R && Ce && o.a.createElement(we, {
					isAdminOrMod: i,
					post: _,
					subredditOrProfile: R
				}), C ? o.a.createElement(ee, {
					post: _
				}) : ge && o.a.createElement(te.a, {
					className: Object(c.a)(Ne.a.LargePostMedia, {
						[Ne.a.isCommentsPage]: d
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: v,
					isOverlay: v,
					post: _,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !v,
					showCentered: !0,
					scrollerItemRef: N
				}), E && R ? o.a.createElement("div", {
					className: Object(c.a)(Ne.a.ProposalContainer, {
						[Ne.a.isEditing]: C
					})
				}, o.a.createElement(V.a, {
					pollId: E,
					subredditId: R.id
				})) : null, _.isMeta && !E && o.a.createElement(U.a, {
					className: Ne.a.noProposal
				}), j && A && de && o.a.createElement(J.a, {
					language: y,
					onIgnoreReports: w,
					reportable: _
				}), o.a.createElement(K.d, {
					postId: _.id
				}), o.a.createElement("div", {
					className: Ne.a.controlsContainer
				}, o.a.createElement(H.c, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: A,
					isOverlay: v,
					language: y,
					modModeEnabled: j,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					post: _,
					showEditPost: $,
					showEditFlair: M,
					tooltipType: v ? re.c.Lightbox : void 0,
					useFlatlistBreakpoints: ue
				}), ve)));
				return o.a.createElement(Q.a, {
					className: Object(c.a)(t, Ne.a.postContainer, {
						[Ne.a.hasEventMeta]: Object(le.a)(_)
					}),
					isOverlay: v,
					post: _,
					eventFactory: v ? g.b : x.f
				}, o.a.createElement(F.a, {
					post: _,
					language: y
				}), me)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/times.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				x = s("./src/reddit/components/PostLeftRail/index.tsx"),
				C = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(f),
				w = s("./src/reddit/components/LargePost/placeholder.m.less"),
				P = s.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const S = Object(v.t)(),
				_ = Object(l.c)({
					isFakeSubreddit: v.y
				}),
				T = Object(d.b)(_),
				N = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return c.a.createElement("div", {
						className: P.a.emptyVerticalVotes
					}, c.a.createElement(O.d, k({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: P.a.emptyScore,
						key: "s"
					}), c.a.createElement(O.c, k({
						key: "d"
					}, t)))
				},
				L = e => {
					var {
						isLoading: t
					} = e, s = I(e, ["isLoading"]);
					return c.a.createElement(C.b, k({
						className: Object(y.a)({
							isLoading: t
						})
					}, s))
				};
			var M = S(T(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: n
				} = e, o = I(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(x.b, {
					key: "a"
				}, c.a.createElement(N, o)), c.a.createElement("div", {
					className: P.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: P.a.topLine,
					key: "ba"
				}, o.isFakeSubreddit && c.a.createElement(L, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(P.a.topMetaOne, Object(y.b)(o))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(P.a.topMetaTwo, Object(y.b)(o))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(P.a.title, Object(y.b)(o))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(P.a.media, Object(y.a)(o))
				}), c.a.createElement("div", {
					className: P.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: P.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(P.a.flatlistItemOne, Object(y.b)(o))
				}), c.a.createElement("div", {
					className: Object(g.a)(P.a.flatListItemTwo, Object(y.b)(o))
				}))))
			}));
			const R = {
				[u.g.Large]: [M, 2],
				[u.g.Classic]: [h.b, 10],
				[u.g.Compact]: [b.a, 30]
			};

			function B(e) {
				return R[e]
			}
			const A = .1,
				F = Object(l.c)({
					loadingPostComponentForLayout: () => B
				}),
				D = Object(d.b)(F);
			class W extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= A;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: i
					} = this.state, [d, l] = r(n), m = t || l, p = o()(c.a.createElement(d, {
						isLoading: s && i
					})), u = a()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(u))
				}
			}
			t.a = D(W)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: o
				} = e;
				let a = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return o && (a = Object(c.a)({
					apiError: o,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, a), s && r.a.createElement(i.f, {
					onClick: s
				}, n.fbt._("Try again", null, {
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
				return z
			})), s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				C = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				v = s("./src/reddit/components/Scroller/Simple.tsx"),
				y = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				k = s("./src/reddit/helpers/pixels.ts"),
				I = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				B = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const A = 500,
				F = new T.a(A),
				D = new T.a(A),
				W = new T.a(A),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = b.a.div("SeeMore", R.a),
				U = b.a.wrapped(I.a, "ArrowRight", R.a),
				K = (e, t, s, n, o, r, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(o) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = F.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, o), a.trackOnPostEnteredViewport(e, t, i)
					}, F.set(d, l)), l
				},
				G = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = D.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, D.set(o, r)), r
				},
				z = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(k.a)(s.events, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(P.a)(e)
						})
					}, W.set(s, n)), n
				},
				J = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case j.g.Medium:
							return 188;
						case j.g.Classic:
							return 96;
						case j.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				Y = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class Q extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(A), this.updateScrollerRef = e => {
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
							subredditsById: n
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const a = r.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(_.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = N.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
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
						n = B(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = B(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: g
					} = this.props, C = 0 === t, O = s ? "last-index" : "", v = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(m, "-").concat(l, "-").concat(h);
					let y;
					if (void 0 === (y = this.scrollChildCache.get(v))) {
						const {
							inSubredditOrProfile: O,
							postsById: E
						} = this.props, f = E[e], w = f.crosspostRootId && E[f.crosspostRootId] ? E[f.crosspostRootId] : f;
						f.crosspostRootId && !E[f.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(f.id, " is crosspost of ").concat(f.crosspostRootId, ", but ") + "".concat(f.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!f.crosspostRootId,
								isFirstPost: C,
								layout: n,
								post: w
							}),
							k = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							I = K(e, n, s, l, m, h, this.props, t),
							_ = G(e, n, this.props, t),
							T = z(e, this.props),
							N = w.media && w.media.type === S.n.EMBED ? w.media.provider : null;
						y = {
							estHeight: J(f, n),
							id: e,
							isFocusable: !(!w.media || n !== j.g.Large) && (S.d.has(w.media.type) && (!N || !S.q.has(N)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: I,
							trackOnExitedViewport: _,
							render: t => {
								let {
									className: n,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: v,
									shouldLoadInitially: y
								} = t;
								return d.a.createElement(P, {
									className: n,
									currentProfileName: o,
									key: k,
									availableWidth: h,
									eventFactory: b,
									first: C,
									forceLoadMedia: y,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: T,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: v
								})
							}
						}, this.scrollChildCache.set(v, y)
					}
					return y
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
						layout: n,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const a = r;
					return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(C.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
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
						injectChildren: o,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const n = t === h.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					o && (g = Y(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						C = i ? Object(n.e)(i) : null,
						O = C || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(v.b, {
						innerRef: this.updateScrollerRef,
						className: O ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
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
						trackingName: x,
						viewportTopPadding: f.g
					}, g), C && d.a.createElement(V, {
						className: R.a.seeMoreButton
					}, d.a.createElement(w.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(C, {
							type: u.Jb.Posts
						})
					}, d.a.createElement(y.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
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
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				d = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = n.a.wrapped(a.a, "Icon", p.a),
				h = n.a.wrapped(i.a, "Icon", p.a),
				b = n.a.wrapped(c.a, "Icon", p.a),
				g = n.a.wrapped(d.a, "Icon", p.a),
				x = n.a.wrapped(l.a, "Icon", p.a),
				C = n.a.wrapped(o.b, "CheckboxMenuItem", p.a),
				O = n.a.wrapped(r.b, "DropdownRow", p.a),
				v = n.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				p = s.n(m);
			const u = Object(a.c)({
				isInGoldProfileGildedExperiment: d.a
			});
			class h extends o.a.PureComponent {
				render() {
					const {
						isInGoldProfileGildedExperiment: e,
						recentAwardings: t,
						username: s
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: r
					} = t, a = n.icon32 ? n.icon32.url : n.icon.url, d = n.description ? n.description : n.name;
					return o.a.createElement("a", {
						className: p.a.AwardedLastMonth,
						href: e ? "/user/".concat(s, "/gilded") : "".concat(i.a.oldRedditUrl, "/user/").concat(s, "/gilded")
					}, o.a.createElement("div", {
						className: p.a.iconColumn
					}, o.a.createElement("img", {
						alt: d,
						className: p.a.icon,
						src: a
					}), r > 1 && o.a.createElement("span", {
						className: p.a.count
					}, "+".concat(Object(c.b)(r - 1)))), o.a.createElement("div", {
						className: p.a.textColumn
					}, r > 1 ? o.a.createElement(l.c, null, "Received the ", o.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award and more in the past 30 days") : o.a.createElement(l.c, null, "Received the ", o.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award in the past 30 days")))
				}
			}
			t.a = Object(r.b)(u)(h)
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, s) {
			e.exports = {
				BannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				bannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				BannerImage: "_39u8lkB0jifV2dCyGxhTst",
				bannerImage: "_39u8lkB0jifV2dCyGxhTst",
				SnooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				snooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				UserTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				userTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				PremiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				premiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				userName: "_2hgZVu2K-pvoghsBGGbJ7P",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ",
				CloseIcon: "t8u6KWjSIjLFBXsDU3u5M",
				closeIcon: "t8u6KWjSIjLFBXsDU3u5M",
				LoadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				h = s("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				b = s("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				g = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/reselect/es/index.js"),
				C = s("./src/lib/humanizeDate/index.ts"),
				O = s("./src/lib/prettyPrintNumber/index.ts"),
				v = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				E = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				f = s("./src/reddit/icons/svgs/Karma/index.tsx"),
				j = s("./src/reddit/icons/svgs/User/index.tsx"),
				w = s("./src/reddit/selectors/profile.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = s("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				_ = s.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(x.c)({
					language: P.S
				}),
				L = a.a.div("Container", _.a),
				M = a.a.div("Body", _.a),
				R = a.a.h5("Title", _.a),
				B = a.a.span("Label", _.a);
			class A extends r.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: s,
						tooltip: n,
						tooltipId: o
					} = this.props, a = o && n ? {
						id: o,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(L, null, r.a.createElement(R, null, s), r.a.createElement(M, null, e, r.a.createElement(B, T({
						key: "label"
					}, a), t)), o && n && r.a.createElement(I.c, {
						caretOnTop: !0,
						tooltipId: o,
						text: n
					}))
				}
			}
			var F = Object(g.b)(N, e => ({
					toggleTooltip: t => e(Object(k.g)({
						tooltipId: t
					}))
				}))(Object(y.b)(A)),
				D = s("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				W = s.n(D);
			const H = Object(x.a)(w.j, (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(P.kb)(e, s)
				}, P.S, (e, t, s) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: s,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				V = a.a.div("Container", W.a);

			function U(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var K = Object(g.b)(H)(Object(y.b)(e => {
					const {
						profileCreated: t,
						isOverlay: s,
						language: n,
						commentKarma: o,
						postKarma: a,
						subscribers: i
					} = e, c = U(s, "karma"), d = U(s, "cakeday"), m = Object(l.c)("".concat(Object(l.b)("postKarmaNumber", Object(O.b)(a, !0)), " Post Karma")), p = Object(l.c)("".concat(Object(l.b)("commentKarmaNumber", Object(O.b)(o, !0)), " Comment Karma"));
					return r.a.createElement(V, null, r.a.createElement(F, {
						icon: r.a.createElement(f.a, {
							className: W.a.icon,
							key: "karma"
						}),
						label: Object(O.b)(o + a, !0),
						title: Object(l.c)("Karma"),
						tooltipId: c,
						tooltip: "".concat(m, "\n").concat(p)
					}), r.a.createElement(F, {
						icon: r.a.createElement(E.a, {
							className: W.a.icon,
							key: "cakeDay"
						}),
						label: Object(C.a)(t, !0),
						title: Object(l.c)("Cake day"),
						tooltipId: d,
						tooltip: Object(v.d)(n, t)
					}), i > 0 && r.a.createElement(F, {
						icon: r.a.createElement(j.a, {
							className: W.a.icon,
							key: "followers"
						}),
						title: Object(l.c)("Followers"),
						label: Object(O.b)(i, !0)
					}))
				})),
				G = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				z = s.n(G),
				J = s("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				Y = s.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return de
			}));
			var q = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const X = a.a.div("BannerWrapper", Y.a),
				Z = a.a.div("BannerImage", Y.a),
				$ = a.a.div("SnooIcon", Y.a),
				ee = a.a.wrapped(i.b, "Widget", Y.a),
				te = a.a.h4("UserTitle", Y.a),
				se = a.a.wrapped(u.a, "PremiumIcon", Y.a),
				ne = a.a.div("Description", Y.a),
				oe = e => {
					var {
						url: t
					} = e, s = q(e, ["url"]);
					return t ? r.a.createElement(c.a, Q({}, s, {
						className: Y.a.userName,
						to: t
					})) : r.a.createElement("span", Q({}, s, {
						className: Y.a.userName
					}))
				},
				re = a.a.wrapped(h.a, "Actions", Y.a),
				ae = a.a.wrapped(p.a, "CloseIcon", Y.a),
				ie = a.a.wrapped(d.a, "LoadingIconStyled", Y.a),
				ce = () => r.a.createElement(ie, {
					sizePx: 20
				});
			class de extends r.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? r.a.createElement(b.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: s,
						footer: o,
						isEmployee: a,
						isGold: i,
						isOverlay: c,
						profileIcon: d,
						publicDescription: p,
						title: u,
						url: h,
						username: b,
						isDefaultIcon: g,
						isDeletingIcon: x,
						isDeletingBanner: C,
						onDeleteIcon: O,
						onDeleteBanner: v,
						editMode: y
					} = this.props;
					return r.a.createElement(ee, {
						className: s
					}, r.a.createElement(X, null, t && r.a.createElement(Z, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), y && t && (C ? r.a.createElement(ce, null) : r.a.createElement(ae, {
						onClick: v
					}))), r.a.createElement("div", {
						className: z.a.SnooIconWrapper
					}, r.a.createElement($, {
						style: {
							backgroundImage: "url(".concat(d, ")")
						}
					}), y && !g && (x ? r.a.createElement(ce, null) : r.a.createElement(ae, {
						onClick: O
					}))), u && r.a.createElement(te, null, u), r.a.createElement(oe, {
						url: h
					}, "u/".concat(b)), a && r.a.createElement(m.a, {
						className: z.a.adminIcon,
						title: Object(l.c)("Reddit admin")
					}), i && r.a.createElement("a", {
						title: Object(l.c)("".concat(Object(l.b)("username", b), " has Reddit Premium")),
						href: "".concat(n.a.redditUrl, "/premium")
					}, r.a.createElement(se, null)), r.a.createElement(ne, null, p), r.a.createElement(K, {
						profileName: b,
						isOverlay: c
					}), this.renderAwardedLastMonth(), r.a.createElement(re, null, e), o)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, s) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				redditStyle: "_38vTQxawhhbbhD8rZc36N5",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, s) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/subscription/index.ts"),
				d = s("./src/reddit/components/ChatButton/index.tsx"),
				l = s("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/platform.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				E = s("./node_modules/lodash/compact.js"),
				f = s.n(E),
				j = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/higherOrderComponents/makeAsync.tsx"),
				I = s("./src/lib/loadWithRetries/index.ts");
			var S = Object(k.a)({
					getComponent: () => Object(I.a)(() => s.e("GivePremiumModal").then(s.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				T = s("./src/reddit/controls/OutboundLink/index.tsx"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				L = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/multireddit/index.ts"),
				B = s("./src/reddit/constants/modals.ts"),
				A = s("./src/reddit/models/Gold/Premium/index.ts"),
				F = s("./src/reddit/selectors/premium.ts"),
				D = s("./src/reddit/components/ProfileIdCard/footer.m.less"),
				W = s.n(D);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var V = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const U = Object(i.c)({
					areModeratedSubredditsPending: x.a,
					coinsToSpend: v.d,
					givePremiumModalIsOpen: F.c,
					hasFetchedModerators: x.k,
					isEmployee: v.G,
					isLoggedIn: v.J,
					language: v.S,
					profile: x.j
				}),
				K = e => {
					var {
						isLoading: t
					} = e, s = V(e, ["isLoading"]);
					return r.a.createElement("div", H({}, s, {
						className: Object(j.a)(W.a.Shimmer, Object(L.b)({
							isLoading: t
						}))
					}))
				};
			class G extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(N.d)(N.a.GiftPremiumFlow), e();
						const {
							clickGivePremiumEvent: n
						} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: s,
							hasSubreddit: o,
							isEmployee: r,
							isLoggedIn: a,
							isModerator: i,
							isOwnProfile: c,
							profileName: d,
							profile: l
						} = this.props, m = a && Object(A.b)(s, r).length && !c || r, p = f()([(c || i) && o ? {
							text: y.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(d, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, c ? void 0 : {
							text: y.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(n.a.redditUrl, "/message/compose/?to=").concat(d)
						}, !c && t ? {
							text: y.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(n.a.redditUrl, "/user/").concat(d, "/snoo")
						} : void 0, c ? void 0 : {
							text: y.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, a && l && !l.isQuarantined ? {
							onClick: e,
							text: y.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && p.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: y.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), p
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, s = this.makeMenuItems();
					if (0 === s.length) return null;
					const n = (t ? s : []).map(e => e.url ? e.isInternalLink ? r.a.createElement(_.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: W.a.menuItem
					}, e.text) : r.a.createElement(T.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: W.a.menuItem
					}, e.text) : r.a.createElement(u.n, {
						className: W.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(r.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-1"
					}, r.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(r.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-2"
					}, r.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const o = t ? y.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : y.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return r.a.createElement("div", {
						className: W.a.container
					}, n, r.a.createElement("div", {
						className: W.a.expandContainer
					}, r.a.createElement(u.n, {
						className: W.a.expandButton,
						onClick: this.moreOptionsToggled
					}, o)), e && r.a.createElement(S, null))
				}
			}
			var z = Object(a.b)(U, (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(R.g)(!0, !0)), e(Object(M.h)(B.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(w.e)(s)),
						onModeratorsRequested: () => e(Object(P.b)(s))
					}
				})(G),
				J = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				Y = s.n(J);
			const Q = Object(i.c)({
					account: v.i,
					activeTooltipId: O.a,
					currentUserHasSubreddit: v.g,
					hideNSFWPref: v.z,
					isModerator: x.f,
					profile: x.j,
					profileAboutInfo: x.h,
					structuredStyle: (e, t) => Object(C.n)(e, Object(x.m)(e, t.profileName)),
					userHasSubreddit: (e, t) => {
						let {
							profileName: s
						} = t;
						return Object(v.ib)(e, {
							userName: s
						})
					},
					userInChat: h.d.userInChat,
					user: (e, t) => {
						let {
							profileName: s
						} = t;
						return Object(v.hb)(e, {
							userName: s
						})
					},
					page: g.b
				}),
				q = e => {
					let {
						username: t,
						currentUserHasSubreddit: s
					} = e;
					return r.a.createElement("div", {
						className: Y.a.actionItem
					}, r.a.createElement(u.h, {
						className: Y.a.button,
						to: s ? "/user/".concat(t, "/submit") : "/submit"
					}, r.a.createElement(b.c, null, "New post")))
				},
				X = e => {
					let {
						profileName: t,
						onToggleFollow: s,
						userIsSubscriber: n
					} = e;
					return r.a.createElement("div", {
						className: Y.a.actionItem
					}, n ? r.a.createElement(u.i, {
						className: Y.a.button,
						onClick: () => s(t, n)
					}, r.a.createElement(b.c, null, "Unfollow")) : r.a.createElement(u.f, {
						className: Y.a.button,
						onClick: () => s(t, n)
					}, r.a.createElement(b.c, null, "Follow")))
				},
				Z = e => {
					let {
						userId: t
					} = e;
					return r.a.createElement("div", {
						className: Y.a.actionItem
					}, r.a.createElement(d.a, {
						contextId: t,
						className: Y.a.button,
						userId: t
					}, r.a.createElement(b.c, null, "Chat")))
				};
			t.a = Object(a.b)(Q, e => ({
				onToggleFollow: (t, s) => e(Object(c.d)([{
					name: t,
					type: p.a.PROFILE
				}], !s))
			}))(Object(m.b)(e => {
				const {
					account: t,
					currentUserHasSubreddit: s,
					hideNSFWPref: o,
					isModerator: a,
					isOverlay: i,
					isSubmissionPage: c,
					onToggleFollow: d,
					profile: m,
					profileAboutInfo: p,
					sendEvent: u,
					structuredStyle: h,
					userHasSubreddit: b,
					userInChat: g,
					user: x,
					page: C
				} = e;
				if (!x) return null;
				const {
					accountIcon: O,
					awardedLastMonth: v,
					id: y,
					isEmployee: E,
					isGold: f,
					prefShowSnoovatar: j,
					username: w
				} = x, P = !!t && t.id === y, k = h && h.bannerBackgroundImage, I = m && m.isNSFW && o, S = !(!p || !p.userIsSubscriber), _ = "/user/".concat(w, "/"), T = C && C.url === _;
				return r.a.createElement(l.a, {
					isEmployee: E,
					isGold: f,
					isOverlay: i,
					publicDescription: p ? p.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: T ? null : _,
					username: w,
					recentAwardings: v,
					actions: r.a.createElement(r.a.Fragment, null, P && !c && q({
						username: w,
						currentUserHasSubreddit: s
					}), !P && b && X({
						profileName: w,
						onToggleFollow: d,
						userIsSubscriber: S
					}), !!t && !P && g && Z({
						userId: y
					})),
					footer: r.a.createElement(z, {
						hasSubreddit: b,
						isModerator: a,
						isOwnProfile: P,
						allowViewSnoovatar: j,
						profileName: w,
						sendEvent: u
					}),
					profileIcon: I ? "".concat(n.a.assetPath, "/img/avatar_over18_square.png") : O,
					bannerBackgroundImage: I ? void 0 : k
				})
			}))
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.Container, s)
				}, n && o.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), o.a.createElement(a.b, {
					type: a.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/FocusableContent/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isLoading: s,
					toolbarPosition: n
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(a.a, {
					isFocused: !1
				}, "top" === n && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.topToolbar, Object(i.a)({
						isLoading: s
					}))
				}), o.a.createElement("div", {
					className: d.a.content
				}, o.a.createElement("div", {
					className: Object(r.a)(d.a.prompt, Object(i.a)({
						isLoading: !0
					}))
				})), "bottom" === n && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.bottomToolbar, Object(i.a)({
						isLoading: s
					}))
				})))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
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
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/index.tsx"),
				u = s("./src/reddit/components/Translated/index.tsx"),
				h = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(f),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				P = s.n(w);
			const k = e => e.type === v.f.Spoiler,
				I = Object(b.t)();
			t.a = I(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: o,
					onPostClick: c,
					trendingPost: p,
					trendingSearch: b,
					shouldOpenPost: v,
					showSubredditMeta: f = !0,
					showSubredditName: w,
					subredditOrProfile: I
				} = e, S = p && p.preview && p.preview.url || void 0, _ = p && p.isSponsored ? "promoted_trend" : "trending", T = p && Object(d.a)(p.permalink) || "", N = v && T || b && Object(a.a)("/search", {
					q: b.rawQuery,
					source: _
				}) || T, L = b ? b.subredditInfo && b.subredditInfo.icon : I && I.icon.url, M = b ? b.subredditInfo && b.subredditInfo.displayText : I && (I.displayText || I.name), R = p ? p.flair.filter(k) : [], B = p ? p.score : 0, A = p ? p.numComments : 0, F = p && p.isSponsored, D = Object(E.a)(e).body, W = "linear-gradient(\n      ".concat(Object(n.j)(D, .2), ",\n      ").concat(Object(n.j)(D, .3), ",\n      ").concat(Object(n.j)(D, .4), ",\n      ").concat(Object(n.j)(D, .6), ",\n      ").concat(Object(n.j)(D, .8), ",\n      ").concat(D, "\n    )"), H = r.a.createElement("div", {
					className: Object(i.a)(P.a.trendingPost, {
						[P.a["m-background"]]: !!S
					})
				}, r.a.createElement(g.a, {
					to: N
				}, r.a.createElement("div", {
					className: Object(i.a)(P.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(E.a)(e).body, S || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, F && r.a.createElement("div", {
					className: P.a.promoted
				}, r.a.createElement(O.c, null, "promoted")), r.a.createElement("div", {
					className: Object(i.a)(P.a.innerContainer, j.a.innerContainer, o),
					onClick: c,
					title: p ? p.title : ""
				}, r.a.createElement("h2", {
					className: p ? P.a.title : P.a.titleNoDescription
				}, e.title), p ? r.a.createElement("div", {
					className: Object(i.a)(P.a.description, s)
				}, R.length > 0 && r.a.createElement(m.a, {
					className: P.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : r.a.createElement("div", {
					className: P.a.spacer
				}), f && L && M && r.a.createElement(x.a, {
					className: P.a.relatedSubredditMetaData,
					iconClassName: P.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !f && p && r.a.createElement("div", {
					className: P.a.metaLine
				}, w && M && r.a.createElement("span", {
					className: P.a.meta
				}, Object(C.b)(M)), r.a.createElement("span", {
					className: P.a.meta
				}, r.a.createElement(O.c, null, "".concat(Object(l.b)(B), " "), r.a.createElement(O.a, {
					count: B,
					name: "score",
					plural: "points",
					singular: "point"
				}))), r.a.createElement("span", {
					className: P.a.meta
				}, r.a.createElement(O.c, null, "".concat(Object(l.b)(A), " "), r.a.createElement(O.a, {
					count: A,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return F ? r.a.createElement(h.a, {
					post: p,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				p = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.div("BannerContainer", u.a),
				g = h.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", u.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var C = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return o.a.createElement(b, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, o.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				O = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				w = s("./src/lib/opener/index.ts"),
				P = s("./src/reddit/actions/ads/index.ts"),
				k = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/constants/adEvents.ts"),
				S = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				T = s("./src/reddit/helpers/adCount/index.ts"),
				N = s("./src/reddit/helpers/pixels.ts"),
				L = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				B = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				A = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				F = s("./src/reddit/models/Theme/index.ts"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				V = s.n(H);
			const U = h.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", V.a);
			class K extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = e.media && !Object(W.E)(e.media) ? e.media.content : "",
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case O.eb.IMAGE:
							return o.a.createElement(U, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var G = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				z = s.n(G);
			const J = h.a.wrapped(E.d, "PostTopMeta", z.a),
				Y = h.a.div("BannerAdContainer", z.a),
				Q = e => {
					let {
						children: t
					} = e;
					return o.a.createElement("div", null, t)
				},
				q = h.a.div("PromotedPostContainer", z.a),
				X = h.a.wrapped(B.a, "OutboundLinkIcon", z.a),
				Z = h.a.div("SourceLinkWrapper", z.a),
				$ = h.a.div("TopLine", z.a),
				ee = h.a.wrapped(y.c, "PostTitle", z.a),
				te = h.a.div("PostMediaWrapper", z.a),
				se = h.a.div("BackgroundWrapper", z.a),
				ne = h.a.wrapped(k.a, "PostContainer", z.a),
				oe = 640,
				re = (e, t) => {
					Object(N.a)(t.events, I.a.Click), t.source ? t.source.outboundUrl ? Object(w.d)(t.source.outboundUrl, w.c.BLANK) : Object(w.d)(t.source.url, w.c.BLANK) : Object(w.d)(t.permalink, w.c.BLANK)
				},
				ae = e => Object(R.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(L.a)(e), A.a.actionIcon, A.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(F.g)(Object(D.a)(e).body, null, null) || ""
				});
			class de extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let r, a, c = {};
					return e.isBlank ? (r = Q, a = null) : e.isMediaOnly ? (r = Y, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = o.a.createElement(K, {
						post: e
					})) : (r = q, a = o.a.createElement(se, {
						style: ce(this.props)
					}, o.a.createElement($, null, o.a.createElement(J, {
						tooltipType: n ? E.c.Lightbox : void 0,
						language: O.y,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(ee, {
						post: e,
						size: y.b.Large,
						format: ae
					}), e.source && o.a.createElement(Z, null, o.a.createElement(_.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), o.a.createElement(X, null))), o.a.createElement(te, null, e.media && o.a.createElement(v.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: oe,
						shouldLoad: !0
					})))), o.a.createElement(r, c, o.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: re,
						eventFactory: s,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(r.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: o
						} = t;
						e(Object(P.c)(Object(T.a)(s, !!o, n)))
					}
				}))(Object(S.b)(Object(f.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				he = s.n(ue);
			const be = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(T.a)(s, o, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(r.b)(be),
				xe = h.a.wrapped(c.a, "BannerAd", he.a),
				Ce = h.a.wrapped(pe.a, "ThemedWidget", he.a),
				Oe = h.a.div("SidebarAdPlaceholder", he.a),
				ve = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ye = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				Ee = e => !!e && e.isBlank;
			class fe extends o.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: r,
						refreshKey: a,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: h,
						waitForProgrammatic: b
					} = this.props;
					return u || t || !ye(s) && b ? o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(Oe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(C, null))) : ye(s) ? o.a.createElement(me.a, null, o.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: r
					})) : o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, Ee(s) && o.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: r
					}), o.a.createElement(xe, {
						id: ve(d, n, r),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(fe)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", c.a);
			t.a = e => o.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: c.a.LinkContainer
			}, o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const a = .99;
			class i extends r.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= a && t(s)
					}
				}
				render() {
					return r.a.createElement(n.a, {
						threshold: a,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				O = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				w = s.n(j);
			const P = e => e.type === y.f.Nsfw || e.type === y.f.Spoiler,
				k = Object(a.c)({
					language: f.S,
					post: b.I,
					subredditOrProfile: b.T
				});
			class I extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, c = Object(x.a)(Object(v.b)(a)), d = t.flair.filter(P);
					return o.a.createElement("div", {
						className: Object(i.a)(w.a.container, e, {
							[w.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: w.a.mainLine
					}, c && o.a.createElement("div", {
						className: w.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(v.a, a)), o.a.createElement("div", {
						className: Object(i.a)(w.a.title, !c && w.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(O.a, {
						className: w.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: w.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: w.a.meta
					}, Object(E.e)(r) ? Object(m.c)(r.displayText || r.name) : Object(m.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: w.a.meta
					}, "".concat(Object(C.b)(t.score), " "), o.a.createElement(u.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), o.a.createElement("span", {
						className: w.a.meta
					}, "".concat(Object(C.b)(t.numComments), " "), o.a.createElement(u.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var S = Object(r.b)(k, e => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}))(I),
				_ = s("./src/reddit/components/SidebarPostList/index.m.less"),
				T = s.n(_);
			s.d(t, "b", (function() {
				return M
			}));
			const N = 10,
				L = 2,
				M = Object(a.a)(b.N, e => e.filter(e => !e.isSponsored)),
				R = Object(a.c)({
					posts: M
				}),
				B = Object(r.b)(R, e => ({
					openPost: t => e(Object(p.a)(t.permalink))
				}));
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || N, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return o.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(S, {
							className: Object(i.a)(T.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: r,
						posts: a,
						redditStyle: p,
						showMoreButton: b,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: C
					} = this.state;
					if (0 === a.length) return null;
					const O = this.getVisiblePostsCounts(),
						v = Object(h.a)(x),
						y = Object(h.b)(x),
						E = v || y,
						f = a.slice(C * O, (C + 1) * O),
						[j, ...w] = f,
						P = E ? f.slice(0, L) : w.slice(0, L),
						k = E ? f.slice(L) : w.slice(L);
					return o.a.createElement("div", {
						className: Object(i.a)(T.a.container, t, {
							[T.a.redditStyle]: p
						})
					}, !E && o.a.createElement(g.a, {
						onPostVisible: r,
						postId: j.id
					}, o.a.createElement(d.a, {
						backgroundWrapperClassName: T.a.largePostBackgroundWrapper,
						descriptionClassName: T.a.largePostDescription,
						innerContainerClassName: T.a.largePostInnerContainer,
						"data-redditstyle": p,
						onPostClick: this.openLargePost,
						postId: j.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: j
					})), P.map(this.renderSmallPost), e, k.map(this.renderSmallPost), b && o.a.createElement(l.n, {
						className: T.a.SeeMore,
						onClick: this.showMorePosts
					}, n || o.a.createElement(u.c, null, "See More")))
				}
			}
			t.a = B(A)
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				O = s.n(C),
				v = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const f = c.e[1] + 24,
				j = b.g + 8 + 152 + 32 + 16,
				w = j + f + 8,
				P = v.a.div("Container", O.a),
				k = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = E(e, ["className"]);
					return i.a.createElement(u, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", O.a),
				I = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: o,
						isSticky: r
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(o, {
							[O.a.StickyStyles]: r,
							[O.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class S extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							children: s,
							className: n,
							hideFooter: o,
							railsWidgetsVariant: r
						}
					} = this, a = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(P, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(I, {
						categoriesPlacementVariant: t,
						isSticky: a || !!r
					}, e, s, !o && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(k, null))
				}
			}
			const _ = Object(g.t)();
			t.a = _(S)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				C = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const y = (e, t, s) => Object(b.a)(e, {
					[C.a.mActive]: t
				}, {
					[C.a.topBannerVariant]: s
				}),
				E = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = v(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", O({
						className: y(C.a.subNavTitle, s, n)
					}, r), o.a.createElement("span", null, t), o.a.createElement(g.b, {
						className: C.a.navDropdownIcon
					}))
				},
				f = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = v(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = y(C.a.navLink, s, r);
					return n ? o.a.createElement(h.a, O({
						className: i,
						to: n
					}, a)) : o.a.createElement("a", O({
						className: i
					}, a))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return o.a.createElement(h.a, O({
						className: y(C.a.navLink, s)
					}, n))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return o.a.createElement("a", O({
						className: y(C.a.subNavLink, s)
					}, n))
				},
				P = e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return o.a.createElement("div", O({
						className: Object(b.a)(C.a.subNavContainer, t)
					}, s))
				},
				k = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = v(e, ["className", "isOpen"]);
					return o.a.createElement("div", O({
						className: Object(b.a)(C.a.subNavList, t, {
							[C.a.mIsOpen]: s
						})
					}, n))
				};
			const I = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var S = Object(c.t)()(Object(r.b)(I, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? o.a.createElement(j, {
						className: C.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(c.F)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, o.a.createElement(u.c, null, "Polls")) : null
				}))),
				_ = s("./src/lib/linkMatchers/index.ts");
			class T extends o.a.Component {
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
					return o.a.createElement(P, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(E, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var N = T;
			const L = e => {
				const t = e.url && Object(_.g)(_.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(f, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(w, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts");
			const B = Object(c.t)(),
				A = [R.xb.SUBREDDIT, R.xb.COMMENTS, R.xb.COLLECTION_COMMENTS],
				F = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && A.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = B(Object(r.b)(F, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: a
					} = e, i = n && !s;
					return o.a.createElement(f, {
						to: t,
						isActive: i,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, o.a.createElement(u.c, null, "Posts"))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				U = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				G = s("./src/reddit/models/Theme/index.ts"),
				z = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				J = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Y = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = J(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(z.a)(r);
				return o.a.createElement("div", {
					className: Object(b.a)(C.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var Q = e => o.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: C.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === U.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(V, null))),
				q = s("./src/reddit/components/Translated/index.tsx"),
				X = s("./src/reddit/constants/wiki.ts"),
				Z = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === R.xb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(f, {
					isActive: r,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(Z.g)())
				}, o.a.createElement(q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(d.a)("spPolls", S),
				te = Object(c.t)(),
				se = Object(a.c)({
					language: l.S,
					layout: c.M,
					widget: m.f
				}),
				ne = Object(r.b)(se);
			t.a = te(ne(Object(i.b)(e => o.a.createElement(Q, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), o.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && o.a.createElement(o.a.Fragment, null, e.widget.showWiki && o.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
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
				return k
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(p),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const C = b.a.button("IconButton", u.a),
				O = b.a.wrapped(l.a, "SubscribeIcon", u.a),
				v = b.a.wrapped(d.a, "UnsubscribeIcon", u.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return o.a.createElement(C, n, o.a.createElement(O, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? o.a.createElement(i.f, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					})) : o.a.createElement(i.n, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				f = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(y, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(E, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return o.a.createElement(C, i, o.a.createElement(v, {
						className: Object(h.a)(a.o, i.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				w = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, a = x(e, ["border", "language", "small", "type"]);
					const d = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? Object(c.c)("Joined") : Object(c.c)("Following")), o.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === r ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(h.a)(a.className, {
							[u.a.isSmall]: n
						});
					return t ? o.a.createElement(i.i, g({}, a, {
						className: l,
						children: d
					})) : o.a.createElement(i.n, g({}, a, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", u.a),
				P = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(j, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(w, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class k extends o.a.Component {
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
						id: n,
						language: a,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? o.a.createElement(P, g({}, c, {
						language: a,
						type: this.props.identifier.type
					})) : o.a.createElement(f, g({}, c, {
						id: n
					}), this.props.children, Object(r.a)(a, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.b)(r.a))
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: b.S
			});
			var x = Object(r.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(h.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(h.e()),
						onUnsubscribe: () => e(h.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				w = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				I = s.n(k);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return N
			}));
			const _ = e => o.a.createElement(C.a, {
					className: Object(d.a)(I.a.Container, {
						[I.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && o.a.createElement(p.a, {
					className: I.a.WidgetTitle
				}, e.title), o.a.createElement("div", {
					className: I.a.container
				}, e.isLoading ? o.a.createElement(y.a, {
					className: I.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: I.a.errorMsg
				}, e.errorMsg || Object(E.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(N, S({
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
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(v.n, {
					className: I.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(i.c)({
					hideNSFWPref: b.z,
					language: b.S
				}),
				N = Object(r.b)(T)(e => o.a.createElement("div", {
					className: I.a.communityItemContainer
				}, o.a.createElement(j.a, {
					widthRight: O.u
				}, o.a.createElement("div", {
					className: I.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: I.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(f.a, {
					className: I.a.planetIcon,
					"data-redditstyle": !0
				})), o.a.createElement("div", {
					className: I.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: I.a.communityName,
					to: Object(P.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(P.b)(e.name, e.type)), o.a.createElement("div", {
					className: I.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: I.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: w.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(y.a, {
					className: Object(d.a)(I.a.communityCta, I.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(v.n, {
					className: Object(d.a)(I.a.communityCta, {
						[I.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(x, {
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
				}) : o.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: I.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./node_modules/reselect/es/index.js"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/helpers/trackers/postCollection.ts"),
				E = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				f = s.n(E);
			const j = d.a.wrapped(b.b, "DropdownRow", f.a);
			let w;
			const P = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				k = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				I = Object(O.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: P,
					isEditCollectionModalOpen: k,
					shouldShowCollectionEditOptions: C.s
				}),
				S = Object(i.b)(I, (e, t) => ({
					copyLink: () => e(Object(m.t)(t.permalink)),
					onCreatePost: s => {
						t.shouldShowCreatePost && e(Object(c.b)(s))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						w || (w = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("editCollectionModal")]).then(s.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = S(Object(v.b)(e => {
				const {
					className: t,
					collectionId: s,
					copyLink: n,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: x,
					targetPosition: C,
					tooltipPosition: O,
					sendEvent: v
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(s, "-").concat(x ? 1 : 2),
					onClick: o.a,
					targetPosition: C,
					tooltipPosition: O
				}, a.a.createElement(j, {
					onClick: n,
					displayText: Object(g.c)("Copy collection link")
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(j, {
					onClick: () => {
						v(Object(y.l)(s)), p()
					},
					displayText: Object(g.c)("Edit")
				}), a.a.createElement(j, {
					onClick: () => {
						v(Object(y.k)(s)), m()
					},
					displayText: Object(g.c)("Delete collection")
				}), x && a.a.createElement(j, {
					onClick: () => {
						d(r)
					},
					displayText: Object(g.c)("Create post")
				}))), c && w && a.a.createElement(w, {
					collectionId: s,
					onClose: p,
					onEditSuccess: p
				}), i && a.a.createElement(u.a, {
					actionText: Object(g.c)("Yes, Delete"),
					headerText: Object(g.c)("Delete Collection"),
					modalText: Object(g.c)("Are you sure you want to delete this collection? The posts within the collection won't be deleted."),
					onConfirm: l,
					toggleModal: m,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				l = s("./src/reddit/components/OverflowMenu/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = s.n(u);
			const b = i.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: s,
					onEditStartTime: n,
					onStartEventNow: r,
					postPermalink: i,
					shouldShowAddEventStartTime: m,
					targetPosition: u,
					tooltipPosition: h
				} = e;
				return a.a.createElement(l.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: o.a,
					targetPosition: u,
					tooltipPosition: h
				}, m && s && a.a.createElement(b, {
					onClick: s,
					displayText: Object(p.c)("Add event start time")
				}), t && r && a.a.createElement(b, {
					onClick: r,
					displayText: Object(p.c)("Start event now")
				}), t && n && a.a.createElement(b, {
					onClick: n,
					displayText: Object(p.c)("Edit start time")
				}), a.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: Object(p.c)("Remove from collection")
				}), i && a.a.createElement(d.a, {
					target: c.c.BLANK,
					rel: c.b,
					isOverlay: !1,
					to: i
				}, a.a.createElement(b, {
					displayText: Object(p.c)("View post")
				})))
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				C = s("./src/reddit/helpers/flair.ts"),
				O = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				f = s.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const P = 129,
				k = Object(b.t)({
					filterName: e => Object(b.R)(e)[h.f],
					url: e => Object(b.V)(e)
				}),
				I = Object(i.c)({
					subredditId: (e, t) => Object(y.G)(e, t.subredditName)
				}),
				S = Object(a.b)(I),
				_ = l.a.div("WidgetContent", f.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = w(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(c.a)(f.a.StyledFlair, t === v.d.Cloud && f.a.cloudDisplay, {
							[f.a.flairFilter]: s,
							[f.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, j({}, o, {
						className: f.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(O.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(O.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(O.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(O.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(C.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(C.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > P && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
						className: f.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? P : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: f.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", null, r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, o = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(o) || void 0, i = t.order.length > n.length || s && !a;
					return r.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(_, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(o), i && this.renderButton()))
				}
			}
			t.a = k(S(Object(p.b)(N)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				C = s.n(x);
			const O = d.a.div("RuleShortName", C.a),
				v = d.a.div("RuleIndex", C.a),
				y = d.a.div("RuleTitle", C.a),
				E = d.a.div("RuleDescription", C.a),
				f = d.a.wrapped(l.a, "RawHTMLDisplay", C.a),
				j = {};
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return o.a.createElement(O, {
						className: Object(c.a)({
							[C.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(b.a, null, o.a.createElement(v, null, "".concat(e.humanIndex, ".")), o.a.createElement(y, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !n(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: C.a.Chevron
					}) : o.a.createElement(u.a, {
						className: C.a.Chevron
					})))), t.isVisible && o.a.createElement(E, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? o.a.createElement(f, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return P
			}));
			const P = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(w, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => o.a.createElement(P, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				f = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = E(e);
					return Object(v.f)(t)
				},
				w = e => {
					const t = f(e);
					return Object(v.f)(t)
				};
			var P = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(P);
			const I = Object(m.t)(),
				S = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(C.m)(e, {
								subredditId: s
							}),
							o = Object(O.U)(e);
						return n || o
					},
					nigtmode: O.U,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = f(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? k.a.widgetContentOnly : k.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = I(S(Object(c.a)(Object(l.b)(_))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/linkMatchers/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Widgets/Button/index.m.less"),
				v = s.n(O);
			const y = (e, t, s) => {
					let n = {},
						o = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: o,
							textColor: r
						} = e;
						return t && (n = r = s, o = "transparent"), {
							"--widget-button-background-color": "".concat(o || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(r || n)
						}
					})(e, t, s);
					const r = e.hoverState || e;
					if (r.kind === g.f.Image) o = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = r;
						t && (e = a = s, n = "transparent"), o = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, n, o)
				},
				E = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				f = e => {
					const t = Object(g.n)(e),
						s = Object(u.g)(u.e, t);
					return s ? s.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return o.a.createElement(d.i, {
						className: E(t),
						style: y(t, s, n)
					}, t.kind === g.f.Text && o.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && o.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				w = e => o.a.createElement(l.a, {
					href: f(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(j, e)),
				P = p.a.wrapped(i.a, "RawHTMLDisplay", v.a);
			var k = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: C.U
				}))(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(P, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(w, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = s("./src/lib/humanizeDate/index.ts"),
				S = s("./src/reddit/controls/TextButton/index.tsx"),
				_ = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(T);
			const L = 100,
				M = {
					isExpanded: !1
				},
				R = p.a.wrapped(i.a, "RawHTMLDisplay", N.a),
				B = p.a.div("EventContainer", N.a),
				A = p.a.div("EventTitle", N.a),
				F = p.a.div("EventDate", N.a),
				D = p.a.div("EventLocation", N.a),
				W = p.a.div("EventDescription", N.a),
				H = p.a.wrapped(S.a, "ToggleDescription", N.a);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(_.c)("read less") : Object(_.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: C.S
			});
			var K = Object(r.b)(U)(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(B, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(A, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(F, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					language: e.language,
					text: t.description
				}))))),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(G.b)(e => o.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Q = Object(r.b)(Y),
				q = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class X extends o.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, o.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Z = Q(X),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = p.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var oe = p.a.img("StyledImage", ne.a);
			class re extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = o.a.createElement(te, null, o.a.createElement(oe, {
							alt: Object(_.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? o.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ae = re,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				pe = s.n(me);
			var ue = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", pe.a),
				he = s("./src/reddit/models/Flair/index.ts"),
				be = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(be);
			const xe = p.a.div("ModeratorListItem", ge.a),
				Ce = p.a.div("Username", ge.a),
				Oe = p.a.a("MessageModsLink", ge.a),
				ve = p.a.wrapped(ce.b, "FlairComponent", ge.a),
				ye = e => e.authorFlairType === he.f.Richtext ? {
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
				Ee = e => o.a.createElement(Ce, null, "u/".concat(e)),
				fe = p.a.wrapped(de.a, "InternalLink", ge.a),
				je = p.a.div("LinkContainer", ge.a);
			var we = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(c.a, {
						styles: s.styles,
						title: Object(_.c)("Moderators"),
						headerButton: o.a.createElement(Oe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(ue, null))
					}, s.mods.map(e => o.a.createElement(xe, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, Ee(e.name)))(e), o.a.createElement(ve, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(je, null, o.a.createElement(fe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(_.c)("View All Moderators"))))
				},
				Pe = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				ke = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = s.n(Ie);
			const _e = p.a.div("WidgetContent", Se.a),
				Te = p.a.wrapped(i.a, "RawHTMLDisplay", Se.a);
			var Ne = e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(_e, null, o.a.createElement(Te, {
					html: e.widget.textHtml || ""
				}))),
				Le = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => o.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Ne;
						case "button":
							return k;
						case "subreddit-rules":
							return ke.b;
						case "community-list":
							return J;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return Z;
						case "post-flair":
							return Pe.a;
						default:
							return Me
					}
				}(e.widget);
				return o.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const y = v(),
				E = {
					apiError: b.c,
					apiPending: b.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: x.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(x.F)(e, s, n, o)
					}),
					subredditsById: C.Y,
					viewportDataLoaded: O.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				f = Object(o.c)(E),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(i.B(t, n, o))
					}
				}),
				w = Object(n.b)(f, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(y(w(e)))
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const a = Object(o.c)({
				language: r.S
			});

			function i(e) {
				return Object(n.b)(a)(e)
			}
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
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
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => o.a.createElement(p, e, " · "),
				h = Object(r.d)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: r
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : r ? l : h(s, n, {
							count: d
						});
					return o.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return o.a.createElement(p, null, s)
				}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: r
					} = e, a = c(e, ["featureEnabled", "dispatch"]);
					return n ? o.a.createElement(t, a) : void 0 !== s ? o.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: o.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = r, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case o.D.AUTHORIZATION_ERROR:
						return s ? Object(n.a)(r, "error.type.notLoggedIn") : Object(n.a)(r, "error.type.notAuthorized");
					case o.D.VALIDATION_ERROR:
						return Object(n.a)(r, "error.type.validation");
					case o.D.NOT_FOUND_ERROR:
						return Object(n.a)(r, "error.type.notFound");
					case o.D.SERVER_ERROR:
						return Object(n.a)(r, "error.type.server");
					case o.D.LIKELY_UBLOCK_ERROR:
						return Object(n.a)(r, "error.type.blocked");
					default:
						return Object(n.a)(r, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/i18n/utils.ts");

			function o() {
				return window.ethereum
			}

			function r() {
				const e = o();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = o();
				return e && e.selectedAddress || null
			}

			function i() {
				return o().networkVersion || null
			}

			function c() {
				const e = o();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, r) {
				const [a, i] = await Promise.all([s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(o()).getSigner(),
					l = new a.Contract(e, i, d),
					m = await l[n](...r);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const p = 1;
			async function u(e, t, n, o, r) {
				const a = await s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: u
					} = a.utils,
					h = i(n).add(r),
					b = p,
					g = "0x" + [c(1)].concat([b, i(o), i(r)].map(c).map(e => d(e, 32))).concat(c(u(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return l(e, Promise.resolve(m), "send", [t, s, n])
				}(e, t, h.toString(), g)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, s) {
				await c();
				const o = a() || "";
				if (t.toLowerCase() !== o.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(h), "subscribe", [t, s])
			}

			function g(e) {
				const t = o();
				return new Promise((s, o) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) o(e);
						else {
							const e = t && t.result;
							e ? s(e) : o({
								message: Object(n.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, s) => {
					o().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/components/BlankPost/index.tsx"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				d = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = s("./src/reddit/components/MediumPost/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/models/Media/index.ts");
			const h = {
					[p.g.Large]: l.a,
					[p.g.Medium]: m.b,
					[p.g.Classic]: c.b,
					[p.g.Compact]: d.a
				},
				b = e => o.a.createElement(i.b, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				x = e => !e.media || e.media.type === u.n.EMBED && !(u.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)))(e));

			function C(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: o
				} = e;
				if (o.isBlank) return b;
				const i = !o.media && !!o.source && Object(r.a)(o.source.url),
					c = t && i;
				n === p.g.Large && x(o) && !c && (n = p.g.Medium);
				const d = h[n];
				return void 0 === d ? (Object(a.a)(void 0, "Could not find component for layout ".concat(n, ".")), b) : s && o.isSponsored && n === p.g.Large ? m.b : d
			}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return w
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				p = c("view_wiki_page"),
				u = c("view_source"),
				h = c("add_wiki_page_contributor"),
				b = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				C = c("add_wiki_subreddit_contributor"),
				O = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				E = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				f = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				w = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: f[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && o.a.createElement("title", null, e.title), e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mIsFakeOverlay: "_2gEUIJsfk7ZZ0euRwRyv08",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				narrow: "_1VToppe137NbqV5o2PhSdN",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showM2MTopBanner: "_2JeiDGY0Jbv_7O9hAUUm-J",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, s) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("dynamicTwoCol", r.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/app/strings/index.ts");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = [];
					for (const n in o) {
						const r = o[n];
						(r.priceInCoins <= e || t) && s.push(r)
					}
					return s
				},
				a = (e, t) => 1 === e.monthsOfPremium ? Object(n.a)(t, "gold.givePremiumToUserModal.monthDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				}) : Object(n.a)(t, "gold.givePremiumToUserModal.monthsDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				})
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(o || (o = {}))
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "ylSOkbhJXzLxdygG02Py-",
				container: "ylSOkbhJXzLxdygG02Py-",
				HeaderPane: "lRD1iRINbsXDXJa5y-KCy",
				headerPane: "lRD1iRINbsXDXJa5y-KCy",
				CommentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				commentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				OtherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT",
				otherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT"
			}
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				TopTippers: "BBdV-resbdJaej9EwC62l",
				topTippers: "BBdV-resbdJaej9EwC62l",
				TopTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				topTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/get.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/telemetry/index.ts"),
				b = s("./src/telemetry/models/Timer.ts"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				f = s("./src/lib/performanceTimings/index.tsx"),
				j = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/lib/makeActionCreator/index.ts"),
				P = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const k = Object(w.a)(P.a),
				I = Object(w.a)(P.b);
			var S = s("./src/reddit/actions/login.ts"),
				_ = s("./src/reddit/actions/monthsToMinutes/accountCompleteness.ts"),
				T = s("./src/reddit/actions/page.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/app/strings/index.ts"),
				M = s("./src/reddit/actions/postCollection/index.ts"),
				R = s("./src/reddit/components/AuthorLink/index.tsx"),
				B = s("./src/reddit/components/PostFollow/index.tsx"),
				A = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/components/Translated/index.tsx"),
				W = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				G = s("./src/reddit/helpers/postCollection.ts"),
				z = s("./src/reddit/models/Post/index.ts"),
				J = s("./src/reddit/models/PostCollection/index.ts"),
				Y = s("./src/reddit/selectors/postCollection.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				q = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				X = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/lib/timezone/index.ts"),
				$ = s("./src/reddit/actions/modal.ts"),
				ee = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				te = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				se = s("./src/reddit/components/PostContainer/index.tsx"),
				ne = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/helpers/path/index.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ae = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ie = s("./src/reddit/models/PostCreationForm/index.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				de = s("./src/reddit/selectors/user.ts"),
				le = s("./src/reddit/components/Collection/PostItem/index.m.less"),
				me = s.n(le);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			let ue, he;
			const be = e => "".concat(e, "--collectionItem"),
				ge = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						isFutureEvent: o,
						isNightmodeOn: r,
						isOverlay: a,
						isSelectedPost: i,
						language: d,
						onPostSelection: l,
						onRemovePost: m,
						onStartEventNow: p,
						onPostTitleClick: u,
						post: h,
						shouldShowCollectionPostEdits: b,
						shouldShowThumbnail: x,
						style: C,
						toggleEditStartTimeModal: O,
						updateSelectedPostRef: v,
						isProfilePage: y
					} = e;
					return c.a.createElement(se.a, {
						className: Object(g.a)(me.a.postContainer, {
							[me.a.isNightmodeOn]: r,
							[me.a.isSelectedPost]: i,
							[me.a.isProfilePage]: y
						}),
						isOverlay: a,
						makePostContainerId: be,
						post: h,
						onClick: l,
						eventFactory: n,
						style: C
					}, c.a.createElement("div", {
						ref: i && v || void 0
					}, c.a.createElement("div", {
						className: Object(g.a)(me.a.postContent, {
							[me.a.active]: i
						})
					}, x && c.a.createElement(ee.a, {
						className: me.a.timelineThumbnail,
						classNameInnerThumbnail: Object(g.a)(me.a.timelineThumbnailOverride, me.a.commonThumbnailOverride),
						post: h
					}), c.a.createElement("div", {
						className: me.a.postBodyWrapper
					}, c.a.createElement("div", {
						className: me.a.postBody,
						"data-click-id": "body"
					}, c.a.createElement(q.a, {
						to: Object(oe.b)(h.permalink),
						className: me.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: h.title,
						onClick: u
					}, h.title)), c.a.createElement("div", {
						className: me.a.bottomline
					}, c.a.createElement(te.b, {
						post: h,
						language: d
					}), b && c.a.createElement(ne.a, {
						onRemoveClick: m,
						dropdownId: "collection-post-item-".concat(h.id),
						isFutureEvent: o,
						onStartEventNow: p,
						onEditStartTime: O,
						onAddEventStartTime: O,
						shouldShowAddEventStartTime: !Object(re.a)(h)
					}))))), t === Object(ie.s)(h.id, a, ie.j.COLLECTION_INFO_POST) && ue && c.a.createElement(ue, {
						onChange: s,
						onClose: O,
						schedule: Object(Z.c)(h),
						shouldShowDeleteButton: !1
					}))
				},
				xe = ee.a,
				Ce = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						galleryThumbnail: o,
						isFutureEvent: r,
						isNightmodeOn: a,
						isOverlay: i,
						isSelectedPost: d,
						language: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						post: h,
						shouldShowCollectionPostEdits: b,
						style: x,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: v
					} = e, y = o && o.url || "", E = h.isSpoiler || h.isNSFW, f = h.isScoreHidden;
					return c.a.createElement(se.a, {
						className: Object(g.a)(me.a.galleryPostContainer, {
							[me.a.isSelectedPost]: d,
							[me.a.isNightmodeOn]: a,
							[me.a.isProfilePage]: v
						}),
						isOverlay: i,
						makePostContainerId: be,
						post: h,
						onClick: m,
						eventFactory: n,
						style: x
					}, c.a.createElement("div", {
						className: me.a.scrollToContainer,
						ref: d && O || void 0
					}, y ? c.a.createElement("div", {
						className: Object(g.a)(me.a.galleryPostImage, {
							[me.a.blurBackground]: E
						}),
						style: {
							backgroundImage: "url('".concat(y, "')")
						}
					}) : c.a.createElement(xe, {
						className: me.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: me.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(g.a)(me.a.galleryPostPlaceholderThumbnailOverride, me.a.commonThumbnailOverride),
						post: h
					}), a && c.a.createElement("div", {
						className: me.a.gallerySeparator
					}), d && c.a.createElement("div", {
						className: me.a.gallerySelectedBorder
					}), c.a.createElement("div", {
						className: me.a.galleryPostOverlay
					}, c.a.createElement("div", {
						className: Object(g.a)(me.a.galleryBottomLine, {
							[me.a.isScoreHidden]: f
						})
					}, !f && c.a.createElement(te.a, {
						"data-click-id": "score"
					}, Object(L.c)(l, "posts.points.noun", h.score, {
						count: Object(X.b)(h.score)
					})), b && c.a.createElement(ne.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(h.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(re.a)(h)
					})))), t === Object(ie.s)(h.id, i, ie.j.COLLECTION_INFO_POST) && ue && c.a.createElement(ue, {
						onChange: s,
						onClose: C,
						schedule: Object(Z.c)(h),
						shouldShowDeleteButton: !1
					}))
				};
			class Oe extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: s,
							postId: n,
							sendEvent: o
						} = this.props;
						o(Object(ae.h)(n)), s && s(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(ae.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(ae.i)(e.id))
					}, this.onPostTitleClick = e => {
						const {
							post: t
						} = this.props;
						e.preventDefault(), this.onPostSelection(e, t)
					}
				}
				render() {
					const {
						displayLayout: e,
						post: t
					} = this.props;
					return t ? e === J.a.TIMELINE ? c.a.createElement(ge, pe({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : c.a.createElement(Ce, pe({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : c.a.createElement("div", {
						className: me.a.postContainer
					})
				}
			}
			var ve = Object(U.t)({
					currentProfileName: U.h,
					isCommentsPage: U.w,
					isProfilePostListing: U.I,
					isProfilePage: U.H,
					pageLayer: e => e
				})(Object(d.b)(() => Object(m.c)({
					activeModalId: ce.a,
					galleryThumbnail: Y.e,
					isFutureEvent: Y.i,
					language: de.S,
					layout: U.M,
					post: Q.I,
					shouldShowCollectionPostEdits: Y.s,
					subredditOrProfile: Q.T
				}), (e, t) => {
					let {
						collectionId: n,
						postId: o,
						isSelectedPost: r,
						isOverlay: a
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(M.g)(n, o, r)),
						onStartEventNow: async () => {
							he || (he = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts.ts"))), e(he.startEventNowRequested(o))
						},
						toggleEditStartTimeModal: async () => {
							ue && he || ([ue, he] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts.ts"))])), e($.i(Object(ie.s)(o, a, ie.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							he && e(he.editEventTimeRequested(o, t))
						}
					}
				})(Object(F.b)(Oe))),
				ye = s("./src/reddit/components/Collection/index.m.less"),
				Ee = s.n(ye);
			const fe = e => c.a.createElement(R.a, {
					author: e.author,
					className: Ee.a.author,
					"data-click-id": "user",
					isAuthorDeleted: e.isDeleted,
					isUnstyled: !0
				}, "u/".concat(e.author)),
				je = 100,
				we = e => {
					return e.isOverlay ? H.o + H.c : H.g + H.c
				},
				Pe = e => ({
					top: we(e),
					maxHeight: "calc(100vh - ".concat(H.g + (e.isOverlay ? H.o : 0) + H.c + 5, "px)")
				});
			class ke extends c.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(V.b);
					if (e) {
						const t = this.selectedPostRef;
						let s;
						s = t ? t.offsetTop - je : 0, O.a.write(() => {
							Object(C.c)(e, s)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: s,
						isNightmodeOn: n,
						isOverlay: o,
						language: r,
						post: a,
						postId: i,
						shouldShowThumbnail: d,
						isProfilePage: l
					} = this.props;
					if (!a || !e) return null;
					const {
						author: m = "",
						description: p = "",
						postIds: u = [],
						id: h
					} = e;
					return Object(G.a)(a) && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: Object(g.a)(Ee.a.collectionTitleWrapper, {
							[Ee.a.isProfilePage]: l
						})
					}, c.a.createElement("div", {
						className: Ee.a.collectionMetaData
					}, c.a.createElement("span", {
						className: Ee.a.collectionBy
					}, c.a.createElement(D.a, {
						msgId: "collection.collectionBy"
					})), c.a.createElement(fe, {
						author: m,
						isDeleted: Object(z.h)(m)
					}), c.a.createElement(K.a, {
						isSmall: !0
					}), c.a.createElement("span", {
						className: Ee.a.postCount
					}, Object(L.c)(r, "postCreation.postsCount", u.length))), c.a.createElement("div", {
						className: Ee.a.collectionTitleOptions
					}, c.a.createElement("span", {
						className: Ee.a.collectionTitle
					}, c.a.createElement(A.b, {
						type: A.a.Collection
					}, e.title)), s && c.a.createElement(B.a, {
						post: s,
						isEventFollow: l
					}), c.a.createElement(W.a, {
						className: Ee.a.overflowMenu,
						collectionId: h,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), c.a.createElement("div", {
						className: Ee.a.postListWrapper
					}, c.a.createElement("div", {
						id: V.b,
						style: Pe(this.props),
						className: Ee.a.collectionList
					}, p && p.trim() && c.a.createElement("div", {
						className: Ee.a.collectionDescription
					}, p), c.a.createElement("div", {
						className: Object(g.a)({
							[Ee.a.galleryContainer]: t === J.a.GALLERY
						})
					}, u.map(e => c.a.createElement(ve, {
						collectionId: h,
						postId: e,
						key: e,
						isSelectedPost: i === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: o,
						isNightmodeOn: n,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: d,
						displayLayout: t
					}))))))
				}
			}
			var Ie = Object(U.t)({
					isProfilePage: U.H,
					pageLayer: e => e
				})(Object(d.b)(() => Object(m.c)({
					collection: Y.n,
					displayLayout: Y.a,
					followPost: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Y.n)(e, {
								postId: s
							}),
							o = n && (n.primaryPostId || n.postIds[0]);
						return o && Object(Q.I)(e, {
							postId: o
						}) || null
					},
					post: Q.I,
					shouldShowThumbnail: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Y.n)(e, {
							postId: s
						});
						return !(!n || !n.id) && Object(Y.t)(e, {
							collectionId: n.id
						})
					}
				}), (e, t) => ({
					onOpenPost: t => e(Object(M.f)(t))
				}))(Object(F.b)(ke))),
				Se = s("./src/reddit/components/BannerAd/index.tsx"),
				_e = s("./src/reddit/components/BlankPost/index.tsx"),
				Te = s("./src/reddit/connectors/PostViewable/index.ts"),
				Ne = s("./src/reddit/featureFlags/index.ts"),
				Le = s("./src/reddit/selectors/brandSafety.ts"),
				Me = s("./src/reddit/components/CommentsPageAd/index.m.less"),
				Re = s.n(Me);
			const Be = Object(m.c)({
					canShowAds: (e, t) => {
						const s = Object(Le.a)(e, t),
							n = !Ne.d.rabbitHole(e) && !Object(U.H)(t.pageLayer) && !Object(de.y)(e),
							o = e.meta.isSessionSeo && !Object(de.J)(e);
						return s && n && (o || Object(de.G)(e))
					},
					ads: e => e.commentsPage.ads
				}),
				Ae = Object(Te.a)(Be),
				Fe = Object(U.t)(),
				De = v.a.wrapped(Se.a, "BannerAd", Re.a),
				We = (e, t) => {
					let s = "";
					return t && (s += "overlay-"), s += "comment-".concat(e)
				},
				He = v.a.div("CommentsPageAdContainer", Re.a);
			class Ve extends c.a.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						enoughSpace: !1,
						hasBeenAssessed: !1
					}, this.checkAvailableSpace = a()(() => {
						O.a.read(() => {
							if (this.container) {
								const e = x.f[0],
									t = this.container.clientWidth;
								!this.state.enoughSpace && this.state.hasBeenAssessed || O.a.write(() => {
									this.setState({
										enoughSpace: t > e,
										hasBeenAssessed: !0
									})
								})
							}
						})
					}, x.F)
				}
				componentDidMount() {
					this.props.canShowAds && (this.checkAvailableSpace(), window.addEventListener("resize", this.checkAvailableSpace))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.checkAvailableSpace)
				}
				render() {
					if (!this.props.canShowAds) return null;
					const {
						isOverlay: e,
						refreshKey: t,
						listingName: s,
						placement: n,
						onPostViewable: o
					} = this.props;
					return c.a.createElement(He, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && c.a.createElement(_e.a, {
						post: this.props.ads[0],
						onPostViewable: o
					}), this.state.enoughSpace && c.a.createElement(De, {
						id: We(n, e),
						sizes: [x.f],
						placement: n,
						listingName: s,
						refreshKey: t,
						dataBeforeContent: Object(L.a)("en", "posts.sponsored")
					}))
				}
			}
			var Ue = Fe(Ae(Ve)),
				Ke = s("./src/reddit/components/ContentGate/index.tsx"),
				Ge = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				ze = s("./node_modules/lodash/noop.js"),
				Je = s.n(ze),
				Ye = s("./src/lib/makeListingKey/index.ts"),
				Qe = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				qe = s("./src/reddit/actions/subreddit.ts"),
				Xe = s("./src/reddit/components/ListingPostList/index.tsx"),
				Ze = s("./src/config.ts"),
				$e = s("./src/reddit/controls/Button/index.tsx"),
				et = s("./src/reddit/i18n/components.tsx"),
				tt = s("./src/reddit/components/M2M/HomeUpsellBanner/index.m.less"),
				st = s.n(tt);
			const nt = "".concat(Ze.a.assetPath, "/img/snoomoji/snoo.png");
			var ot = e => {
					const {
						borderClassName: t,
						className: s,
						isCompact: n,
						onSeeMoreClick: o
					} = e;
					return c.a.createElement("div", {
						className: Object(g.a)(st.a.container, s),
						"data-redditstyle": !0
					}, c.a.createElement("div", {
						className: Object(g.a)(st.a.border, t)
					}), !n && c.a.createElement("div", {
						className: st.a.line
					}), c.a.createElement("div", {
						className: st.a.layout
					}, !n && c.a.createElement("div", {
						className: st.a.image
					}, c.a.createElement("img", {
						className: st.a.snoo,
						src: nt
					})), c.a.createElement("div", {
						className: st.a.text
					}, c.a.createElement("div", {
						className: st.a.homeTitle
					}, c.a.createElement(et.c, null, "Recommended posts for you")), c.a.createElement("div", {
						className: st.a.homeDescription
					}, c.a.createElement(et.c, null, "Based on other posts you've viewed"))), !n && c.a.createElement($e.f, {
						className: st.a.seeMore,
						"data-redditstyle": !0,
						onClick: o
					}, c.a.createElement(et.c, null, "See more"))))
				},
				rt = s("./src/reddit/constants/page.ts"),
				at = s("./src/reddit/constants/postLayout.ts"),
				it = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ct = s("./src/reddit/helpers/trackers/screenview.ts");
			const dt = e => e.commentsListTruncated;
			var lt = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				mt = s("./src/reddit/selectors/experiments/chatPost.ts"),
				pt = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				ut = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				ht = s("./src/reddit/selectors/monthsToMinutes.ts"),
				bt = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				gt = s("./src/reddit/constants/listings.ts"),
				xt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ct = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ot = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				vt = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				yt = s.n(vt);
			var Et = Object(bt.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldNavigateToHome: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: a
					} = r, i = !o && a || Object(Ot.a)(Object.assign({}, e, {
						redditStyle: !0
					})).button, d = n ? "See more" : "Continue browsing";
					return c.a.createElement(xt.a, {
						className: Object(g.a)(yt.a.footer, t),
						onMouseDown: s,
						to: o ? gt.c[gt.b.Home] : r.url,
						style: {
							backgroundColor: i
						}
					}, c.a.createElement("div", {
						className: yt.a.background
					}), c.a.createElement("div", {
						className: yt.a.layout
					}, o ? c.a.createElement(et.c, null, "See more recommended") : c.a.createElement(et.c, null, d, " in ", c.a.createElement(et.b, {
						name: "subredditName"
					}, r.displayText)), c.a.createElement(Ct.a, {
						className: yt.a.arrow
					})))
				}),
				ft = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				jt = s.n(ft);
			const wt = Object(m.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, dt, lt.b, pt.b, ut.f, (e, t, s, n, o) => {
					const r = Object(pt.a)(n),
						a = !Object(ut.e)(o);
					return !!(t && r && !s || a && !e)
				}),
				Pt = Object(m.c)({
					isChatPost: mt.d,
					isLoggedIn: de.I,
					m2mDataLoaded: ht.d,
					m2mHomeMultiName: ht.e,
					m2mHomeRedirectVariant: ut.f,
					shouldShowHomeUpsell: ht.y,
					shouldShowSubredditUpsell: wt
				});
			class kt extends c.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.scrollContainer = () => this.props.isOverlay ? document.getElementById(V.d) : null, this.onViewed = (e, t) => Object(ct.d)(this.listingKey(), x.N.TOP, t, e, x.Ob.WEEK), this.onFooterClick = e => {
						this.isHomeUpsellVisible() && (e.preventDefault(), this.props.goToHomeFeed()), this.props.sendEvent(Object(it.c)("recommended_footer"))
					}, this.loadMoreHomeFeedPosts = () => {
						const {
							loadMorePosts: e,
							m2mHomeMultiName: t
						} = this.props;
						t && e(t)
					}, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				listingKey() {
					const {
						m2mHomeMultiName: e,
						subredditOrProfile: t
					} = this.props;
					return this.isHomeUpsellVisible() ? Object(Ye.a)(e, x.N.HOT) : Object(Ye.a)(t.name, x.N.TOP, {
						t: x.Ob.WEEK
					})
				}
				renderHomeBanner() {
					return c.a.createElement(ot, {
						borderClassName: jt.a.homeUpsellBannerBorder,
						className: jt.a.homeUpsellBanner,
						onSeeMoreClick: this.props.goToHomeFeed
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return c.a.createElement("div", {
						className: jt.a.smallBanner
					}, c.a.createElement(et.c, null, "More posts from the ", c.a.createElement(et.b, {
						name: "name"
					}, t), " community"))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return c.a.createElement("span", {
						className: jt.a.textBanner
					}, c.a.createElement(et.c, null, "More from ", c.a.createElement(et.b, {
						name: "name"
					}, t)))
				}
				renderBanner() {
					return this.isHomeUpsellVisible() ? this.renderHomeBanner() : this.renderSmallBanner()
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: s,
						m2mDataLoaded: n,
						m2mHomeRedirectVariant: o,
						shouldShowSubredditUpsell: r,
						subredditOrProfile: a
					} = this.props, i = this.isHomeUpsellVisible();
					if (s || t || (!i || !n) && !r) return null;
					const d = i && Object(ut.a)(o);
					return c.a.createElement("div", {
						className: Object(g.a)(jt.a.container, {
							[jt.a.redditStyle]: i
						})
					}, this.renderBanner(), c.a.createElement(Xe.a, {
						className: jt.a.postList,
						redditStyle: i,
						disablePlaceholder: !d,
						forcedLayout: at.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: rt.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: jt.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: d ? this.loadMoreHomeFeedPosts : Je.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !i,
						scrollContentContainerRef: e
					}), !d && c.a.createElement(Et, {
						className: jt.a.footer,
						"data-redditstyle": i,
						onClick: this.onFooterClick,
						shouldNavigateToHome: i,
						subredditOrProfile: a
					}))
				}
			}
			var It = Object(d.b)(Pt, e => ({
					goToHomeFeed: () => e(Object(Qe.b)({
						shouldPrepareData: !1
					})),
					loadMorePosts: t => e(Object(qe.r)({
						sort: x.N.HOT,
						subredditName: t
					}))
				}))(Object(F.b)(kt)),
				St = s("./src/reddit/constants/history.ts"),
				_t = s("./src/reddit/constants/keycodes.ts"),
				Tt = s("./src/reddit/constants/posts.ts"),
				Nt = s("./src/reddit/constants/screenWidths.ts"),
				Lt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Mt = s("./src/reddit/featureFlags/profileCollections.ts"),
				Rt = s("./src/reddit/models/Comment/index.ts"),
				Bt = s("./src/reddit/models/Media/index.ts"),
				At = s("./src/reddit/models/Subreddit/index.ts"),
				Ft = s("./src/reddit/selectors/comments.ts"),
				Dt = s("./src/reddit/selectors/discoveryUnit.ts"),
				Wt = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Ht = s("./src/reddit/selectors/meta.ts"),
				Vt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ut = s("./src/reddit/selectors/subreddit.ts"),
				Kt = s("./src/reddit/selectors/tooltip.ts"),
				Gt = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const zt = Object(w.a)(Gt.a);
			var Jt = s("./src/higherOrderComponents/makeAsync.tsx"),
				Yt = s("./src/lib/loadWithRetries/index.ts"),
				Qt = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				qt = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Xt = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				Zt = s.n(Xt);
			const $t = e => {
					let {
						isTopLevelComment: t,
						children: s
					} = e;
					return c.a.createElement("div", {
						children: s,
						className: Object(g.a)(Zt.a.spacer, {
							[Zt.a.isTopLevelComment]: t
						})
					})
				},
				es = () => c.a.createElement("div", {
					className: Object(g.a)(Zt.a.byline, Object(qt.a)({
						isLoading: !0
					}))
				}),
				ts = Object(Jt.a)({
					ErrorComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return c.a.createElement($t, {
							isTopLevelComment: t
						}, c.a.createElement(es, null), c.a.createElement(Qt.a, {
							isLoading: !1,
							toolbarPosition: "bottom"
						}))
					},
					getComponent: () => Object(Yt.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return c.a.createElement($t, {
							isTopLevelComment: t
						}, c.a.createElement(es, null), c.a.createElement(Qt.a, {
							isLoading: !0,
							toolbarPosition: "bottom"
						}))
					}
				});
			var ss = e => c.a.createElement(ts, e),
				ns = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				os = s("./node_modules/lodash/isEqual.js"),
				rs = s.n(os),
				as = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				is = s("./src/reddit/constants/comments.ts"),
				cs = s("./src/reddit/constants/elementClassNames.ts"),
				ds = s("./src/lib/objectSelector/index.ts"),
				ls = s("./src/reddit/icons/fonts/helpers.tsx"),
				ms = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				ps = s.n(ms);
			var us, hs, bs = v.a.wrapped(e => c.a.createElement("i", {
					className: "".concat(Object(ls.b)("expand"), " ").concat(e.className)
				}), "Expand", ps.a),
				gs = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				xs = s.n(gs),
				Cs = v.a.wrapped(e => c.a.createElement("button", e, c.a.createElement(bs, null)), "Component", xs.a),
				Os = s("./node_modules/lodash/defer.js"),
				vs = s.n(Os),
				ys = s("./src/lib/makeCommentPermalink/index.ts"),
				Es = s("./src/reddit/actions/gold/modals.ts"),
				fs = s("./src/reddit/actions/reportFlow.ts"),
				js = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ws = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ps = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				ks = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				Is = s.n(ks);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(us || (us = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(hs || (hs = {}));
			const Ss = (e, t) => {
					const s = Is.a[t],
						n = Is.a[e];
					return Object(g.a)(s, n)
				},
				_s = e => Object(g.a)(Is.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[Is.a.isInOverlay]: e.isInOverlay,
					[Is.a.isModModeEnabled]: e.isModModeEnabled
				});
			var Ts = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Ns = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Ls = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Ms = s("./src/reddit/selectors/economics.ts");
			const Rs = Object(Jt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var Bs = Object(d.b)(() => Object(m.c)({
					featureEnabled: Ne.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.comments.models[t.contentId];
						return !!s && Object(Ms.i)(e, {
							contentId: s.id,
							subredditId: s.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? c.a.createElement(Rs, e) : null
				})),
				As = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Fs = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ds = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ws = s("./src/reddit/components/ReportFlow/index.tsx"),
				Hs = s("./src/reddit/components/ShareMenu/index.tsx"),
				Vs = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				Us = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ks = s("./src/reddit/helpers/trackers/modTools.ts"),
				Gs = s("./src/reddit/layout/row/Inline/index.tsx"),
				zs = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Js = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ys = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				Qs = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				qs = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Xs = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Zs = s("./src/reddit/icons/fonts/Save/index.tsx"),
				$s = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				en = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				tn = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				sn = s.n(tn);
			const nn = v.a.wrapped(Js.a, "CommentIcon", sn.a),
				on = v.a.wrapped(Xs.a, "Report", sn.a),
				rn = v.a.wrapped(Qs.a, "IgnoreReport", sn.a),
				an = v.a.wrapped(As.a, "ModActionsMenu", sn.a),
				cn = v.a.div("OverflowMenuSpacer", sn.a),
				dn = v.a.wrapped(Ds.a, "DropdownRow", sn.a),
				ln = v.a.wrapped(Gs.a, "Flatlist", sn.a),
				mn = v.a.button("Button", sn.a),
				pn = v.a.wrapped(Ts.c, "ModToolsFlatlist", sn.a),
				un = v.a.wrapped(Vs.a, "ViewReportsDropdown", sn.a),
				hn = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				bn = e => "Distinguish--Dropdown--".concat(e),
				gn = e => "".concat(e, "-overflow-menu"),
				xn = e => "View--Reports--".concat(e),
				Cn = Object(m.c)({
					currentUser: de.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ce.a)(e) === hn(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Kt.b)(bn(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Ft.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Kt.b)(xn(s.id))(e)
					},
					isLoggedIn: de.J,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.D)(e, {
							postId: s.postId
						})
					},
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
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Ft.G)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(Ut.y)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.T)(e, {
							postId: s.postId
						})
					}
				});
			class On extends c.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(it.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ks.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ks.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ks.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(js.d)(js.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ks.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ks.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ks.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ks.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: r,
						isLoggedIn: a,
						isPendingDeletion: d,
						language: l,
						onDistinguishComment: m,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: x,
						postIsArchived: C,
						postIsLocked: O,
						postPermalink: v,
						renderedInOverlay: y,
						sendEvent: E,
						subreddit: f,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: w,
						toggleSendReplies: P,
						trackClick: k
					} = this.props, I = Object(ws.a)(b), S = !!s && s.displayText === e.author, _ = !!s && s.isEmployee, T = !(j && j.userIsBanned) && (O || C || I && a || e.isLocked ? I && a : a), N = Object(Fs.a)(e), L = I && !x && S && !e.bannedBy, M = S && _ && !e.bannedBy, R = L || M, B = s && e.isGildable, A = [];
					T && A.push({
						breakpointGroup: hs.LoggedInUser,
						icon: c.a.createElement(nn, null),
						key: "reply",
						onClick: () => {
							r(), vs()(() => k("reply")())
						},
						text: Object(p.c)("Reply")
					}), s && !S && A.push(c.a.createElement(Bs, {
						className: sn.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), B && A.push({
						breakpointGroup: hs.LoggedInUser,
						icon: c.a.createElement(Ys.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(p.c)("Give Award")
					}), A.push(c.a.createElement(Hs.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(ys.a)(v, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: f
					}, c.a.createElement(mn, {
						onClick: () => this.sendCommentEventWithName("share")
					}, c.a.createElement(et.c, null, "share")))), S || A.push({
						breakpointGroup: hs.LoggedInUser,
						icon: c.a.createElement(Xs.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(p.c)("Report")
					}), A.push({
						breakpointGroup: hs.LoggedInUser,
						icon: e.isSaved ? c.a.createElement(zs.e, null) : c.a.createElement(Zs.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(p.c)("Unsave") : Object(p.c)("Save")
					}), S && A.push({
						breakpointGroup: hs.LoggedInUser,
						icon: c.a.createElement($s.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(p.c)("Edit")
					});
					const F = A.map(e => c.a.isValidElement(e) ? e : c.a.createElement(mn, {
							className: Ss(e.breakpointGroup, us.HideIfVWSmaller),
							disabled: d,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						D = A.map(e => c.a.isValidElement(e) ? null : c.a.createElement(dn, {
							className: Ss(e.breakpointGroup, us.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: sn.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: sn.a.dropdownRowText
						}, e.icon));
					return c.a.createElement(i.Fragment, null, c.a.createElement(ln, {
						className: Object(g.a)(_s({
							depth: o,
							isInOverlay: y,
							isModModeEnabled: I && x
						}), t)
					}, F, c.a.createElement(cn, {
						className: S ? void 0 : Ss(hs.LoggedInUser, us.HideIfVWLarger)
					}, c.a.createElement(Ds.b, {
						className: sn.a.overflowMenu,
						disabled: d,
						dropdownId: gn(e.id),
						onClick: () => E(Object(Ks.a)("comment_overflow_menu", e.id))
					}, D, S && c.a.createElement(c.a.Fragment, null, c.a.createElement(dn, {
						displayText: Object(p.c)("Delete comment"),
						iconWrapperClassName: sn.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: sn.a.dropdownRowText
					}, c.a.createElement(en.b, null)), c.a.createElement(Us.a, {
						text: Object(p.c)("Send me reply notifications"),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && c.a.createElement(Ns.a, {
						actionText: Object(p.c)("delete"),
						cancelActionText: Object(p.c)("keep"),
						headerText: Object(p.c)("Delete comment"),
						modalText: Object(p.c)("Are you sure you want to delete your comment?"),
						onConfirm: n,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), I && c.a.createElement(c.a.Fragment, null, x && c.a.createElement(pn, {
						className: Ss(hs.Moderator, us.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: S,
						language: l
					}), c.a.createElement(an, {
						className: x ? Ss(hs.Moderator, us.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => E(Object(Ks.a)("comment_mod_action_menu", e.id))
					}, c.a.createElement(qs.a, null), c.a.createElement(Ps.a, {
						comment: e,
						language: l,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(Fs.c)(e) && !x && c.a.createElement(Ts.b, {
						text: "".concat(N),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: xn(e.id)
					}, c.a.createElement(un, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: xn(e.id)
					}), e.ignoreReports ? c.a.createElement(rn, null) : c.a.createElement(on, null)), R && c.a.createElement(Ts.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, c.a.createElement(Ts.a, null), c.a.createElement(Ls.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: _,
						isUserMod: I,
						onDistinguishComment: m,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: bn(e.id)
					}))), this.props.reportFlowIsOpen && c.a.createElement(Ws.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Ws.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var vn = Object(d.b)(Cn, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n,
						language: o
					} = t;
					return {
						deleteComment: () => n && e(Object(j.db)(o, s.id, s.postId)),
						handleDelete: () => {
							e(Object($.i)(hn(s.id))), e(Object(N.g)({
								tooltipId: gn(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(j.V)({
								commentId: s.id,
								draftKey: Object(E.a)(u.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(j.ob)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onDistinguishComment: (t, n) => e(Object(j.S)(s.id, t, n)),
						onGildClick: () => e(Object(Es.d)(s.id)),
						onIgnoreReports: () => e(Object(j.pb)(s.id)),
						onReportClick: () => e(Object(fs.j)(s.id)),
						onToggleSave: () => e(Object(j.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.g)({
							tooltipId: bn(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.g)({
							tooltipId: xn(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object($.i)(hn(s.id))),
						toggleSendReplies: () => e(Object(j.hb)(s.id))
					}
				})(Object(F.b)(On)),
				yn = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				En = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				fn = s("./src/reddit/components/GildModal/Loader.tsx"),
				jn = s("./src/reddit/components/ModModeReports/index.tsx"),
				wn = s("./src/reddit/components/RichTextJson/index.tsx"),
				Pn = s("./src/reddit/components/VerticalVotes/index.tsx"),
				kn = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				In = s("./src/reddit/constants/componentTestIds.ts"),
				Sn = s("./src/reddit/controls/ErrorText/index.tsx"),
				_n = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Tn = s("./src/reddit/models/Vote/index.ts"),
				Nn = s("./src/reddit/selectors/gild.ts"),
				Ln = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				Mn = s("./src/reddit/selectors/moderatingComments.ts"),
				Rn = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Bn = s.n(Rn);

			function An() {
				return (An = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Fn = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Dn = v.a.wrapped(Cs, "ExpandButton", Bn.a),
				Wn = v.a.wrapped(Sn.b, "ErrorText", Bn.a),
				Hn = v.a.wrapped(Pn.a, "VerticalVotes", Bn.a),
				Vn = v.a.wrapped(yn.a, "TopMeta", Bn.a),
				Un = v.a.div("CommentContentWrapper", Bn.a),
				Kn = v.a.div("CommentWrapper", Bn.a),
				Gn = v.a.div("CommentBody", Bn.a),
				zn = v.a.wrapped(ss, "CommentCreation", Bn.a),
				Jn = v.a.wrapped(zn, "EditCommentForm", Bn.a),
				Yn = Object(U.t)(),
				Qn = Object(d.b)(() => Object(m.c)({
					comment: (e, t) => Object(Ft.n)(e, t),
					currentProfileModPermissions: U.g,
					depth: (e, t) => Object(Ft.j)(e, t),
					collapsed: Mn.b,
					collapsedBecauseCrowdControl: Mn.a,
					flair: Ft.e,
					focused: Ft.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(En.b)(s);
						return Object(Nn.c)(e, n)
					},
					isEditing: Ft.z,
					isLoggedIn: de.J,
					isPendingDeletion: Ft.A,
					language: de.S,
					moderatorPermissions: (e, t) => {
						const s = Object(Ft.n)(e, t);
						return s ? Object(Vt.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					modModeEnabled: U.O,
					errorMsgs: Ft.E,
					replyFormOpen: Ft.H,
					subreddit: U.q,
					subredditType: Ft.J,
					highlightComment: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(Ft.q)(e);
						if (n === Ln.a.None) return !1;
						const o = Object(Ft.n)(e, {
							commentId: s
						});
						if (!o) return !1;
						const r = Object(de.q)(e),
							a = !!Object(Vt.i)(e, {
								postId: o.postId
							}),
							i = Object(Q.I)(e, {
								postId: o.postId
							});
						if (!i || !i.previousVisits || i.previousVisits.length < 1) return !1;
						const c = n === Ln.a.Last ? i.previousVisits[i.previousVisits.length - 1] : i.previousVisits[0];
						return (a || r) && o.created > c
					}
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(j.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(j.pb)(s)),
						onVoteClick: t => {
							const [n, o] = t === Tn.a.upvoted ? [Object(j.rb)(s), "upvote_comment"] : [Object(j.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				qn = Object(ds.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Xn = Yn(Qn(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: r,
						collapsedBecauseCrowdControl: a,
						currentProfileModPermissions: d,
						depth: l,
						errorMsgs: m,
						flair: h,
						focused: b,
						gildModalIsOpen: x,
						highlightComment: C,
						isActive: O,
						isEditing: v,
						isLoggedIn: y,
						isPendingDeletion: f,
						language: w,
						moderatorPermissions: P,
						modModeEnabled: k,
						onCollapseClick: I,
						onIgnoreReports: S,
						onLineMouseOver: _,
						onVoteClick: T,
						replyFormOpen: N,
						subreddit: M,
						trackClick: R,
						renderedInOverlay: B,
						subredditType: A
					} = e, F = !v && !n.isDeleted && !!m && m.length > 0, D = Object(E.a)(u.c.edit, n.id), W = Object(E.a)(u.c.replyToComment, n.id), H = Object(ws.a)(P), V = n.authorIsContractor && A === At.c.EmployeesOnly, U = n.isLocked;
					return c.a.createElement(Kn, {
						className: Object(g.a)("Comment ".concat(n.id), {
							[Bn.a.focused]: b,
							[Bn.a.topLevel]: !l
						})
					}, r && c.a.createElement(Dn, {
						className: n.id,
						onClick: () => {
							s(), I(), R("collapse")()
						},
						onMouseOver: () => _(n.id),
						onMouseOut: s
					}), !r && !n.isDeleted && c.a.createElement(Hn, {
						compact: !0,
						downvoteButtonClassName: Bn.a.voteButton,
						downvoteClassName: Bn.a.upDownVote,
						model: n,
						onVoteClick: T,
						upvoteButtonClassName: Bn.a.voteButton,
						upvoteClassName: Bn.a.upDownVote
					}), c.a.createElement(Un, {
						className: Object(g.a)({
							[Bn.a.highlightComment]: C,
							[Bn.a.isActive]: O,
							[Bn.a.isCollapsed]: r,
							[Bn.a.isLocked]: U,
							[Bn.a.isPendingDeletion]: f,
							[Bn.a.isRemoved]: !!n.bannedBy
						})
					}, c.a.createElement(_n.a, null, Object(L.a)(w, "comment.level", {
						level: l + 1
					})), c.a.createElement(Vn, {
						childrenInfo: t,
						className: Object(g.a)({
							[Bn.a.collapsed]: r
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: a,
						comment: n,
						commentsPageKey: o,
						flair: h,
						language: w,
						renderedInOverlay: B,
						renderContractorBadge: V
					}), !r && c.a.createElement(i.Fragment, null, v && c.a.createElement(Jn, {
						autofocus: !0,
						commentsPageKey: o,
						depth: l,
						draftType: u.c.edit,
						draftKey: D,
						rtJson: Object(kn.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(j.eb)({
							language: w,
							id: n.id,
							commentsPageKey: o,
							depth: l,
							draftKey: D,
							formData: e
						}),
						submitButtonText: Object(p.c)("save edits")
					}), !v && !n.isDeleted && c.a.createElement(Gn, {
						"data-test-id": In.d
					}, c.a.createElement(wn.a, {
						content: Object(kn.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: qn(e)
					})), k && H && Object(Fs.c)(n) && c.a.createElement(jn.a, {
						language: w,
						onIgnoreReports: S,
						reportable: n
					}), !v && !n.isDeleted && y && c.a.createElement(vn, {
						comment: n,
						commentsPageKey: o,
						depth: l,
						language: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: k,
						moderatorPermissions: d || P,
						renderedInOverlay: B,
						subreddit: M,
						trackClick: R
					}), F && m.map(e => c.a.createElement(Wn, {
						language: w
					}, e)), N && c.a.createElement(zn, {
						autofocus: !0,
						commentsPageKey: o,
						depth: l,
						draftType: u.c.replyToComment,
						draftKey: W,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = Fn(e, ["validate"]);
							return s ? Object(j.sb)({
								commentsPageKey: o,
								draftKey: W,
								language: w,
								parentCommentDepth: l,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(j.jb)({
								commentsPageKey: o,
								draftKey: W,
								language: w,
								parentCommentDepth: l,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: Object(p.c)("Reply")
					}))), x && c.a.createElement(fn.a, null))
				}));
			var Zn = e => c.a.createElement(Lt.a.Consumer, null, t => c.a.createElement(Xn, An({}, e, {
					trackClick: t
				}))),
				$n = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				eo = s("./src/reddit/contexts/InsideOverlay.tsx"),
				to = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				so = s.n(to);
			const no = v.a.div("Wrapper", so.a),
				oo = v.a.wrapped(Ct.a, "ArrowRight", so.a),
				ro = v.a.wrapped($n.a, "LinkOrOverlayLink", so.a),
				ao = v.a.span("HoverSpan", so.a),
				io = Object(m.c)({
					language: de.S,
					permalink: (e, t) => Object(Ft.m)(e, {
						commentId: Object(Ft.s)(e, t).parentId
					})
				});
			var co = Object(d.b)(io)(Object(eo.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return c.a.createElement(no, {
						className: Object(g.a)({
							[so.a.isActive]: t
						})
					}, c.a.createElement(ro, {
						isOverlay: !!s,
						to: Object(oe.b)(n)
					}, c.a.createElement(ao, null, c.a.createElement(et.c, null, "Continue this thread")), " ", c.a.createElement(oo, null)))
				})),
				lo = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				mo = s.n(lo);
			const po = v.a.div("MoreCommentsItemWrapper", mo.a),
				uo = v.a.p("MoreComments", mo.a),
				ho = v.a.wrapped(uo, "MoreCommentsInteractive", mo.a),
				bo = Object(m.c)({
					moreCommentsItem: Ft.B,
					moreCommentsPending: Ft.C,
					language: de.S
				});
			var go = Object(d.b)(bo, (e, t) => ({
					moreCommentsClicked: () => e(Object(j.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						language: t,
						isActive: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r
					} = e;
					return c.a.createElement(po, null, r ? c.a.createElement(uo, null, c.a.createElement(et.c, null, "loading...")) : c.a.createElement(Lt.a.Consumer, null, e => c.a.createElement(ho, {
						className: Object(g.a)({
							[mo.a.isActive]: s
						}),
						onClick: () => {
							n(), e("load_more_comment")()
						}
					}, Object(L.c)(t, "comment.moreReply", o.numComments, {
						numComments: o.numComments
					}))))
				}),
				xo = s("./node_modules/lodash/times.js"),
				Co = s.n(xo),
				Oo = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				vo = s.n(Oo);
			const yo = v.a.wrapped(e => c.a.createElement("div", e, c.a.createElement("i", {
					className: cs.n
				})), "Line", vo.a),
				Eo = v.a.div("LineContainer", vo.a),
				fo = v.a.div("ShortLineContainer", vo.a);
			var jo = e => {
					const {
						collapsed: t,
						depth: s,
						onLineClick: n,
						onLineMouseOver: o,
						onLineMouseOut: r,
						onShortLineClick: a,
						parentNodeIds: i,
						type: d
					} = e;
					return c.a.createElement(Eo, null, Co()(s + 1, e => e === s ? d !== is.a.Comment || t ? null : c.a.createElement(fo, {
						key: i[e]
					}, c.a.createElement(yo, {
						className: i[e],
						onClick: a,
						onMouseOver: () => o(i[e]),
						onMouseOut: () => r(i[e])
					})) : c.a.createElement(yo, {
						className: i[e],
						key: i[e],
						onClick: n(e),
						onMouseOver: () => o(i[e]),
						onMouseOut: () => r(i[e])
					})))
				},
				wo = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Po = s.n(wo);
			const ko = v.a.div("CommentListNodeWrapper", Po.a),
				Io = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(cs.g)
				},
				So = () => {
					const e = document.querySelectorAll(".".concat(cs.g));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(cs.g)
				};
			var _o = Object(d.b)(() => Object(m.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(Mn.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(Ft.l)(e, t),
				depth: (e, t) => Object(Ft.j)(e, t),
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isCommentHighlightExperiment: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(Ft.l)(e, {
						commentLink: s
					});
					return s.type === is.a.Comment && !!n && !!n.awardCountsById && !!Object(as.a)(e)
				},
				isNightmodeOn: de.U
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(j.K)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(j.nb)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: a,
					isActive: i,
					isCommentHighlightExperiment: d,
					isHidden: l,
					isNightmodeOn: m,
					onLineClick: p,
					onShortLineClick: u,
					parentNodeIds: h,
					renderedInOverlay: b,
					scrollToAndRemeasure: x
				} = e;
				return c.a.createElement(ko, {
					className: Object(g.a)(s, {
						[Po.a.isHidden]: l,
						[Po.a.isAwarded]: d,
						[Po.a.isNightmodeOn]: m
					}),
					id: o.id,
					style: {
						paddingLeft: a * (H.x + H.w) + (o.type === is.a.Comment ? H.x : 0)
					},
					tabIndex: -1
				}, c.a.createElement(jo, {
					collapsed: n,
					depth: a,
					onLineClick: p,
					onLineMouseOver: Io,
					onLineMouseOut: So,
					onShortLineClick: u,
					type: o.type,
					parentNodeIds: h
				}), To({
					childrenInfo: t,
					clearHovered: So,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: Io,
					isActive: i,
					renderedInOverlay: b,
					scrollToAndRemeasure: x
				}))
			});
			const To = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					isActive: r,
					onLineMouseOver: a,
					renderedInOverlay: i,
					scrollToAndRemeasure: d
				} = e;
				switch (n.type) {
					case is.a.Comment:
						return c.a.createElement(Zn, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							isActive: r,
							onLineMouseOver: a,
							renderedInOverlay: i,
							scrollToAndRemeasure: d
						});
					case is.a.MoreComments:
						return c.a.createElement(go, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: n.id
						});
					case is.a.ContinueThread:
						return c.a.createElement(co, {
							id: n.id,
							isActive: r
						})
				}
			};
			var No = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Lo = s("./src/reddit/components/Comments/States/index.tsx"),
				Mo = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ro = s("./src/reddit/helpers/commentList/index.ts"),
				Bo = s("./src/lib/LRUCache/index.ts"),
				Ao = s("./src/reddit/components/Comments/index.m.less"),
				Fo = s.n(Ao);
			const Do = H.g + 10,
				Wo = 65,
				Ho = v.a.wrapped(Mo.b, "Scroller", Fo.a),
				Vo = Object(m.c)({
					allCollapsed: Ft.a,
					commentLinks: Ft.k,
					commentThreadLinkSet: Ft.p,
					language: de.S,
					measureScrollFPS: Ne.d.measureScrollFPS,
					moreComments: Ft.b,
					postPermalink: Q.H
				}),
				Uo = Object(d.b)(Vo, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(j.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(j.Q)(t, s))
				})),
				Ko = new Bo.a(500),
				Go = new Bo.a(500),
				zo = (e, t) => {
					const s = "entered-".concat(e);
					let n = Ko.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, Ko.set(s, n)), n
				},
				Jo = (e, t) => {
					const s = "left-".concat(e);
					let n = Go.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, Go.set(s, n)), n
				};
			class Yo extends c.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							a = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = a.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, No.c(), this.childrenInfoMap = {}
				}
				componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && h.c.cancel(this.timerId), e.length && (this.timerId = h.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(h.b)(x.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: h.c.end(this.timerId)
					})
				}
				componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !rs()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !rs()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				componentWillUpdate(e) {
					this.timerId && h.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = h.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(h.b)(x.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: h.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && h.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						a = 0,
						i = !1;
					No.c();
					for (let c = 0; c < e.length; c++) {
						const d = e[c];
						o && (s[d.id].depth > r ? (No.a(d.id), a += Object(Ro.d)(d, n), d.type === is.a.ContinueThread && (i = !0)) : (this.childrenInfoMap[o] = {
							numChildren: a,
							hasContinueThread: i
						}, o = null, r = 1 / 0, a = 0, i = !1)), !o && t[d.id] && (o = d.id, r = s[d.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						renderedInOverlay: r
					} = this.props, a = zo(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), i = Jo(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: No.b(e.id) ? 0 : Wo,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: i,
						render: t => {
							let {
								placeholderRecommended: n,
								height: o,
								width: a,
								scrollToAndRemeasure: i
							} = t;
							return n ? c.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : c.a.createElement(_o, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isHidden: No.b(e.id),
								scrollToAndRemeasure: i,
								renderedInOverlay: !!r,
								parentNodeIds: this.getParentNodeIds(e)
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						renderedInOverlay: o
					} = this.props;
					let r;
					if (n) {
						r = "comments-".concat(o ? "lightbox" : "page")
					}
					const a = t.map((e, t) => this.getScrollChild(e, t));
					return c.a.createElement(Ho, {
						className: Object(g.a)(Fo.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(V.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Do,
						trackingName: r
					}, a)
				}
				renderEmptyState() {
					return this.props.commentId ? c.a.createElement(Lo.g, {
						link: this.props.postPermalink
					}) : c.a.createElement(Lo.c, null)
				}
			}
			var Qo = Uo(Yo),
				qo = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Xo = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Zo = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./src/reddit/actions/post.ts")),
				$o = s("./src/reddit/actions/toaster.ts"),
				er = s("./src/lib/makeApiRequest/index.ts"),
				tr = s("./src/lib/omitHeaders/index.ts"),
				sr = s("./src/reddit/constants/headers.ts"),
				nr = s("./src/reddit/models/Toast/index.ts");
			const or = (e, t) => async (s, n, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, s) => Object(er.b)(Object(tr.a)(e, [sr.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: x.bb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					c = "success-block-".concat(t);
				if (a.ok) {
					s(Object(Zo.E)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? Object(p.c)("Suggested sort is on.") : Object(p.c)("Suggested sort is off.");
					s($o.e({
						id: c,
						kind: nr.b.SuccessCommunityGreen,
						text: n
					}))
				} else s($o.e({
					id: i,
					kind: nr.b.Error,
					text: Object(p.c)("Try again later"),
					buttonText: Object(p.c)("Retry"),
					buttonAction: or(e, t)
				}))
			};
			var rr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ar = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ir = s("./src/reddit/controls/Dropdown/index.tsx"),
				cr = s("./src/reddit/controls/Dropdown/Row.tsx"),
				dr = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				lr = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const mr = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(lr.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(lr.userSubreddit)(r)
				}),
				pr = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				ur = e => ({
					subreddit: Object(lr.subreddit)(e),
					userSubreddit: Object(lr.userSubreddit)(e)
				}),
				hr = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, ur);
			var br = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				gr = s("./src/reddit/icons/svgs/Info/index.tsx"),
				xr = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				Cr = s.n(xr);
			const Or = Object(ar.a)(ir.a),
				vr = v.a.wrapped(br.b, "DropdownTriangle", Cr.a),
				yr = v.a.div("HighlightWrapper", Cr.a),
				Er = v.a.div("Title", Cr.a),
				fr = e => e === Ln.a.First ? Object(p.c)("First Visit") : e === Ln.a.Last ? Object(p.c)("Last Visit") : "None";
			class jr extends c.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== Ln.a.None) {
							e(t === Ln.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", Ln.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", Ln.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", Ln.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentWillUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return c.a.createElement(yr, null, c.a.createElement(Er, {
						onClick: s
					}, Object(p.c)("highlight comments since")), c.a.createElement(cr.b, {
						className: Object(g.a)(Cr.a.HighlightPicker, Cr.a.Row),
						displayText: fr(n),
						id: t,
						onClick: s
					}), c.a.createElement(vr, {
						onClick: s
					}), c.a.createElement(Or, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, c.a.createElement(cr.b, {
						displayText: fr(Ln.a.First),
						isSelected: n === Ln.a.First,
						onClick: this.onDropdownClickFirst
					}), c.a.createElement(cr.b, {
						displayText: fr(Ln.a.Last),
						isSelected: n === Ln.a.Last,
						onClick: this.onDropdownClickLast
					}), c.a.createElement(cr.b, {
						displayText: fr(Ln.a.None),
						isSelected: n === Ln.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var wr = jr;
			const Pr = "CommentSort--SortPicker",
				kr = "CommentSort--HighlightPicker",
				Ir = "CommentSort--Tooltip",
				Sr = Object(ar.a)(ir.a),
				_r = v.a.button("ContestMode", Cr.a),
				Tr = v.a.wrapped(br.b, "DropdownTriangle", Cr.a),
				Nr = v.a.wrapped(gr.a, "Info", Cr.a),
				Lr = v.a.wrapped(cr.b, "Row", Cr.a),
				Mr = v.a.button("SetSort", Cr.a),
				Rr = v.a.button("SortLink", Cr.a),
				Br = v.a.div("Title", Cr.a),
				Ar = v.a.wrapped(dr.a, "ToggleSwitch", Cr.a),
				Fr = v.a.wrapped($n.a, "ViewFullLinkOrOverlayLink", Cr.a),
				Dr = v.a.wrapped(rr.c, "Tooltip", Cr.a),
				Wr = Object(m.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(Ft.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: Q.A,
					contestModeModalIsOpen: Object(ce.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(Kt.b)(Pr),
					highlightIsOpen: Object(Kt.b)(kr),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Vt.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: Q.H,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(de.q)(e),
							o = !!Object(Vt.i)(e, {
								postId: s
							}),
							r = Object(Q.I)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: Ft.q
				});
			class Hr extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(mr(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(pr("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(hr(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						contestModeIsEnabled: o,
						dropdownIsOpen: r,
						elementRef: a,
						hideTooltip: i,
						highlightIsOpen: d,
						hasModeratorPostPermissions: l,
						isOverlay: m,
						location: u,
						postPermalink: h,
						selectedHighlightSort: b,
						showCommentHighlighter: C,
						sort: O,
						suggestedSort: v,
						showTooltip: y,
						toggleContestModeModal: E
					} = this.props, f = !u.search.includes(x.q.CONFIDENCE), j = O === x.q.CONFIDENCE && f, w = l && !j, P = Object(p.c)(" (suggested)"), k = v && O === v && !j ? x.s[O] + P : x.s[O], I = o ? Object(p.c)("End contest mode?") : Object(p.c)("Start contest?"), S = o ? Object(p.c)("End") : Object(p.c)("Start"), _ = o ? Object(p.c)("Ending contest mode will make comment vote scores visible and disable random comment ordering.") : Object(p.c)("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods."), T = o && !l;
					return c.a.createElement("div", {
						className: Object(g.a)(t, Cr.a.container, {
							[Cr.a.hideCommentSort]: !C && T
						}),
						ref: a
					}, !T && c.a.createElement(Br, {
						onClick: this.onOpenDropdownClick
					}, Object(p.c)("Sort by")), !T && c.a.createElement(c.a.Fragment, null, c.a.createElement(Lr, {
						className: Object(g.a)(Cr.a.SortPicker, Cr.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: k,
						id: Pr,
						noHover: !0,
						skipRoleAttr: !0
					}), c.a.createElement(Tr, {
						onClick: this.onOpenDropdownClick
					}), c.a.createElement(Sr, {
						isOpen: r,
						tooltipId: Pr
					}, [x.q.CONFIDENCE, x.q.TOP, x.q.NEW, x.q.CONTROVERSIAL, x.q.OLD, x.q.QA].map(e => {
						const t = s || h,
							n = Object(oe.b)(t);
						return c.a.createElement(Fr, {
							isOverlay: m,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, c.a.createElement(cr.b, {
							displayText: v && e === v ? x.s[e] + P : x.s[e],
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), w && !T && (v ? c.a.createElement(Rr, {
						onClick: O !== v ? this.setSortOnClick : this.clearSortOnClick
					}, O !== v ? Object(p.c)("Set new suggested sort") : Object(p.c)("Clear suggested sort")) : c.a.createElement(Mr, null, c.a.createElement(Rr, {
						onClick: this.setSortOnClick
					}, Object(p.c)("Set as suggested sort")), c.a.createElement("span", {
						id: Ir,
						onMouseEnter: y,
						onMouseLeave: i
					}, c.a.createElement(Dr, {
						text: Object(p.c)("Suggested sort defaults Redditors to a specific way of sorting comments within this post"),
						tooltipId: Ir
					}), c.a.createElement(Nr, null)))), l && c.a.createElement(_r, {
						onClick: this.props.toggleContestModeModal
					}, Object(p.c)("Contest"), c.a.createElement(Ar, {
						on: o
					})), C && c.a.createElement(wr, {
						changeHighlightSort: e,
						highlightIsOpen: d,
						id: kr,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: b,
						trackHighlight: pr
					}), n && c.a.createElement(Ns.a, {
						actionText: S,
						headerText: I,
						modalText: _,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			var Vr = Object(d.b)(Wr, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(j.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(N.g)({
							tooltipId: Pr
						})),
						onOpenHighlightDropdown: t => {
							e(Object(N.g)({
								tooltipId: kr
							})), t()
						},
						onSetSuggestedSort: t => e(or(s, t)),
						hideTooltip: () => e(Object(N.h)()),
						setContestMode: t => e(Object(Zo.I)(t, s)),
						showTooltip: () => e(Object(N.g)({
							tooltipId: Ir
						})),
						toggleContestModeModal: () => e(Object($.i)("CommentSort--ContestMode--Modal"))
					}
				})(Object(F.b)(Hr)),
				Ur = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				Kr = s("./src/reddit/components/Governance/CommunityCard/index.tsx");
			var Gr = Object(Jt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("GovernanceLeaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")).then(e => e.default)
				}),
				zr = s("./src/reddit/components/IdCard/async.tsx"),
				Jr = s("./src/reddit/components/SidebarPostList/index.tsx"),
				Yr = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Qr = s("./src/reddit/helpers/name/index.ts"),
				qr = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Xr = s("./src/reddit/components/M2M/SidebarPostFeed/index.m.less"),
				Zr = s.n(Xr);
			const $r = Object(m.a)((e, t) => t.subredditName, ht.z, ht.e, (e, t, s) => t ? Object(Ye.a)(s, x.N.HOT) : Object(Ye.a)(e, x.N.TOP)),
				ea = Object(m.c)({
					discoveryUnit: ht.x,
					listingKey: $r,
					m2mDataLoaded: ht.d,
					m2mHomeMultiName: ht.e,
					posts: (e, t) => {
						const s = $r(e, t);
						return Object(Q.N)(e, {
							listingKey: s
						})
					},
					shouldShowHomeUpsell: ht.z,
					subreddit: Ut.B
				});
			class ta extends c.a.Component {
				constructor(e) {
					super(e), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(qr.g)(e, t))
					}, this.trackTitleSubredditClicked = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(qr.H)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(qr.w)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(qr.B)(t, e, void 0, s))
					}, this.trackFooterClicked = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(qr.t)(e, t))
					}, this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.onFooterClick = e => {
						const {
							goToHomeFeed: t
						} = this.props;
						this.isHomeUpsellVisible() && (e.preventDefault(), t()), this.trackFooterClicked()
					}, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						m2mDataLoaded: n,
						m2mHomeMultiName: o,
						posts: r,
						subreddit: a,
						subredditName: i
					} = this.props;
					if (!n || !a || 0 === r.length) return null;
					const d = this.isHomeUpsellVisible(),
						l = Object(Qr.b)(a && (a.displayText || a.name) || i),
						m = d ? o : i;
					return c.a.createElement(Yr.a, {
						className: t,
						contentOnly: !0,
						redditStyle: d
					}, d ? c.a.createElement(ot, {
						isCompact: !0
					}) : c.a.createElement("div", {
						className: Zr.a.subredditTitle
					}, c.a.createElement(et.c, null, "Top posts in "), c.a.createElement(xt.a, {
						className: Zr.a.subredditLink,
						onMouseDown: this.trackTitleSubredditClicked,
						to: a.url
					}, l)), c.a.createElement(Jr.a, {
						className: Zr.a.posts,
						listingKey: s,
						listingName: m || "",
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed
					}, c.a.createElement("div", {
						className: Zr.a.ad
					}, e)), c.a.createElement(Et, {
						className: Zr.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: !0,
						shouldNavigateToHome: d,
						subredditOrProfile: a
					}))
				}
			}
			var sa = Object(d.b)(ea, e => ({
					goToHomeFeed: () => e(Object(Qe.b)({
						shouldPrepareData: !1
					}))
				}))(Object(F.b)(ta)),
				na = s("./src/reddit/components/ProfileIdCard/index.tsx"),
				oa = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx"),
				ra = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			var aa = Object(d.b)((e, t) => {
					let {
						postId: s,
						commentsPageKey: n
					} = t;
					return {
						canShowAd: Object(Le.a)(e, {
							postId: s
						}) && !Object(de.y)(e),
						waitForProgrammatic: Object(Ft.d)(e, {
							commentsPageKey: n
						})
					}
				})(e => {
					var {
						canShowAd: t,
						postId: s,
						commentsPageKey: n
					} = e, o = ra(e, ["canShowAd", "postId", "commentsPageKey"]);
					return t ? c.a.createElement(oa.a, o) : null
				}),
				ia = s("./src/reddit/components/SidebarFooter/index.tsx"),
				ca = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				da = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				la = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				ma = s.n(la);
			const pa = v.a.div("Rule", ma.a),
				ua = v.a.div("RuleIndex", ma.a),
				ha = v.a.div("RuleTitle", ma.a),
				ba = ["Keep language civil", "Comments must be relevant to the Promoted Post and contribute to discussion", "Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", "No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post"];
			var ga = e => c.a.createElement(Yr.a, {
					className: e.className,
					title: Object(p.c)("Rules for Reddit Ads"),
					redditStyle: !0
				}, ba.map((e, t) => c.a.createElement(pa, {
					key: t
				}, c.a.createElement(ua, null, t + 1, "."), c.a.createElement(ha, null, Object(p.c)(e))))),
				xa = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Ca = s("./src/reddit/featureFlags/component.tsx"),
				Oa = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				va = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				ya = s.n(va);
			const Ea = Object(Ca.a)("spPoints", Kr.a),
				fa = Object(Ca.a)("spLeaderboard", Gr),
				ja = Object(m.c)({
					isLoggedIn: de.J,
					m2mHomeRedirectVariant: ut.f,
					postSEOV2IdCardVariant: Wt.i,
					shouldShowHomeUpsell: ht.z,
					widgets: Object(ds.a)(Ut.u)
				});
			class wa extends c.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.state = {
						isMounted: !1,
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !rs()(this.props.widgets, e.widgets)
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						postSEOV2IdCardVariant: r
					} = this.props, a = !Object(Wt.a)(r) && !Object(Wt.e)(r);
					return s ? c.a.createElement(c.a.Fragment, null, c.a.createElement(aa, {
						postId: o.id,
						isOverlay: s,
						listingName: n,
						placement: x.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: Oa.a.BOTTOM,
						refreshKey: o.id,
						sizes: x.m,
						commentsPageKey: t
					}), c.a.createElement(ia.a, null)) : c.a.createElement(da.a, {
						adComponent: a ? c.a.createElement(aa, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: x.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: Oa.a.BOTTOM,
							refreshKey: o.id,
							sizes: x.m,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: n,
						m2mHomeRedirectVariant: o,
						post: r,
						postSEOV2IdCardVariant: a,
						subredditId: i,
						subredditName: d,
						widgets: l
					} = this.props;
					let m = 0;
					const p = Object(Wt.a)(a) || Object(Wt.e)(a),
						u = Object(z.l)(r) && Object(ut.e)(o),
						h = this.isHomeUpsellVisible(),
						b = c.a.createElement(aa, {
							postId: r.id,
							redditStyle: h,
							isOverlay: n,
							listingName: d,
							placement: x.c.ABOVE_THE_FOLD,
							placementIndex: m++,
							position: Oa.a.FIRST,
							refreshKey: r.id,
							sizes: x.h,
							commentsPageKey: t
						});
					return c.a.createElement("div", {
						className: Object(g.a)(ya.a.outerWrapper, e)
					}, Object(z.j)(r) ? c.a.createElement(na.a, {
						profileName: d,
						isOverlay: n || !1
					}) : c.a.createElement(zr.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: p
					}), u && c.a.createElement(ca.a, null, c.a.createElement(sa, {
						"data-redditstyle": h,
						isOverlay: n,
						subredditName: d
					}, c.a.createElement("div", {
						className: ya.a.inFeedAd
					}, b))), c.a.createElement(Ur.a, {
						className: ya.a.communityTipJar,
						subredditId: i
					}), c.a.createElement(Ea, {
						className: ya.a.communityTokens,
						subredditId: i,
						uniqueId: r.id
					}), c.a.createElement(fa, {
						className: ya.a.leaderboard,
						subredditId: i,
						uniqueId: r.id
					}), !u && b, s && l.map((e, t) => c.a.createElement(ca.a, {
						key: "widgetSpacer".concat(t)
					}, c.a.createElement(xa.a, {
						subredditName: d,
						widget: e
					}))), r.isSponsored && c.a.createElement(ca.a, null, c.a.createElement(ga, null)), this.renderFooter(m++))
				}
			}
			var Pa = Object(d.b)(ja)(wa),
				ka = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				Ia = s.n(ka);
			const {
				fbt: Sa
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _a = 3, Ta = Object(m.c)({
				hasDismissedTruncation: lt.b,
				isLoggedIn: de.I,
				isPostSEOEligible: Wt.d,
				listingBelowAllVariant: pt.b,
				m2mHomeRedirectVariant: ut.f,
				postSEOV2TruncatedVariant: Wt.j,
				shouldShowHomeUpsell: ht.y
			}), Na = Object(d.b)(Ta), La = e => e.shouldShowHomeUpsell ? "1000px" : "500px";
			class Ma extends c.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: o,
						innerRef: r,
						isCommentsListTruncated: a,
						isLoggedIn: i,
						isOverlay: d,
						listingBelowAllVariant: l,
						m2mHomeRedirectVariant: m,
						numberOfComments: p,
						onClick: u,
						subredditOrProfile: h
					} = this.props, b = this.isHomeUpsellVisible(), x = !i, C = !Object(ut.e)(m) && b, O = Object(pt.a)(l), v = !(!h || Object(At.e)(h)), y = a && v && (p >= _a && (!d || b) || O && !o) && (C || O || x), E = y && !e, f = y ? Ia.a.TruncatedComments : "";
					return c.a.createElement("div", {
						onClick: u,
						ref: r
					}, c.a.createElement("div", {
						className: Object(g.a)(Ia.a.ContentWrapper, s, f),
						style: {
							"--commentswrapper-gradient-color": Object(Ot.a)(this.props).body,
							maxHeight: y ? La(Object.assign({}, this.props, {
								shouldShowHomeUpsell: b,
								shouldTruncateComments: y
							})) : "unset"
						}
					}, t), E && c.a.createElement($e.f, {
						className: Ia.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, b ? Sa._("Load more responses", null, {
						hk: "3ZM07I"
					}) : Sa._("View entire discussion ({number of comments} comments)", [Sa._param("number of comments", Object(X.b)(p))], {
						hk: "2OrRQp"
					})))
				}
			}
			var Ra = Object(bt.a)(Na(Ma)),
				Ba = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Aa = Object(Jt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx")).then(e => e.default)
			});
			const Fa = Object(m.c)({
				featureEnabled: Ne.d.spTopTippers
			});
			var Da = Object(d.b)(Fa)((function(e) {
					const {
						featureEnabled: t
					} = e, s = Ba(e, ["featureEnabled"]);
					return e.featureEnabled ? c.a.createElement(Aa, s) : null
				})),
				Wa = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Ha = Object(Jt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx")).then(e => e.default)
			});
			const Va = Object(m.c)({
				featureEnabled: Ne.d.spTopTippers
			});
			var Ua = Object(d.b)(Va)((function(e) {
					const {
						featureEnabled: t
					} = e, s = Wa(e, ["featureEnabled"]);
					return e.featureEnabled ? c.a.createElement(Ha, s) : null
				})),
				Ka = s("./src/reddit/components/HeaderImage/index.tsx"),
				Ga = s("./src/reddit/components/Hovercards/helpers.ts"),
				za = s("./src/reddit/constants/colors.ts"),
				Ja = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				Ya = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Qa = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				qa = s.n(Qa),
				Xa = () => c.a.createElement(Ya.a, {
					className: qa.a.BannerBase,
					color: za.a.locked,
					icon: c.a.createElement(Ja.a, {
						className: qa.a.ArchivedIcon
					}),
					subtitle: Object(p.c)("New comments cannot be posted and votes cannot be cast"),
					title: Object(p.c)("This thread is archived")
				}),
				Za = s("./src/lib/linkMatchers/customLinks.ts"),
				$a = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				ei = s.n($a);
			const ti = c.a.createElement(e => c.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			})), {
				className: ei.a.lockIcon
			});
			var si = e => {
					let {
						subredditOrProfile: t
					} = e;
					const s = t ? Object(p.c)("This thread has been locked by the moderators of ".concat(Object(p.b)("communityname", (e => Object(At.e)(e) ? Za.d.profile : Za.d.subreddit)(t) + t.name))) : Object(p.c)("This thread has been locked");
					return c.a.createElement(Ya.a, {
						className: ei.a.bannerBase,
						color: za.a.locked,
						icon: ti,
						subtitle: Object(p.c)("New comments cannot be posted"),
						title: s
					})
				},
				ni = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				oi = s.n(ni);
			const ri = v.a.wrapped(e => c.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, c.a.createElement("g", null, c.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", oi.a);
			var ai = Object(bt.a)(e => {
					const {
						hasModeratorPostPermissions: t,
						theme: s
					} = e, n = t ? Object(p.c)("Comments are in random ordering and vote scores are hidden to non-mods") : Object(p.c)("Comments are in random ordering and vote scores are hidden");
					return c.a.createElement(Ya.a, {
						className: oi.a.contestModeEnabled,
						color: s && s.newCommunityTheme.linkText,
						icon: c.a.createElement(ri, null),
						subtitle: n,
						title: Object(p.c)("This post has contest mode enabled")
					})
				}),
				ii = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				ci = s("./src/reddit/components/JumpToContent/index.tsx"),
				di = s("./src/reddit/components/PostContent/index.tsx"),
				li = s("./src/reddit/components/PostTopMeta/index.tsx"),
				mi = s("./src/reddit/components/SubredditNav/index.tsx"),
				pi = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ui = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				hi = s("./src/reddit/helpers/history/index.ts"),
				bi = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				gi = s.n(bi);
			const xi = e => c.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(g.a)(gi.a.lightboxContainer, {
						[gi.a.mIsCollectionLayout]: e.isCollectionLayout,
						[gi.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				Ci = e => c.a.createElement("div", {
					className: Object(g.a)(gi.a.lightboxContent, {
						[gi.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[gi.a.mIsFakeOverlay]: e.isFakeOverlay,
						[gi.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				Oi = e => c.a.createElement("div", {
					className: Object(g.a)(gi.a.lightboxSidebar, {
						[gi.a.mIsFakeOverlay]: e.isFakeOverlay,
						[gi.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class vi extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: o
					} = this.props;
					return c.a.createElement(xi, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, c.a.createElement(Ci, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), o && c.a.createElement(Oi, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, o))
				}
			}
			var yi = vi,
				Ei = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				fi = s("./src/reddit/components/AlertBanner/heights.ts"),
				ji = s("./src/reddit/components/AppRouter/index.tsx"),
				wi = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Pi = s("./src/reddit/models/Theme/index.ts");

			function ki() {
				return (ki = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ii = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Si = Object(d.b)(() => Object(m.c)({
					isM2MTopBannerVariant: ut.c,
					showAccountCompletenessBanner: e => Object(ut.c)(e) && Object(ht.k)(e),
					showFPR: de.H,
					showSuspended: de.O
				})),
				_i = Object(bt.a)(e => {
					var {
						className: t,
						isCollectionLayout: s,
						theme: n
					} = e, o = Ii(e, ["className", "isCollectionLayout", "theme"]);
					const r = Object(Ot.a)(Object.assign({
						theme: n
					}, o));
					return c.a.createElement("div", ki({
						className: Object(g.a)(gi.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(Pi.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? H.i : H.j, "px")
						}
					}, o))
				});
			class Ti extends c.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							showM2MTopBanner: this.props.isM2MTopBannerVariant && this.props.showAccountCompletenessBanner,
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return c.a.createElement(ji.a, {
							className: Object(g.a)(gi.a.fakeOverlayLightboxHeaderWrapper, {
								[gi.a.narrow]: !this.props.isCollectionLayout
							}, Object(fi.b)(gi.a, t))
						}, c.a.createElement(wi.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(_i, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), c.a.createElement(Ei.a.Consumer, null, this.renderWrapper), c.a.createElement(yi, e))
				}
			}
			var Ni = Si(Ti),
				Li = s("./src/reddit/layout/page/Listing/index.tsx"),
				Mi = s("./src/reddit/models/MonthsToMinutes/index.ts"),
				Ri = s("./src/reddit/actions/otherDiscussions/constants.ts");
			const Bi = (e, t) => Object.assign({}, Object(lr.defaults)(e), {
				media: Object(lr.media)(e, t),
				profile: Object(lr.profile)(e),
				subreddit: Object(lr.subreddit)(e) || Object(lr.subredditByPostOrCommentId)(e, t)
			});
			var Ai = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				Fi = s.n(Ai);
			const Di = Object(d.b)(() => Object(m.c)({
				headComment: Ft.y,
				otherDiscussionsCount: Q.y,
				post: Ft.F
			}));
			var Wi = Object(F.b)(Di(e => {
					let {
						commentId: t,
						headComment: s,
						isOverlay: n,
						otherDiscussionsCount: o,
						post: r,
						postId: a,
						sendEvent: i
					} = e;
					if (!r) return null;
					const d = void 0 !== t,
						l = r.permalink,
						m = o > 0,
						p = Object(oe.b)(Object(Ri.e)(l));
					return d || m ? c.a.createElement("div", {
						className: Fi.a.CommentsNavigationPane
					}, d && c.a.createElement("div", null, c.a.createElement($n.a, {
						className: Fi.a.linkOrOverlay,
						isOverlay: n,
						to: Object(oe.b)(l)
					}, c.a.createElement(et.c, null, "View all comments")), s && null !== s.parentId && c.a.createElement($n.a, {
						className: Fi.a.linkOrOverlay,
						isOverlay: n,
						to: Object(oe.b)(s.permalink + "?context=8&depth=9")
					}, c.a.createElement(et.c, null, "Show parent comments"))), m && c.a.createElement($n.a, {
						className: Fi.a.OtherDiscussionsLink,
						isOverlay: n,
						onClick: () => i((e => t => Object.assign({
							source: "post",
							action: "click",
							noun: "other_discussions",
							post: Object(lr.post)(t, e)
						}, Bi(t, e)))(a)),
						to: p
					}, c.a.createElement(et.c, null, "View discussions in ", c.a.createElement(et.b, {
						name: "otherDiscussionsCount"
					}, o), " other", c.a.createElement(et.a, {
						name: "communities",
						singular: " community",
						plural: " communities",
						count: o
					})))) : null
				})),
				Hi = s("./src/reddit/selectors/listings.ts"),
				Vi = s("./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less"),
				Ui = s.n(Vi);
			const Ki = v.a.div("Container", Ui.a),
				Gi = Object(d.b)(() => Object(m.c)({
					apiError: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Hi.c)(e, {
							listingKey: Object(Ye.a)(s, null, {
								isOtherDiscussions: !0
							})
						})
					},
					apiPending: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Hi.d)(e, {
							listingKey: Object(Ye.a)(s, null, {
								isOtherDiscussions: !0
							})
						})
					},
					otherDiscussionsCount: Q.y
				}));
			var zi = Object(F.b)(Gi(e => {
					let {
						apiError: t,
						apiPending: s,
						commentSort: n,
						isOverlay: o,
						language: r,
						otherDiscussionsCount: a,
						postId: i,
						postPermalink: d,
						sendEvent: l
					} = e;
					const m = Object(Ye.a)(i, null, {
							isOtherDiscussions: !0
						}),
						p = a > 0 ? a : 0;
					return c.a.createElement(Ki, null, c.a.createElement("div", {
						className: Object(g.a)(Ui.a.HeaderPane, Fi.a.CommentsNavigationPane)
					}, c.a.createElement("div", {
						className: Ui.a.OtherDiscussionsTitle
					}, c.a.createElement(et.c, null, c.a.createElement(et.b, {
						name: "otherDiscussionsCount"
					}, p), " other", c.a.createElement(et.a, {
						name: "discussions",
						singular: " discussion",
						plural: " discussions",
						count: a
					}))), c.a.createElement($n.a, {
						className: Fi.a.OtherDiscussionsLink,
						isOverlay: o,
						onClick: () => l((e => t => Object.assign({
							source: "other_discussions",
							action: "click",
							noun: "dismiss",
							post: Object(lr.post)(t, e)
						}, Bi(t, e)))(i)),
						to: Object(oe.b)(d)
					}, c.a.createElement(Js.a, {
						className: Ui.a.CommentIcon,
						role: "presentation"
					}), c.a.createElement(et.c, null, "Return to comments"))), t && c.a.createElement(Lo.e, {
						apiError: t,
						commentId: null,
						language: r,
						postId: i,
						sort: n
					}), s && !t && c.a.createElement(Lo.f, null), !s && !t && c.a.createElement(Xe.a, {
						enableElementHiding: !1,
						forcedLayout: at.g.Compact,
						listingKey: m,
						listingName: rt.d.OtherDiscussions,
						listingViewed: (e, t) => Object(ct.d)(m, n, t, e),
						noPostsComponent: () => c.a.createElement(Lo.b, null),
						inSubredditOrProfile: !1,
						preventScrollOnMount: !0
					}))
				})),
				Ji = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Yi = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Qi = s.n(Yi);

			function qi() {
				return (qi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "CommentsPage", (function() {
				return oc
			}));
			var Xi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Zi = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				$i = 80,
				ec = 200,
				tc = 80,
				sc = 32;
			class nc extends c.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = a()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: n,
								onToggleTooltip: o,
								post: r,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0,
							c = null !== this.scrollY && Math.abs(i - this.scrollY) > $i,
							d = r && r.media && r.media.type === Bt.n.EMBED ? r.media.provider : null,
							l = r && r.media && Bt.d.has(r.media.type) && (!d || !Bt.q.has(d));
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0, this.props.canTriggerACBanner && this.props.showACBanner()), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && O.a.write(() => {
							o(Object(Ga.b)({
								itemId: a,
								tooltipIdPrefix: Ge.a,
								tooltipType: li.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * x.F) : (this.postPaused = !1, O.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, O.a.write(this.postScrollItemRef.pauseContent)))
					}, x.F), this.sendEventWithName = e => () => this.props.sendEvent(Object(it.b)(this.props.postId, e)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							listingBelowAllVariant: s,
							post: n
						} = this.props;
						if (t(), Object(pt.a)(s)) {
							const t = n && Object(z.l)(n) && n && n.belongsTo.id;
							t && e(t)
						}
						this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(ui.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === _t.b.F || e.keyCode === _t.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null
					}
				}
				componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				componentDidMount() {
					const {
						commentFormRef: e,
						commentSortRef: t,
						props: {
							isLoggedIn: s,
							isOverlay: n,
							post: o,
							shouldScrollToComments: r
						}
					} = this;
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : O.a.write(() => {
						setTimeout(() => {
							Object(C.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
						this.props.isOverlay || Object(f.d)(f.c.CommentsPage, s)
					}), this.sendChatPostExposureEvent()
				}
				componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(G.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(C.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(C.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.c + (this.props.isOverlay ? H.o : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								a = this.props.isOverlay ? sc : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= a && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(C.c)(n, a) : Object(C.c)(document, a)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						listingBelowAllVariant: t,
						subredditOrProfile: s,
						truncateCommentsList: n
					} = this.props;
					if (Object(pt.a)(t)) {
						const t = s && s.id;
						t && !e.includes(t) && n()
					}
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = ec
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					O.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - tc, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - tc, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
								Object(C.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => O.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return h.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					O.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = h.c.end(t);
						n(Object(ct.b)(t, s, e, b.TimerType.InApp, r, o))
					})
				}
				sendChatPostExposureEvent() {
					const {
						sendChatPostExposureEvent: e,
						hasModeratorPostPermissions: t,
						isChatPost: s
					} = this.props;
					e(s, t)
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), a = Object(pi.a)(e, r, o);
					if (!a) return null;
					let i = c.a.createElement(Ke.b, a);
					return s && (i = c.a.createElement(yi, {
						content: i
					})), i
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentsPageKey: n,
						isNightmodeOn: o,
						isLoggedIn: r,
						isOverlay: a,
						language: i,
						post: d,
						postId: l,
						postSEOV2IdCardVariant: m,
						sendEvent: p,
						subredditName: u,
						subredditOrProfile: h,
						profileCollectionsEnabled: b
					} = this.props, C = Object(Wt.e)(m);
					if (!d) {
						if (t) return c.a.createElement(Lo.f, null);
						const s = this.renderPageError();
						return s || (e ? c.a.createElement(Lo.d, null) : c.a.createElement(Lo.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const O = this.isCommentPermalink(),
						v = d.belongsTo.type === Tt.a.PROFILE,
						y = Object(G.a)(d) && (!v || b),
						E = !r;
					return c.a.createElement(ac, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: r,
						isOverlay: a,
						isSwapVariant: C,
						post: d,
						subredditOrProfile: h,
						shouldFitPageToContent: E,
						isCollectionLayout: y
					}, h && h.isQuarantined && c.a.createElement(ii.a, {
						subredditName: h.name
					}), c.a.createElement(ci.a, null), c.a.createElement("div", {
						className: Object(g.a)(Qi.a.PageContentWrapper, {
							[Qi.a.LargePageContent]: y,
							[Qi.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, y && c.a.createElement(Ie, {
						isOverlay: a,
						language: i,
						isNightmodeOn: o,
						postId: l
					}), c.a.createElement(Zi, {
						condition: y,
						wrap: e => c.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Qi.a.CollectionBodyWrapper
						}, e)
					}, c.a.createElement(di.a, {
						isCommentPermalink: O,
						isExclusivePost: !0,
						isOverlay: a,
						postId: l,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: p
					}), h && c.a.createElement(Ua, {
						className: Qi.a.TopTippers,
						contentId: l,
						creatorId: d.authorId,
						subredditId: h.id
					}), h && c.a.createElement(Da, {
						className: Qi.a.TopTippersBenefits,
						contentId: l,
						creatorId: d.authorId,
						subredditId: h.id
					}), c.a.createElement(Ue, {
						listingName: u || "",
						isOverlay: a,
						placement: x.c.ABOVE_THE_FOLD,
						postId: l
					}), this.renderCommentPanes())), h && !Object(At.e)(h) && c.a.createElement(It, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						postId: l,
						subredditOrProfile: h
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						contestModeIsEnabled: r,
						fullyLoaded: a,
						hasModeratorPostPermissions: i,
						headComment: d,
						isChatPostExperiment: l,
						isLoggedIn: m,
						isOverlay: h,
						language: b,
						location: x,
						onOtherDiscussions: C,
						openLoginModal: O,
						openRegisterModal: v,
						origin: f,
						post: w,
						postId: P,
						replyComment: k,
						sendEvent: I,
						sort: S,
						subredditAboutInfo: _,
						subredditOrProfile: T
					} = this.props;
					if (!w) return null;
					const N = this.isCommentPermalink(),
						L = [],
						M = w.isLocked && !s,
						R = !(N || w.isArchived || _ && _.userIsBanned);
					if (M) L.push(c.a.createElement(si, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (w.isArchived) L.push(c.a.createElement(Xa, {
						key: "commentThreadBanner"
					}));
					else if (R && !l && !C)
						if (m) {
							const e = Object(E.a)(u.c.replyToPost, P);
							L.push(c.a.createElement(ss, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: u.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, s) => {
									var {
										validate: n
									} = t, r = Xi(t, ["validate"]);
									return n ? j.tb(b, P, o, e, r, s) : j.lb(b, P, o, e, r, s)
								},
								submitButtonText: Object(p.c)("comment")
							}))
						} else L.push(c.a.createElement(ns.a, {
							key: "loggedOutCommentForm",
							language: b,
							location: x,
							openLoginModal: O,
							openRegisterModal: v,
							origin: f
						}));
					if (r && L.push(c.a.createElement(ai, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !l && !C && L.push(c.a.createElement(Vr, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: x,
							postId: P,
							sort: S,
							suggestedSort: w.suggestedSort
						}), c.a.createElement(Wi, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: h,
							key: "commentNavigation",
							postId: P
						})), !t || d || l || C)
						if (!e || d || C)
							if (C) L.push(c.a.createElement(zi, {
								commentSort: S,
								key: "otherDiscussions",
								language: b,
								postId: P,
								isOverlay: h,
								postPermalink: w.permalink
							}));
							else if (l) {
						if (T && T.id) {
							const e = k ? Object(E.a)(u.c.replyToComment, k.id) : Object(E.a)(u.c.replyToPost, P),
								s = n ? Object(y.a)(P) : o;
							L.push(c.a.createElement(qo.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !a && t,
								key: "commentsChat",
								postId: P,
								renderedInOverlay: h,
								subredditId: T.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return m ? c.a.createElement(Xo.a, {
									key: "chatCommentsForm",
									language: b,
									postId: P,
									replyComment: k,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: I
								}) : c.a.createElement(ns.a, {
									key: "loggedOutCommentForm",
									className: Qi.a.ChatLoggedOutForm,
									language: b,
									location: x,
									openLoginModal: O,
									openRegisterModal: v,
									origin: f
								})
							}))
						}
					} else L.push(c.a.createElement("div", {
						className: Object(g.a)(Qi.a.CommentsPaneWrapper, {
							[Qi.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, c.a.createElement(Ra, qi({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: w.numComments,
						onClick: this.handleContentClick
					}), c.a.createElement(Qo, {
						commentId: n,
						commentsPageKey: o,
						postId: P,
						renderedInOverlay: h
					})))), e && d ? L.push(c.a.createElement(Lo.e, {
						key: "commentsErrorState",
						language: b,
						postId: P,
						commentId: n,
						sort: S,
						apiError: e
					})) : !a && t && L.push(c.a.createElement(Lo.a, {
						key: "commentsPlaceholder"
					}));
					else L.push(c.a.createElement(Lo.e, {
						language: b,
						postId: P,
						commentId: n,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, L.push(c.a.createElement(Lo.a, {
						key: "commentsPlaceholder"
					}));
					return c.a.createElement(Lt.a.Provider, {
						value: this.sendEventWithName
					}, L)
				}
			}
			const oc = Object(U.t)()(Object(d.b)(() => Object(m.c)({
					apiError: Ft.c,
					apiPending: Ft.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Q.T)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canTriggerACBanner: ht.l,
					comment: Ft.n,
					communityBannerDiscoveryUnit: Dt.c,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(de.f)(e, s)
					},
					contestModeIsEnabled: Q.A,
					currentUserShowNSFW: de.X,
					dismissedSubreddits: lt.a,
					fullyLoaded: Ft.v,
					hasModeratorPostPermissions: Vt.b,
					headComment: Ft.y,
					isChatPost: mt.e,
					isChatPostExperiment: mt.d,
					isCommentsListTruncated: dt,
					isLoggedIn: de.J,
					isNightmodeOn: de.U,
					isTooltipOpen: (e, t) => !!Object(Kt.a)(e),
					language: de.S,
					listingBelowAllVariant: pt.b,
					m2mHomeRedirectVariant: ut.f,
					m2mIsEnabled: ht.w,
					origin: Ht.g,
					post: Ft.F,
					postSEOV2IdCardVariant: Wt.i,
					profileCollectionsEnabled: Mt.a,
					replyComment: Ft.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(Ut.y)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: Q.T,
					userHovercardIsOpen: (e, t) => Object(Kt.b)(Object(Ga.b)({
						itemId: t.postId,
						tooltipIdPrefix: Ge.a,
						tooltipType: li.c.StickyPost
					}))(e),
					userPrefs: de.lb
				}), (e, t) => ({
					dismissTruncation: t => e(zt({
						subredditId: t
					})),
					expandCommentsList: () => e(k()),
					setCommentFocus: t => e(j.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.z)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.h)()),
					onToggleTooltip: t => e(Object(N.g)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(S.e)()),
					openRegisterModal: () => e(Object(S.f)()),
					showACBanner: () => e(_.b(Mi.a.BannerVisible)),
					goToSubredditPage: t => e(Object(l.b)(t)),
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(mt.g)(n(), t, s)),
					truncateCommentsList: () => e(I())
				}))(Object(F.b)(nc))),
				rc = v.a.wrapped(Pa, "DetailsPageSidebar", Qi.a),
				ac = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: a,
						isLoggedIn: i,
						isOverlay: d,
						isSwapVariant: l,
						post: m,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!i && !d) return c.a.createElement(Ni, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: m,
						sidebar: u && c.a.createElement(Pa, {
							commentsPageKey: s,
							isOverlay: !0,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return c.a.createElement(yi, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						sidebar: u && c.a.createElement(Pa, {
							commentsPageKey: s,
							isOverlay: !0,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = a ? H.j : Nt.a;
					return c.a.createElement(Li.a, {
						containerRef: n,
						maxWidth: H.j,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: l,
						isCollectionLayout: a,
						navBar: u && c.a.Children.toArray([c.a.createElement(Ka.a, {
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object(At.e)(u) && c.a.createElement(mi.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && c.a.createElement(rc, {
							commentsPageKey: s,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(Ji.a)(e => {
				const {
					state: t
				} = e.location, s = o()(t, St.a.IsOverlay, !1), n = o()(t, St.a.CloseLocation, null), r = o()(t, St.a.ScrollOnLoad, !1);
				r && Object(hi.c)(St.a.ScrollOnLoad);
				const {
					partialCommentId: a,
					partialPostId: i,
					subredditName: d
				} = e.match.params, l = Object(z.m)(i), m = a && Object(Rt.e)(a);
				return c.a.createElement(oc, {
					closeLocation: n,
					commentId: m,
					commentsPageKey: e.commentsPageKey,
					isOverlay: s,
					location: e.location,
					onOtherDiscussions: e.onOtherDiscussions,
					postId: l,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: d
				})
			})
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.m)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.e)(t)
						})(e),
						a = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(d.a)(t)])
						})(e),
						i = {
							depth: a.depth && parseInt(a.depth, 10) || void 0,
							context: a.context && parseInt(a.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, i)
				},
				x = Object(c.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				C = Object(i.b)(x);

			function O(e) {
				return C(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), i = Object.assign({}, t, {
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					});
					return a.a.createElement(e, i)
				})
			}
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: n.F
				});
				return Object(n.Sb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: n.I
				});
				return Object(n.Sb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.ib
				});
				return Object(n.Sb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/premium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.givePremiumModalAccountName,
				r = e => e.givePremium.api.error || "",
				a = e => e.givePremium.api.pending
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=CommentsPage.aa65967c936870487e1a.js.map