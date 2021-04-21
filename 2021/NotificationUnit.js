// https://www.redditstatic.com/desktop2x/NotificationUnit.c1f1a66c916f41e8ec15.js
// Retrieved at 4/21/2021, 4:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return R
			}));
			var n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/config.ts"),
				s = a("./src/lib/lessComponent.tsx");
			var r = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M17.5,4.875H17.4a3.085,3.085,0,0,0-5.3-2.95L10,4.438,7.905,1.925a3.079,3.079,0,0,0-5.3,2.95H2.5A1.627,1.627,0,0,0,.875,6.5v11A1.627,1.627,0,0,0,2.5,19.125h15A1.627,1.627,0,0,0,19.125,17.5V6.5A1.627,1.627,0,0,0,17.5,4.875ZM4.434,3.906a1.069,1.069,0,0,1,.722-1.03,1.223,1.223,0,0,1,.4-.068,1.034,1.034,0,0,1,.817.4l1.392,1.67H5.045A1.088,1.088,0,0,1,4.434,3.906ZM14,12.75H10.75V16H9.25V12.75H6v-1.5H9.25V8h1.5v3.25H14Zm.955-7.875H12.239l1.392-1.67a1.094,1.094,0,0,1,1.935.7A1.088,1.088,0,0,1,14.955,4.875Z"
				})),
				l = a("./src/reddit/icons/svgs/Chat/index.tsx");
			var c = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M16 2H4a2 2 0 00-2 2v9a2 2 0 002 2h3.38l2.25 2.57a.5.5 0 00.75 0L12.63 15H16a2 2 0 002-2V4a2 2 0 00-2-2z"
				})),
				d = a("./src/reddit/icons/svgs/Heart/index.tsx");
			var m = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, i.a.createElement("path", {
					d: "M3.626,4.5H2.376A2.629,2.629,0,0,1,5,1.875h8v1.25H5A1.377,1.377,0,0,0,3.626,4.5Z"
				}), i.a.createElement("path", {
					d: "M19.294,7.206a1.116,1.116,0,0,0-.793-.328h-.009l-1.9.014a2.619,2.619,0,0,0-1.426.434L13.626,8.339V7A1.127,1.127,0,0,0,12.5,5.875H1.5A1.127,1.127,0,0,0,.376,7v3.494a8.31,8.31,0,0,1,1.25.219V7.125h10.75v3.536L15.851,8.37h0a1.369,1.369,0,0,1,.746-.227l1.778-.013V15.87L16.6,15.857a1.364,1.364,0,0,1-.747-.227l-3.475-2.291v3.536H7.805a8.443,8.443,0,0,1,.223,1.25H12.5A1.127,1.127,0,0,0,13.626,17V15.661l1.536,1.013a2.618,2.618,0,0,0,1.426.433l1.9.014a1.025,1.025,0,0,0,.8-.327,1.116,1.116,0,0,0,.332-.8V8A1.116,1.116,0,0,0,19.294,7.206Z"
				}), i.a.createElement("path", {
					d: "M.374,11.877v1.275a5.856,5.856,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,11.877Z"
				}), i.a.createElement("path", {
					d: "M.374,14.541v1.29a3.219,3.219,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.541Z"
				}))),
				u = a("./src/reddit/icons/svgs/Notify/index.tsx"),
				p = a("./src/reddit/icons/svgs/Redditor/index.tsx");
			var v = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M18.5 4h-6a.5.5 0 00-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 00-1.41 0L.65 13.65a.5.5 0 000 .71l2 2a.5.5 0 00.71 0l4.14-4.15 2.29 2.29a1 1 0 001.41 0l5.3-5.29 1.65 1.65a.5.5 0 00.85-.36v-6a.5.5 0 00-.5-.5z"
			}));
			var b = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("rect", {
				x: "1.96",
				y: "12",
				width: "4",
				height: "6",
				rx: ".5",
				ry: ".5"
			}), i.a.createElement("rect", {
				x: "13.96",
				y: "9",
				width: "4",
				height: "9",
				rx: ".5",
				ry: ".5"
			}), i.a.createElement("path", {
				d: "M14 5.5a.5.5 0 00.35-.85l-4-4a.5.5 0 00-.71 0l-4 4A.5.5 0 006 5.5h2v12a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-12z"
			}));
			var f = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M17 4h-2V3a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3.28a2 2 0 00.77 1.57l3 2.45A5 5 0 009 14.68V17H7a1 1 0 000 2h6a1 1 0 000-2h-2v-2.32a5 5 0 003.22-2.38l3-2.42a2 2 0 00.78-1.6V5a1 1 0 00-1-1zM4 6h1v3.09l-1-.81zm12 2.3l-1 .79V6h1z"
			}));
			var E = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M17.57 9.31l-7.21-7.65a.52.52 0 00-.73 0l-7.2 7.65A1 1 0 003.16 11H7v6.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V11h3.84a1 1 0 00.73-1.69z"
				})),
				x = a("./src/reddit/models/NotificationInbox/index.ts"),
				N = a("./src/reddit/components/NotificationUnit/index.m.less"),
				w = a.n(N);
			const h = s.a.wrapped(r, "NotifIcon", w.a),
				g = s.a.wrapped(l.a, "NotifIcon", w.a),
				O = s.a.wrapped(c, "NotifIcon", w.a),
				A = s.a.wrapped(d.a, "NotifIcon", w.a),
				T = s.a.wrapped(m, "NotifIcon", w.a),
				I = s.a.wrapped(u.a, "NotifIcon", w.a),
				C = s.a.wrapped(p.a, "RedditorIcon", w.a),
				M = s.a.wrapped(e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M10.934 5.208C10.16 3.365 7.503 2.586 5.1 2.613v-.812a.593.593 0 00-.358-.55.595.595 0 00-.647.107L.997 4.198a.302.302 0 000 .442l3.098 2.84a.594.594 0 00.647.106.593.593 0 00.358-.55V6.21c1.914-.075 3.025.186 3.462.83.422.621.276 1.716-.434 3.255a.3.3 0 00.478.343c2.728-2.576 2.772-4.374 2.328-5.429",
					fill: "inherit"
				})), "NotifIcon", w.a),
				H = s.a.wrapped(v, "NotifIcon", w.a),
				U = s.a.wrapped(b, "NotifIcon", w.a),
				_ = s.a.wrapped(f, "NotifIcon", w.a),
				y = s.a.wrapped(E, "NotifIcon", w.a),
				S = `${o.a.assetPath}/img/cake_day.png`,
				R = e => {
					const {
						avatar: t,
						iconType: a,
						messageType: n
					} = e, o = (e => {
						switch (e) {
							case x.b.Chat:
								return i.a.createElement(g, null);
							case x.b.Comment:
								return i.a.createElement(O, null);
							case x.b.Heart:
								return i.a.createElement(A, null);
							case x.b.Live:
								return i.a.createElement(T, null);
							case x.b.Redditor:
								return i.a.createElement(C, null);
							case x.b.Reply:
								return i.a.createElement(M, null);
							case x.b.SortRising:
								return i.a.createElement(H, null);
							case x.b.SortTop:
								return i.a.createElement(U, null);
							case x.b.Trophy:
								return i.a.createElement(_, null);
							case x.b.Upvote:
								return i.a.createElement(y, null);
							case x.b.Award:
								return i.a.createElement(h, null);
							default:
								return i.a.createElement(I, null)
						}
					})(a), s = n === x.a.CakeDay, r = t && t.isNsfw, l = t && t.url;
					return i.a.createElement("span", {
						className: w.a.avatarContainer
					}, ((e, t, a) => t ? i.a.createElement("span", {
						className: w.a.nsfwAvatar
					}, "18+") : e ? i.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: w.a.avatar,
						src: S
					}) : i.a.createElement("img", {
						className: w.a.avatar,
						src: a || ""
					}))(s, r, l), i.a.createElement("span", {
						className: w.a.notificationIconContainer
					}, o))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			}));
			var n, i = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = a("./src/higherOrderComponents/asTooltip.tsx"),
				c = a("./src/lib/lessComponent.tsx"),
				d = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/components/NotificationUnit/index.m.less"),
				p = a.n(u);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder"
			}(n || (n = {}));
			const v = c.a.wrapped(m.a, "StyledDropdown", p.a),
				b = Object(l.a)(v),
				f = Object(d.a)(v, [r.a.Click]);
			b.displayName = "UnawareDropdown", f.displayName = "AwareDropdown";
			const E = c.a.button("HideNotif", p.a);
			E.displayName = "HideNotif";
			const x = c.a.button("HideNotifUpdate", p.a);
			x.displayName = "HideNotifUpdate";
			const N = c.a.button("HideSubUpdates", p.a);
			N.displayName = "HideSubUpdates";
			const w = c.a.button("HideAwarder", p.a);
			w.displayName = "HideAwarder";
			const h = e => {
				const {
					disableNotificationUpdates: t,
					hideNotification: a,
					blockAwarder: r,
					isInTooltip: l,
					isHideNotifEligible: c,
					isOpen: d,
					isToggleNotificationUpdateEligible: m,
					isToggleUpdateFromSubredditEligible: u,
					isBlockAwarderEligible: v,
					hideSubredditNotifications: h,
					sendInboxViewOverflow: g,
					tooltipId: O
				} = e;
				Object(o.useEffect)(() => {
					d && g()
				}, [d]);
				const A = e => {
						let o;
						switch (e) {
							case n.HideNotif:
								o = {
									text: i.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: a,
									Component: E
								};
								break;
							case n.HideSubUpdates:
								o = {
									text: i.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: h,
									Component: N
								};
								break;
							case n.HideNotifUpdate:
								o = {
									text: i.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: t,
									Component: x
								};
								break;
							case n.HideAwarder:
								o = {
									text: i.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: r,
									Component: w
								};
								break;
							default:
								o = null
						}
						if (!o) return;
						const {
							handler: l,
							text: c,
							Component: d
						} = o;
						return s.a.createElement(d, {
							className: p.a.overflowMenuOption,
							onClick: l
						}, c)
					},
					T = l ? f : b;
				return s.a.createElement(T, {
					id: O,
					isOverlayOff: !0,
					isOpen: d,
					tooltipId: O,
					tooltipPosition: ["right", "top"]
				}, s.a.createElement("div", {
					className: p.a.overflowMenuContainer
				}, c && A(n.HideNotif), u && A(n.HideSubUpdates), m && A(n.HideNotifUpdate), v && A(n.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return O
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./node_modules/react/index.js"),
				o = a.n(i),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/controls/MetaData/index.tsx");
			var c = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var d = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), o.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var m = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, o.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				u = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = a("./src/reddit/models/NotificationInbox/index.ts"),
				v = a("./src/reddit/components/NotificationUnit/index.m.less"),
				b = a.n(v);
			const f = r.a.wrapped(u.b, "StateIcon", b.a);
			f.displayName = "Trash";
			const E = r.a.wrapped(c, "StateIcon", b.a);
			E.displayName = "Remove";
			const x = r.a.span("Text", b.a);
			x.displayName = "PostUnavailableText";
			const N = r.a.div("PostUnavailableInfo", b.a),
				w = r.a.wrapped(d, "WarningIcon", b.a),
				h = r.a.wrapped(m, "WarningIcon", b.a),
				g = e => {
					const {
						isNsfw: t,
						isSpoiler: a,
						obfuscatedThumbnailUrl: i,
						thumbnailUrl: s
					} = e;
					return !s || t && !i || a && !i ? null : t ? o.a.createElement("span", {
						className: b.a.postEmbedBlurredThumbnailContainer
					}, o.a.createElement("span", {
						className: b.a.postEmbedNSFWThumbnailIndicator
					}, "18+"), o.a.createElement("img", {
						alt: n.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: b.a.postEmbedBlurredThumbnail,
						src: i
					})) : a ? o.a.createElement("img", {
						alt: n.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: b.a.postEmbedBlurredThumbnail,
						src: i
					}) : o.a.createElement("img", {
						className: b.a.postEmbedThumbnail,
						src: s
					})
				},
				O = ({
					post: {
						commentCount: e = 0,
						isNsfw: t,
						isSpoiler: a,
						media: i,
						removedByCategory: r,
						score: c = 0,
						thumbnail: d,
						title: m
					},
					isUnread: u
				}) => {
					var v, O;
					const A = r === p.c.Deleted,
						T = r && r !== p.c.Deleted,
						I = Object(s.a)(b.a.postEmbedContainer, {
							[b.a.unread]: u
						}),
						C = Object(s.a)(b.a.postEmbedContent, {
							[b.a.deleted]: A || T
						}),
						M = (null === (O = null === (v = null == i ? void 0 : i.obfuscated) || void 0 === v ? void 0 : v.content) || void 0 === O ? void 0 : O.url) && d.url,
						H = null == d ? void 0 : d.url;
					return o.a.createElement("span", {
						className: I
					}, o.a.createElement("span", {
						className: C
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: b.a.postEmbedTitleContainer
					}, t && o.a.createElement(w, null), a && o.a.createElement(h, null), o.a.createElement("p", {
						className: b.a.postEmbedTitle
					}, m)), o.a.createElement("span", {
						className: b.a.postEmbedMeta
					}, !A && !T && o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
						isScoreHidden: !1,
						score: c,
						useUpvotes: !0
					}), o.a.createElement(l.c, null), Object(l.d)(e)), A && o.a.createElement(N, null, o.a.createElement(f, null), o.a.createElement(x, null, n.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), T && o.a.createElement(N, null, o.a.createElement(E, null), o.a.createElement(x, null, n.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(g, {
						isNsfw: t,
						isSpoiler: a,
						obfuscatedThumbnailUrl: M,
						thumbnailUrl: H
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return v
			}));
			var n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				l = a("./src/lib/timeAgo/index.ts"),
				c = a("./src/reddit/controls/MetaData/index.tsx"),
				d = a("./src/reddit/icons/svgs/Menu/index.tsx"),
				m = a("./src/reddit/components/NotificationUnit/index.m.less"),
				u = a.n(m);
			const p = r.a.wrapped(d.a, "MenuIcon", u.a),
				v = e => {
					const {
						dropdownId: t,
						isHideNotifEligible: a,
						isInTooltip: n,
						isOverflowMenuOpen: r,
						isToggleNotificationUpdateEligible: d,
						isToggleUpdateFromSubredditEligible: m,
						sendInboxClickOverflow: v,
						sentAt: b,
						setActiveOverflowMenuId: f,
						title: E
					} = e, x = a || d || m, N = Object(o.a)(u.a.menuButton, {
						[u.a.isOpen]: r
					}), w = Date.parse(b) / s.Ib;
					return i.a.createElement("span", {
						className: u.a.topBar
					}, i.a.createElement("span", null, i.a.createElement("span", {
						className: Object(o.a)(u.a.title, {
							[u.a["m-tooltip"]]: n
						})
					}, E), i.a.createElement(c.c, null), i.a.createElement("span", {
						className: u.a.timeAgo
					}, Object(l.a)(w, !0))), x && i.a.createElement("button", {
						"aria-expanded": r,
						"aria-haspopup": !0,
						className: N,
						id: t,
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), r ? f("") : (v(), f(t))
						}
					}, i.a.createElement(p, null)))
				}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = a("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				c = a("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				d = a("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				m = a("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				u = a("./src/reddit/controls/InternalLink/index.tsx"),
				p = a("./src/reddit/helpers/trackers/inbox.ts"),
				v = a("./src/reddit/hooks/useTracking.ts"),
				b = a("./src/reddit/models/NotificationInbox/index.ts"),
				f = a("./node_modules/react-redux/es/index.js"),
				E = a("./src/reddit/actions/toaster.ts"),
				x = a("./src/reddit/models/Toast/index.ts"),
				N = a("./src/reddit/selectors/user.ts"),
				w = a("./src/reddit/components/NotificationUnit/index.m.less"),
				h = a.n(w);
			const g = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-Button",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!a.m[t]
					},
					importAsync: () => a.e("reddit-components-NotificationUnit-Button").then(a.bind(null, "./src/reddit/components/NotificationUnit/Button.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return a(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/Button.tsx"
					}
				}),
				O = "",
				A = .5,
				T = e => {
					var t, a, n, w, T, I;
					const C = Object(v.a)(),
						M = Object(f.d)(),
						H = Object(f.e)(N.V),
						[U, _] = Object(o.useState)(!1),
						{
							activeOverflowMenuId: y,
							isInboxPostEmbedEnabled: S,
							isInTooltip: R,
							notification: k,
							setActiveOverflowMenuId: j,
							onItemClick: D
						} = e;
					if (!k) return null;
					const {
						avatar: B,
						body: L,
						context: P,
						deeplinkUrl: V,
						isHideNotifEligible: F,
						isToggleNotificationUpdateEligible: Z,
						isToggleUpdateFromSubredditEligible: z,
						icon: W,
						id: Y,
						readAt: K,
						sentAt: G,
						title: q
					} = k, $ = P && P.messageType, J = P && P.comment && P.comment.parent && P.comment.parent.id, Q = P && P.post && P.post.id, X = P && P.post, ee = P && P.subreddit && P.subreddit.id, te = null == P ? void 0 : P.isBodyHidden, ae = null == P ? void 0 : P.isPostHidden, ne = !K, ie = `notif-${R?"tooltip":""}-menu-${Y}`, oe = ie === y, se = $ === b.a.CommentReply ? J : Q, re = Object(r.a)(e.className, h.a.notificationItem, {
						[h.a.unread]: ne,
						[h.a.isNightMode]: H
					}), le = {
						id: Y,
						isClicked: !!K,
						isViewed: !0,
						type: $
					}, ce = P.messageType === b.a.AwardReceived, de = ce ? null === (t = null == P ? void 0 : P.awarding) || void 0 === t ? void 0 : t.id : "", me = null === (n = null === (a = null == P ? void 0 : P.awarding) || void 0 === a ? void 0 : a.target) || void 0 === n ? void 0 : n.permalink, ue = null === (w = null == P ? void 0 : P.awarding) || void 0 === w ? void 0 : w.award.id;
					let pe;
					switch (P.messageType) {
						case b.a.AwardReceived:
							pe = null === (I = null === (T = null == P ? void 0 : P.awarding) || void 0 === T ? void 0 : T.awarder) || void 0 === I ? void 0 : I.id
					}
					const ve = e => {
							C(Object(p.i)({
								...le,
								actionInfoType: e
							}))
						},
						be = () => {
							e.markNotificationAsRead(Y, $)
						};
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
						className: re
					}, s.a.createElement(u.a, {
						className: h.a.link,
						onClick: e => {
							(null == X ? void 0 : X.removedByCategory) ? (e.preventDefault(), M(Object(E.f)({
								kind: x.b.Error,
								text: "Sorry, this content is no longer available.",
								duration: E.a
							}))) : R && D && D(), C(Object(p.g)({
								...le,
								awardId: ue,
								position: p.b.FIRST
							}))
						},
						onMouseDown: be,
						onKeyDown: be,
						to: ce && me ? me : V
					}, s.a.createElement(l.a, {
						avatar: B,
						iconType: W,
						messageType: $
					}), s.a.createElement("span", {
						className: h.a.contentContainer
					}, s.a.createElement(m.a, {
						dropdownId: ie,
						isHideNotifEligible: F,
						isInTooltip: R,
						isOverflowMenuOpen: oe,
						isToggleNotificationUpdateEligible: Z,
						isToggleUpdateFromSubredditEligible: z,
						sendInboxClickOverflow: () => C(Object(p.h)({
							...le,
							awardId: ue
						})),
						sentAt: G,
						setActiveOverflowMenuId: j,
						title: q
					}), S && X && !ae && s.a.createElement(d.a, {
						isUnread: ne,
						post: X
					}), S && !te && s.a.createElement("span", {
						className: h.a.body
					}, L), !S && s.a.createElement("span", {
						className: h.a.body
					}, L), (() => {
						var e, t;
						return null === (t = null === (e = null == P ? void 0 : P.awarding) || void 0 === e ? void 0 : e.awarder) || void 0 === t ? void 0 : t.isAcceptingChats
					})() ? s.a.createElement(g, {
						isUnread: ne,
						messageType: $,
						notificationUserId: pe,
						isFullWidth: R,
						onClick: e => {
							e.preventDefault(), (e => C(Object(p.g)({
								...le,
								awardId: ue,
								position: e
							})))(p.b.SECOND), R && D && D()
						}
					}) : null))), s.a.createElement(c.a, {
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(O), e.disableNotificationUpdates(se), ve(p.c.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(O), e.hideNotification(Y), ve(p.c.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = p.c.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(O), e.hideSubredditNotifications(ee, () => (e => {
								C(Object(p.r)({
									...le,
									actionInfoType: e
								}))
							})(t)), ve(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(O), e.blockAwarder(de), ve(p.c.BlockAwarder)
						},
						isInTooltip: R,
						isHideNotifEligible: F,
						isOpen: oe,
						isToggleNotificationUpdateEligible: Z,
						isToggleUpdateFromSubredditEligible: !(!z || !ee),
						isBlockAwarderEligible: ce,
						sendInboxViewOverflow: () => C(Object(p.p)(le)),
						tooltipId: ie
					}), s.a.createElement(i.a, {
						onChange: e => {
							e.isIntersecting && !U && (C(Object(p.o)(le)), _(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: A
					}, s.a.createElement("div", null)))
				};
			t.default = T
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/higherOrderComponents/asTooltip.tsx"),
				s = a("./src/reddit/constants/elementIds.ts"),
				r = a("./src/reddit/contexts/InsideOverlay.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const a = Object(o.a)(e, t);
				class n extends i.a.PureComponent {
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
						return i.a.createElement(a, l({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(n)
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, a) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "b", (function() {
				return u
			})), a.d(t, "d", (function() {
				return p
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./node_modules/react/index.js"),
				o = a.n(i),
				s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/lib/prettyPrintNumber/index.ts"),
				l = (a("./src/lib/timeAgo/index.ts"), a("./src/reddit/controls/MetaData/index.m.less")),
				c = a.n(l);
			const d = s.a.span("metaText", c.a),
				m = e => o.a.createElement(d, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: a,
					...i
				}) => {
					const s = Object(r.b)(t),
						l = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						c = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? l : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return o.a.createElement(d, i, c)
				},
				p = e => o.a.createElement(d, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(r.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				i = a.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Heart/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				i = a.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10.8276 3.19995C9.44201 3.19995 8.55081 4.10635 7.99961 5.03835C7.44841 4.10635 6.55721 3.19995 5.17161 3.19995C2.96841 3.19995 1.59961 4.60315 1.59961 6.86235C1.59961 11.444 7.41401 14.2096 7.66121 14.3248C7.76841 14.3752 7.88441 14.4 7.99961 14.4C8.11561 14.4 8.23081 14.3752 8.33801 14.3248C8.58601 14.2096 14.3996 11.444 14.3996 6.86235C14.3996 4.60315 13.0308 3.19995 10.8276 3.19995"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				i = a.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				i = a.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				i = a.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", o({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", {
				fill: "inherit"
			}, i.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = a.n(s);
			const l = e => i.a.createElement("svg", {
				className: Object(o.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), i.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, a) {
			"use strict";
			var n, i, o, s;
			a.d(t, "a", (function() {
					return n
				})), a.d(t, "b", (function() {
					return i
				})), a.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER", e.AwardReceived = "AWARD_RECEIVED"
				}(n || (n = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE", e.Award = "AWARD"
				}(i || (i = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(o || (o = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.c1f1a66c916f41e8ec15.js.map