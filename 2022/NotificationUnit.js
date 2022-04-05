// https://www.redditstatic.com/desktop2x/NotificationUnit.4dea4cefd7b54b706cc6.js
// Retrieved at 4/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return f
			}));
			var n = i("./src/config.ts"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				s = i.n(a),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/icons.ts"),
				d = i("./src/reddit/models/NotificationInbox/index.ts");
			const l = {
				[d.b.Award]: c.a.award,
				[d.b.Chat]: c.a.chat,
				[d.b.Comment]: c.a.comment,
				[d.b.Heart]: c.a.heart,
				[d.b.Live]: c.a.video_live,
				[d.b.Lore]: c.a.topic_reading_fill,
				[d.b.NotifyAll]: c.a.notification_frequent_fill,
				[d.b.Redditor]: c.a.user,
				[d.b.Reply]: c.a.comment,
				[d.b.SortRising]: c.a.rising,
				[d.b.SortTop]: c.a.top,
				[d.b.Trophy]: c.a.trophy,
				[d.b.Upvote]: c.a.upvote
			};
			var m = i("./src/reddit/icons/fonts/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(p);
			const b = `${n.a.assetPath}/img/cake_day.png`,
				f = e => {
					const {
						avatar: t,
						iconType: i,
						messageType: n
					} = e, a = l[i] || c.a.notification_fill, p = n === d.a.CakeDay, f = t && t.isNsfw, N = t && t.url;
					return s.a.createElement("span", {
						className: u.a.avatarContainer
					}, ((e, t, i, n) => t ? s.a.createElement("span", {
						className: Object(r.a)(u.a.nsfwAvatar, {
							[u.a.inAppNotification]: n
						})
					}, "18+") : e ? s.a.createElement("img", {
						alt: o.fbt._("Slice of cake for cake day", null, {
							hk: "1E8fjv"
						}),
						className: u.a.avatar,
						src: b
					}) : s.a.createElement("img", {
						className: Object(r.a)(u.a.avatar, {
							[u.a.inAppNotification]: n
						}),
						src: i || ""
					}))(p, f, N, e.isInAppNotification), s.a.createElement("span", {
						className: Object(r.a)(u.a.notificationIconContainer, {
							[u.a.inAppNotification]: e.isInAppNotification
						})
					}, s.a.createElement(m.a, {
						name: a,
						isFilled: !0,
						className: u.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return E
			}));
			var n, o = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				s = i.n(a),
				r = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(p);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(n || (n = {}));
			const b = d.a.wrapped(m.a, "StyledDropdown", u.a),
				f = Object(c.a)(b),
				N = Object(l.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", N.displayName = "AwareDropdown";
			const E = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: i,
					hideNotification: r,
					blockAwarder: c,
					isInTooltip: d,
					isHideNotifEligible: l,
					isOpen: m,
					isToggleLowUpdateFromSubredditEligible: p,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: E,
					isBlockAwarderEligible: v,
					hideSubredditNotifications: x,
					sendInboxViewOverflow: O,
					tooltipId: T
				} = e;
				Object(a.useEffect)(() => {
					m && O()
				}, [m]);
				const A = e => {
						let a;
						switch (e) {
							case n.HideNotif:
								a = {
									text: o.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: r
								};
								break;
							case n.HideSubUpdates:
								a = {
									text: o.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: x
								};
								break;
							case n.HideNotifUpdate:
								a = {
									text: o.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: i
								};
								break;
							case n.HideAwarder:
								a = {
									text: o.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: c
								};
								break;
							case n.DecreaseSubredditUpdates:
								a = {
									text: o.fbt._("See less from this community", null, {
										hk: "2TiT9b"
									}),
									handler: t
								};
								break;
							default:
								a = null
						}
						if (!a) return;
						const {
							handler: d,
							text: l
						} = a;
						return s.a.createElement("button", {
							className: u.a.overflowMenuOption,
							onClick: d,
							type: "button"
						}, l)
					},
					g = d ? N : f;
				return s.a.createElement(g, {
					id: T,
					isOverlayOff: !0,
					isOpen: m,
					tooltipId: T,
					tooltipPosition: ["right", "top"],
					isFixed: !0
				}, s.a.createElement("div", {
					className: u.a.overflowMenuContainer
				}, l && A(n.HideNotif), p && A(n.DecreaseSubredditUpdates), E && A(n.HideSubUpdates), b && A(n.HideNotifUpdate), v && A(n.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			})), i.d(t, "a", (function() {
				return N
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/controls/MetaData/index.tsx");
			var c = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var d = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), a.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var l = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, a.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				m = i("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = i("./src/reddit/models/NotificationInbox/index.ts"),
				u = i("./src/reddit/components/NotificationUnit/index.m.less"),
				b = i.n(u);
			const f = e => {
					var t, i;
					const {
						isInAppNotification: o,
						post: {
							media: r,
							thumbnail: c,
							isNsfw: d,
							isSpoiler: l
						}
					} = e, m = (null === (i = null === (t = null == r ? void 0 : r.obfuscated) || void 0 === t ? void 0 : t.content) || void 0 === i ? void 0 : i.url) && c.url, p = null == c ? void 0 : c.url;
					return !p || d && !m || l && !m ? null : d ? a.a.createElement("span", {
						className: b.a.postEmbedBlurredThumbnailContainer
					}, a.a.createElement("span", {
						className: Object(s.a)(b.a.postEmbedNSFWThumbnailIndicator, {
							[b.a.inAppNotification]: o
						})
					}, "18+"), a.a.createElement("img", {
						alt: n.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: o
						}),
						src: m
					})) : l ? a.a.createElement("img", {
						alt: n.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: o
						}),
						src: m
					}) : a.a.createElement("img", {
						className: Object(s.a)(b.a.postEmbedThumbnail, {
							[b.a.inAppNotification]: o
						}),
						src: p
					})
				},
				N = e => {
					let {
						post: t,
						post: {
							commentCount: i = 0,
							isNsfw: o,
							isSpoiler: u,
							removedByCategory: N,
							score: E = 0,
							title: v
						},
						isUnread: x
					} = e;
					const O = N === p.c.Deleted,
						T = N && N !== p.c.Deleted,
						A = Object(s.a)(b.a.postEmbedContainer, {
							[b.a.unread]: x
						}),
						g = Object(s.a)(b.a.postEmbedContent, {
							[b.a.deleted]: O || T
						});
					return a.a.createElement("span", {
						className: A
					}, a.a.createElement("span", {
						className: g
					}, a.a.createElement("span", null, a.a.createElement("span", {
						className: b.a.postEmbedTitleContainer
					}, o && a.a.createElement(d, {
						className: b.a.WarningIcon
					}), u && a.a.createElement(l, {
						className: b.a.WarningIcon
					}), a.a.createElement("p", {
						className: b.a.postEmbedTitle
					}, v)), a.a.createElement("span", {
						className: b.a.postEmbedMeta
					}, !O && !T && a.a.createElement(a.a.Fragment, null, a.a.createElement(r.b, {
						isScoreHidden: !1,
						score: E,
						useUpvotes: !0
					}), a.a.createElement(r.c, null), Object(r.d)(i)), O && a.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, a.a.createElement(m.b, {
						className: b.a.StateIcon
					}), a.a.createElement("span", {
						className: b.a.Text
					}, n.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), T && a.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, a.a.createElement(c, {
						className: b.a.StateIcon
					}), a.a.createElement("span", {
						className: b.a.Text
					}, n.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), a.a.createElement(f, {
						post: t
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				c = i("./src/reddit/controls/MetaData/index.tsx"),
				d = i("./src/reddit/icons/fonts/index.tsx"),
				l = i("./src/reddit/components/NotificationUnit/index.m.less"),
				m = i.n(l);
			const p = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: i,
					isInTooltip: n,
					isInAppNotification: l,
					isOverflowMenuOpen: p,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: f,
					sendInboxClickOverflow: N,
					sentAt: E,
					setActiveOverflowMenuId: v,
					title: x
				} = e, O = (i || b || f || u) && !l, T = Object(a.a)(m.a.menuButton, {
					[m.a.isOpen]: p
				}), A = Date.parse(E) / s.Sb;
				return o.a.createElement("span", {
					className: m.a.topBar
				}, o.a.createElement("span", {
					className: Object(a.a)(m.a.TitleWrapper, {
						[m.a.inAppNotification]: l
					})
				}, o.a.createElement("span", {
					className: Object(a.a)(m.a.title, {
						[m.a["m-tooltip"]]: n,
						[m.a.inAppNotification]: l
					})
				}, x), o.a.createElement(c.c, {
					className: Object(a.a)(m.a.Separator, {
						[m.a.inAppNotification]: l
					})
				}), o.a.createElement("span", {
					className: Object(a.a)(m.a.timeAgo, {
						[m.a.inAppNotification]: l
					})
				}, Object(r.a)(A, !0))), O && o.a.createElement("button", {
					"aria-expanded": p,
					"aria-haspopup": !0,
					className: T,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), p ? v && v("") : (N && N(), v && v && t && v(t))
					}
				}, o.a.createElement(d.a, {
					name: "overflow_horizontal",
					className: m.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i.n(a),
				r = i("./node_modules/react/index.js"),
				c = i.n(r),
				d = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				m = i("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				p = i("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				u = i("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				b = i("./src/reddit/controls/InternalLink/index.tsx"),
				f = i("./src/reddit/helpers/trackers/inbox.ts"),
				N = i("./src/reddit/hooks/useTracking.ts"),
				E = i("./src/reddit/models/NotificationInbox/index.ts"),
				v = i("./src/reddit/selectors/experiments/inAppNotification.ts"),
				x = i("./node_modules/react-redux/es/index.js"),
				O = i("./src/reddit/actions/toaster.ts"),
				T = i("./src/reddit/models/Toast/index.ts"),
				A = i("./src/reddit/selectors/experiments/inboxCTAsV2.ts"),
				g = i("./src/reddit/selectors/user.ts"),
				h = i("./src/reddit/components/NotificationUnit/index.m.less"),
				I = i.n(h);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-Button",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!i.m[t]
					},
					importAsync: () => i.e("reddit-components-NotificationUnit-Button").then(i.bind(null, "./src/reddit/components/NotificationUnit/Button.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return i(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/Button.tsx"
					}
				}),
				S = "",
				C = .5,
				U = e => {
					var t, i, n, s, h, U, j, M, y, D, R, P;
					const k = Object(N.a)(),
						L = Object(x.d)(),
						H = Object(x.e)(g.cb),
						F = Object(x.e)(A.d),
						B = Object(x.e)(A.e),
						V = Object(x.e)(A.a),
						W = Object(x.e)(A.b),
						z = Object(x.e)(A.c),
						Y = Object(x.e)(v.d),
						[Z, K] = Object(r.useState)(!1),
						{
							activeOverflowMenuId: G,
							isInboxPostEmbedEnabled: q,
							isInAppNotification: $,
							isInTooltip: Q,
							notification: J,
							shouldHideActionButton: X,
							setActiveOverflowMenuId: ee,
							onItemClick: te
						} = e;
					if (!J) return null;
					const {
						avatar: ie,
						body: ne,
						context: oe,
						deeplinkUrl: ae,
						isHideNotifEligible: se,
						isToggleLowUpdateFromSubredditEligible: re,
						isToggleNotificationUpdateEligible: ce,
						isToggleUpdateFromSubredditEligible: de,
						icon: le,
						id: me,
						readAt: pe,
						sentAt: ue,
						title: be
					} = J, fe = null == oe ? void 0 : oe.messageType, Ne = null === (i = null === (t = null == oe ? void 0 : oe.comment) || void 0 === t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id, Ee = null === (n = null == oe ? void 0 : oe.post) || void 0 === n ? void 0 : n.id, ve = null == oe ? void 0 : oe.post, xe = null === (s = null == oe ? void 0 : oe.subreddit) || void 0 === s ? void 0 : s.id, Oe = null == oe ? void 0 : oe.isBodyHidden, Te = null == oe ? void 0 : oe.isPostHidden, Ae = !pe, ge = `notif-${Q?"tooltip":""}-menu-${me}`, he = ge === G, Ie = oe.messageType === E.a.CommentReply, we = Ie ? Ne : Ee, _e = Object(d.a)(e.className, I.a.notificationItem, {
						[I.a.unread]: Ae && !$,
						[I.a.isNightMode]: H,
						[I.a.inAppNotification]: $
					}), Se = F || V || W || z || B, Ce = {
						id: me,
						isClicked: !!pe,
						isViewed: !0,
						type: fe
					}, Ue = oe.messageType === E.a.AwardReceived, je = fe === E.a.LifecyclePostSuggestions, Me = Ue ? null === (h = null == oe ? void 0 : oe.awarding) || void 0 === h ? void 0 : h.id : "", ye = null === (j = null === (U = null == oe ? void 0 : oe.awarding) || void 0 === U ? void 0 : U.target) || void 0 === j ? void 0 : j.permalink, De = null === (y = null === (M = null == oe ? void 0 : oe.awarding) || void 0 === M ? void 0 : M.award) || void 0 === y ? void 0 : y.id;
					let Re = (null === (D = null == oe ? void 0 : oe.post) || void 0 === D ? void 0 : D.permalink) || ae;
					Ue && ye ? Re = ye : je && ae && (Re = ae);
					const Pe = null === (P = null === (R = null == oe ? void 0 : oe.awarding) || void 0 === R ? void 0 : R.awarder) || void 0 === P ? void 0 : P.isAcceptingChats,
						ke = e => {
							k(Object(f.m)({
								...Ce,
								actionInfoType: e
							}))
						},
						Le = e => {
							k(Object(f.z)({
								...Ce,
								actionInfoType: e
							}))
						},
						He = () => {
							e.markNotificationAsRead(me, fe)
						},
						Fe = e => {
							if ($) return k(Object(f.h)({
								...Ce,
								...e
							}));
							k(Object(f.k)({
								...Ce,
								...e
							}))
						},
						Be = c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, {
							avatar: ie,
							iconType: le,
							messageType: fe,
							isInAppNotification: $
						}), c.a.createElement("span", {
							className: I.a.contentContainer
						}, c.a.createElement(u.a, {
							dropdownId: ge,
							isHideNotifEligible: se,
							isInTooltip: Q,
							isOverflowMenuOpen: he,
							isToggleNotificationUpdateEligible: ce,
							isToggleUpdateFromSubredditEligible: de,
							isToggleLowUpdateFromSubredditEligible: re,
							sendInboxClickOverflow: () => k(Object(f.l)({
								...Ce,
								awardId: De
							})),
							sentAt: ue,
							setActiveOverflowMenuId: ee,
							title: be,
							isInAppNotification: $
						}), q && ve && !Te && !$ && c.a.createElement(p.a, {
							isUnread: Ae,
							post: ve
						}), (!q || q && !Oe) && c.a.createElement("span", {
							className: Object(d.a)(I.a.body, {
								[I.a.inAppNotification]: $
							})
						}, ne), !X && (Pe || Se || Ue || Ie || Y && $) && c.a.createElement(_, {
							context: oe,
							notificationId: me,
							isUnread: Ae,
							isFullWidth: Q,
							onEvent: Fe,
							isInboxCTAsV2ReplyEnabled: F,
							isInboxCTAsV2All1Enabled: V,
							isInboxCTAsV2All2Enabled: W,
							isInboxCTAsV2ReplyPcEnabled: z,
							isInboxCTAsV2SeePostEnabled: B,
							deeplinkUrl: Re,
							isNightMode: H,
							isInAppNotification: $
						})), $ && (null == oe ? void 0 : oe.post) ? c.a.createElement(p.b, {
							isInAppNotification: !0,
							post: oe.post
						}) : null),
						Ve = {
							className: Object(d.a)(I.a.link, {
								[I.a.inAppNotification]: $
							}),
							onClick: e => {
								(null == ve ? void 0 : ve.removedByCategory) ? (e.preventDefault(), L(Object(O.f)({
									kind: T.b.Error,
									text: a.fbt._("Sorry, this content is no longer available.", null, {
										hk: "3sVhIi"
									}),
									duration: O.a
								}))) : Q && te && te(), Fe({
									postId: Ee,
									subredditId: xe,
									awardId: De,
									position: f.d.FIRST
								})
							},
							onMouseDown: He,
							onKeyDown: He
						};
					return c.a.createElement(c.a.Fragment, null, c.a.createElement("li", {
						className: _e
					}, c.a.createElement(b.a, w({}, Ve, {
						to: Re
					}), Be)), $ ? null : c.a.createElement(m.a, {
						decreaseSubUpdates: () => {
							const t = f.e.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(S), xe && e.decreaseSubredditNotifications && e.decreaseSubredditNotifications(xe, () => Le(t)), ke(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(S), e.disableNotificationUpdates && e.disableNotificationUpdates(we), ke(f.e.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(S), e.hideNotification && e.hideNotification(me), ke(f.e.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = f.e.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(S), e.hideSubredditNotifications && e.hideSubredditNotifications(xe, () => Le(t)), ke(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(S), e.blockAwarder && e.blockAwarder(Me), ke(f.e.BlockAwarder)
						},
						isInTooltip: Q,
						isHideNotifEligible: se,
						isOpen: he,
						isToggleLowUpdateFromSubredditEligible: re,
						isToggleNotificationUpdateEligible: ce,
						isToggleUpdateFromSubredditEligible: !(!de || !xe),
						isBlockAwarderEligible: Ue,
						sendInboxViewOverflow: () => k(Object(f.x)(Ce)),
						tooltipId: ge
					}), c.a.createElement(o.a, {
						onChange: e => {
							if (e.isIntersecting && !Z) {
								if ($) return k(Object(f.t)({
									...Ce
								}));
								k(Object(f.w)({
									...Ce
								})), K(!0)
							}
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: C
					}, c.a.createElement("div", null)))
				};
			t.default = U
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/higherOrderComponents/asTooltip.tsx"),
				s = i("./src/reddit/constants/elementIds.ts"),
				r = i("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const i = Object(a.a)(e, t);
				class n extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(i, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(n)
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, i) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "b", (function() {
				return p
			})), i.d(t, "d", (function() {
				return u
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/lib/prettyPrintNumber/index.ts"),
				c = (i("./src/lib/timeAgo/index.ts"), i("./src/reddit/controls/MetaData/index.m.less")),
				d = i.n(c);
			const l = s.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				p = e => {
					let {
						isScoreHidden: t,
						score: i,
						useUpvotes: o,
						...s
					} = e;
					const c = Object(r.b)(i),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(i, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(i, "number", c)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, s, m)
				},
				u = e => a.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(r.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = i.n(s);
			const c = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "d", (function() {
				return c
			}));
			var n, o, a, s, r = i("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === r.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(n || (n = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(o || (o = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(a || (a = {})),
			function(e) {
				e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/inAppNotification.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return r
			})), i.d(t, "c", (function() {
				return c
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				o = i("./src/reddit/helpers/chooseVariant/index.ts"),
				a = i("./src/reddit/selectors/experiments/index.ts"),
				s = i("./src/reddit/selectors/experiments/utils.ts");
			const r = e => Object(o.c)(e, {
					experimentName: n.Bb,
					experimentEligibilitySelector: a.e
				}) === n.V.topOfFeedWithCTAs,
				c = e => (e => Object(o.c)(e, {
					experimentName: n.Bb,
					experimentEligibilitySelector: a.e
				}) === n.V.topOfFeedNoCTAs)(e) || r(e),
				d = e => Object(o.c)(e, {
					experimentName: n.Bb,
					experimentEligibilitySelector: a.e
				}) === n.V.floatInFeed,
				l = e => {
					const t = Object(o.c)(e, {
						experimentName: n.Bb,
						experimentEligibilitySelector: a.e
					});
					return Object(s.a)(t)
				}
		},
		"./src/reddit/selectors/experiments/inboxCTAsV2.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return l
			})), i.d(t, "d", (function() {
				return m
			})), i.d(t, "a", (function() {
				return p
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "c", (function() {
				return b
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/constants/experiments.ts"),
				a = i("./src/reddit/helpers/chooseVariant/index.ts"),
				s = i("./src/reddit/selectors/experiments/utils.ts"),
				r = i("./src/reddit/selectors/user.ts");
			const c = e => Object(r.O)(e) || Object(r.P)(e),
				d = Object(n.a)(e => Object(a.c)(e, {
					experimentName: o.xb,
					experimentEligibilitySelector: c
				}), s.a),
				l = Object(n.a)(d, e => e === o.Dd.SeePostCTAs),
				m = Object(n.a)(d, e => e === o.Dd.ReplyCTAs),
				p = Object(n.a)(d, e => e === o.Dd.AllCTAs1),
				u = Object(n.a)(d, e => e === o.Dd.AllCTAs2),
				b = Object(n.a)(d, e => e === o.Dd.ReplyPc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.4dea4cefd7b54b706cc6.js.map