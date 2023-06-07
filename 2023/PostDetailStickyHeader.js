// https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.e6df70ff5cb49aac3231.js
// Retrieved at 6/7/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostDetailStickyHeader"], {
		"./src/reddit/actions/shortcuts/close.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/reddit/actions/comment/authoring.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/constants/shortcuts.ts"),
				d = s("./src/reddit/helpers/trackers/lightbox.ts"),
				l = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				u = s("./src/reddit/selectors/accountManager/modalData.ts"),
				b = s("./src/reddit/selectors/activeModal.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = s("./src/reddit/actions/shortcuts/utils.ts");
			const g = [p.v, p.p, t => !!Object(m.d)(t)],
				x = (t, e) => async (s, m, p) => {
					let {
						apiContext: x
					} = p;
					const f = m();
					for (const t of g)
						if (t(f)) return;
					const _ = document.activeElement,
						v = f.shortcuts.activeCommentId,
						E = Object(h.c)(f),
						O = Object(b.b)(f),
						C = Object(u.a)(f),
						j = [i.a.NsfwBlockingModal].includes(C),
						S = [a.a.NSFW_BLOCKING_MODAL_V2].includes(O),
						k = j || S;
					if (_ && "true" === _.contentEditable && v && E) s(o.b({
						parentCommentId: v,
						commentsPageKey: E
					})), Object(h.a)(v);
					else if (O && !k) Object(h.b)(c.b), s(Object(i.i)(O));
					else if (f.toaster[0]) Object(h.b)(c.b), s(Object(r.g)(f.toaster[0].id));
					else if (f.shortcuts.namespace === c.d.Lightbox && f.platform.currentPage) {
						const t = f.platform.currentPage.locationState.closeLocation;
						t && (Object(h.b)(c.b), s(Object(n.b)(t)))
					}
					const {
						activePostId: L
					} = f.shortcuts;
					t(e && L ? d.b(L, "close", !0) : l.a)
				}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(t, e, s) {
			"use strict";
			s.d(e, "g", (function() {
				return c
			})), s.d(e, "e", (function() {
				return d
			})), s.d(e, "f", (function() {
				return l
			})), s.d(e, "d", (function() {
				return b
			})), s.d(e, "h", (function() {
				return m
			})), s.d(e, "b", (function() {
				return p
			})), s.d(e, "a", (function() {
				return h
			})), s.d(e, "c", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/config.ts"),
				i = s("./src/lib/pubsub/index.ts"),
				r = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const c = t => t && t.toLowerCase() === r.b.Popular,
				d = t => t && t.toLowerCase() === r.b.All,
				l = t => t && t === a.c,
				u = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: t,
						width: e
					}
				},
				b = t => {
					let e, s, i, a, b, {
						listingName: m,
						subreddit: p,
						idCardWidget: h
					} = t;
					const g = h && h.subscribersText || n.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = h && h.currentlyViewingText || n.fbt._("Online", null, {
							hk: "36JX70"
						});
					let f, _;
					return l(m) ? (e = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = r.c[r.b.Home], s = n.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = n.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(m) ? (e = `${o.a.assetPath}/img/id-cards/banner@2x.png`, s = n.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", b = r.c[r.b.All]) : c(m) ? (e = `${o.a.assetPath}/img/id-cards/banner@2x.png`, s = n.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", b = r.c[r.b.Popular]) : m && (s = h && h.description, i = u(""), a = p.displayText, b = p.url, _ = h && h.subscribersCount, f = h && h.currentlyViewingCount), {
						snooBackground: i,
						description: s,
						titleText: a,
						url: b,
						subscribersCount: _,
						subscribersText: g,
						currentlyViewingText: x,
						currentlyViewingCount: f,
						...e ? {
							bannerBackgroundImage: e
						} : {}
					}
				},
				m = new i.a,
				p = "VISIBLE",
				h = "NOT_VISIBLE",
				g = t => m.publish(t ? p : h)
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(t, e, s) {
			t.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(t, e, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/icons.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/shortcuts/close.ts"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				h = s("./src/reddit/components/IdCard/helpers.ts"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/constants/colors.ts"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				L = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				B = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				V = s("./src/reddit/components/LightboxHeader/index.m.less"),
				A = s.n(V);
			const D = Object(a.c)({
					subreddit: (t, e) => {
						let {
							page: s,
							post: n
						} = e;
						if (!s && !n) return null;
						const o = n || Object(M.n)(t, {
							page: s
						});
						return (null == o ? void 0 : o.belongsTo) ? Object(N.Q)(t, {
							identifier: o.belongsTo
						}) : null
					},
					post: M.n,
					joinOptimizationsLightboxHeaderEnabled: t => Object(L.a)(t) || Object(L.d)(t) || Object(L.c)(t),
					isVoteCountAnimation: (t, e) => {
						let {
							page: s,
							post: n
						} = e;
						if (!s && !n) return !1;
						const o = s && Object(M.n)(t, {
							page: s
						}) || n;
						return !!o && Object(B.g)(t, {
							post: o
						})
					}
				}),
				I = Object(r.b)(D, (t, e) => {
					let {
						sendEvent: s
					} = e;
					return {
						close: () => {
							t(Object(b.a)(s, !0))
						},
						toggleVote: (e, s) => t(s === k.a.upvoted ? Object(u.ib)(e) : Object(u.v)(e))
					}
				}, (t, e, s) => ({
					...t,
					...e,
					...s,
					onVoteClick: n => {
						const o = t.post || s.post;
						o && e.toggleVote(o.id, n)
					}
				})),
				y = {
					[S.o.GIFVIDEO]: l.a.gif_post,
					[S.o.IMAGE]: l.a.image_post,
					[S.o.TEXT]: l.a.text_post,
					[S.o.RTJSON]: l.a.text_post,
					[S.o.VIDEO]: l.a.video_post,
					[S.o.EMBED]: l.a.embed,
					[S.o.GALLERY]: l.a.media_gallery,
					[S.o.LIVEAUDIO]: l.a.audio
				},
				H = t => y[(null == t ? void 0 : t.media) ? t.media.type : S.o.EMBED];
			class T extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = t => {
						t.preventDefault(), t.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = t => {
						t.stopPropagation(), this.props.subreddit && this.props.sendEvent(t => {
							const {
								subreddit: e,
								post: s
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == e ? void 0 : e.name) && Object(N.jb)(t, {
									identifier: {
										name: e.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: s ? P.K(t, s.id) : void 0,
								subreddit: e
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var t;
					const {
						className: e,
						onCloseClick: s,
						onVoteClick: r,
						page: a,
						post: l,
						useAdaptiveStyles: u,
						isVoteCountAnimation: b
					} = this.props, h = H(l), _ = !l && (null === (t = null == a ? void 0 : a.meta) || void 0 === t ? void 0 : t.name) === d.Sb.META_MEMBERSHIP_PAYWALL_PAGE, E = l ? w.a : function(t) {
						let {
							children: e,
							postId: s
						} = t;
						return e
					};
					return i.a.createElement("div", {
						className: Object(c.a)(A.a.container, e, {
							[A.a.isCollection]: l && Object(O.a)(l),
							[A.a.adaptive]: u
						})
					}, i.a.createElement(E, {
						postId: null == l ? void 0 : l.id
					}, i.a.createElement("div", {
						className: A.a.postDetails
					}, l && i.a.createElement(o.Fragment, null, b && !u ? void 0 : i.a.createElement(m.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: l,
						onVoteClick: r,
						redditStyle: !0
					}), i.a.createElement(C.a, {
						name: h,
						className: A.a.mediaIcon
					}), i.a.createElement(g.c, {
						className: A.a.postTitle,
						post: l,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : v.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), i.a.createElement(p.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, {
						className: A.a.srIcon
					}), i.a.createElement(x.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), _ && a && a.urlParams.subredditName && i.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, n.fbt._("{communityName} Special Membership", [n.fbt._param("communityName", `r/${a.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), i.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && i.a.createElement(f.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && i.a.createElement(z, {
						onClick: s || this.closeLightbox
					}))))
				}
			}
			const z = i.a.memo(t => i.a.createElement(E.t, {
				className: A.a.CloseButton,
				size: E.d.XS,
				onClick: t.onClick,
				priority: E.c.Plain,
				Icon: Object(C.b)("close"),
				text: n.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				title: n.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				"aria-label": n.fbt._("Close", null, {
					hk: "4gbyAA"
				})
			}));
			e.a = Object(_.c)(I(T))
		},
		"./src/reddit/components/PostDetailStickyHeader/index.m.less": function(t, e, s) {
			t.exports = {
				wrapper: "_1mIZHouXowafuH_S8YMnxT",
				isVisible: "_2U4UhyrQvS_zVDbLXW-z5t"
			}
		},
		"./src/reddit/components/PostDetailStickyHeader/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/LightboxHeader/index.tsx"),
				a = s("./src/reddit/components/PostContent/index.tsx"),
				c = s("./src/reddit/components/PostDetailStickyHeader/index.m.less"),
				d = s.n(c);
			e.default = t => {
				let {
					post: e,
					page: s
				} = t;
				const [c, l] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					if (!e) return;
					a.d.addListeners(a.b, () => l(!0)), a.d.addListeners(a.a, () => l(!1))
				}, [e]), e ? o.a.createElement("div", {
					className: Object(i.a)(d.a.wrapper, {
						[d.a.isVisible]: c
					})
				}, o.a.createElement(r.a, {
					post: e,
					page: s,
					hideCloseButton: !0,
					useAdaptiveStyles: !0,
					showSubreddit: !0
				})) : null
			}
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(t, e, s) {
			"use strict";
			s.d(e, "s", (function() {
				return a
			})), s.d(e, "a", (function() {
				return c
			})), s.d(e, "m", (function() {
				return d
			})), s.d(e, "b", (function() {
				return l
			})), s.d(e, "k", (function() {
				return u
			})), s.d(e, "j", (function() {
				return b
			})), s.d(e, "o", (function() {
				return m
			})), s.d(e, "n", (function() {
				return p
			})), s.d(e, "l", (function() {
				return h
			})), s.d(e, "p", (function() {
				return g
			})), s.d(e, "r", (function() {
				return x
			})), s.d(e, "q", (function() {
				return f
			})), s.d(e, "i", (function() {
				return _
			})), s.d(e, "g", (function() {
				return v
			})), s.d(e, "u", (function() {
				return E
			})), s.d(e, "t", (function() {
				return O
			})), s.d(e, "f", (function() {
				return C
			})), s.d(e, "e", (function() {
				return j
			})), s.d(e, "d", (function() {
				return S
			})), s.d(e, "h", (function() {
				return k
			})), s.d(e, "c", (function() {
				return L
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = t => () => ({
					source: "shortcuts",
					action: "submit",
					noun: t
				}),
				i = (t, e) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: t,
					post: n.K(s, e)
				}),
				r = (t, e) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: t,
					comment: n.h({
						state: s,
						commentId: e
					})
				}),
				a = o("show_panel"),
				c = o("esc_close"),
				d = t => i("enter_open_post", t),
				l = t => r("enter_comment_collapse", t),
				u = t => i("j_next", t),
				b = t => r("j_next", t),
				m = t => i("k_previous", t),
				p = t => r("k_previous", t),
				h = t => i("n_next", t),
				g = t => i("p_previous", t),
				x = t => i("s_save", t),
				f = t => r("s_save", t),
				_ = t => i("h_hide", t),
				v = t => i("x_expando", t),
				E = t => i("a_upvote", t),
				O = t => r("a_upvote", t),
				C = t => i("z_downvote", t),
				j = t => r("z_downvote", t),
				S = o("c_create_post"),
				k = t => i("l_go_to_link", t),
				L = t => r("r_comment", t);
			o("q_navigation")
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(t, e, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			e.a = t => o.a.createElement("svg", {
				className: t.className,
				id: t.id,
				onMouseEnter: t.onMouseEnter,
				onMouseLeave: t.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), o.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return o
			})), s.d(e, "c", (function() {
				return i
			}));
			const n = t => t.accountManagerModalData.actionSource,
				o = t => t.accountManagerModalData.redirectUrl,
				i = t => t.accountManagerModalData.thingId
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.e6df70ff5cb49aac3231.js.map