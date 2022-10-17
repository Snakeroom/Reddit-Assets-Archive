// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.ea3e8935745d6270f1e0.js
// Retrieved at 10/17/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				a = o("./src/lib/classNames/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/react/index.js"),
				l = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/UserIcon/index.tsx"),
				c = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/hooks/useGqlContext.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				k = o("./src/reddit/selectors/platform.ts"),
				h = o("./src/reddit/selectors/subreddit.ts"),
				_ = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				g = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = o.n(g),
				A = o("./src/config.ts"),
				S = o("./node_modules/fbt/lib/FbtPublic.js"),
				R = o("./src/lib/timeAgo/index.ts"),
				N = o("./src/redditGQL/types.ts");
			const j = `${A.a.assetPath}/img/snoo-sunglasses.png`,
				w = e => {
					let {
						data: t
					} = e;
					var o, n, s, r, i, d, c;
					const m = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: b
						} = t;
					return l.a.createElement("div", {
						className: Object(a.a)(C.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, l.a.createElement(u.a, {
						className: C.a.modIcon,
						userName: m || "",
						iconUrl: null === (r = null === (s = null == t ? void 0 : t.info) || void 0 === s ? void 0 : s.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw)
					}), l.a.createElement("div", {
						className: C.a.subredditRowText
					}, l.a.createElement("div", {
						className: Object(a.a)(C.a.username, "text-neutral-content-strong")
					}, m), l.a.createElement("div", {
						className: Object(a.a)(C.a.detailText, "text-neutral-content-weak")
					}, b && l.a.createElement(l.a.Fragment, null, ((e, t) => {
						switch (e) {
							case N.u.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case N.u.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case N.u.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case N.u.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case N.u.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case N.u.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case N.u.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case N.u.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case N.u.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case N.u.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case N.u.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case N.u.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case N.u.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case N.u.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case N.u.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case N.u.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case N.u.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case N.u.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case N.u.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case N.u.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case N.u.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case N.u.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case N.u.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case N.u.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case N.u.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case N.u.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case N.u.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case N.u.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case N.u.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case N.u.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case N.u.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case N.u.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case N.u.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case N.u.UpdateRemovalReason:
							case N.u.WikiBanned:
							case N.u.WikiContributor:
							case N.u.WikiPageListed:
							case N.u.WikiPermLevel:
							case N.u.WikiRevise:
							case N.u.WikiUnbanned:
							case N.u.AcceptModeratorInvite:
							case N.u.AddCommunityTopics:
							case N.u.AddContributor:
							case N.u.AddModerator:
							case N.u.CreateAward:
							case N.u.CreateScheduledPost:
							case N.u.CreateRemovalReason:
							case N.u.CommunityStyling:
							case N.u.CommunityWidgets:
							case N.u.CreateRule:
							case N.u.DeleteAward:
							case N.u.DeleteRule:
							case N.u.DeleteScheduledPost:
							case N.u.DeleteOverriddenClassification:
							case N.u.DeleteRemovalReason:
							case N.u.DisableAward:
							case N.u.EditPostRequirements:
							case N.u.EditRule:
							case N.u.EditScheduledPost:
							case N.u.EditSettings:
							case N.u.EnableAward:
							case N.u.Events:
							case N.u.HiddenAward:
							case N.u.InviteModerator:
							case N.u.InviteSubscriber:
							case N.u.ModAwardGiven:
							case N.u.ModmailEnrollment:
							case N.u.OverrideClassification:
							case N.u.RemoveCommunityTopics:
							case N.u.RemoveContributor:
							case N.u.RemoveModerator:
							case N.u.RemoveWikiContributor:
							case N.u.ReorderModerators:
							case N.u.ReorderRules:
							case N.u.SetPermissions:
							case N.u.SnoozeReports:
							case N.u.SubmitContentRatingSurvey:
							case N.u.SubmitScheduledPost:
							case N.u.UnignoreReports:
							case N.u.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == b ? void 0 : b.action, null === (c = null == b ? void 0 : b.target) || void 0 === c ? void 0 : c.__typename), " ", Object(R.d)(Object(v.g)(b.createdAt) / 1e3)))))
				},
				y = e => {
					let {
						mostRecentAction: t
					} = e;
					return l.a.createElement("div", {
						className: C.a.emptyTooltip
					}, l.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: j,
						className: C.a.snooImage
					}), l.a.createElement("div", {
						className: Object(a.a)(C.a.emptyText, "text-neutral-content-strong")
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), l.a.createElement("div", {
						className: Object(a.a)(C.a.emptyDetailText, "text-neutral-content-weak")
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && l.a.createElement("div", {
						className: C.a.lastActionContainer
					}, l.a.createElement("div", {
						className: Object(a.a)(C.a.lastActionTitle, "text-neutral-content-weak")
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), l.a.createElement(w, {
						data: t
					})))
				},
				O = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: s
					} = e;
					return 0 === t.length ? l.a.createElement(y, {
						mostRecentAction: s
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(a.a)(C.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => l.a.createElement(w, {
						data: n[e],
						key: e
					})), t.length > 10 && l.a.createElement("div", {
						className: Object(a.a)(C.a.detailText, C.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				E = Object(n.a)(c.a),
				x = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, a, s, r;
					const l = null === (a = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						i = null === (r = null === (s = o[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === r ? void 0 : r.createdAt,
						d = Object(v.g)(l || "");
					return Object(v.g)(i || "") - d
				})(t, o, e)).filter(t => {
					var o, n;
					return (new Date).getTime() - Object(v.g)((null === (n = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * s.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n
				} = e;
				const s = Object(i.e)(k.c),
					c = o || s,
					v = Object(i.e)(e => Object(h.h)(e, {
						subredditId: c || ""
					})),
					g = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[c || ""]) || {}
					}),
					{
						mods: A
					} = g,
					S = Object(r.useCallback)(e => x(e), [])(A),
					[R, N] = Object(r.useState)(void 0),
					j = Object(b.a)();
				Object(r.useEffect)(() => {
					(async () => {
						var e, t, o, n;
						if (0 === S.length && v) {
							const a = null === (t = null === (e = (await Object(m.a)(j(), {
								subredditName: v
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == a ? void 0 : a.actions) && (null === (n = null === (o = a.actions) || void 0 === o ? void 0 : o.edges) || void 0 === n || n.map(e => {
								const {
									moderatorInfo: t,
									...o
								} = null == e ? void 0 : e.node;
								"reddit" !== (null == t ? void 0 : t.name) && "automoderator" !== (null == t ? void 0 : t.name) && N({
									info: t,
									lastModAction: o
								})
							}))
						}
					})()
				}, [j, S.length, v]);
				const w = (e => `mod_activity_tooltip_id-${e}`)(v || ""),
					y = Object(i.d)(),
					P = Object(r.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), y(Object(d.h)({
							tooltipId: w
						}))
					}, [y, w]),
					D = Object(i.e)(e => Object(_.b)(w)(e)),
					M = Object(i.e)(p.d),
					U = Object(i.e)(f.k),
					L = n || 5;
				return l.a.createElement("div", {
					className: Object(a.a)(C.a.preview, t),
					id: w,
					onClick: P,
					"data-testid": "mod-activity-preview"
				}, A && S.length > 0 ? S.slice(0, L).map((e, t) => {
					var o, n, s, r, i, d, c, m, v, b;
					return l.a.createElement(u.a, {
						className: Object(a.a)(C.a.userIcon, {
							[C.a.noMargin]: t === S.length - 1 && !(t === L - 1 && S.length > L)
						}),
						key: null === (n = null === (o = A[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (r = null === (s = A[e]) || void 0 === s ? void 0 : s.info) || void 0 === r ? void 0 : r.displayName) || "",
						iconUrl: null === (c = null === (d = null === (i = A[e]) || void 0 === i ? void 0 : i.info) || void 0 === d ? void 0 : d.icon) || void 0 === c ? void 0 : c.url,
						isNSFW: !!(null === (b = null === (v = null === (m = A[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : M ? null : l.a.createElement(u.a, {
					className: Object(a.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == U ? void 0 : U.displayName) || "",
					iconUrl: null == U ? void 0 : U.accountIcon,
					isNSFW: !1
				}), S.length > L && l.a.createElement("div", {
					className: Object(a.a)(C.a.moreMods, "text-neutral-content-weak")
				}, "+", S.length - L), l.a.createElement(E, {
					tooltipId: w,
					isOpen: D,
					className: C.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, l.a.createElement(O, {
					orderedModsList: S,
					subredditName: v || "",
					mods: A,
					mostRecentAction: R
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.ea3e8935745d6270f1e0.js.map